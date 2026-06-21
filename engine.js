import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';
import { Hunter } from './hunter.js';
import { Maze3D } from './maze3d.js';

/**
 * Main Game Engine - 2D Map Navigation & 3D Overview
 */
export class Engine {
    constructor(degree, branchingFactor, movementMode) {
        this.degree = degree;
        this.branchingFactor = branchingFactor;
        this.movementMode = movementMode;

        this.canvas = document.getElementById('main-2d-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.uiFloorSpan = document.getElementById('current-floor');
        this.uiMap3dContainer = document.getElementById('map3d-container');
        this.uiHazardWarning = document.getElementById('hazard-warning');
        this.uiNearbyWarning = document.getElementById('nearby-warning');
        this.uiMobileControls = document.getElementById('mobile-controls');
        
        this.mazeGen = new Maze3D(degree, branchingFactor);
        this.maze = this.mazeGen.generate();
        
        this.player = {
            x: this.mazeGen.startPos.x,
            y: this.mazeGen.startPos.y,
            z: this.mazeGen.startPos.z,
            dir: 0
        };

        this.hunters = [];
        this.initHunters(degree);

        this.keys = {};
        this.isMap3DActive = false;
        this.isGameOver = false;
        this.isDestroyed = false;
        this.pulsatingMaterials = [];
        this.hunterMeshes = [];
        
        this.initThree();
        this.init();

        // Always show mobile controls container, CSS manages portrait visibility
        this.uiMobileControls.classList.remove('hidden');
    }

    destroy() {
        this.isDestroyed = true;
        this.hideGameUI();
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('touchstart', this.handleTouchStart);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
        
        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement.remove();
        }
        
        // Clean up listeners on mobile buttons
        document.getElementById('mobile-up').onclick = null;
        document.getElementById('mobile-down').onclick = null;
        document.getElementById('mobile-map').onclick = null;
    }

    initHunters(degree) {
        if (degree < CONFIG.MAZE_DEGREE) return;
        const size = this.mazeGen.size;
        const mid = Math.floor(size / 2);
        this.hunters.push(new Hunter(this.mazeGen, this.getExitPos(), 1));
        if (degree >= CONFIG.MAZE_DEGREE * 2) this.hunters.push(new Hunter(this.mazeGen, this.findNearestValid(size - 2, 1, mid), 2));
        if (degree >= CONFIG.MAZE_DEGREE * 3) this.hunters.push(new Hunter(this.mazeGen, this.findNearestValid(1, size - 2, mid), 3));
        this.lastHunterMove = performance.now();
    }

    getExitPos() {
        for (let x = 0; x < this.mazeGen.size; x++) {
            for (let y = 0; y < this.mazeGen.size; y++) {
                for (let z = 0; z < this.mazeGen.size; z++) {
                    if (this.maze[x][y][z] === this.mazeGen.TYPES.EXIT) return { x, y, z };
                }
            }
        }
        return { x: 1, y: 1, z: 1 };
    }

    findNearestValid(tx, ty, tz) {
        let best = { x: tx, y: ty, z: tz };
        let minDist = Infinity;
        const s = this.mazeGen.size;
        for (let x = 0; x < s; x++) {
            for (let y = 0; y < s; y++) {
                for (let z = 0; z < s; z++) {
                    if (this.maze[x][y][z] !== 0) {
                        const dist = Math.abs(x - tx) + Math.abs(y - ty) + Math.abs(z - tz);
                        if (dist < minDist) { minDist = dist; best = { x, y, z }; }
                    }
                }
            }
        }
        return best;
    }

    triggerVictory() {
        this.isGameOver = true;
        this.hideGameUI();
        document.getElementById('victory-screen').classList.remove('hidden');
    }

    triggerDeath() {
        this.isGameOver = true;
        this.hideGameUI();
        document.getElementById('game-over-screen').classList.remove('hidden');
    }

    hideGameUI() {
        this.uiMobileControls.classList.add('hidden');
        this.uiHazardWarning.classList.add('hidden');
        this.uiNearbyWarning.classList.add('hidden');
        this.uiMap3dContainer.classList.add('hidden');
        this.canvas.classList.remove('hunted-map-effect');
        this.isMap3DActive = false;
    }

