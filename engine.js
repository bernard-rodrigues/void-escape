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
        this.vScale = 2.0;

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

        this.maxHelperUses = CONFIG.getPathfinderCharges(this.hunters.length);
        this.helperUsesLeft = this.maxHelperUses;
        this.lastFrameTime = performance.now();
        this.revealedPathSet = new Set();
        this.activePathReveal = [];
        this.revealedPathProgress = 0;
        this.knownMeshes = [];
        this.gridMeshes = null;
        this.pathRevealInterval = null;
        this.uiHelperUses = document.getElementById('helper-uses');
        this.uiHelperMaxUses = document.getElementById('helper-max-uses');
        if (this.uiHelperUses) this.uiHelperUses.innerText = this.helperUsesLeft;
        if (this.uiHelperMaxUses) this.uiHelperMaxUses.innerText = this.maxHelperUses;

        this.keys = {};
        this.isMap3DActive = false;
        this.isGameOver = false;
        this.isDestroyed = false;
        this.pulsatingMaterials = [];
        this.hunterMeshes = [];
        this.discoveredTeleports = new Set();
        this.teleportMeshes = [];
        this.isTeleportMode = false;
        this.teleportCooldownTicks = 0;
        this.inactiveTeleportPos = null;
        this.uiCooldownTimer = document.getElementById('teleport-cooldown-timer');
        this.uiCooldownTicks = document.getElementById('cooldown-ticks');
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        
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
        
        if (this.controls) {
            this.controls.dispose();
        }

        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.removeEventListener('click', this.handleCanvasClick);
            this.renderer.domElement.removeEventListener('pointerdown', this.handlePointerDown);
            this.renderer.domElement.removeEventListener('pointerup', this.handlePointerUp);
        }
        
        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement.remove();
        }
        
        // Clean up listeners on mobile buttons
        document.getElementById('mobile-up').onclick = null;
        document.getElementById('mobile-down').onclick = null;
        document.getElementById('mobile-map').onclick = null;
        if (this.teleportInfoTimeout) clearTimeout(this.teleportInfoTimeout);
        if (this.infoTimeout) clearTimeout(this.infoTimeout);
        if (this.pathRevealInterval) clearInterval(this.pathRevealInterval);
    }

    initHunters(degree) {
        const count = CONFIG.getHunterCount(degree);
        if (count === 0) return;
        const size = this.mazeGen.size;
        const mid = Math.floor(size / 2);
        
        if (count >= 1) this.hunters.push(new Hunter(this.mazeGen, this.getExitPos(), 1));
        if (count >= 2) this.hunters.push(new Hunter(this.mazeGen, this.findNearestValid(size - 2, 1, mid), 2));
        if (count >= 3) this.hunters.push(new Hunter(this.mazeGen, this.findNearestValid(1, size - 2, mid), 3));
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
        if (this.uiCooldownTimer) this.uiCooldownTimer.classList.add('hidden');
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
            if (key === 'm') {
                if (this.isTeleportMode) {
                    this.toggleTeleportMap(false);
                } else {
                    this.toggleMap3D();
                }
            }
        };
        this.handleKeyUp = e => this.keys[e.key.toLowerCase()] = false;
        this.handleResize = () => this.resize();

        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('resize', this.handleResize);

        document.getElementById('mobile-up').onclick = () => this.changeFloor(2);
        document.getElementById('mobile-down').onclick = () => this.changeFloor(-2);
        
        document.getElementById('mobile-map').onclick = () => {
            if (this.isMap3DActive) {
                if (this.isTeleportMode) {
                    this.toggleTeleportMap(false);
                } else {
                    this.toggleMap3D();
                }
                return;
            }
            
            const px = Math.floor(this.player.x);
            const py = Math.floor(this.player.y);
            const pz = this.player.z;
            const isOnTeleport = this.maze[px][py][pz] === this.mazeGen.TYPES.TELEPORT;
            const isInactive = this.inactiveTeleportPos && 
                               this.inactiveTeleportPos.x === px && 
                               this.inactiveTeleportPos.y === py && 
                               this.inactiveTeleportPos.z === pz;
            
            if (isOnTeleport && !isInactive) {
                if (this.discoveredTeleports.size >= 2) {
                    this.toggleTeleportMap(true);
                } else {
                    this.showInfoBanner("FIND ANOTHER TELEPORT TO ACTIVATE");
                }
            } else {
                this.toggleMap3D();
            }
        };

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        this.handlePointerDown = (e) => {
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
        };
        this.handlePointerUp = (e) => {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.sqrt(dx*dx + dy*dy) > 5) {
                isDragging = true;
            }
        };
        this.handleCanvasClick = (e) => {
            if (isDragging) return;
            this.onCanvasClick(e);
        };
        
        this.renderer.domElement.addEventListener('pointerdown', this.handlePointerDown);
        this.renderer.domElement.addEventListener('pointerup', this.handlePointerUp);
        this.renderer.domElement.addEventListener('click', this.handleCanvasClick);

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

    update(dt) {
        if (this.isGameOver || this.isDestroyed || !dt) return;
        if (this.isMap3DActive) {
            this.controls.update();
            const size = this.mazeGen.size; // Get size for positioning
            // Update hunter mesh positions and their trails
            for (const hm of this.hunterMeshes) {
                const h = hm.hunter; // The actual hunter object
                const mesh = hm.mesh; // The THREE.Mesh object
                mesh.position.set(h.x - size/2, (h.z - size/2) * this.vScale, h.y - size/2);
                
                if (h.history && h.history.length > 0) {
                    if (h.history.length === 2) {
                        const oldest = h.history[0];
                        const newest = h.history[1];
                        
                        hm.trail2.position.set(oldest.x - size/2, (oldest.z - size/2) * this.vScale, oldest.y - size/2);
                        hm.trail2.visible = true;
                        
                        hm.trail1.position.set(newest.x - size/2, (newest.z - size/2) * this.vScale, newest.y - size/2);
                        hm.trail1.visible = true;
                    } else if (h.history.length === 1) {
                        const newest = h.history[0];
                        hm.trail1.position.set(newest.x - size/2, (newest.z - size/2) * this.vScale, newest.y - size/2);
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

            const hunterSpeedSec = 1000 / CONFIG.HUNTER_SPEED;
            const playerSpeedSec = hunterSpeedSec * CONFIG.MOVE_SPEED_FACTOR;
            const moveDist = playerSpeedSec * dt;
            const rotDist = CONFIG.ROT_SPEED * dt;

            if (!isPortrait && this.movementMode === 'tank') {
                if (this.keys['a'] || this.keys['arrowleft']) this.player.dir -= rotDist;
                if (this.keys['d'] || this.keys['arrowright']) this.player.dir += rotDist;
                if (this.keys['w'] || this.keys['arrowup']) {
                    moveX = Math.cos(this.player.dir) * moveDist;
                    moveY = Math.sin(this.player.dir) * moveDist;
                }
                if (this.keys['s'] || this.keys['arrowdown']) {
                    moveX = -Math.cos(this.player.dir) * moveDist;
                    moveY = -Math.sin(this.player.dir) * moveDist;
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
                    moveX = (dx / mag) * moveDist;
                    moveY = (dy / mag) * moveDist;
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
            const playerIdxZ = this.player.z;
            const isOnTeleport = this.maze[playerIdxX][playerIdxY][playerIdxZ] === this.mazeGen.TYPES.TELEPORT;
            const isInactive = this.inactiveTeleportPos && 
                               this.inactiveTeleportPos.x === playerIdxX && 
                               this.inactiveTeleportPos.y === playerIdxY && 
                               this.inactiveTeleportPos.z === playerIdxZ;

            if (playerIdxX >= 0 && playerIdxX < this.mazeGen.size && playerIdxY >= 0 && playerIdxY < this.mazeGen.size) {
                if (this.maze[playerIdxX][playerIdxY][playerIdxZ] === this.mazeGen.TYPES.PATH) {
                    this.maze[playerIdxX][playerIdxY][playerIdxZ] = this.mazeGen.TYPES.VISITED;
                } else if (isOnTeleport) {
                    const key = `${playerIdxX},${playerIdxY},${playerIdxZ}`;
                    if (!this.discoveredTeleports.has(key)) {
                        this.discoveredTeleports.add(key);
                    }
                }

                const pathKey = `${playerIdxX},${playerIdxY},${playerIdxZ}`;
                if (this.revealedPathSet.has(pathKey)) {
                    this.revealedPathSet.delete(pathKey);
                }
            }

            if (isOnTeleport && !isInactive) {
                if (this.keys['e'] || this.keys['pageup'] || this.keys['q'] || this.keys['pagedown']) {
                    ['e', 'q', 'pageup', 'pagedown'].forEach(k => this.keys[k] = false);
                    if (this.discoveredTeleports.size >= 2) {
                        this.toggleTeleportMap(true);
                    } else {
                        this.showInfoBanner("FIND ANOTHER TELEPORT TO ACTIVATE");
                    }
                }
            } else {
                if (this.keys['e'] || this.keys['pageup']) this.changeFloor(2);
                if (this.keys['q'] || this.keys['pagedown']) this.changeFloor(-2);
            }

            const mapBtn = document.getElementById('mobile-map');
            if (mapBtn) {
                const isPortrait = window.innerHeight > window.innerWidth;
                if (isPortrait) {
                    if (isOnTeleport && !isInactive) {
                        mapBtn.innerText = "TELEPORT";
                        mapBtn.style.borderColor = "var(--clr-teleport, #ff8c00)";
                        mapBtn.style.color = "var(--clr-teleport, #ff8c00)";
                        mapBtn.style.background = "rgba(255, 140, 0, 0.2)";
                    } else {
                        mapBtn.innerText = "MAP";
                        mapBtn.style.borderColor = "";
                        mapBtn.style.color = "";
                        mapBtn.style.background = "";
                    }
                }
            }

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

            if (this.teleportCooldownTicks > 0) {
                this.teleportCooldownTicks--;
                if (this.uiCooldownTicks) {
                    this.uiCooldownTicks.innerText = this.teleportCooldownTicks;
                }
                if (this.teleportCooldownTicks === 0) {
                    if (this.uiCooldownTimer) {
                        this.uiCooldownTimer.classList.add('hidden');
                    }
                    this.inactiveTeleportPos = null;
                    
                    // Transition hunters out of TELEPORT_TRACKING
                    for (const hunter of this.hunters) {
                        const cellVal = this.maze[hunter.x][hunter.y][hunter.z];
                        if (cellVal === this.mazeGen.TYPES.VISITED || cellVal === this.mazeGen.TYPES.START || cellVal === this.mazeGen.TYPES.EXIT) {
                            hunter.state = 'TRACKING';
                        } else {
                            hunter.state = 'WANDERING';
                            hunter.pathToTarget = [];
                            hunter.visitedNodes.clear();
                            hunter.visitedNodes.add(`${hunter.x},${hunter.y},${hunter.z}`);
                        }
                    }
                }
            }

            let trackingCount = 0;
            let nearbyCount = 0;
            for (const hunter of this.hunters) {
                hunter.move(this.player, this.maze, this.mazeGen.TYPES);
                if (hunter.state === 'TRACKING' || hunter.state === 'TELEPORT_TRACKING') trackingCount++;
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
            if (trackingCount > 0) { 
                this.uiHazardWarning.classList.remove('hidden'); 
                if (this.teleportCooldownTicks > 0) {
                    this.uiHazardWarning.innerText = "TELEPORT SIGNAL ACTIVE - HUNTERS CONVERGING";
                } else {
                    this.uiHazardWarning.innerText = "ENEMY IS HUNTING YOU";
                }
                this.canvas.classList.add('hunted-map-effect'); 
            }
            else { 
                this.uiHazardWarning.classList.add('hidden'); 
                this.canvas.classList.remove('hunted-map-effect'); 
            }
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
                
                // Clear any pathfinder markings for this shaft and elevator destination
                const shaftKey = `${currentX},${currentY},${shaftZ}`;
                const destKey = `${currentX},${currentY},${nextZ}`;
                this.revealedPathSet.delete(shaftKey);
                this.revealedPathSet.delete(destKey);

                this.player.z = nextZ;
                ['e', 'q', 'pageup', 'pagedown'].forEach(k => this.keys[k] = false);
                this.updateFloorUI();
                if (this.maze[currentX][currentY][nextZ] === this.mazeGen.TYPES.EXIT) this.triggerVictory();
            }
        }
    }

    toggleMap3D() {
        this.isMap3DActive = !this.isMap3DActive;
        this.isTeleportMode = false;
        const warning = document.getElementById('teleport-warning');
        if (warning) warning.classList.add('hidden');
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
        this.teleportMeshes = []; // Reset the array
        this.knownMeshes = []; // Reset the array
        const size = this.mazeGen.size;
        const isFloorVisited = (fx, fy, fz) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.maze[fx][fy][fz];
            return fVal === 2 || fVal === 3 || fVal === 4 || (fVal === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${fx},${fy},${fz}`));
        };

        this.gridMeshes = Array.from({ length: size }, () => 
            Array.from({ length: size }, () => new Array(size).fill(null))
        );

        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        
        // Define opacity factor: make all other map elements more translucent during teleportation mode
        const opFactor = this.isTeleportMode ? 0.2 : 1.0;

        const shaftGeomBottom = new THREE.BoxGeometry(0.9, 0.425, 0.9);
        const shaftGeomTop = new THREE.BoxGeometry(0.9, 0.425, 0.9);
        
        const shaftGeom = new THREE.CylinderGeometry(0.35, 0.35, 2.0 * this.vScale, 8);
        const shaftMat = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_VISITED,
            transparent: true, opacity: 0.8 * opFactor
        });

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.maze[x][y][z];

                    // Render elevator shaft cells (even z index and not a wall)
                    const isShaft = z % 2 === 0 && val !== 0;
                    if (isShaft) {
                        const key = `${x},${y},${z}`;
                        const isRevealedPath = this.revealedPathSet.has(key);
                        const isShaftVisited = val === this.mazeGen.TYPES.ELEVATOR_VISITED;
                        const isShaftKnown = (val === 1) && (isFloorVisited(x, y, z - 1) || isFloorVisited(x, y, z + 1));

                        if (isShaftVisited || isShaftKnown || isRevealedPath) {
                            let material;
                            if (isRevealedPath) {
                                material = new THREE.MeshPhongMaterial({
                                    color: 0xffffff,
                                    transparent: true,
                                    opacity: 0.95 * opFactor,
                                    emissive: 0xffffff,
                                    emissiveIntensity: 2.0 * opFactor
                                });
                            } else if (isShaftVisited) {
                                material = new THREE.MeshPhongMaterial({
                                    color: CONFIG.COLORS.THREE_VISITED,
                                    transparent: true,
                                    opacity: 0.8 * opFactor
                                });
                            } else if (isShaftKnown) {
                                material = new THREE.MeshPhongMaterial({
                                    color: CONFIG.COLORS.THREE_KNOWN,
                                    transparent: true,
                                    opacity: 0.6 * opFactor,
                                    emissive: CONFIG.COLORS.THREE_KNOWN,
                                    emissiveIntensity: 0.5 * opFactor
                                });
                                this.pulsatingMaterials.push(material);
                            }

                            const mesh = new THREE.Mesh(shaftGeom, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                            this.scene.add(mesh);
                            this.gridMeshes[x][y][z] = mesh;

                            if (isShaftKnown && !isRevealedPath) {
                                mesh.userData = { gridX: x, gridY: y, gridZ: z };
                                this.knownMeshes.push(mesh);
                            }
                        }
                        continue;
                    }

                    const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                    const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                    const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                    const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);

                    if (isTeleportDiscovered) {
                        const isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
                        const isInactive = this.inactiveTeleportPos && 
                                           this.inactiveTeleportPos.x === x && 
                                           this.inactiveTeleportPos.y === y && 
                                           this.inactiveTeleportPos.z === z;
                        
                        // In teleport mode, spheres are larger (radius 0.65 instead of 0.45)
                        // and have stronger emissive glow (intensity 2.5 instead of 0.8)
                        let radius = this.isTeleportMode ? 0.65 : 0.45;
                        let emissiveInt = this.isTeleportMode ? 2.5 : 0.8;
                        let color = CONFIG.COLORS.THREE_TELEPORT;
                        let opacity = 0.95;
                        
                        if (isInactive) {
                            color = 0x444444; // Dark grey for inactive
                            emissiveInt = 0.0; // No glow
                            opacity = 0.4;     // Translucent/dimmed
                        } else if (this.isTeleportMode && isPlayerHere) {
                            color = 0x00ffff; // Cyan/blue glow for the current source portal
                            opacity = 0.5;    // Translucent so the player sphere inside is visible
                            emissiveInt = 3.0; // Extra bright/high emissivity
                        }

                        const teleportGeom = new THREE.SphereGeometry(radius, 16, 16);
                        const teleportMat = new THREE.MeshPhongMaterial({
                            color: color,
                            emissive: color,
                            emissiveIntensity: emissiveInt,
                            transparent: true,
                            opacity: opacity
                        });
                        const mesh = new THREE.Mesh(teleportGeom, teleportMat);
                        mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                        mesh.userData = { isTeleport: true, gridX: x, gridY: y, gridZ: z };
                        this.scene.add(mesh);
                        this.teleportMeshes.push(mesh);
                        continue;
                    }

                    const key = `${x},${y},${z}`;
                    const isRevealedPath = this.revealedPathSet.has(key);

                    if (isVisited || isKnown || isRevealedPath) {
                        let color = CONFIG.COLORS.THREE_KNOWN;
                        let material; // Declare material here

                        if (isRevealedPath) {
                            color = 0xffffff;
                            material = new THREE.MeshPhongMaterial({
                                color: color,
                                transparent: true,
                                opacity: 0.95 * opFactor,
                                emissive: color,
                                emissiveIntensity: 2.0 * opFactor
                            });
                        } else if (isVisited) {
                            color = CONFIG.COLORS.THREE_VISITED;
                            if (val === 3) color = CONFIG.COLORS.THREE_START;
                            else if (val === 4) color = CONFIG.COLORS.THREE_EXIT;
                            material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: 0.8 * opFactor });
                        } else if (isKnown) {
                            material = new THREE.MeshPhongMaterial({ 
                                color: color, 
                                transparent: true, 
                                opacity: 0.6 * opFactor, 
                                emissive: color, 
                                emissiveIntensity: 0.5 * opFactor 
                            });
                            this.pulsatingMaterials.push(material);
                        }

                        const hUp = z < size - 1 && this.maze[x][y][z+1] !== 0;
                        const hDown = z > 0 && this.maze[x][y][z-1] !== 0;
                        if (hUp || hDown) {
                            // Remove do pulse caso tenha sido adicionado como isKnown
                            const index = this.pulsatingMaterials.indexOf(material);
                            if (index > -1) this.pulsatingMaterials.splice(index, 1);

                            if (hUp && hDown) {
                                // Split bicolor: dois meshes empilhados (cores invertidas verticalmente)
                                const matBottom = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_ELEVATOR_UP,   transparent: true, opacity: 0.9 * opFactor, emissive: CONFIG.COLORS.THREE_ELEVATOR_UP,   emissiveIntensity: 0.4 * opFactor });
                                const matTop    = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_ELEVATOR_DOWN, transparent: true, opacity: 0.9 * opFactor, emissive: CONFIG.COLORS.THREE_ELEVATOR_DOWN, emissiveIntensity: 0.4 * opFactor });
                                const meshBottom = new THREE.Mesh(shaftGeomBottom, matBottom);
                                const meshTop    = new THREE.Mesh(shaftGeomTop,    matTop);
                                meshBottom.position.set(x - size/2, (z - size/2) * this.vScale - 0.2125, y - size/2);
                                meshTop.position.set(   x - size/2, (z - size/2) * this.vScale + 0.2125, y - size/2);
                                this.scene.add(meshBottom);
                                this.scene.add(meshTop);
                                this.gridMeshes[x][y][z] = meshTop; // Reference to one of them is enough
                                continue; // Mesh já adicionado, pula o mesh padrão abaixo
                            } else {
                                const elevatorColor = hUp ? CONFIG.COLORS.THREE_ELEVATOR_UP : CONFIG.COLORS.THREE_ELEVATOR_DOWN;
                                material = new THREE.MeshPhongMaterial({ color: elevatorColor, transparent: true, opacity: 0.9 * opFactor, emissive: elevatorColor, emissiveIntensity: 0.4 * opFactor });
                            }
                        }

                        const isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
                        const isHunterHere = this.hunters.some(h => h.x === x && h.y === y && h.z === z);
                        if (isPlayerHere || isHunterHere) {
                            const floorGeom = new THREE.BoxGeometry(0.9, 0.05, 0.9);
                            const mesh = new THREE.Mesh(floorGeom, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.vScale - 0.425, y - size/2);
                            this.scene.add(mesh);
                            this.gridMeshes[x][y][z] = mesh;
                            continue;
                        }

                        const mesh = new THREE.Mesh(geometry, material);
                        mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                        this.scene.add(mesh);
                        this.gridMeshes[x][y][z] = mesh;
                        if (isKnown && !isRevealedPath) {
                            mesh.userData = { gridX: x, gridY: y, gridZ: z };
                            this.knownMeshes.push(mesh);
                        }
                    }
                }
            }
        }
        const pMarker = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.THREE_PLAYER }));
        pMarker.position.set(Math.floor(this.player.x) - size/2, (this.player.z - size/2) * this.vScale, Math.floor(this.player.y) - size/2);
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
            hMesh.position.set(h.x - size/2, (h.z - size/2) * this.vScale, h.y - size/2);
            this.scene.add(hMesh);
            
            this.hunterMeshes.push({ 
                hunter: h, 
                mesh: hMesh,
                trail1: tMesh1,
                trail2: tMesh2
            });
            console.log('Hunter mesh and trails added:', h);
        }
        this.camera.position.set(size, size * this.vScale, size);
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
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);
                const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);

                if (isRevealedPath) {
                    this.ctx.fillStyle = '#ffffff';
                    this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    const hUp = z < size - 1 && this.maze[x][y][z+1] !== 0;
                    const hDown = z > 0 && this.maze[x][y][z-1] !== 0;
                    if (hUp || hDown) {
                        this.ctx.fillStyle = (hUp && hDown) ? '#fff' : (hUp ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_DOWN);
                        this.ctx.font = `bold ${cellSize * 0.8}px Arial`;
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText(hUp && hDown ? '↕' : (hUp ? '▲' : '▼'), x * cellSize + cellSize/2, y * cellSize + cellSize * 0.8);
                    }
                } else if (isVisited) {
                    if (isTeleportDiscovered) {
                        const isInactive = this.inactiveTeleportPos && 
                                           this.inactiveTeleportPos.x === x && 
                                           this.inactiveTeleportPos.y === y && 
                                           this.inactiveTeleportPos.z === z;
                        this.ctx.fillStyle = isInactive ? '#555555' : CONFIG.COLORS.TELEPORT;
                    } else {
                        this.ctx.fillStyle = val === 2 ? CONFIG.COLORS.PATH_VISITED : (val === 3 ? CONFIG.COLORS.START : CONFIG.COLORS.EXIT);
                    }
                    this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                    const hUp = z < size - 1 && this.maze[x][y][z+1] !== 0;
                    const hDown = z > 0 && this.maze[x][y][z-1] !== 0;
                    if (hUp || hDown) {
                        this.ctx.fillStyle = (hUp && hDown) ? '#fff' : (hUp ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_DOWN);
                        this.ctx.font = `bold ${cellSize * 0.8}px Arial`;
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText(hUp && hDown ? '↕' : (hUp ? '▲' : '▼'), x * cellSize + cellSize/2, y * cellSize + cellSize * 0.8);
                    }
                } else if (isKnown) { 
                    this.ctx.fillStyle = CONFIG.COLORS.PATH_KNOWN; 
                    this.ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); 
                }
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
                    // ELEVATOR_VISITED (5) and EXIT (4) cells do not automatically reveal adjacent
                    // paths by proximity.
                    if (v === 2 || v === 3) return true;
                    if (v === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${nx},${ny},${z}`)) return true;
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
        const now = performance.now();
        const dt = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;
        const clampedDt = Math.min(dt, 0.1);

        this.update(clampedDt);
        if (this.isMap3DActive) {
            this.renderer.render(this.scene, this.camera);
            this.updatePulse();
        }
        else { this.draw2DMap(); }
        requestAnimationFrame(() => this.loop());
    }

    toggleTeleportMap(show) {
        this.isMap3DActive = show;
        this.isTeleportMode = show;
        
        const warning = document.getElementById('teleport-warning');
        
        if (show) {
            this.uiMap3dContainer.classList.remove('hidden');
            if (warning) warning.classList.remove('hidden');
            
            this.build3DMap();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        } else {
            this.uiMap3dContainer.classList.add('hidden');
            if (warning) warning.classList.add('hidden');
        }
    }

    showInfoBanner(message) {
        const info = document.getElementById('teleport-info');
        if (info) {
            info.innerText = message;
            info.classList.remove('hidden');
            if (this.teleportInfoTimeout) clearTimeout(this.teleportInfoTimeout);
            this.teleportInfoTimeout = setTimeout(() => {
                info.classList.add('hidden');
            }, 3000);
        }
    }

    onCanvasClick(event) {
        if (!this.isMap3DActive) return;
        
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        this.raycaster.setFromCamera(this.pointer, this.camera);
        
        if (this.isTeleportMode) {
            const intersects = this.raycaster.intersectObjects(this.teleportMeshes);
            if (intersects.length > 0) {
                const hitMesh = intersects[0].object;
                const { gridX, gridY, gridZ } = hitMesh.userData;
                const isTargetInactive = this.inactiveTeleportPos && 
                                         this.inactiveTeleportPos.x === gridX && 
                                         this.inactiveTeleportPos.y === gridY && 
                                         this.inactiveTeleportPos.z === gridZ;
                if (!isTargetInactive) {
                    this.teleportTo(gridX, gridY, gridZ);
                }
            }
        } else {
            // Normal 3D map: Pathfinder skill
            const intersects = this.raycaster.intersectObjects(this.knownMeshes);
            if (intersects.length > 0) {
                const hitMesh = intersects[0].object;
                const { gridX, gridY, gridZ } = hitMesh.userData;
                
                if (this.helperUsesLeft > 0) {
                    this.helperUsesLeft--;
                    if (this.uiHelperUses) this.uiHelperUses.innerText = this.helperUsesLeft;
                    this.triggerPathReveal(gridX, gridY, gridZ);
                } else {
                    this.showInfoBanner("NO PATHFINDER CHARGES REMAINING");
                }
            }
        }
    }

    findShortestPath(start, end) {
        if (start.x === end.x && start.y === end.y && start.z === end.z) return [];
        const size = this.mazeGen.size;
        const queue = [{ x: start.x, y: start.y, z: start.z, path: [] }];
        const visited = Array.from({ length: size }, () => 
            Array.from({ length: size }, () => new Uint8Array(size))
        );
        visited[start.x][start.y][start.z] = 1;

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
                        const newPath = [...current.path, { x: nx, y: ny, z: nz }];
                        if (nx === end.x && ny === end.y && nz === end.z) {
                            return newPath;
                        }
                        visited[nx][ny][nz] = 1;
                        queue.push({ x: nx, y: ny, z: nz, path: newPath });
                    }
                }
            }
        }
        return [];
    }

    triggerPathReveal(tx, ty, tz) {
        if (this.pathRevealInterval) {
            clearInterval(this.pathRevealInterval);
            this.pathRevealInterval = null;
        }

        const start = {
            x: Math.floor(this.player.x),
            y: Math.floor(this.player.y),
            z: this.player.z
        };
        const end = { x: tx, y: ty, z: tz };
        const path = this.findShortestPath(start, end);

        if (!path || path.length === 0) return;

        this.activePathReveal = path;
        this.revealedPathProgress = 0;
        this.revealedPathSet.add(`${tx},${ty},${tz}`);

        this.pathRevealInterval = setInterval(() => {
            if (this.revealedPathProgress < this.activePathReveal.length) {
                const node = this.activePathReveal[this.revealedPathProgress];
                const key = `${node.x},${node.y},${node.z}`;
                this.revealedPathSet.add(key);
                
                if (this.isMap3DActive && this.gridMeshes) {
                    const mesh = this.gridMeshes[node.x][node.y][node.z];
                    if (mesh) {
                        mesh.material = new THREE.MeshPhongMaterial({
                            color: 0xffffff,
                            emissive: 0xffffff,
                            emissiveIntensity: 2.0,
                            transparent: true,
                            opacity: 0.95 * (this.isTeleportMode ? 0.2 : 1.0)
                        });
                    }
                }
                this.revealedPathProgress++;
            } else {
                clearInterval(this.pathRevealInterval);
                this.pathRevealInterval = null;
            }
        }, 120);
    }

    teleportTo(x, y, z) {
        this.player.x = x + 0.5;
        this.player.y = y + 0.5;
        this.player.z = z;
        
        this.toggleTeleportMap(false);
        
        if (this.maze[x][y][z] === this.mazeGen.TYPES.PATH) {
            this.maze[x][y][z] = this.mazeGen.TYPES.VISITED;
        }

        // Initialize teleport cooldown and attract hunters
        const nTicks = Math.floor(this.degree * 1.5) + 3;
        this.teleportCooldownTicks = nTicks;
        this.inactiveTeleportPos = { x, y, z };

        if (this.uiCooldownTimer) {
            this.uiCooldownTimer.classList.remove('hidden');
            if (this.uiCooldownTicks) {
                this.uiCooldownTicks.innerText = this.teleportCooldownTicks;
            }
        }

        for (const hunter of this.hunters) {
            hunter.state = 'TELEPORT_TRACKING';
            const path = hunter.findPathToTarget({ x, y, z }, this.maze, this.mazeGen.TYPES);
            if (path) {
                hunter.pathToTarget = path;
            } else {
                hunter.pathToTarget = [];
            }
        }
        
        this.updateFloorUI();
        this.draw2DMap();
        this.keys = {};
    }
}
