import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Configuration Constants for the Maze Engine
 */
const CONFIG = {
    MAZE_DEGREE: 8,
    BRANCHING_FACTOR: 0.3,
    MOVE_SPEED: 0.1,
    ROT_SPEED: 0.05,
    HUNTER_SPEED: 800, // ms per move
    COLORS: {
        // 2D & Global
        WALL: '#222',
        PATH_KNOWN: '#5588aa',
        PATH_VISITED: '#555',
        NEON_UP: '#00ffff',
        NEON_DOWN: '#ff00ff',
        START: '#ff0',
        EXIT: '#0f0',
        PLAYER: '#f00',
        HUNTER: '#a0f',
        // 3D Specific (Hex codes for Three.js)
        THREE_PLAYER: 0xff0000,
        THREE_HUNTER: 0xaa00ff,
        THREE_START: 0xffff00,
        THREE_EXIT: 0x00ff00,
        THREE_VISITED: 0x555555,
        THREE_KNOWN: 0x5588aa,
        THREE_ELEVATOR_UP: 0x00ffff,
        THREE_ELEVATOR_DOWN: 0xff00ff
    }
};

let currentGame = null;

/**
 * Enemy Hunter Logic
 */
class Hunter {
    constructor(maze, startPos, id) {
        this.maze = maze;
        this.x = startPos.x;
        this.y = startPos.y;
        this.z = startPos.z;
        this.id = id;
        this.state = 'WANDERING'; // WANDERING or TRACKING
        this.lastPos = { x: this.x, y: this.y, z: this.z };
    }

    move(playerPos, matrix, types) {
        const neighbors = this.getValidNeighbors(matrix, types);
        if (neighbors.length === 0) return;

        if (matrix[this.x][this.y][this.z] === types.VISITED) {
            this.state = 'TRACKING';
        }

        let next;
        if (this.state === 'TRACKING') {
            const trail = neighbors.filter(n => matrix[n.x][n.y][n.z] === types.VISITED || matrix[n.x][n.y][n.z] === types.START || matrix[n.x][n.y][n.z] === types.EXIT);
            
            if (trail.length > 0) {
                next = trail[Math.floor(Math.random() * trail.length)];
            } else {
                this.state = 'WANDERING';
                next = neighbors[Math.floor(Math.random() * neighbors.length)];
            }
        } else {
            const forward = neighbors.filter(n => n.x !== this.lastPos.x || n.y !== this.lastPos.y || n.z !== this.lastPos.z);
            next = forward.length > 0 ? forward[Math.floor(Math.random() * forward.length)] : neighbors[0];
        }

        this.lastPos = { x: this.x, y: this.y, z: this.z };
        this.x = next.x;
        this.y = next.y;
        this.z = next.z;
    }

    getValidNeighbors(matrix, types) {
        const neighbors = [];
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
        ];
        for (const d of dirs) {
            const nx = this.x + d.dx, ny = this.y + d.dy, nz = this.z + d.dz;
            if (nx >= 0 && nx < matrix.length && ny >= 0 && ny < matrix.length && nz >= 0 && nz < matrix.length) {
                if (matrix[nx][ny][nz] !== types.WALL) {
                    neighbors.push({ x: nx, y: ny, z: nz });
                }
            }
        }
        return neighbors;
    }
}

/**
 * 3D Maze Logic Handler
 */
class Maze3D {
    constructor(degree, branchingFactor) {
        this.n = Math.max(3, Math.min(50, degree));
        this.branchingFactor = Math.max(0, Math.min(1, branchingFactor));
        this.size = 2 * this.n + 1;
        this.matrix = this.initMatrix();
        
        this.TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
        this.startPos = { x: 0.5, y: 1.5, z: 0 };
    }

    initMatrix() {
        return Array.from({ length: this.size }, () => 
            Array.from({ length: this.size }, () => new Int8Array(this.size).fill(0))
        );
    }

    generate() {
        const cells = [];
        const startX = 1 + 2 * Math.floor(Math.random() * this.n);
        const startY = 1 + 2 * Math.floor(Math.random() * this.n);
        const startZ = 1 + 2 * Math.floor(Math.random() * this.n);

        this.matrix[startX][startY][startZ] = this.TYPES.PATH;
        cells.push({ x: startX, y: startY, z: startZ });

        while (cells.length > 0) {
            let index = Math.random() > this.branchingFactor ? cells.length - 1 : Math.floor(Math.random() * cells.length);
            const cell = cells[index];
            const neighbors = this.getUnvisitedNeighbors(cell.x, cell.y, cell.z);

            if (neighbors.length > 0) {
                const neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.matrix[neighbor.x][neighbor.y][neighbor.z] = this.TYPES.PATH;
                this.matrix[(cell.x + neighbor.x) / 2][(cell.y + neighbor.y) / 2][(cell.z + neighbor.z) / 2] = this.TYPES.PATH;
                cells.push(neighbor);
            } else {
                cells.splice(index, 1);
            }
        }

        this.setEntryAndExit();
        return this.matrix;
    }