    initThree() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.uiMap3dContainer.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
    }

    init() {
        const preventScroll = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'pageup', 'pagedown'];
        this.handleKeyDown = e => {
            const key = e.key.toLowerCase();
            this.keys[key] = true;
            if (preventScroll.includes(key)) e.preventDefault();
            if (key === 'm') this.toggleMap3D();
        };
        this.handleKeyUp = e => this.keys[e.key.toLowerCase()] = false;
        this.handleResize = () => this.resize();

        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('resize', this.handleResize);

        document.getElementById('mobile-up').onclick = () => this.changeFloor(2);
        document.getElementById('mobile-down').onclick = () => this.changeFloor(-2);
        document.getElementById('mobile-map').onclick = () => this.toggleMap3D();

        this.touchStart = null;
        this.handleTouchStart = e => {
            if (this.isMap3DActive || this.isGameOver || e.target.closest('button')) return;
            if (e.cancelable) e.preventDefault();
            this.touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };

        this.handleTouchMove = e => {
            if (!this.touchStart || this.isMap3DActive || this.isGameOver) return;
            if (e.cancelable) e.preventDefault();
            const dx = e.touches[0].clientX - this.touchStart.x;
            const dy = e.touches[0].clientY - this.touchStart.y;
            const mag = Math.sqrt(dx * dx + dy * dy);
            if (mag > 10) this.touchMoveVector = { x: dx / mag, y: dy / mag };
        };

        this.handleTouchEnd = () => { 
            this.touchStart = null; 
            this.touchMoveVector = null; 
        };

        window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        window.addEventListener('touchend', this.handleTouchEnd);
        
        this.resize();
        this.updateFloorUI();
        this.loop();
    }

    resize() {
        const isPortrait = window.innerHeight > window.innerWidth;
        const size = isPortrait ? window.innerWidth * 0.9 : window.innerHeight * 0.85;
        this.canvas.width = size;
        this.canvas.height = size;
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }
    }

    updateFloorUI() { if (this.uiFloorSpan) this.uiFloorSpan.innerText = (this.player.z + 1) / 2; }

    update() {
        if (this.isGameOver || this.isDestroyed) return;
        if (this.isMap3DActive) {
            this.controls.update();
            const size = this.mazeGen.size; // Get size for positioning
            // Update hunter mesh positions and their trails
            for (const hm of this.hunterMeshes) {
                const h = hm.hunter; // The actual hunter object
                const mesh = hm.mesh; // The THREE.Mesh object
                mesh.position.set(h.x - size/2, h.z - size/2, h.y - size/2);
                
                if (h.history && h.history.length > 0) {
                    if (h.history.length === 2) {
                        const oldest = h.history[0];
                        const newest = h.history[1];
                        
                        hm.trail2.position.set(oldest.x - size/2, oldest.z - size/2, oldest.y - size/2);
                        hm.trail2.visible = true;
                        
                        hm.trail1.position.set(newest.x - size/2, newest.z - size/2, newest.y - size/2);
                        hm.trail1.visible = true;
                    } else if (h.history.length === 1) {
                        const newest = h.history[0];
                        hm.trail1.position.set(newest.x - size/2, newest.z - size/2, newest.y - size/2);
                        hm.trail1.visible = true;
                        hm.trail2.visible = false;
                    }
                } else {
                    hm.trail1.visible = false;
                    hm.trail2.visible = false;
                }
            }
        }

        if (!this.isMap3DActive) {
            let moveX = 0, moveY = 0;
            const isPortrait = window.innerHeight > window.innerWidth;

            if (!isPortrait && this.movementMode === 'tank') {
                if (this.keys['a'] || this.keys['arrowleft']) this.player.dir -= CONFIG.ROT_SPEED;
                if (this.keys['d'] || this.keys['arrowright']) this.player.dir += CONFIG.ROT_SPEED;
                if (this.keys['w'] || this.keys['arrowup']) {
                    moveX = Math.cos(this.player.dir) * CONFIG.MOVE_SPEED;
                    moveY = Math.sin(this.player.dir) * CONFIG.MOVE_SPEED;
                }
                if (this.keys['s'] || this.keys['arrowdown']) {
                    moveX = -Math.cos(this.player.dir) * CONFIG.MOVE_SPEED;
                    moveY = -Math.sin(this.player.dir) * CONFIG.MOVE_SPEED;
                }
            } else {
                let dx = 0, dy = 0;
                if (this.touchMoveVector) { dx = this.touchMoveVector.x; dy = this.touchMoveVector.y; }
                else {
                    if (this.keys['w'] || this.keys['arrowup']) dy -= 1;
                    if (this.keys['s'] || this.keys['arrowdown']) dy += 1;
                    if (this.keys['a'] || this.keys['arrowleft']) dx -= 1;
                    if (this.keys['d'] || this.keys['arrowright']) dx += 1;
                }
                if (dx !== 0 || dy !== 0) {
                    const mag = Math.sqrt(dx * dx + dy * dy);
                    moveX = (dx / mag) * CONFIG.MOVE_SPEED;
                    moveY = (dy / mag) * CONFIG.MOVE_SPEED;
                    this.player.dir = Math.atan2(moveY, moveX);
                }
            }

            if (moveX !== 0 || moveY !== 0) {
                const nextX = this.player.x + moveX;
                const nextY = this.player.y + moveY;
                const gridIdxX = Math.floor(nextX);
                const gridIdxY = Math.floor(this.player.y);
                if (gridIdxX >= 0 && gridIdxX < this.mazeGen.size && this.maze[gridIdxX][gridIdxY][this.player.z] !== this.mazeGen.TYPES.WALL) {
                    this.player.x = nextX;
                }
                const currentGridIdxX = Math.floor(this.player.x);
                const nextGridIdxY = Math.floor(nextY);
                if (nextGridIdxY >= 0 && nextGridIdxY < this.mazeGen.size && this.maze[currentGridIdxX][nextGridIdxY][this.player.z] !== this.mazeGen.TYPES.WALL) {
                    this.player.y = nextY;
                }
                const finalGridIdxX = Math.floor(this.player.x), finalGridIdxY = Math.floor(this.player.y);
                if (this.maze[finalGridIdxX][finalGridIdxY][this.player.z] === this.mazeGen.TYPES.EXIT) this.triggerVictory();
            }

            const playerIdxX = Math.floor(this.player.x), playerIdxY = Math.floor(this.player.y);
            if (playerIdxX >= 0 && playerIdxX < this.mazeGen.size && playerIdxY >= 0 && playerIdxY < this.mazeGen.size) {
                if (this.maze[playerIdxX][playerIdxY][this.player.z] === this.mazeGen.TYPES.PATH) {
                    this.maze[playerIdxX][playerIdxY][this.player.z] = this.mazeGen.TYPES.VISITED;
                }
            }

            if (this.keys['e'] || this.keys['pageup']) this.changeFloor(2);
            if (this.keys['q'] || this.keys['pagedown']) this.changeFloor(-2);

            if (isPortrait) {
                const upBtn = document.getElementById('mobile-up');
                const downBtn = document.getElementById('mobile-down');
                const floorX = Math.floor(this.player.x), floorY = Math.floor(this.player.y);
                upBtn.disabled = !(this.player.z + 1 < this.mazeGen.size && this.maze[floorX][floorY][this.player.z + 1] !== this.mazeGen.TYPES.WALL);
                downBtn.disabled = !(this.player.z - 1 >= 0 && this.maze[floorX][floorY][this.player.z - 1] !== this.mazeGen.TYPES.WALL);
            }
        }

        const now = performance.now();
        if (now - this.lastHunterMove > CONFIG.HUNTER_SPEED) {
            this.lastHunterMove = now;
            let trackingCount = 0;
            let nearbyCount = 0;
            for (const hunter of this.hunters) {
                hunter.move(this.player, this.maze, this.mazeGen.TYPES);
                if (hunter.state === 'TRACKING') trackingCount++;
                const sameFloor = hunter.z === this.player.z;
                let isNear = false;
                if (sameFloor) {
                    isNear = true;
                } else {
                    const dist = this.getPathDistance3D(hunter.x, hunter.y, hunter.z, Math.floor(this.player.x), Math.floor(this.player.y), this.player.z);
                    const threshold = Math.max(5, Math.floor(this.degree * 1.2));
                    if (dist <= threshold) {
                        isNear = true;
                    }
                }
                if (isNear) {
                    nearbyCount++;
                }
                if (hunter.x === Math.floor(this.player.x) && hunter.y === Math.floor(this.player.y) && hunter.z === this.player.z) this.triggerDeath();
            }
            if (trackingCount > 0) { this.uiHazardWarning.classList.remove('hidden'); this.canvas.classList.add('hunted-map-effect'); }
            else { this.uiHazardWarning.classList.add('hidden'); this.canvas.classList.remove('hunted-map-effect'); }
            if (nearbyCount > 0) this.uiNearbyWarning.classList.remove('hidden');
            else this.uiNearbyWarning.classList.add('hidden');
        }
    }

    changeFloor(delta) {
        if (this.isGameOver) return;
        const currentX = Math.floor(this.player.x);
        const currentY = Math.floor(this.player.y);
        const currentZ = this.player.z;
        const hUp = currentZ + 1 < this.mazeGen.size && this.maze[currentX][currentY][currentZ + 1] !== this.mazeGen.TYPES.WALL;
        const hDown = currentZ - 1 >= 0 && this.maze[currentX][currentY][currentZ - 1] !== this.mazeGen.TYPES.WALL;
        
        // Allow floor change only if moving up and hUp is true, or moving down and hDown is true
        if ((delta > 0 && hUp) || (delta < 0 && hDown)) {
            const nextZ = currentZ + delta;
            if (nextZ >= 0 && nextZ < this.mazeGen.size && this.maze[currentX][currentY][nextZ] !== this.mazeGen.TYPES.WALL) {
                // Mark the intermediate shaft cell so it renders in the 3D map
                const shaftZ = currentZ + delta / 2;
                if (this.maze[currentX][currentY][shaftZ] !== this.mazeGen.TYPES.ELEVATOR_VISITED) {
                    this.maze[currentX][currentY][shaftZ] = this.mazeGen.TYPES.ELEVATOR_VISITED;
                }
                this.player.z = nextZ;
                ['e', 'q', 'pageup', 'pagedown'].forEach(k => this.keys[k] = false);
                this.updateFloorUI();
                if (this.maze[currentX][currentY][nextZ] === this.mazeGen.TYPES.EXIT) this.triggerVictory();
            }
        }
    }

    toggleMap3D() {
        this.isMap3DActive = !this.isMap3DActive;
        if (this.isMap3DActive) {
            this.uiMap3dContainer.classList.remove('hidden');
            this.build3DMap();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        } else {
            this.uiMap3dContainer.classList.add('hidden');
        }
    }

    build3DMap() {
        while(this.scene.children.length > 0){ this.scene.remove(this.scene.children[0]); }
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(10, 20, 10);
        this.scene.add(dirLight);

        this.pulsatingMaterials = []; // Reset the array
        this.hunterMeshes = []; // Reset the array

        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const size = this.mazeGen.size;
        
        const shaftGeomBottom = new THREE.BoxGeometry(0.9, 0.425, 0.9);
        const shaftGeomTop = new THREE.BoxGeometry(0.9, 0.425, 0.9);
        
        const shaftGeom = new THREE.CylinderGeometry(0.35, 0.35, 0.9, 8);
        const shaftMat = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_VISITED,
            transparent: true, opacity: 0.8
        });

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.maze[x][y][z];

                    // Render elevator shaft cells (marked when player uses an elevator)
                    if (val === this.mazeGen.TYPES.ELEVATOR_VISITED) {
                        const mesh = new THREE.Mesh(shaftGeom, shaftMat);
                        mesh.position.set(x - size/2, z - size/2, y - size/2);
                        this.scene.add(mesh);
                        continue;
                    }

                    const isVisited = val >= 2;
                    const isKnown = val === 1 && this.isNearVisited(x, y, z);
                    if (isVisited || isKnown) {
                        let color = CONFIG.COLORS.THREE_KNOWN;
                        let material; // Declare material here

                        if (isVisited) {
                            color = CONFIG.COLORS.THREE_VISITED;
                            if (val === 3) color = CONFIG.COLORS.THREE_START;
                            else if (val === 4) color = CONFIG.COLORS.THREE_EXIT;
                            material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: 0.8 });
                        } else if (isKnown) { // Corrected: else if (isKnown)
                            material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: 0.6, emissive: color, emissiveIntensity: 0.5 });
                            this.pulsatingMaterials.push(material);
                        } else {
                            // If not visited and not known, we don't create a mesh, so continue.
                            continue;
                        }

                        const hUp = z < size - 1 && this.maze[x][y][z+1] !== 0;
                        const hDown = z > 0 && this.maze[x][y][z-1] !== 0;
                        if (hUp || hDown) {
                            // Remove do pulse caso tenha sido adicionado como isKnown
                            const index = this.pulsatingMaterials.indexOf(material);
                            if (index > -1) this.pulsatingMaterials.splice(index, 1);

                            if (hUp && hDown) {
                                // Split bicolor: dois meshes empilhados
                                const matBottom = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_ELEVATOR_DOWN, transparent: true, opacity: 0.9, emissive: CONFIG.COLORS.THREE_ELEVATOR_DOWN, emissiveIntensity: 0.4 });
                                const matTop    = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_ELEVATOR_UP,   transparent: true, opacity: 0.9, emissive: CONFIG.COLORS.THREE_ELEVATOR_UP,   emissiveIntensity: 0.4 });
                                const meshBottom = new THREE.Mesh(shaftGeomBottom, matBottom);
                                const meshTop    = new THREE.Mesh(shaftGeomTop,    matTop);
                                meshBottom.position.set(x - size/2, z - size/2 - 0.2125, y - size/2);
                                meshTop.position.set(   x - size/2, z - size/2 + 0.2125, y - size/2);
                                this.scene.add(meshBottom);
                                this.scene.add(meshTop);
                                continue; // Mesh já adicionado, pula o mesh padrão abaixo
                            } else {
                                const elevatorColor = hUp ? CONFIG.COLORS.THREE_ELEVATOR_UP : CONFIG.COLORS.THREE_ELEVATOR_DOWN;
                                material = new THREE.MeshPhongMaterial({ color: elevatorColor, transparent: true, opacity: 0.9, emissive: elevatorColor, emissiveIntensity: 0.4 });
                            }
                        }

                        const isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
                        const isHunterHere = this.hunters.some(h => h.x === x && h.y === y && h.z === z);
                        if (isPlayerHere || isHunterHere) {
                            const floorGeom = new THREE.BoxGeometry(0.9, 0.05, 0.9);
                            const mesh = new THREE.Mesh(floorGeom, material);
                            mesh.position.set(x - size/2, z - size/2 - 0.425, y - size/2);
                            this.scene.add(mesh);
                            continue;
                        }

                        const mesh = new THREE.Mesh(geometry, material);
                        mesh.position.set(x - size/2, z - size/2, y - size/2);
                        this.scene.add(mesh);
                    }
                }
            }
        }
        const pMarker = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.THREE_PLAYER }));
        pMarker.position.set(Math.floor(this.player.x) - size/2, this.player.z - size/2, Math.floor(this.player.y) - size/2);
        this.scene.add(pMarker);
        const hGeom = new THREE.SphereGeometry(0.4);
        const hMat = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.8 });
        
        // Trail materials with lower opacities
        const trailMat1 = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, transparent: true, opacity: 0.55, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.4 });
        const trailMat2 = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, transparent: true, opacity: 0.25, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.2 });
        const trailGeom = new THREE.SphereGeometry(0.3);

        for (let i = 0; i < this.hunters.length; i++) {
            const h = this.hunters[i];
            
            // Create trail meshes
            const tMesh2 = new THREE.Mesh(trailGeom, trailMat2); // Oldest
            const tMesh1 = new THREE.Mesh(trailGeom, trailMat1); // Newest
            
            tMesh2.visible = false;
            tMesh1.visible = false;
            
            this.scene.add(tMesh2);
            this.scene.add(tMesh1);

            const hMesh = new THREE.Mesh(hGeom, hMat);
            hMesh.position.set(h.x - size/2, h.z - size/2, h.y - size/2);
            this.scene.add(hMesh);
            
            this.hunterMeshes.push({ 
                hunter: h, 
                mesh: hMesh,
                trail1: tMesh1,
                trail2: tMesh2
            });
            console.log('Hunter mesh and trails added:', h);
        }
        this.camera.position.set(size, size, size);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    }

    draw2DMap() {
        const size = this.mazeGen.size;
        const cellSize = this.canvas.width / size;
        const { z, x: px, y: py, dir: pDir } = this.player;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const val = this.maze[x][y][z];
                const isVisited = val >= 2;
                const isKnown = val === 1 && this.isNearVisited(x, y, z);
                if (isVisited) {
                    this.ctx.fillStyle = val === 2 ? CONFIG.COLORS.PATH_VISITED : (val === 3 ? CONFIG.COLORS.START : CONFIG.COLORS.EXIT);
                    this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    const hUp = z < size - 1 && this.maze[x][y][z+1] !== 0;
                    const hDown = z > 0 && this.maze[x][y][z-1] !== 0;
                    if (hUp || hDown) {
                        this.ctx.fillStyle = (hUp && hDown) ? '#fff' : (hUp ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_DOWN);
                        this.ctx.font = `bold ${cellSize * 0.8}px Arial`;
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText(hUp && hDown ? '↕' : (hUp ? '▲' : '▼'), x * cellSize + cellSize/2, y * cellSize + cellSize * 0.8);
                    }
                } else if (isKnown) { this.ctx.fillStyle = CONFIG.COLORS.PATH_KNOWN; this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); }
                else if (val === 0 && this.isNearVisited(x, y, z)) { this.ctx.fillStyle = CONFIG.COLORS.WALL; this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); }
            }
        }
        const pulse = Math.sin(Date.now() / 200) * 5 + 10;
        for (const h of this.hunters) {
            // Draw trail first so it renders behind the hunter
            if (h.history) {
                h.history.forEach((pos, idx) => {
                    if (pos.z === z) {
                        const opacity = idx === 0 && h.history.length === 2 ? 0.25 : 0.55;
                        this.ctx.save();
                        this.ctx.globalAlpha = opacity;
                        this.ctx.fillStyle = CONFIG.COLORS.HUNTER;
                        this.ctx.beginPath();
                        this.ctx.arc(pos.x * cellSize + cellSize/2, pos.y * cellSize + cellSize/2, cellSize * 0.3, 0, Math.PI * 2);
                        this.ctx.fill();
                        this.ctx.restore();
                    }
                });
            }
            if (h.z === z) {
                this.ctx.save();
                this.ctx.fillStyle = CONFIG.COLORS.HUNTER;
                this.ctx.shadowBlur = pulse;
                this.ctx.shadowColor = CONFIG.COLORS.HUNTER;
                this.ctx.beginPath();
                this.ctx.arc(h.x * cellSize + cellSize/2, h.y * cellSize + cellSize/2, cellSize * 0.4, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
            }
        }
        this.ctx.save();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(Math.floor(px) * cellSize + 2, Math.floor(py) * cellSize + 2, cellSize - 4, cellSize - 4);
        this.ctx.restore();
        this.ctx.fillStyle = CONFIG.COLORS.PLAYER;
        this.ctx.beginPath();
        this.ctx.arc(px * cellSize, py * cellSize, cellSize * 0.4, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = CONFIG.COLORS.PLAYER;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(px * cellSize, py * cellSize);
        this.ctx.lineTo(px * cellSize + Math.cos(pDir) * cellSize * 1.5, py * cellSize + Math.sin(pDir) * cellSize * 1.5);
        this.ctx.stroke();
    }

    isNearVisited(x, y, z) {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < this.mazeGen.size && ny >= 0 && ny < this.mazeGen.size) {
                    const v = this.maze[nx][ny][z];
                    // ELEVATOR_VISITED (5) cells are only shown when explicitly used by the player,
                    // not revealed by proximity to regular visited cells.
                    if (v >= 2 && v !== this.mazeGen.TYPES.ELEVATOR_VISITED) return true;
                }
            }
        }
        return false;
    }

    getPathDistance3D(x1, y1, z1, x2, y2, z2) {
        if (x1 === x2 && y1 === y2 && z1 === z2) return 0;
        const size = this.mazeGen.size;
        const queue = [{ x: x1, y: y1, z: z1, dist: 0 }];
        const visited = Array.from({ length: size }, () => 
            Array.from({ length: size }, () => new Uint8Array(size))
        );
        visited[x1][y1][z1] = 1;

        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
        ];

        while (queue.length > 0) {
            const current = queue.shift();
            
            for (const d of dirs) {
                const nx = current.x + d.dx;
                const ny = current.y + d.dy;
                const nz = current.z + d.dz;
                
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size && !visited[nx][ny][nz]) {
                    if (this.maze[nx][ny][nz] !== this.mazeGen.TYPES.WALL) {
                        if (nx === x2 && ny === y2 && nz === z2) {
                            return current.dist + 1;
                        }
                        visited[nx][ny][nz] = 1;
                        queue.push({ x: nx, y: ny, z: nz, dist: current.dist + 1 });
                    }
                }
            }
        }
        return Infinity; // No path found
    }

    updatePulse() {
        if (!this.isMap3DActive || this.pulsatingMaterials.length === 0) return;

        const pulseIntensity = 0.2 + 0.5 * Math.abs(Math.sin(Date.now() * 0.003));
        this.pulsatingMaterials.forEach(material => {
            material.emissiveIntensity = pulseIntensity;
        });
    }

    loop() {
        if (this.isDestroyed) return;
        this.update();
        if (this.isMap3DActive) {
            this.renderer.render(this.scene, this.camera);
            this.updatePulse();
        }
        else { this.draw2DMap(); }
        requestAnimationFrame(() => this.loop());
    }
}