    getUnvisitedNeighbors(x, y, z) {
        const neighbors = [];
        const dirs = [
            { dx: 2, dy: 0, dz: 0 }, { dx: -2, dy: 0, dz: 0 },
            { dx: 0, dy: 2, dz: 0 }, { dx: 0, dy: -2, dz: 0 },
            { dx: 0, dy: 0, dz: 2 }, { dx: 0, dy: 0, dz: -2 }
        ];
        for (const dir of dirs) {
            const nx = x + dir.dx, ny = y + dir.dy, nz = z + dir.dz;
            if (this.isValid(nx, ny, nz) && this.matrix[nx][ny][nz] === this.TYPES.WALL) {
                neighbors.push({ x: nx, y: ny, z: nz });
            }
        }
        return neighbors;
    }

    isValid(x, y, z) {
        return x > 0 && x < this.size - 1 && y > 0 && y < this.size - 1 && z > 0 && z < this.size - 1;
    }

    setEntryAndExit() {
        const entryZ = 1 + 2 * Math.floor(Math.random() * this.n);
        this.matrix[1][1][entryZ] = this.TYPES.PATH;
        this.matrix[0][1][entryZ] = this.TYPES.START;
        this.startPos = { x: 0.5, y: 1.5, z: entryZ };

        const exitZ = 1 + 2 * Math.floor(Math.random() * this.n);
        const lastCell = 2 * this.n - 1;
        this.matrix[lastCell][lastCell][exitZ] = this.TYPES.PATH;
        this.matrix[2 * this.n][lastCell][exitZ] = this.TYPES.EXIT;
    }
}

/**
 * Main Game Engine - 2D Map Navigation & 3D Overview
 */
class Engine {
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
        if (degree < 8) return;
        const size = this.mazeGen.size;
        const mid = Math.floor(size / 2);
        this.hunters.push(new Hunter(this.mazeGen, this.getExitPos(), 1));
        if (degree >= 20) this.hunters.push(new Hunter(this.mazeGen, this.findNearestValid(size - 2, 1, mid), 2));
        if (degree >= 35) this.hunters.push(new Hunter(this.mazeGen, this.findNearestValid(1, size - 2, mid), 3));
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

        document.getElementById('mobile-up').onclick = () => this.changeFloor(1);
        document.getElementById('mobile-down').onclick = () => this.changeFloor(-1);
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

    updateFloorUI() { if (this.uiFloorSpan) this.uiFloorSpan.innerText = this.player.z; }

    update() {
        if (this.isGameOver || this.isDestroyed) return;
        if (this.isMap3DActive) { this.controls.update(); return; }

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

        if (this.keys['e'] || this.keys['pageup']) this.changeFloor(1);
        if (this.keys['q'] || this.keys['pagedown']) this.changeFloor(-1);

        if (isPortrait) {
            const upBtn = document.getElementById('mobile-up');
            const downBtn = document.getElementById('mobile-down');
            const floorX = Math.floor(this.player.x), floorY = Math.floor(this.player.y);
            upBtn.disabled = !(this.player.z < this.mazeGen.size - 1 && this.maze[floorX][floorY][this.player.z + 1] !== this.mazeGen.TYPES.WALL);
            downBtn.disabled = !(this.player.z > 0 && this.maze[floorX][floorY][this.player.z - 1] !== this.mazeGen.TYPES.WALL);
        }

        const now = performance.now();
        if (now - this.lastHunterMove > CONFIG.HUNTER_SPEED) {
            this.lastHunterMove = now;
            let trackingCount = 0;
            let nearbyCount = 0;
            for (const hunter of this.hunters) {
                hunter.move(this.player, this.maze, this.mazeGen.TYPES);
                if (hunter.state === 'TRACKING') trackingCount++;
                if (Math.abs(hunter.z - this.player.z) <= 1) nearbyCount++;
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
        const nextZ = this.player.z + delta;
        if (nextZ >= 0 && nextZ < this.mazeGen.size) {
            const nextCellType = this.maze[Math.floor(this.player.x)][Math.floor(this.player.y)][nextZ];
            if (nextCellType !== this.mazeGen.TYPES.WALL) {
                this.player.z = nextZ;
                ['e', 'q', 'pageup', 'pagedown'].forEach(k => this.keys[k] = false);
                this.updateFloorUI();
                if (nextCellType === this.mazeGen.TYPES.EXIT) this.triggerVictory();
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

        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const size = this.mazeGen.size;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.maze[x][y][z];
                    const isVisited = val >= 2;
                    const isKnown = val === 1 && this.isNearVisited(x, y, z);
                    if (isVisited || isKnown) {
                        let color = CONFIG.COLORS.THREE_KNOWN;
                        if (isVisited) {
                            color = CONFIG.COLORS.THREE_VISITED;
                            if (val === 3) color = CONFIG.COLORS.THREE_START;
                            else if (val === 4) color = CONFIG.COLORS.THREE_EXIT;
                        }
                        const hUp = z < size - 1 && this.maze[x][y][z+1] !== 0;
                        const hDown = z > 0 && this.maze[x][y][z-1] !== 0;
                        let material;
                        if (hUp || hDown) {
                            const elevatorColor = hUp ? CONFIG.COLORS.THREE_ELEVATOR_UP : CONFIG.COLORS.THREE_ELEVATOR_DOWN;
                            material = new THREE.MeshPhongMaterial({ color: elevatorColor, transparent: true, opacity: 0.9, emissive: elevatorColor, emissiveIntensity: 0.4 });
                        } else { material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: isVisited ? 0.8 : 0.6 }); }
                        const mesh = new THREE.Mesh(geometry, material);
                        mesh.position.set(x - size/2, z - size/2, y - size/2);
                        this.scene.add(mesh);
                    }
                }
            }
        }
        const pMarker = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.THREE_PLAYER }));
        pMarker.position.set(this.player.x - size/2, this.player.z - size/2, this.player.y - size/2);
        this.scene.add(pMarker);
        const hGeom = new THREE.SphereGeometry(0.4);
        const hMat = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.8 });
        for (const h of this.hunters) {
            const hMesh = new THREE.Mesh(hGeom, hMat);
            hMesh.position.set(h.x - size/2, h.z - size/2, h.y - size/2);
            this.scene.add(hMesh);
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
                    if (this.maze[nx][ny][z] >= 2) return true;
                }
            }
        }
        return false;
    }

    loop() {
        if (this.isDestroyed) return;
        this.update();
        if (this.isMap3DActive) { this.renderer.render(this.scene, this.camera); }
        else { this.draw2DMap(); }
        requestAnimationFrame(() => this.loop());
    }
}

const startNewGame = (degree, branching, movementMode) => {
    if (currentGame) currentGame.destroy();
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    currentGame = new Engine(degree, branching, movementMode);
};

const returnToMenu = () => {
    if (currentGame) currentGame.destroy();
    document.getElementById('victory-screen').classList.add('hidden');
    document.getElementById('game-over-screen').classList.add('hidden');
    document.getElementById('start-menu').classList.remove('hidden');
};

window.onload = () => {
    const degreeSlider = document.getElementById('maze-degree');
    const branchSlider = document.getElementById('branching-factor');
    const degreeVal = document.getElementById('degree-val');
    const branchVal = document.getElementById('branch-val');
    const hunterCount = document.getElementById('hunter-count');

    const updateHunterDisplay = (degree) => {
        let count = 0;
        if (degree >= 8) count = 1;
        if (degree >= 20) count = 2;
        if (degree >= 35) count = 3;
        hunterCount.innerText = count;
        hunterCount.style.color = count > 0 ? '#f00' : '#a0f';
    };

    degreeSlider.oninput = () => { degreeVal.innerText = degreeSlider.value; updateHunterDisplay(parseInt(degreeSlider.value)); };
    branchSlider.oninput = () => branchVal.innerText = parseFloat(branchSlider.value).toFixed(2);
    updateHunterDisplay(parseInt(degreeSlider.value));

    document.getElementById('start-btn').onclick = () => {
        startNewGame(parseInt(degreeSlider.value), parseFloat(branchSlider.value), document.getElementById('movement-mode').value);
    };

    // End game button logic
    ['restart-btn-victory', 'retry-btn-death'].forEach(id => {
        document.getElementById(id).onclick = () => {
            startNewGame(currentGame.degree, currentGame.branchingFactor, currentGame.movementMode);
        };
    });

    ['menu-btn-victory', 'menu-btn-death'].forEach(id => {
        document.getElementById(id).onclick = returnToMenu;
    });
};
