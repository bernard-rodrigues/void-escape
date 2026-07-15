import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';
import { Hunter } from './hunter.js';
import { Maze3D } from './maze3d.js';
import { aStarDistance, aStarPath, proximeterDistance } from './pathfinder.js';
import { UIManager } from './ui.js';
import { InputHandler } from './input.js';
import { saveGame, clearSave, restoreHunter, restoreMatrix } from './save.js';

function moveTowards(current, target, maxDelta) {
    if (Math.abs(target - current) <= maxDelta) {
        return target;
    }
    return current + Math.sign(target - current) * maxDelta;
}

/**
 * Main Game Engine - 2D Map Navigation & 3D Overview
 */
export class Engine {
    constructor(degree, branchingFactor, savedState = null) {
        this.degree = degree;
        this.branchingFactor = branchingFactor;
        
        // Restore or initialize Safe Mode status
        if (savedState) {
            this.isSafeMode = savedState.isSafeMode ?? false;
        } else {
            const safeModeCheckbox = document.getElementById('safe-mode');
            this.isSafeMode = safeModeCheckbox ? safeModeCheckbox.checked : false;
        }

        this.vScale = 2.0;

        // Initialize UI and Input handlers
        this.ui = new UIManager();
        this.input = new InputHandler();
        this.input.setupTouch(() => this.isMap3DActive, () => this.isGameOver);

        this.canvas = document.getElementById('main-2d-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.seed = savedState ? savedState.seed : (CONFIG.SEED !== null && CONFIG.SEED !== undefined ? CONFIG.SEED : Date.now());
        this.mazeGen = new Maze3D(degree, branchingFactor, this.seed);
        this.maze = this.mazeGen.generate();

        this.wallImage = new Image();
        this.wallImage.onload = () => {
            this.staticMapCacheDirty = true;
        };
        this.wallImage.src = 'assets/images/wall.png';
        
        this.floorImage = new Image();
        this.floorImage.onload = () => {
            this.staticMapCacheDirty = true;
        };
        this.floorImage.src = 'assets/images/floor.png';

        this.keyImage = new Image();
        this.keyImage.onload = () => {
            this.staticMapCacheDirty = true;
        };
        this.keyImage.src = 'assets/images/key.svg';
        
        this.player = {
            x: this.mazeGen.startPos.x,
            y: this.mazeGen.startPos.y,
            z: this.mazeGen.startPos.z,
            dir: 0
        };

        this.hunters = [];
        this.initHunters(degree);

        this.keyMeshes = [];
        this.exitMesh = null;
        this.keysCollected = 0;
        this.totalKeys = CONFIG.getHunterCount(degree) * 2;

        this.totalPathfinders = CONFIG.getPathfinderCount(degree);
        this.pathfindersRemaining = this.totalPathfinders;

        this.lastFrameTime = performance.now();
        this.revealedPathSet = new Set();
        this.activePathReveal = [];
        this.revealedPathProgress = 0;
        this.knownMeshes = [];
        this.gridMeshes = null;
        this.pathRevealInterval = null;

        this.ui.initGameUI(this.isSafeMode);
        this.ui.updateKeysHUD(this.keysCollected, this.totalKeys);
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);

        this.isMap3DActive = false;
        this.isGameOver = false;
        this.isPaused = false;
        this.isDestroyed = false;
        this.isIntroPlaying = false;
        this.pulsatingMaterials = [];
        this.hunterMeshes = [];
        this.discoveredTeleports = new Set();
        const startGridX = Math.floor(this.player.x);
        const startGridY = Math.floor(this.player.y);
        const startGridZ = this.player.z;
        this.discoveredTeleports.add(`${startGridX},${startGridY},${startGridZ}`);

        this.teleportMeshes = [];
        this.isTeleportMode = false;
        this.teleportCooldownTicks = 0;
        this.inactiveTeleportPos = null;
        this.floorTransition = null;
        this.hasSavePoint = false;
        this.lastPlayerCell = null;
        this.exitPathfinderUnlocked = false;
        this.isZoomActive = true;
        this.zoomVisibleCells = 11;

        // Static 2D map cache to prevent redundant loops and redrawing
        this.staticMapCacheCanvas = document.createElement('canvas');
        this.staticMapCacheCtx = this.staticMapCacheCanvas.getContext('2d');
        this.staticMapCacheDirty = true;
        this.fullyRevealedCells = new Set();
        this.revealedCellsAnimation = new Map();
        this.skipCellAnimations = true;
        this.populateFullyRevealedCells(this.player.z);

        // Memory leak cleanup properties for animations and skip handlers
        this.activeSkipHandler = null;
        this.activeIntroTimer = null;
        this.activeContinueTimer = null;

        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        
        this.exitPathfinderUnlocked = this.checkExitNeighborVisited();

        this.initThree();
        this.init(savedState);
    }

    destroy() {
        this.isDestroyed = true;
        this.hideGameUI();
        
        this.input.destroy();
        this.ui.destroy();
        
        window.removeEventListener('keydown', this.handleKeyDownExtra);
        window.removeEventListener('resize', this.handleResize);

        // Clean up temporary skip handlers and timers to prevent memory leaks
        if (this.activeSkipHandler) {
            window.removeEventListener('keydown', this.activeSkipHandler);
            window.removeEventListener('touchstart', this.activeSkipHandler);
            this.activeSkipHandler = null;
        }
        if (this.activeIntroTimer) {
            clearTimeout(this.activeIntroTimer);
            this.activeIntroTimer = null;
        }
        if (this.activeContinueTimer) {
            clearTimeout(this.activeContinueTimer);
            this.activeContinueTimer = null;
        }
        
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
        if (this.ui.uiMobileUp) this.ui.uiMobileUp.onclick = null;
        if (this.ui.uiMobileDown) this.ui.uiMobileDown.onclick = null;
        if (this.ui.uiMobileMap) this.ui.uiMobileMap.onclick = null;
        
        if (this.pathRevealInterval) clearInterval(this.pathRevealInterval);
    }

    initHunters(degree) {
        const count = this.isSafeMode ? 0 : CONFIG.getHunterCount(degree);
        if (count === 0) return;
        
        for (let i = 1; i <= count; i++) {
            this.hunters.push(new Hunter(this.mazeGen, null, i));
        }
        this.lastHunterMove = performance.now();
    }

    wakeHunters() {
        const size = this.mazeGen.size;
        const candidates = [];
        const px = Math.floor(this.player.x);
        const py = Math.floor(this.player.y);
        const pz = this.player.z;

        // Gather all unvisited path cells (TYPES.PATH) on playable floors (odd z indices)
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    if (this.maze.get(x, y, z) === this.mazeGen.TYPES.PATH && z % 2 !== 0) {
                        candidates.push({ x, y, z });
                    }
                }
            }
        }

        if (candidates.length === 0) {
            // Fallback: if no unvisited path cells exist, use visited ones that are not the player cell and are on playable floors
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    for (let z = 0; z < size; z++) {
                        const val = this.maze.get(x, y, z);
                        if (val !== this.mazeGen.TYPES.WALL && z % 2 !== 0 && (x !== px || y !== py || z !== pz)) {
                            candidates.push({ x, y, z });
                        }
                    }
                }
            }
        }

        // Shuffle candidates using Math.random for runtime gameplay variance
        for (let i = candidates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = candidates[i];
            candidates[i] = candidates[j];
            candidates[j] = temp;
        }

        const getDist = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);

        // Find a valid position for each sleeping hunter
        const spawnedPos = [];
        const sleepingHunters = this.hunters.filter(h => h.state === 'SLEEP');

        let minPlayerDist = Math.max(3, Math.floor(size * 0.45));
        let minInterHunterDist = 4;

        while (spawnedPos.length < sleepingHunters.length && minPlayerDist > 0) {
            spawnedPos.length = 0;

            const filteredCandidates = candidates.filter(c => {
                const distToPlayer = getDist(c, { x: px, y: py, z: pz });
                return distToPlayer >= minPlayerDist;
            });

            for (let i = 0; i < sleepingHunters.length; i++) {
                let bestCand = null;
                for (const c of filteredCandidates) {
                    if (spawnedPos.some(s => s.x === c.x && s.y === c.y && s.z === c.z)) continue;

                    let validInterHunter = true;
                    for (const s of spawnedPos) {
                        if (getDist(c, s) < minInterHunterDist) {
                            validInterHunter = false;
                            break;
                        }
                    }

                    if (validInterHunter) {
                        bestCand = c;
                        break; // Since list is already shuffled, take the first valid one
                    }
                }

                if (bestCand) {
                    spawnedPos.push(bestCand);
                } else {
                    break;
                }
            }

            if (spawnedPos.length < sleepingHunters.length) {
                if (minInterHunterDist > 1) {
                    minInterHunterDist--;
                } else {
                    minPlayerDist--;
                }
            }
        }

        // If even then we don't have enough, just assign whatever candidates we have
        if (spawnedPos.length < sleepingHunters.length) {
            for (const c of candidates) {
                if (spawnedPos.length >= sleepingHunters.length) break;
                if (!spawnedPos.some(s => s.x === c.x && s.y === c.y && s.z === c.z)) {
                    spawnedPos.push(c);
                }
            }
        }

        // Apply coordinates and change state to WANDERING
        for (let i = 0; i < sleepingHunters.length && i < spawnedPos.length; i++) {
            const hunter = sleepingHunters[i];
            const pos = spawnedPos[i];
            
            hunter.x = pos.x;
            hunter.y = pos.y;
            hunter.z = pos.z;
            hunter.visualX = pos.x;
            hunter.visualY = pos.y;
            hunter.visualZ = pos.z;
            hunter.lastPos = { x: pos.x, y: pos.y, z: pos.z };
            hunter.state = 'WANDERING';
            hunter.visitedNodes.clear();
            hunter.visitedNodes.add(`${pos.x},${pos.y},${pos.z}`);
            hunter.history = [];
        }

        this.ui.showInfoBanner("WARNING: VOID HUNTERS DETECTED");
        this.staticMapCacheDirty = true;
        if (this.isMap3DActive) {
            this.build3DMap();
        }
    }

    getExitPos() {
        for (let x = 0; x < this.mazeGen.size; x++) {
            for (let y = 0; y < this.mazeGen.size; y++) {
                for (let z = 0; z < this.mazeGen.size; z++) {
                    if (this.maze.get(x, y, z) === this.mazeGen.TYPES.EXIT) return { x, y, z };
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
                    if (this.maze.get(x, y, z) !== 0) {
                        const dist = Math.abs(x - tx) + Math.abs(y - ty) + Math.abs(z - tz);
                        if (dist < minDist) { minDist = dist; best = { x, y, z }; }
                    }
                }
            }
        }
        return best;
    }

    /**
     * Persist the current game state and briefly show a "SAVING..." indicator.
     */
    triggerSave() {
        saveGame(this);
        this.hasSavePoint = true;
        this.ui.showSavingIndicator();
    }

    triggerVictory() {
        this.isGameOver = true;
        clearSave(); // Victory clears the save so "Continue" is no longer offered
        this.ui.showVictory();
    }

    triggerDeath() {
        this.isGameOver = true;
        this.ui.showDeath(this.hasSavePoint);
    }

    collectKey(x, y, z) {
        this.maze.set(x, y, z, this.mazeGen.TYPES.VISITED);
        this.keysCollected++;
        this.staticMapCacheDirty = true;
        this.ui.updateKeysHUD(this.keysCollected, this.totalKeys);
        this.ui.showInfoBanner(`KEY SECURED (${this.keysCollected}/${this.totalKeys})`);
        
        if (this.keysCollected === this.totalKeys) {
            this.ui.showInfoBanner("EXIT UNLOCKED! SECURE THE EXTRACTION POINT");
            if (this.exitMesh) {
                this.exitMesh.material.color.setHex(CONFIG.COLORS.THREE_EXIT);
                this.exitMesh.material.emissive.setHex(CONFIG.COLORS.THREE_EXIT);
                this.exitMesh.material.emissiveIntensity = 0.5;
                const cage = this.exitMesh.children[0];
                if (cage) {
                    this.exitMesh.remove(cage);
                }
            }
        }
    }

    triggerLockedExitWarning() {
        const now = Date.now();
        if (!this.lastLockedWarningTime || now - this.lastLockedWarningTime > 1500) {
            this.lastLockedWarningTime = now;
            const missing = this.totalKeys - this.keysCollected;
            this.ui.showInfoBanner(`ACCESS DENIED: NEED ${missing} MORE KEY${missing > 1 ? 'S' : ''}`);
        }
    }

    /**
     * Patches the engine's live state from a previously serialised snapshot.
     * Called by script.js immediately after construction when the player chooses
     * "Continue". The maze has already been generated (same parameters), so we
     * only need to overwrite the matrix bytes and runtime state.
     * @param {object} snapshot - Snapshot returned by loadSave()
     */
    restoreFromSave(snapshot) {
        // Restore seed
        this.seed = snapshot.seed;

        // Restore the maze matrix (visited cells, teleport positions, etc.)
        restoreMatrix(this.mazeGen, snapshot.matrix);

        // Restore player
        this.player.x = snapshot.player.x;
        this.player.y = snapshot.player.y;
        this.player.z = snapshot.player.z;
        this.player.dir = snapshot.player.dir;

        // Restore hunters
        for (let i = 0; i < this.hunters.length && i < snapshot.hunters.length; i++) {
            restoreHunter(this.hunters[i], snapshot.hunters[i]);
        }

        // Restore teleport state
        this.discoveredTeleports = new Set(snapshot.discoveredTeleports);
        this.inactiveTeleportPos = snapshot.inactiveTeleportPos;
        this.teleportCooldownTicks = snapshot.teleportCooldownTicks;
        this.keysCollected = snapshot.keysCollected !== undefined ? snapshot.keysCollected : 0;
        this.totalKeys = snapshot.totalKeys !== undefined ? snapshot.totalKeys : (CONFIG.getHunterCount(this.degree) * 2);
        this.ui.updateKeysHUD(this.keysCollected, this.totalKeys);

        this.totalPathfinders = snapshot.totalPathfinders !== undefined ? snapshot.totalPathfinders : CONFIG.getPathfinderCount(this.degree);
        this.pathfindersRemaining = snapshot.pathfindersRemaining !== undefined ? snapshot.pathfindersRemaining : this.totalPathfinders;
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
        // Restore revealed paths
        this.revealedPathSet = new Set(snapshot.revealedPathSet);

        // Mark that this session was loaded from a save (so Continue remains available
        // until the player reaches a new teleport or dies)
        this.hasSavePoint = true;
        this.populateFullyRevealedCells(this.player.z);
        this.exitPathfinderUnlocked = this.checkExitNeighborVisited();
    }

    /**
     * Checks every frame whether any hunter occupies the same cell as the player.
     * Must be called independently of the hunter-move tick so the player cannot
     * "pass through" a stationary hunter between ticks.
     */
    checkHunterCollision() {
        const px = Math.floor(this.player.x);
        const py = Math.floor(this.player.y);
        const pz = this.player.z;

        // Ignora colisão se o jogador estiver no ponto seguro de partida
        const startGridX = Math.floor(this.mazeGen.startPos.x);
        const startGridY = Math.floor(this.mazeGen.startPos.y);
        const startGridZ = this.mazeGen.startPos.z;
        if (px === startGridX && py === startGridY && pz === startGridZ) {
            return;
        }

        for (const hunter of this.hunters) {
            if (hunter.state === 'SLEEP') continue;
            if (hunter.x === px && hunter.y === py && hunter.z === pz) {
                this.triggerDeath();
                return;
            }
        }
    }

    hideGameUI() {
        this.ui.hideGameUI();
        this.ui.hidePause();
        this.canvas.classList.remove('hunted-map-effect');
        this.isMap3DActive = false;
    }

    initThree() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.ui.uiMap3dContainer.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
    }

    init(savedState = null) {
        this.handleKeyDownExtra = e => {
            const key = e.key.toLowerCase();
            if (key === 'escape') {
                this.togglePause();
                return;
            }
            if (this.isPaused) return;
            if (key === 'm') {
                if (this.isTeleportMode) {
                    this.toggleTeleportMap(false);
                } else {
                    this.toggleMap3D();
                }
            }
            if (key === 'z') {
                this.toggleZoom();
            }
        };
        this.handleResize = () => this.resize();

        window.addEventListener('keydown', this.handleKeyDownExtra);
        window.addEventListener('resize', this.handleResize);

        const zoomBtn = document.getElementById('mobile-zoom-btn');
        if (zoomBtn) {
            zoomBtn.onclick = (e) => {
                e.stopPropagation();
                this.toggleZoom();
            };
        }

        if (this.ui.uiMobileUp) this.ui.uiMobileUp.onclick = () => this.changeFloor(2);
        if (this.ui.uiMobileDown) this.ui.uiMobileDown.onclick = () => this.changeFloor(-2);
        
        if (this.ui.uiMobileMap) {
            this.ui.uiMobileMap.onclick = () => {
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
                const isOnTeleport = this.maze.get(px, py, pz) === this.mazeGen.TYPES.TELEPORT;
                const isInactive = this.inactiveTeleportPos && 
                                   this.inactiveTeleportPos.x === px && 
                                   this.inactiveTeleportPos.y === py && 
                                   this.inactiveTeleportPos.z === pz;
                
                if (isOnTeleport && !isInactive) {
                    if (this.discoveredTeleports.size >= 2) {
                        this.toggleTeleportMap(true);
                    } else {
                        this.ui.showInfoBanner("FIND ANOTHER TELEPORT TO ACTIVATE");
                    }
                } else {
                    this.toggleMap3D();
                }
            };
        }

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
        
        this.resize();
        this.updateFloorUI();
        this.hideCanvasInstant();
        this.loop();
        
        if (savedState) {
            this.restoreFromSave(savedState);
            this.playContinueAnimation();
        } else {
            this.playIntroAnimation();
        }

        // Hides zoom controls if the maze size <= 11 (degree <= 5)
        const size = this.mazeGen.size;
        const mobileZoomBtn = document.getElementById('mobile-zoom-btn');
        const zoomHint = document.getElementById('control-hint-zoom');
        if (size <= 11) {
            if (mobileZoomBtn) mobileZoomBtn.classList.add('hidden');
            if (zoomHint) zoomHint.classList.add('hidden');
        } else {
            if (mobileZoomBtn) mobileZoomBtn.classList.remove('hidden');
            if (zoomHint) zoomHint.classList.remove('hidden');
        }
    }

    hideCanvasInstant() {
        const mapArea = document.getElementById('map-area-container');
        const leftHud = document.getElementById('left-hud-panel');
        const rightHud = document.getElementById('right-hud-panel');
        if (mapArea) {
            mapArea.style.transition = 'none';
            mapArea.classList.remove('intro-reveal');
            mapArea.classList.add('intro-hidden');
            mapArea.offsetHeight;
            mapArea.style.transition = '';
        }
        if (leftHud) {
            leftHud.style.transition = 'none';
            leftHud.classList.remove('intro-reveal');
            leftHud.classList.add('intro-hidden');
            leftHud.offsetHeight;
            leftHud.style.transition = '';
        }
        if (rightHud) {
            rightHud.style.transition = 'none';
            rightHud.classList.remove('intro-reveal');
            rightHud.classList.add('intro-hidden');
            rightHud.offsetHeight;
            rightHud.style.transition = '';
        }
    }

    drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, isRevealed = false, z = 0) {
        const isPlayerHere = x === Math.floor(px) && y === Math.floor(py);
        if (isPlayerHere) {
            const pulse = 0.85 + 0.15 * Math.sin(Date.now() / 150);
            ctx.save();
            ctx.globalAlpha = pulse;
        }

        // Determine if each transition (Z+1 for UP, Z-1 for DOWN) was used/visited
        const upVisited = hUp && (this.maze.get(x, y, z + 1) === this.mazeGen.TYPES.ELEVATOR_VISITED);
        const downVisited = hDown && (this.maze.get(x, y, z - 1) === this.mazeGen.TYPES.ELEVATOR_VISITED);

        // 1. Draw block background
        if (isRevealed) {
            if (hUp && hDown) {
                let routeUsesUp = false;
                let routeUsesDown = false;
                if (this.activePathReveal) {
                    const idx = this.activePathReveal.findIndex(node => node.x === x && node.y === y && node.z === z);
                    if (idx !== -1 && idx < this.activePathReveal.length - 1) {
                        const nextNode = this.activePathReveal[idx + 1];
                        if (nextNode.z > z) routeUsesUp = true;
                        if (nextNode.z < z) routeUsesDown = true;
                    }
                }
                if (!routeUsesUp && !routeUsesDown) {
                    routeUsesUp = this.revealedPathSet.has(`${x},${y},${z + 1}`) || this.revealedPathSet.has(`${x},${y},${z + 2}`);
                    routeUsesDown = this.revealedPathSet.has(`${x},${y},${z - 1}`) || this.revealedPathSet.has(`${x},${y},${z - 2}`);
                }

                // Se nenhuma direção for detectada na rota (fallback), ambas acendem em branco
                const paintUpWhite = routeUsesUp || (!routeUsesUp && !routeUsesDown);
                const paintDownWhite = routeUsesDown || (!routeUsesUp && !routeUsesDown);

                ctx.fillStyle = paintUpWhite ? CONFIG.COLORS.REVEALED_PATH : (upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED);
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize / 2);
                
                ctx.fillStyle = paintDownWhite ? CONFIG.COLORS.REVEALED_PATH : (downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED);
                ctx.fillRect(x * cellSize, y * cellSize + cellSize / 2, cellSize, cellSize / 2);
            } else {
                ctx.fillStyle = CONFIG.COLORS.REVEALED_PATH;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        } else {
            if (hUp && hDown) {
                ctx.fillStyle = upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize / 2);
                ctx.fillStyle = downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize + cellSize / 2, cellSize, cellSize / 2);
            } else if (hUp) {
                ctx.fillStyle = upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            } else {
                ctx.fillStyle = downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }

        // 2. Draw vector arrows (black triangles)
        const cx = x * cellSize + cellSize / 2;
        const cy = y * cellSize + cellSize / 2;
        ctx.fillStyle = '#000000';

        if (hUp && hDown) {
            const arrowSize = cellSize * 0.28;
            const cyTop = cy - cellSize / 5;
            const cyBottom = cy + cellSize / 5;

            // Up arrow
            ctx.beginPath();
            ctx.moveTo(cx, cyTop - arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cyTop + arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cyTop + arrowSize / 2);
            ctx.closePath();
            ctx.fill();

            // Down arrow
            ctx.beginPath();
            ctx.moveTo(cx, cyBottom + arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cyBottom - arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cyBottom - arrowSize / 2);
            ctx.closePath();
            ctx.fill();
        } else if (hUp) {
            const arrowSize = cellSize * 0.45;
            ctx.beginPath();
            ctx.moveTo(cx, cy - arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cy + arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cy + arrowSize / 2);
            ctx.closePath();
            ctx.fill();
        } else {
            const arrowSize = cellSize * 0.45;
            ctx.beginPath();
            ctx.moveTo(cx, cy + arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cy - arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cy - arrowSize / 2);
            ctx.closePath();
            ctx.fill();
        }

        if (isPlayerHere) {
            ctx.restore();
        }
    }

    /**
     * Draws wall-projected shadows on a 2D cell based on adjacent wall positions.
     */
    drawCellShadow2D(ctx, x, y, cellSize, size, val, z) {
        if (val === 4) return; // Exclude exit cell

        const hasWallBelow = (y + 1 < size) && (this.maze.get(x, y + 1, z) === 0);
        const hasWallRight = (x + 1 < size) && (this.maze.get(x + 1, y, z) === 0);
        const hasWallDiagonal = (x + 1 < size) && (y + 1 < size) && (this.maze.get(x + 1, y + 1, z) === 0);

        if (hasWallBelow || hasWallRight || hasWallDiagonal) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; // Sombra com 40% de opacidade
            const shadowSize = cellSize * CONFIG.SHADOW_SIZE_FACTOR;
            
            if (hasWallBelow) {
                // Faixa na parte de baixo (largura total)
                ctx.fillRect(x * cellSize, (y + 1) * cellSize - shadowSize, cellSize, shadowSize);
            }
            if (hasWallRight) {
                // Se houver parede abaixo, reduz a altura para evitar sobreposição na quina
                const rightShadowHeight = hasWallBelow ? (cellSize - shadowSize) : cellSize;
                // Faixa na parte da direita
                ctx.fillRect((x + 1) * cellSize - shadowSize, y * cellSize, shadowSize, rightShadowHeight);
            }
            
            // Se não tem parede direta abaixo nem na direita, mas tem na diagonal
            if (!hasWallBelow && !hasWallRight && hasWallDiagonal) {
                // Desenha um quadradinho no canto inferior direito
                ctx.fillRect((x + 1) * cellSize - shadowSize, (y + 1) * cellSize - shadowSize, shadowSize, shadowSize);
            }
        }
    }

    updateRendererSize() {
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }
    }

    resize() {
        const isPortrait = window.innerHeight > window.innerWidth;
        const size = isPortrait ? window.innerWidth * 0.82 : window.innerHeight * 0.75;
        this.canvas.width = size;
        this.canvas.height = size;
        this.staticMapCacheDirty = true;
        this.updateRendererSize();
    }

    /**
     * Calculates the percentage of the maze corridors visited by the player.
     * Excludes WALL and EXIT cells from both total and visited counts.
     * Returns an integer from 0 to 100.
     */
    getMapVisitedPercentage() {
        let totalEligible = 0;
        let visitedCount = 0;
        const size = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.maze.get(x, y, z);
                    // WALL and EXIT do not count towards the total corridors
                    if (val === TYPES.WALL || val === TYPES.EXIT) {
                        continue;
                    }
                    totalEligible++;

                    // Visited logic: player walked over it, started on it, used the elevator,
                    // or stepped on a teleport (and discovered it)
                    const isVisited = val === TYPES.VISITED ||
                                      val === TYPES.START ||
                                      val === TYPES.ELEVATOR_VISITED ||
                                      (val === TYPES.TELEPORT && this.discoveredTeleports.has(`${x},${y},${z}`));

                    if (isVisited) {
                        visitedCount++;
                    }
                }
            }
        }

        if (totalEligible === 0) return 0;
        return Math.floor((visitedCount / totalEligible) * 100);
    }

    updateFloorUI() {
        const currentX = Math.floor(this.player.x);
        const currentY = Math.floor(this.player.y);
        const currentZ = this.player.z;
        const hUp = currentZ + 1 < this.mazeGen.size && this.maze.get(currentX, currentY, currentZ + 1) !== this.mazeGen.TYPES.WALL;
        const hDown = currentZ - 1 >= 0 && this.maze.get(currentX, currentY, currentZ - 1) !== this.mazeGen.TYPES.WALL;
        this.ui.updateFloor(currentZ, hUp, hDown);

        // Update map visited percentage display
        const percent = this.getMapVisitedPercentage();
        this.ui.updateVisitedPercent(percent);
    }

    getTeleportCandidates() {
        const px = Math.floor(this.player.x);
        const py = Math.floor(this.player.y);
        const pz = this.player.z;
        return Array.from(this.discoveredTeleports).map(str => {
            const [x, y, z] = str.split(',').map(Number);
            return { x, y, z };
        }).filter(pos => {
            if (pos.x === px && pos.y === py && pos.z === pz) return false;
            if (this.inactiveTeleportPos && 
                this.inactiveTeleportPos.x === pos.x && 
                this.inactiveTeleportPos.y === pos.y && 
                this.inactiveTeleportPos.z === pos.z) return false;
            return true;
        });
    }

    updateGamepad(dt) {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        const gp = gamepads[0] || gamepads.find(g => g !== null);
        if (!gp) return;

        // 1. Movement axes (Left Analog / D-pad)
        const axisX = gp.axes[0];
        const axisY = gp.axes[1];
        
        const deadzone = 0.25;
        let left = axisX < -deadzone;
        let right = axisX > deadzone;
        let up = axisY < -deadzone;
        let down = axisY > deadzone;

        if (gp.buttons[12] && gp.buttons[12].pressed) up = true;
        if (gp.buttons[13] && gp.buttons[13].pressed) down = true;
        if (gp.buttons[14] && gp.buttons[14].pressed) left = true;
        if (gp.buttons[15] && gp.buttons[15].pressed) right = true;

        this.input.keys['arrowleft'] = left;
        this.input.keys['arrowright'] = right;
        this.input.keys['arrowup'] = up;
        this.input.keys['arrowdown'] = down;

        // 2. Buttons (Edge triggered)
        if (!this.prevGamepadButtons) {
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        const wasPressed = (btnIdx) => this.prevGamepadButtons[btnIdx];
        const isPressed = (btnIdx) => gp.buttons[btnIdx] && gp.buttons[btnIdx].pressed;
        const justPressed = (btnIdx) => isPressed(btnIdx) && !wasPressed(btnIdx);

        // Start / Menu Button (Button 9): Toggle Pause
        if (justPressed(9)) {
            this.togglePause();
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        // If paused, ignore all other inputs
        if (this.isPaused) {
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        // A Button (Button 0): Descend floor / Confirm teleport
        if (justPressed(0)) {
            if (this.isTeleportMode) {
                const candidates = this.getTeleportCandidates();
                const selected = candidates[this.gamepadTeleportSelectedIndex];
                if (selected) {
                    this.teleportTo(selected.x, selected.y, selected.z);
                }
            } else if (!this.isMap3DActive) {
                const px = Math.floor(this.player.x);
                const py = Math.floor(this.player.y);
                const pz = this.player.z;
                const hDown = pz > 0 && this.maze.get(px, py, pz - 1) !== 0;
                const val = this.maze.get(px, py, pz);
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isInactive = this.inactiveTeleportPos && 
                                   this.inactiveTeleportPos.x === px && 
                                   this.inactiveTeleportPos.y === py && 
                                   this.inactiveTeleportPos.z === pz;
                const isOnTeleport = isTeleport && this.discoveredTeleports.has(`${px},${py},${pz}`);

                if (!isOnTeleport || isInactive) {
                    if (hDown) this.changeFloor(-2);
                }
            }
        }

        // B Button (Button 1): Toggle Zoom / Cancel Teleport
        if (justPressed(1)) {
            if (this.isTeleportMode) {
                this.toggleTeleportMap(false);
            } else {
                this.toggleZoom();
            }
        }

        // X Button (Button 2): Interact with portal
        if (justPressed(2)) {
            if (!this.isTeleportMode && !this.isMap3DActive) {
                const px = Math.floor(this.player.x);
                const py = Math.floor(this.player.y);
                const pz = this.player.z;
                const val = this.maze.get(px, py, pz);
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isInactive = this.inactiveTeleportPos && 
                                   this.inactiveTeleportPos.x === px && 
                                   this.inactiveTeleportPos.y === py && 
                                   this.inactiveTeleportPos.z === pz;
                const isOnTeleport = isTeleport && this.discoveredTeleports.has(`${px},${py},${pz}`);

                if (isOnTeleport && !isInactive) {
                    if (this.discoveredTeleports.size >= 2) {
                        this.toggleTeleportMap(true);
                        this.gamepadTeleportSelectedIndex = 0;
                    } else {
                        this.ui.showInfoBanner("FIND ANOTHER TELEPORT TO ACTIVATE");
                    }
                }
            }
        }

        // Y Button (Button 3): Ascend floor
        if (justPressed(3)) {
            if (!this.isTeleportMode && !this.isMap3DActive) {
                const px = Math.floor(this.player.x);
                const py = Math.floor(this.player.y);
                const pz = this.player.z;
                const hUp = pz < this.mazeGen.size - 1 && this.maze.get(px, py, pz + 1) !== 0;
                const val = this.maze.get(px, py, pz);
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isInactive = this.inactiveTeleportPos && 
                                   this.inactiveTeleportPos.x === px && 
                                   this.inactiveTeleportPos.y === py && 
                                   this.inactiveTeleportPos.z === pz;
                const isOnTeleport = isTeleport && this.discoveredTeleports.has(`${px},${py},${pz}`);

                if (!isOnTeleport || isInactive) {
                    if (hUp) this.changeFloor(2);
                }
            }
        }

        // Back / View Button (Button 8): Toggle 3D Map
        if (justPressed(8)) {
            if (this.isTeleportMode) {
                this.toggleTeleportMap(false);
            } else {
                this.toggleMap3D();
            }
        }

        // 3. Teleport target selection (LB/RB or D-pad Left/Right in Teleport Mode)
        if (this.isTeleportMode) {
            const prevTeleport = justPressed(4) || justPressed(14);
            const nextTeleport = justPressed(5) || justPressed(15);

            if (prevTeleport || nextTeleport) {
                const candidates = this.getTeleportCandidates();
                if (candidates.length > 0) {
                    if (prevTeleport) {
                        this.gamepadTeleportSelectedIndex = (this.gamepadTeleportSelectedIndex - 1 + candidates.length) % candidates.length;
                    } else {
                        this.gamepadTeleportSelectedIndex = (this.gamepadTeleportSelectedIndex + 1) % candidates.length;
                    }
                }
            }
        }

        // 4. Right Analog Stick (axes 2 & 3): Rotate 3D Camera / Triggers (LT/RT): Zoom 3D Camera
        if (this.isMap3DActive && this.controls) {
            const rotX = gp.axes[2];
            const rotY = gp.axes[3];
            const zoomInVal = gp.buttons[7] ? gp.buttons[7].value : 0;  // RT
            const zoomOutVal = gp.buttons[6] ? gp.buttons[6].value : 0; // LT
            
            const rotDeadzone = 0.15;
            const zoomDeadzone = 0.15;
            const rotSpeed = 2.0 * dt;
            const zoomSpeed = 20.0 * dt;

            const hasRotation = Math.abs(rotX) > rotDeadzone || Math.abs(rotY) > rotDeadzone;
            const hasZoom = zoomInVal > zoomDeadzone || zoomOutVal > zoomDeadzone;

            if (hasRotation || hasZoom) {
                const offset = new THREE.Vector3().copy(this.camera.position).sub(this.controls.target);
                const spherical = new THREE.Spherical().setFromVector3(offset);

                if (Math.abs(rotX) > rotDeadzone) {
                    spherical.theta -= rotX * rotSpeed;
                }
                if (Math.abs(rotY) > rotDeadzone) {
                    spherical.phi -= rotY * rotSpeed;
                    const minPolar = this.controls.minPolarAngle || 0;
                    const maxPolar = this.controls.maxPolarAngle || Math.PI;
                    spherical.phi = Math.max(minPolar, Math.min(maxPolar, spherical.phi));
                }

                if (zoomInVal > zoomDeadzone) {
                    spherical.radius -= zoomInVal * zoomSpeed;
                }
                if (zoomOutVal > zoomDeadzone) {
                    spherical.radius += zoomOutVal * zoomSpeed;
                }
                const minDist = this.controls.minDistance || 2;
                const maxDist = this.controls.maxDistance || 100;
                spherical.radius = Math.max(minDist, Math.min(maxDist, spherical.radius));

                spherical.makeSafe();
                offset.setFromSpherical(spherical);
                this.camera.position.copy(this.controls.target).add(offset);
                this.controls.update();
            }
        }

        this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
    }

    update(dt) {
        if (this.isGameOver || this.isDestroyed || !dt) return;

        this.updateGamepad(dt);

        if (this.isPaused) return;

        if (this.hunters.some(h => h.state === 'SLEEP')) {
            const percent = this.getMapVisitedPercentage();
            if (percent >= 10) {
                this.wakeHunters();
            }
        }

        // Update hunter visual positions toward their target grid positions
        const speed = 1000 / CONFIG.HUNTER_SPEED;
        const maxDelta = speed * dt;
        for (const hunter of this.hunters) {
            hunter.visualX = moveTowards(hunter.visualX, hunter.x, maxDelta);
            hunter.visualY = moveTowards(hunter.visualY, hunter.y, maxDelta);
            hunter.visualZ = moveTowards(hunter.visualZ, hunter.z, maxDelta * 2);
            hunter.generateCloudTexture(dt);
        }

        if (this.isMap3DActive) {
            this.controls.update();
            const size = this.mazeGen.size;
            const opFactor = this.isTeleportMode ? 0.25 : 1.0;
            for (const hm of this.hunterMeshes) {
                 const h = hm.hunter;
                 const mesh = hm.mesh;
                 mesh.position.set(h.visualX - size/2, (h.visualZ - size/2) * this.vScale, h.visualY - size/2);

                 // Jelly shape deformation (slow skew / stretch scale) - contido
                 const time = h.jellyTime;
                 const scaleX = 1 + Math.sin(time * 1.2) * 0.07;
                 const scaleY = 1 + Math.cos(time * 0.8) * 0.07;
                 const scaleZ = 1 + Math.sin(time * 1.5) * 0.07;
                 if (hm.coreMesh) {
                     hm.coreMesh.scale.set(scaleX, scaleY, scaleZ);
                     // Flashing/pulsing emissive light intensity
                     if (hm.coreMesh.material) {
                         hm.coreMesh.material.emissiveIntensity = (0.8 + 0.2 * Math.sin(time * 3) + (Math.random() < 0.1 ? (Math.random() - 0.5) * 0.4 : 0)) * opFactor;
                     }
                 }

                 // Orbit and jitter the glitch particles (kept within cell block size)
                 if (hm.particles) {
                     hm.particles.forEach((p) => {
                         const ud = p.userData;
                         ud.angle += ud.speed * dt;
                         
                         const px = Math.cos(ud.angle) * ud.radius;
                         const pz = Math.sin(ud.angle) * ud.radius;
                         const py = Math.sin(ud.angle * 2 + ud.phaseY) * 0.25;
                         
                         let jitterX = 0, jitterY = 0, jitterZ = 0;
                         // Glitch tremor displacements kept small to stay inside bounds
                         if (Math.random() < 0.15) {
                             jitterX = (Math.random() - 0.5) * 0.12;
                             jitterY = (Math.random() - 0.5) * 0.12;
                             jitterZ = (Math.random() - 0.5) * 0.12;
                             p.scale.set(1.4 + Math.random() * 0.4, 0.6 + Math.random() * 0.3, 1.4 + Math.random() * 0.4);
                         } else {
                             p.scale.set(1.0, 1.0, 1.0);
                         }
                         p.position.set(px + jitterX, py + jitterY, pz + jitterZ);
                     });
                 }
                
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
            if (this.keyMeshes) {
                for (const km of this.keyMeshes) {
                    km.rotation.y += 1.5 * dt;
                    km.rotation.x += 0.5 * dt;
                }
            }
            if (this.isTeleportMode && this.teleportMeshes && this.gamepadTeleportSelectedIndex !== undefined) {
                const candidates = this.getTeleportCandidates();
                const selected = candidates[this.gamepadTeleportSelectedIndex];
                this.teleportMeshes.forEach(mesh => {
                    const { gridX, gridY, gridZ } = mesh.userData;
                    const isSelected = selected && gridX === selected.x && gridY === selected.y && gridZ === selected.z;
                    if (isSelected) {
                        const scale = 1.3 + 0.25 * Math.sin(Date.now() / 100);
                        mesh.scale.set(scale, scale, scale);
                        if (mesh.material && mesh.material.emissive) {
                            mesh.material.emissive.setHex(0xffaa00);
                            mesh.material.emissiveIntensity = 3.5;
                        }
                    } else {
                        const isPlayerHere = gridX === Math.floor(this.player.x) && gridY === Math.floor(this.player.y) && gridZ === this.player.z;
                        const isInactive = this.inactiveTeleportPos && 
                                           this.inactiveTeleportPos.x === gridX && 
                                           this.inactiveTeleportPos.y === gridY && 
                                           this.inactiveTeleportPos.z === gridZ;
                        
                        let baseScale = 1.0;
                        if (isPlayerHere) {
                            baseScale = 1.4;
                        }
                        mesh.scale.set(baseScale, baseScale, baseScale);

                        if (mesh.material && mesh.material.emissive) {
                            if (isInactive) {
                                mesh.material.emissive.setHex(0x444444);
                                mesh.material.emissiveIntensity = 0.0;
                            } else if (isPlayerHere) {
                                mesh.material.emissive.setHex(0x00ffff);
                                mesh.material.emissiveIntensity = 3.0;
                            } else {
                                mesh.material.emissive.setHex(CONFIG.COLORS.THREE_TELEPORT);
                                mesh.material.emissiveIntensity = 2.5;
                            }
                        }
                    }
                });
            }
        }

        if (!this.isMap3DActive) {
            let moveX = 0, moveY = 0;

            const hunterSpeedSec = 1000 / CONFIG.HUNTER_SPEED;
            const playerSpeedSec = hunterSpeedSec * CONFIG.MOVE_SPEED_FACTOR;
            const moveDist = playerSpeedSec * dt;

            let dx = 0, dy = 0;
            if (this.input.touchMoveVector) {
                dx = this.input.touchMoveVector.x;
                dy = this.input.touchMoveVector.y;
            } else {
                if (this.input.keys['w'] || this.input.keys['arrowup']) dy -= 1;
                if (this.input.keys['s'] || this.input.keys['arrowdown']) dy += 1;
                if (this.input.keys['a'] || this.input.keys['arrowleft']) dx -= 1;
                if (this.input.keys['d'] || this.input.keys['arrowright']) dx += 1;
            }
            if (dx !== 0 || dy !== 0) {
                const mag = Math.sqrt(dx * dx + dy * dy);
                moveX = (dx / mag) * moveDist;
                moveY = (dy / mag) * moveDist;
                this.player.dir = Math.atan2(moveY, moveX);
            }

            if (moveX !== 0 || moveY !== 0) {
                const oldGridX = Math.floor(this.player.x);
                const oldGridY = Math.floor(this.player.y);
                const nextX = this.player.x + moveX;
                const nextY = this.player.y + moveY;
                
                const isPassable = (gx, gy, gz) => {
                    const val = this.maze.get(gx, gy, gz);
                    if (val === this.mazeGen.TYPES.WALL) return false;
                    if (val === this.mazeGen.TYPES.EXIT && this.keysCollected < this.totalKeys) {
                        this.triggerLockedExitWarning();
                        return false;
                    }
                    return true;
                };

                const gridIdxX = Math.floor(nextX);
                const gridIdxY = Math.floor(this.player.y);
                if (gridIdxX >= 0 && gridIdxX < this.mazeGen.size && isPassable(gridIdxX, gridIdxY, this.player.z)) {
                    this.player.x = nextX;
                }
                const currentGridIdxX = Math.floor(this.player.x);
                const nextGridIdxY = Math.floor(nextY);
                if (nextGridIdxY >= 0 && nextGridIdxY < this.mazeGen.size && isPassable(currentGridIdxX, nextGridIdxY, this.player.z)) {
                    this.player.y = nextY;
                }
                
                const finalGridIdxX = Math.floor(this.player.x);
                const finalGridIdxY = Math.floor(this.player.y);
                const finalVal = this.maze.get(finalGridIdxX, finalGridIdxY, this.player.z);
                if (finalVal === this.mazeGen.TYPES.PATH || finalVal === this.mazeGen.TYPES.KEY) {
                    if (finalVal === this.mazeGen.TYPES.KEY) {
                        this.collectKey(finalGridIdxX, finalGridIdxY, this.player.z);
                    } else {
                        this.maze.set(finalGridIdxX, finalGridIdxY, this.player.z, this.mazeGen.TYPES.VISITED);
                    }
                    this.staticMapCacheDirty = true;
                }
                
                // Desbloqueia o pathfinder da saída se visitou o vizinho dela
                if (!this.exitPathfinderUnlocked && this.checkExitNeighborVisited()) {
                    this.exitPathfinderUnlocked = true;
                    this.ui.showInfoBanner("EXIT FOUND");
                }
                
                if (finalVal === this.mazeGen.TYPES.EXIT) {
                    this.triggerVictory();
                }
            }

            if (moveX !== 0 || moveY !== 0) {
                this.skipCellAnimations = false;
            }

            // Per-frame collision check: detects when the player walks into a hunter's cell.
            this.checkHunterCollision();
            if (this.isGameOver) return;

            const playerIdxX = Math.floor(this.player.x), playerIdxY = Math.floor(this.player.y);
            const playerIdxZ = this.player.z;
            const isOnTeleport = this.maze.get(playerIdxX, playerIdxY, playerIdxZ) === this.mazeGen.TYPES.TELEPORT;
            const isInactive = this.inactiveTeleportPos && 
                               this.inactiveTeleportPos.x === playerIdxX && 
                               this.inactiveTeleportPos.y === playerIdxY && 
                               this.inactiveTeleportPos.z === playerIdxZ;

            if (playerIdxX >= 0 && playerIdxX < this.mazeGen.size && playerIdxY >= 0 && playerIdxY < this.mazeGen.size) {
                if (this.maze.get(playerIdxX, playerIdxY, playerIdxZ) === this.mazeGen.TYPES.PATH) {
                    this.maze.set(playerIdxX, playerIdxY, playerIdxZ, this.mazeGen.TYPES.VISITED);
                    this.staticMapCacheDirty = true;
                } else if (isOnTeleport) {
                    const key = `${playerIdxX},${playerIdxY},${playerIdxZ}`;
                    const wasOnThisTeleport = this.lastPlayerCell &&
                                              this.lastPlayerCell.x === playerIdxX &&
                                              this.lastPlayerCell.y === playerIdxY &&
                                              this.lastPlayerCell.z === playerIdxZ;

                    if (!wasOnThisTeleport && !isInactive) {
                        this.discoveredTeleports.add(key);
                        this.staticMapCacheDirty = true;
                        // Reentered or newly found teleport -> auto-save
                        this.triggerSave();
                    }
                }

                const hUp = playerIdxZ < this.mazeGen.size - 1 && this.maze.get(playerIdxX, playerIdxY, playerIdxZ + 1) !== this.mazeGen.TYPES.WALL;
                const hDown = playerIdxZ > 0 && this.maze.get(playerIdxX, playerIdxY, playerIdxZ - 1) !== this.mazeGen.TYPES.WALL;
                const isCurrentElevator = hUp || hDown;

                if (this.lastPlayerCell) {
                    const lastX = this.lastPlayerCell.x;
                    const lastY = this.lastPlayerCell.y;
                    const lastZ = this.lastPlayerCell.z;
                    const lastHUp = lastZ < this.mazeGen.size - 1 && this.maze.get(lastX, lastY, lastZ + 1) !== this.mazeGen.TYPES.WALL;
                    const lastHDown = lastZ > 0 && this.maze.get(lastX, lastY, lastZ - 1) !== this.mazeGen.TYPES.WALL;
                    const isLastElevator = lastHUp || lastHDown;
                    const hasMoved = lastX !== playerIdxX || lastY !== playerIdxY || lastZ !== playerIdxZ;

                    if (isLastElevator && hasMoved) {
                        const lastPathKey = `${lastX},${lastY},${lastZ}`;
                        if (this.revealedPathSet.has(lastPathKey)) {
                            this.revealedPathSet.delete(lastPathKey);
                            this.staticMapCacheDirty = true;
                        }
                    }
                }

                const currentPathKey = `${playerIdxX},${playerIdxY},${playerIdxZ}`;
                if (!isCurrentElevator && this.revealedPathSet.has(currentPathKey)) {
                    this.revealedPathSet.delete(currentPathKey);
                    this.staticMapCacheDirty = true;
                }
            }

            if (isOnTeleport && !isInactive) {
                if (this.input.keys['e'] || this.input.keys['pageup'] || this.input.keys['q'] || this.input.keys['pagedown']) {
                    ['e', 'q', 'pageup', 'pagedown'].forEach(k => this.input.keys[k] = false);
                    if (this.discoveredTeleports.size >= 2) {
                        this.toggleTeleportMap(true);
                    } else {
                        this.ui.showInfoBanner("FIND ANOTHER TELEPORT TO ACTIVATE");
                    }
                }
            } else {
                if (this.input.keys['e'] || this.input.keys['pageup']) this.changeFloor(2);
                if (this.input.keys['q'] || this.input.keys['pagedown']) this.changeFloor(-2);
            }
            const movedCell = !this.lastPlayerCell || 
                              this.lastPlayerCell.x !== playerIdxX || 
                              this.lastPlayerCell.y !== playerIdxY || 
                              this.lastPlayerCell.z !== playerIdxZ;
            if (movedCell) {
                this.staticMapCacheDirty = true;
            }
            const isPortrait = window.innerHeight > window.innerWidth;
            this.ui.updateMobileMapButton(isOnTeleport, isInactive, isPortrait);
            this.updateFloorUI();
            this.lastPlayerCell = { x: playerIdxX, y: playerIdxY, z: playerIdxZ };
        }

        const now = performance.now();
        if (now - this.lastHunterMove > CONFIG.HUNTER_SPEED) {
            this.lastHunterMove = now;

            if (this.teleportCooldownTicks > 0) {
                this.teleportCooldownTicks--;
                this.staticMapCacheDirty = true;
                this.ui.updateCooldownTimer(this.teleportCooldownTicks);
                if (this.teleportCooldownTicks === 0) {
                    this.inactiveTeleportPos = null;
                    
                    for (const hunter of this.hunters) {
                        const cellVal = this.maze.get(hunter.x, hunter.y, hunter.z);
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
            const isSleeping = this.hunters.some(h => h.state === 'SLEEP');

            for (const hunter of this.hunters) {
                if (hunter.state === 'SLEEP') continue;
                hunter.move(this.player, this.maze, this.mazeGen.TYPES);
                if (hunter.state === 'TRACKING' || hunter.state === 'TELEPORT_TRACKING') trackingCount++;
                const sameFloor = hunter.z === this.player.z;
                let isNear = false;
                if (sameFloor) {
                    isNear = true;
                } else {
                    const threshold = Math.max(5, Math.floor(this.degree * 1.2));
                    const dist = aStarDistance(
                        { x: hunter.x, y: hunter.y, z: hunter.z },
                        { x: Math.floor(this.player.x), y: Math.floor(this.player.y), z: this.player.z },
                        this.maze, this.mazeGen.size, this.mazeGen.TYPES.WALL,
                        threshold,
                        this.mazeGen.startPos
                    );
                    if (dist <= threshold) {
                        isNear = true;
                    }
                }
                if (isNear) {
                    nearbyCount++;
                }
                this.checkHunterCollision();
                if (this.isGameOver) return;
            }

            const isTracking = trackingCount > 0;
            this.ui.updateHazardWarning(isTracking, this.teleportCooldownTicks, this.isSafeMode, isSleeping);
            if (isTracking) {
                this.canvas.classList.add('hunted-map-effect');
            } else {
                this.canvas.classList.remove('hunted-map-effect');
            }

            this.ui.setNearbyWarning(nearbyCount > 0);

            let minDistance = Infinity;
            const px = Math.floor(this.player.x);
            const py = Math.floor(this.player.y);
            const pz = this.player.z;
            
            const activeHunters = this.hunters.filter(h => h.state !== 'SLEEP');
            for (const hunter of activeHunters) {
                const dist = proximeterDistance(
                    { x: hunter.x, y: hunter.y, z: hunter.z },
                    { x: px, y: py, z: pz },
                    this.maze, this.mazeGen.size, this.mazeGen.TYPES.WALL
                );
                if (dist < minDistance) {
                    minDistance = dist;
                }
            }

            this.ui.updateProximeter(minDistance, activeHunters.length, this.isGameOver);
        }
    }

    changeFloor(delta) {
        if (this.isGameOver || this.floorTransition) return;
        this.skipCellAnimations = true;
        const currentX = Math.floor(this.player.x);
        const currentY = Math.floor(this.player.y);
        const currentZ = this.player.z;
        const hUp = currentZ + 1 < this.mazeGen.size && this.maze.get(currentX, currentY, currentZ + 1) !== this.mazeGen.TYPES.WALL;
        const hDown = currentZ - 1 >= 0 && this.maze.get(currentX, currentY, currentZ - 1) !== this.mazeGen.TYPES.WALL;
        
        if ((delta > 0 && hUp) || (delta < 0 && hDown)) {
            const nextZ = currentZ + delta;
            if (nextZ >= 0 && nextZ < this.mazeGen.size && this.maze.get(currentX, currentY, nextZ) !== this.mazeGen.TYPES.WALL) {
                const shaftZ = currentZ + delta / 2;
                if (this.maze.get(currentX, currentY, shaftZ) !== this.mazeGen.TYPES.ELEVATOR_VISITED) {
                    this.maze.set(currentX, currentY, shaftZ, this.mazeGen.TYPES.ELEVATOR_VISITED);
                    this.staticMapCacheDirty = true;
                }
                
                const shaftKey = `${currentX},${currentY},${shaftZ}`;
                this.revealedPathSet.delete(shaftKey);
                // destKey (célula de destino do elevador) não é deletada aqui; 
                // ela permanece no revealedPathSet para manter a direção ativa acesa
                // e será deletada pelo movePlayer assim que o jogador de fato sair dela.
                
                const canvasOld = document.createElement('canvas');
                canvasOld.width = this.canvas.width;
                canvasOld.height = this.canvas.height;
                const ctxOld = canvasOld.getContext('2d');
                this.renderMapToContext(ctxOld, this.player.z);

                this.player.z = nextZ;
                this.staticMapCacheDirty = true;
                this.populateFullyRevealedCells(nextZ);

                if (this.maze.get(currentX, currentY, nextZ) === this.mazeGen.TYPES.PATH) {
                    this.maze.set(currentX, currentY, nextZ, this.mazeGen.TYPES.VISITED);
                }

                const canvasNew = document.createElement('canvas');
                canvasNew.width = this.canvas.width;
                canvasNew.height = this.canvas.height;
                const ctxNew = canvasNew.getContext('2d');
                this.renderMapToContext(ctxNew, this.player.z);

                this.floorTransition = {
                    canvasOld,
                    canvasNew,
                    progress: 0,
                    duration: 0.4,
                    delta: delta
                };

                this.updateFloorUI();
                this.draw2DMap(0);
                if (this.maze.get(currentX, currentY, nextZ) === this.mazeGen.TYPES.EXIT) this.triggerVictory();
            }
        }
    }

    toggleMap3D() {
        this.isMap3DActive = !this.isMap3DActive;
        this.isTeleportMode = false;
        this.ui.setTeleportWarning(false);
        if (this.isMap3DActive) {
            this.ui.setMap3DVisible(true);
            this.build3DMap();
            this.updateRendererSize();
        } else {
            this.ui.setMap3DVisible(false);
        }
    }

    build3DMap(isIntro = false) {
        while(this.scene.children.length > 0){ this.scene.remove(this.scene.children[0]); }
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(10, 20, 10);
        this.scene.add(dirLight);

        this.pulsatingMaterials = []; // Reset the array
        this.hunterMeshes = []; // Reset the array
        this.teleportMeshes = []; // Reset the array
        this.knownMeshes = []; // Reset the array
        this.keyMeshes = [];
        this.exitMesh = null;
        const size = this.mazeGen.size;
        const isFloorVisited = (fx, fy, fz) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.maze.get(fx, fy, fz);
            return fVal === 2 || fVal === 3 || fVal === 4 || (fVal === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${fx},${fy},${fz}`));
        };

        this.gridMeshes = new Array(size * size * size).fill(null);

        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        
        // Define opacity factor: make all other map elements more translucent during teleportation mode
        const opFactor = this.isTeleportMode ? CONFIG.TELEPORT_MAP_OPACITY : 1.0;

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
                    const val = this.maze.get(x, y, z);

                    // Render elevator shaft cells (even z index and not a wall)
                    const isShaft = z % 2 === 0 && val !== 0;
                    if (isShaft) {
                        const key = `${x},${y},${z}`;
                        const isRevealedPath = this.revealedPathSet.has(key);
                        const isShaftVisited = val === this.mazeGen.TYPES.ELEVATOR_VISITED;
                        const isShaftKnown = (val === 1) && (isFloorVisited(x, y, z - 1) || isFloorVisited(x, y, z + 1));

                        if (isShaftVisited || isShaftKnown || isRevealedPath || isIntro) {
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
                            } else if (isShaftKnown || isIntro) {
                                const color = isIntro ? CONFIG.COLORS.THREE_VISITED : CONFIG.COLORS.THREE_KNOWN;
                                material = new THREE.MeshPhongMaterial({
                                    color: color,
                                    transparent: true,
                                    opacity: isIntro ? 0.72 : (0.6 * opFactor),
                                    emissive: color,
                                    emissiveIntensity: isIntro ? 0 : (0.5 * opFactor)
                                });
                                if (!isIntro) this.pulsatingMaterials.push(material);
                            }

                            const mesh = new THREE.Mesh(shaftGeom, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                            this.scene.add(mesh);
                            this.gridMeshes[(x * size * size) + (y * size) + z] = mesh;

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
                        const isStartTeleport = x === Math.floor(this.mazeGen.startPos.x) &&
                                                y === Math.floor(this.mazeGen.startPos.y) &&
                                                z === this.mazeGen.startPos.z;

                        if (isStartTeleport) {
                            const emissiveInt = this.isTeleportMode ? 2.5 : 0.5;
                            const material = new THREE.MeshPhongMaterial({
                                color: CONFIG.COLORS.THREE_START,
                                emissive: CONFIG.COLORS.THREE_START,
                                emissiveIntensity: emissiveInt * opFactor,
                                transparent: true,
                                opacity: this.isTeleportMode ? 0.95 : (0.8 * opFactor)
                            });
                            const mesh = new THREE.Mesh(geometry, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                            
                            if (this.isTeleportMode) {
                                mesh.scale.set(1.4, 1.4, 1.4);
                            }
                            
                            mesh.userData = { isTeleport: true, gridX: x, gridY: y, gridZ: z };
                            this.scene.add(mesh);
                            this.teleportMeshes.push(mesh);
                            continue;
                        }

                        const isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
                        const isInactive = this.inactiveTeleportPos && 
                                           this.inactiveTeleportPos.x === x && 
                                           this.inactiveTeleportPos.y === y && 
                                           this.inactiveTeleportPos.z === z;
                        
                        // In teleport mode, spheres are larger (radius 0.9 instead of 0.45)
                        // and have stronger emissive glow (intensity 2.5 instead of 0.8)
                        let radius = this.isTeleportMode ? 0.9 : 0.45;
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

                    const isKey = val === this.mazeGen.TYPES.KEY;
                    if (isKey) {
                        const keyGeom = new THREE.OctahedronGeometry(0.3, 0);
                        const keyMat = new THREE.MeshPhongMaterial({
                            color: CONFIG.COLORS.THREE_KEY,
                            emissive: CONFIG.COLORS.THREE_KEY,
                            emissiveIntensity: 0.6 * opFactor,
                            shininess: 100
                        });
                        const mesh = new THREE.Mesh(keyGeom, keyMat);
                        mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                        mesh.userData = { isKey: true, gridX: x, gridY: y, gridZ: z };
                        this.scene.add(mesh);
                        this.keyMeshes.push(mesh);
                        this.pulsatingMaterials.push(keyMat);
                        continue;
                    }

                    const key = `${x},${y},${z}`;
                    const isRevealedPath = this.revealedPathSet.has(key);

                    // During intro: render every passable cell so BFS can reveal it
                    const shouldRender = isIntro
                        ? val !== this.mazeGen.TYPES.WALL
                        : (isVisited || isKnown || isRevealedPath);

                    if (shouldRender) {
                        let color = isIntro ? CONFIG.COLORS.THREE_VISITED : CONFIG.COLORS.THREE_KNOWN;
                        let material;

                        if (isRevealedPath) {
                            color = 0xffffff;
                            material = new THREE.MeshPhongMaterial({
                                color: color,
                                transparent: true,
                                opacity: 0.95 * opFactor,
                                emissive: color,
                                emissiveIntensity: 2.0 * opFactor
                            });
                        } else if (isVisited || isIntro) {
                            color = CONFIG.COLORS.THREE_VISITED;
                            if (val === 3) {
                                color = CONFIG.COLORS.THREE_START;
                            } else if (val === 4) {
                                const isUnlocked = this.keysCollected === this.totalKeys;
                                color = isUnlocked ? CONFIG.COLORS.THREE_EXIT : 0xff3300;
                            }
                            material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: isIntro ? 0.72 : (0.8 * opFactor) });
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

                        const hUp = z < size - 1 && this.maze.get(x, y, z + 1) !== 0;
                        const hDown = z > 0 && this.maze.get(x, y, z - 1) !== 0;
                        if (hUp || hDown) {
                            // Remove do pulse caso tenha sido adicionado como isKnown
                            const index = this.pulsatingMaterials.indexOf(material);
                            if (index > -1) this.pulsatingMaterials.splice(index, 1);

                            if (hUp && hDown) {
                                let routeUsesUp = false;
                                let routeUsesDown = false;
                                if (isRevealedPath) {
                                    if (this.activePathReveal) {
                                        const idx = this.activePathReveal.findIndex(node => node.x === x && node.y === y && node.z === z);
                                        if (idx !== -1 && idx < this.activePathReveal.length - 1) {
                                            const nextNode = this.activePathReveal[idx + 1];
                                            if (nextNode.z > z) routeUsesUp = true;
                                            if (nextNode.z < z) routeUsesDown = true;
                                        }
                                    }
                                    if (!routeUsesUp && !routeUsesDown) {
                                        routeUsesUp = this.revealedPathSet.has(`${x},${y},${z + 1}`) || this.revealedPathSet.has(`${x},${y},${z + 2}`);
                                        routeUsesDown = this.revealedPathSet.has(`${x},${y},${z - 1}`) || this.revealedPathSet.has(`${x},${y},${z - 2}`);
                                    }
                                }

                                const paintUpWhite = isRevealedPath && (routeUsesUp || (!routeUsesUp && !routeUsesDown));
                                const paintDownWhite = isRevealedPath && (routeUsesDown || (!routeUsesUp && !routeUsesDown));

                                const matBottom = new THREE.MeshPhongMaterial({
                                    color: paintDownWhite ? 0xffffff : CONFIG.COLORS.THREE_ELEVATOR_DOWN,
                                    transparent: true,
                                    opacity: 0.9 * opFactor,
                                    emissive: paintDownWhite ? 0xffffff : CONFIG.COLORS.THREE_ELEVATOR_DOWN,
                                    emissiveIntensity: (paintDownWhite ? 2.0 : 0.4) * opFactor
                                });
                                const matTop = new THREE.MeshPhongMaterial({
                                    color: paintUpWhite ? 0xffffff : CONFIG.COLORS.THREE_ELEVATOR_UP,
                                    transparent: true,
                                    opacity: 0.9 * opFactor,
                                    emissive: paintUpWhite ? 0xffffff : CONFIG.COLORS.THREE_ELEVATOR_UP,
                                    emissiveIntensity: (paintUpWhite ? 2.0 : 0.4) * opFactor
                                });

                                const meshBottom = new THREE.Mesh(shaftGeomBottom, matBottom);
                                const meshTop    = new THREE.Mesh(shaftGeomTop,    matTop);
                                meshBottom.position.set(x - size/2, (z - size/2) * this.vScale - 0.2125, y - size/2);
                                meshTop.position.set(   x - size/2, (z - size/2) * this.vScale + 0.2125, y - size/2);
                                this.scene.add(meshBottom);
                                this.scene.add(meshTop);
                                this.gridMeshes[(x * size * size) + (y * size) + z] = meshTop; // Reference to one of them is enough
                                if (isKnown && !isRevealedPath) {
                                    meshBottom.userData = { gridX: x, gridY: y, gridZ: z };
                                    meshTop.userData = { gridX: x, gridY: y, gridZ: z };
                                    this.knownMeshes.push(meshBottom);
                                    this.knownMeshes.push(meshTop);
                                }
                                continue;
                            } else {
                                const elevatorColor = isRevealedPath ? 0xffffff : (hUp ? CONFIG.COLORS.THREE_ELEVATOR_UP : CONFIG.COLORS.THREE_ELEVATOR_DOWN);
                                const intensity = isRevealedPath ? 2.0 : 0.4;
                                material = new THREE.MeshPhongMaterial({
                                    color: elevatorColor,
                                    transparent: true,
                                    opacity: 0.9 * opFactor,
                                    emissive: elevatorColor,
                                    emissiveIntensity: intensity * opFactor
                                });
                            }
                        }

                        const isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
                        const isHunterHere = this.hunters.some(h => h.x === x && h.y === y && h.z === z);
                        if (isPlayerHere || isHunterHere) {
                            const floorGeom = new THREE.BoxGeometry(0.9, 0.05, 0.9);
                            const mesh = new THREE.Mesh(floorGeom, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.vScale - 0.425, y - size/2);
                            this.scene.add(mesh);
                            this.gridMeshes[(x * size * size) + (y * size) + z] = mesh;
                            continue;
                        }

                        const mesh = new THREE.Mesh(geometry, material);
                        mesh.position.set(x - size/2, (z - size/2) * this.vScale, y - size/2);
                        
                        if (val === 4) {
                            this.exitMesh = mesh;
                            if (this.keysCollected < this.totalKeys) {
                                const cageGeom = new THREE.BoxGeometry(0.95, 0.95, 0.95);
                                const cageMat = new THREE.MeshBasicMaterial({
                                    color: 0xff0000,
                                    wireframe: true
                                });
                                const cageMesh = new THREE.Mesh(cageGeom, cageMat);
                                mesh.add(cageMesh);
                            }
                        }
                        
                        this.scene.add(mesh);
                        this.gridMeshes[(x * size * size) + (y * size) + z] = mesh;
                        if ((isKnown || val === this.mazeGen.TYPES.EXIT) && !isRevealedPath) {
                            mesh.userData = { gridX: x, gridY: y, gridZ: z };
                            this.knownMeshes.push(mesh);
                        }
                    }
                }
            }
        }
        // Skip player/hunter markers during intro (scene is clean)
        if (isIntro) return;

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
            if (h.state === 'SLEEP') continue;
            
            // Create trail meshes
            const tMesh2 = new THREE.Mesh(trailGeom, trailMat2); // Oldest
            const tMesh1 = new THREE.Mesh(trailGeom, trailMat1); // Newest
            
            tMesh2.visible = false;
            tMesh1.visible = false;
            
            this.scene.add(tMesh2);
            this.scene.add(tMesh1);

            const hGroup = new THREE.Group();
            
            // Core sphere (jelly nucleus)
            const coreMesh = new THREE.Mesh(hGeom, hMat);
            hGroup.add(coreMesh);
            
            // Orbital glitch/corruption particles (small cubes) that float and leak outside
            const numParticles = 4;
            const particles = [];
            const partGeom = new THREE.BoxGeometry(0.18, 0.18, 0.18);
            const partColors = [CONFIG.COLORS.THREE_HUNTER, 0xff00ff, 0x00ffff, 0xffff00];
            
            for (let p = 0; p < numParticles; p++) {
                const pMat = new THREE.MeshPhongMaterial({
                    color: partColors[p % partColors.length],
                    transparent: true,
                    opacity: 0.8,
                    emissive: partColors[p % partColors.length],
                    emissiveIntensity: 0.8
                });
                const pMesh = new THREE.Mesh(partGeom, pMat);
                
                // Orbit parameters
                pMesh.userData = {
                    angle: (p / numParticles) * Math.PI * 2,
                    radius: 0.35 + Math.random() * 0.1, // Contido na célula
                    speed: 1.0 + Math.random() * 1.5,
                    phaseY: Math.random() * Math.PI * 2
                };
                
                hGroup.add(pMesh);
                particles.push(pMesh);
            }
            
            hGroup.position.set(h.x - size/2, (h.z - size/2) * this.vScale, h.y - size/2);
            this.scene.add(hGroup);
            
            this.hunterMeshes.push({ 
                hunter: h, 
                mesh: hGroup,
                coreMesh: coreMesh,
                particles: particles,
                trail1: tMesh1,
                trail2: tMesh2
            });

        }
        this.camera.position.set(size, size * this.vScale, size);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    }    
    
    draw2DMap(dt = 0.016) {
        if (this.floorTransition) {
            this.floorTransition.progress += dt / this.floorTransition.duration;
            if (this.floorTransition.progress >= 1.0) {
                this.floorTransition = null;
            }
        }

        // Interpolação suave do número de células visíveis na tela
        const size = this.mazeGen.size;
        const targetVisible = this.isZoomActive ? 11 : size;
        if (this.zoomVisibleCells === undefined) {
            this.zoomVisibleCells = targetVisible;
        } else {
            this.zoomVisibleCells += (targetVisible - this.zoomVisibleCells) * (1 - Math.exp(-12 * dt));
            if (Math.abs(this.zoomVisibleCells - targetVisible) < 0.01) {
                this.zoomVisibleCells = targetVisible;
            }
        }

        if (this.floorTransition) {
            const t = this.floorTransition.progress;
            const cx = this.canvas.width / 2;
            const cy = this.canvas.height / 2;
            const isUp = this.floorTransition.delta > 0;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            let scaleOld, scaleNew;
            if (isUp) {
                scaleOld = 1.0 - 0.2 * t;
                scaleNew = 1.2 - 0.2 * t;
            } else {
                scaleOld = 1.0 + 0.2 * t;
                scaleNew = 0.8 + 0.2 * t;
            }

            // Draw old floor
            this.ctx.save();
            this.ctx.globalAlpha = 1 - t;
            this.ctx.translate(cx, cy);
            this.ctx.scale(scaleOld, scaleOld);
            this.ctx.drawImage(this.floorTransition.canvasOld, -cx, -cy);
            this.ctx.restore();

            // Draw new floor
            this.ctx.save();
            this.ctx.globalAlpha = t;
            this.ctx.translate(cx, cy);
            this.ctx.scale(scaleNew, scaleNew);
            this.ctx.drawImage(this.floorTransition.canvasNew, -cx, -cy);
            this.ctx.restore();
        } else {
            this.renderMapToContext(this.ctx, this.player.z);
        }
    }

    renderMapToContext(ctx, z) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const size = this.mazeGen.size;
        const useZoom = size > 11;
        const cellSize = useZoom ? ctx.canvas.width / 11 : ctx.canvas.width / size;
        const px = this.player.x;
        const py = this.player.y;

        if (useZoom) {
            ctx.save();
            const scaleTransition = 11 / this.zoomVisibleCells;
            const half = this.zoomVisibleCells / 2;

            let camX = px;
            let camY = py;
            if (camX < half) camX = half;
            if (camX > size - half) camX = size - half;
            if (camY < half) camY = half;
            if (camY > size - half) camY = size - half;

            const centerX = ctx.canvas.width / 2;
            const centerY = ctx.canvas.height / 2;
            
            ctx.translate(centerX, centerY);
            ctx.scale(scaleTransition, scaleTransition);
            ctx.translate(-camX * cellSize, -camY * cellSize);
        }

        // 1. Update and draw static map cache
        const expectedCacheWidth = useZoom ? size * cellSize : this.canvas.width;
        const expectedCacheHeight = useZoom ? size * cellSize : this.canvas.height;
        if (this.staticMapCacheDirty || 
            this.staticMapCacheCanvas.width !== expectedCacheWidth || 
            this.staticMapCacheCanvas.height !== expectedCacheHeight) {
            this.updateStaticMapCache(z);
        }
        ctx.drawImage(this.staticMapCacheCanvas, 0, 0);

        // 2. Dynamic portal pulsation (drawn only when player stands on active portal)
        const pCellX = Math.floor(px);
        const pCellY = Math.floor(py);
        const val = this.maze.get(pCellX, pCellY, z);
        const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
        const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${pCellX},${pCellY},${z}`);
        if (isTeleportDiscovered) {
            const isInactive = this.inactiveTeleportPos && 
                               this.inactiveTeleportPos.x === pCellX && 
                               this.inactiveTeleportPos.y === pCellY && 
                               this.inactiveTeleportPos.z === z;
            if (!isInactive) {
                const portalPulse = 0.85 + 0.15 * Math.sin(Date.now() / 150);
                ctx.save();
                ctx.globalAlpha = portalPulse;
                ctx.fillStyle = CONFIG.COLORS.TELEPORT;
                ctx.fillRect(pCellX * cellSize, pCellY * cellSize, cellSize, cellSize);
                ctx.restore();
            }
        }

        // 3. Draw Hunters (dynamic, constantly moving)
        const pulse = Math.sin(Date.now() / 200) * 5 + 10;
        for (const h of this.hunters) {
            if (h.state === 'SLEEP') continue;
            if (h.history) {
                h.history.forEach((pos, idx) => {
                    if (pos.z === z) {
                        const opacity = idx === 0 && h.history.length === 2 ? 0.25 : 0.55;
                        ctx.save();
                        ctx.globalAlpha = opacity;
                        ctx.fillStyle = CONFIG.COLORS.HUNTER;
                        ctx.beginPath();
                        ctx.arc(pos.x * cellSize + cellSize/2, pos.y * cellSize + cellSize/2, cellSize * 0.3, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                });
            }
            const distZ = Math.abs(h.visualZ - z);
            const scaleFactor = Math.max(0, 1 - distZ);
            if (scaleFactor > 0 && h.lowCanvas) {
                ctx.save();
                
                const cx = h.visualX * cellSize + cellSize / 2;
                const cy = h.visualY * cellSize + cellSize / 2;
                const drawSize = cellSize * 0.95 * scaleFactor; // Contido dentro do limite da célula

                // MOVIMENTAÇÃO GELATINOSA LENTA (Baseada no tempo acumulado do Hunter)
                const time = h.jellyTime;
                const skewX = Math.sin(time) * 6; 
                const skewY = Math.cos(time * 0.7) * 4;
                const scaleX = 1 + Math.sin(time * 1.2) * 0.06;
                const scaleY = 1 + Math.cos(time * 0.8) * 0.06;

                // Aplica deformação gelatinosa (transformação de skew e scale) ao redor do centro do Hunter no canvas
                ctx.translate(cx, cy);
                const radX = skewX * Math.PI / 180;
                const radY = skewY * Math.PI / 180;
                ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);

                // Desenha o canvas offscreen do monstro pixelado sem suavização
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(h.lowCanvas, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
                
                ctx.restore();
            }
        }

        // 4. Draw Player (dynamic direction line and pulsating node overlay)
        ctx.save();
        ctx.strokeStyle = CONFIG.COLORS.PLAYER_OUTLINE;
        ctx.lineWidth = 1;
        ctx.strokeRect(pCellX * cellSize + 2, pCellY * cellSize + 2, cellSize - 4, cellSize - 4);
        ctx.restore();
        
        ctx.fillStyle = CONFIG.COLORS.PLAYER;
        ctx.beginPath();
        ctx.arc(px * cellSize, py * cellSize, cellSize * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = CONFIG.COLORS.PLAYER;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px * cellSize, py * cellSize);
        ctx.lineTo(px * cellSize + Math.cos(this.player.dir) * cellSize * 1, py * cellSize + Math.sin(this.player.dir) * cellSize * 1);
        ctx.stroke();

        if (useZoom) {
            ctx.restore();
        }
    }

    /**
     * Re-renders the static elements of the 2D map into a dedicated backbuffer canvas.
     * Elements include walls, visited floors, known paths, elevator layouts, and portal spots.
     */
    updateStaticMapCache(z) {
        const size = this.mazeGen.size;
        const useZoom = size > 11; // O cache estático é gerado no tamanho ampliado para suportar transição suave
        const cellSize = useZoom ? this.canvas.width / 11 : this.canvas.width / size;
        
        const cacheWidth = useZoom ? size * cellSize : this.canvas.width;
        const cacheHeight = useZoom ? size * cellSize : this.canvas.height;
        
        if (this.staticMapCacheCanvas.width !== cacheWidth || 
            this.staticMapCacheCanvas.height !== cacheHeight) {
            this.staticMapCacheCanvas.width = cacheWidth;
            this.staticMapCacheCanvas.height = cacheHeight;
        }
        
        const ctx = this.staticMapCacheCtx;
        ctx.clearRect(0, 0, cacheWidth, cacheHeight);
        
        const px = this.player.x;
        const py = this.player.y;
        
        const startGridX = Math.floor(this.mazeGen.startPos.x);
        const startGridY = Math.floor(this.mazeGen.startPos.y);
        const startGridZ = this.mazeGen.startPos.z;
        
        const now = Date.now();
        let hasActiveAnimations = false;

        const drawCellWithFade = (x, y, drawFn) => {
            const key = `${x},${y},${z}`;
            if (this.skipCellAnimations || this.fullyRevealedCells.has(key)) {
                drawFn();
                if (this.skipCellAnimations) {
                    this.fullyRevealedCells.add(key);
                }
            } else {
                let startTime = this.revealedCellsAnimation.get(key);
                if (startTime === undefined) {
                    this.revealedCellsAnimation.set(key, now);
                    startTime = now;
                }
                const elapsed = now - startTime;
                const duration = 400; // 400ms fade-in
                const opacity = Math.min(1.0, elapsed / duration);
                
                if (opacity < 1.0) {
                    ctx.save();
                    ctx.globalAlpha = opacity;
                    drawFn();
                    ctx.restore();
                    hasActiveAnimations = true;
                } else {
                    drawFn();
                    this.revealedCellsAnimation.delete(key);
                    this.fullyRevealedCells.add(key);
                }
            }
        };

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const val = this.maze.get(x, y, z);
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                const isKey = val === this.mazeGen.TYPES.KEY;
                const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);
                const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);

                const hUp = z < size - 1 && this.maze.get(x, y, z + 1) !== 0;
                const hDown = z > 0 && this.maze.get(x, y, z - 1) !== 0;
                const isElevator = hUp || hDown;

                if (isRevealedPath) {
                    drawCellWithFade(x, y, () => {
                        if (isElevator) {
                            this.drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, true, z);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.REVEALED_PATH;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                    });
                } else if (isVisited) {
                    drawCellWithFade(x, y, () => {
                        if (isTeleportDiscovered) {
                            const isStartTeleport = x === startGridX && y === startGridY && z === startGridZ;
                            if (isStartTeleport) {
                                ctx.fillStyle = CONFIG.COLORS.START;
                            } else {
                                const isInactive = this.inactiveTeleportPos && 
                                                   this.inactiveTeleportPos.x === x && 
                                                   this.inactiveTeleportPos.y === y && 
                                                   this.inactiveTeleportPos.z === z;
                                ctx.fillStyle = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : CONFIG.COLORS.TELEPORT;
                            }
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        } else if (isElevator) {
                            this.drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, false, z);
                        } else {
                            if (val === 2 && this.floorImage.complete && this.floorImage.naturalWidth !== 0) {
                                ctx.drawImage(this.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                            } else {
                                if (val === this.mazeGen.TYPES.EXIT) {
                                    ctx.fillStyle = CONFIG.COLORS.EXIT;
                                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                                    
                                    if (this.keysCollected < this.totalKeys) {
                                        ctx.strokeStyle = '#ff3300';
                                        ctx.lineWidth = Math.max(2, cellSize * 0.08);
                                        const cx = x * cellSize + cellSize / 2;
                                        const cy = y * cellSize + cellSize / 2;
                                        const r = cellSize * 0.2;
                                        
                                        ctx.beginPath();
                                        ctx.arc(cx, cy - r * 0.2, r * 0.6, Math.PI, 0);
                                        ctx.stroke();
                                        
                                        ctx.fillStyle = '#111';
                                        ctx.fillRect(cx - r, cy - r * 0.1, r * 2, r * 1.5);
                                        ctx.strokeRect(cx - r, cy - r * 0.1, r * 2, r * 1.5);
                                        
                                        ctx.fillStyle = '#ff3300';
                                        ctx.font = `bold ${Math.max(10, cellSize * 0.35)}px sans-serif`;
                                        ctx.textAlign = 'center';
                                        ctx.textBaseline = 'middle';
                                        ctx.fillText(this.totalKeys - this.keysCollected, cx, cy + r * 0.6);
                                    }
                                } else {
                                    ctx.fillStyle = val === 2 ? CONFIG.COLORS.PATH_VISITED : CONFIG.COLORS.START;
                                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                                }
                            }
                        }

                        // Desenha sombra projetada das paredes adjacentes (Luz de baixo e da direita)
                        this.drawCellShadow2D(ctx, x, y, cellSize, size, val, z);
                    });
                } else if (isKey) {
                    drawCellWithFade(x, y, () => {
                        const bobbingOffset = cellSize * 0.05 * Math.sin(Date.now() / 300);
                        if (this.keyImage.complete && this.keyImage.naturalWidth !== 0) {
                            ctx.drawImage(this.keyImage, x * cellSize + cellSize * 0.15, y * cellSize + cellSize * 0.15 + bobbingOffset, cellSize * 0.7, cellSize * 0.7);
                        } else {
                            ctx.beginPath();
                            ctx.arc(x * cellSize + cellSize/2, y * cellSize + cellSize/2 + bobbingOffset, cellSize * 0.25, 0, 2*Math.PI);
                            ctx.fillStyle = '#ffd700';
                            ctx.fill();
                        }
                        this.drawCellShadow2D(ctx, x, y, cellSize, size, val, z);
                    });
                    hasActiveAnimations = true;
                } else if (isKnown) { 
                    drawCellWithFade(x, y, () => {
                        if (this.floorImage.complete && this.floorImage.naturalWidth !== 0) {
                            ctx.save();
                            ctx.globalAlpha = 0.35; // Transparência elevada para a textura do chão
                            ctx.drawImage(this.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                            ctx.restore();
                            
                            // Brilho extra pulsante com a cor do caminho conhecido (azul translúcido)
                            // A opacidade oscila suavemente entre 0.10 e 0.34
                            const pulseOpacity = 0.22 + 0.12 * Math.sin(Date.now() / 250);
                            ctx.fillStyle = `rgba(136, 204, 255, ${pulseOpacity})`;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.PATH_KNOWN; 
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); 
                        }
                    });
                    // Força a atualização do cache estático do mapa a cada frame para animar o pulso
                    hasActiveAnimations = true;
                }
                else if (val === 0 && this.isNearVisited(x, y, z)) {
                    drawCellWithFade(x, y, () => {
                        if (this.wallImage.complete && this.wallImage.naturalWidth !== 0) {
                            ctx.drawImage(this.wallImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.WALL;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                    });
                }
            }
        }
        
        if (hasActiveAnimations) {
            this.staticMapCacheDirty = true;
        } else {
            this.staticMapCacheDirty = false;
        }
    }

    isNearVisited(x, y, z) {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < this.mazeGen.size && ny >= 0 && ny < this.mazeGen.size) {
                    const v = this.maze.get(nx, ny, z);
                    // ELEVATOR_VISITED (5) and EXIT (4) cells do not automatically reveal adjacent
                    // paths by proximity.
                    if (v === 2 || v === 3) return true;
                    if (v === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${nx},${ny},${z}`)) return true;
                }
            }
        }
        return false;
    }

    populateFullyRevealedCells(z) {
        const size = this.mazeGen.size;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const val = this.maze.get(x, y, z);
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);
                const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);
                if (isVisited || isKnown || isRevealedPath || (val === 0 && this.isNearVisited(x, y, z))) {
                    this.fullyRevealedCells.add(`${x},${y},${z}`);
                }
            }
        }
    }

    // getPathDistance3D and getProximeterDistance have been moved to pathfinder.js
    // as aStarDistance() and proximeterDistance() respectively.


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

        if (!this.isIntroPlaying) {
            this.update(clampedDt);
        } else {
            this.controls.update(); // drive auto-rotate during intro
        }

        if (this.isMap3DActive || this.isIntroPlaying) {
            this.renderer.render(this.scene, this.camera);
            if (!this.isIntroPlaying) this.updatePulse();
        } else {
            this.draw2DMap(clampedDt);
        }
        requestAnimationFrame(() => this.loop());
    }

    /**
     * Continue transition animation: renders the map instantly in its current state
     * (showing already visited and known paths with their official colors), auto-rotates
     * the camera, and then zooms in onto the player's current location before transitioning to 2D.
     */
    playContinueAnimation() {
        this.isIntroPlaying = true;
        const size = this.mazeGen.size;

        this.ui.setMap3DVisible(true);
        this.isMap3DActive = true;
        this.updateRendererSize();

        // 1. Build the static 3D map from current state (official colors, no lazy BFS)
        this.build3DMap(false);

        // 2. Center camera around the maze bounds
        this.camera.position.set(size * 0.9, size * this.vScale * 0.6, size * 0.9);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        this.hideCanvasInstant();

        // 3. Set up camera rotation
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 2.0;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.enableRotate = false;

        const finishContinue = () => {
            if (this.activeContinueTimer) { clearTimeout(this.activeContinueTimer); this.activeContinueTimer = null; }
            if (this.activeSkipHandler) {
                window.removeEventListener('keydown', this.activeSkipHandler);
                window.removeEventListener('touchstart', this.activeSkipHandler);
                this.activeSkipHandler = null;
            }

            this.controls.autoRotate = false;
            this.animateCameraToPlayer(() => {
                this._transitionToGame();
            });
        };

        this.activeSkipHandler = () => finishContinue();
        window.addEventListener('keydown', this.activeSkipHandler, { once: true });
        window.addEventListener('touchstart', this.activeSkipHandler, { once: true });

        // Spin for 2.5 seconds before starting zoom and transition
        this.activeContinueTimer = setTimeout(finishContinue, 2500);
    }

    /**
     * Smoothly interpolates (ease-in-out-cubic) the camera position and controls target
     * towards the player's 3D grid location.
     */
    animateCameraToPlayer(onComplete) {
        const size = this.mazeGen.size;
        const playerX = this.player.x - size / 2;
        const playerY = (this.player.z - size / 2) * this.vScale;
        const playerZ = this.player.y - size / 2;

        const startTarget = this.controls.target.clone();
        const endTarget = new THREE.Vector3(playerX, playerY, playerZ);

        const startCam = this.camera.position.clone();
        const endCam = new THREE.Vector3(playerX + 4, playerY + 5, playerZ + 4);

        const duration = 1100; // ~1 second zoom in
        const startTime = performance.now();

        const animate = (now) => {
            if (this.isDestroyed) return;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1.0);

            // easeInOutCubic
            const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            this.controls.target.lerpVectors(startTarget, endTarget, ease);
            this.camera.position.lerpVectors(startCam, endCam, ease);
            this.controls.update();

            if (progress < 1.0) {
                requestAnimationFrame(animate);
            } else {
                onComplete();
            }
        };

        requestAnimationFrame(animate);
    }

    /**
     * Intro animation: dual-source BFS reveal from start + exit nodes,
     * camera auto-rotate, glitch effect, then transition to 2D gameplay.
     * Meshes are created lazily (one per step) to avoid synchronous freeze.
     */
    playIntroAnimation() {
        this.isIntroPlaying = true;

        const size = this.mazeGen.size;

        // --- 1. Set up minimal scene: lights + renderer only (no mesh bulk) ---
        while (this.scene.children.length > 0) this.scene.remove(this.scene.children[0]);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(10, 20, 10);
        this.scene.add(dirLight);

        this.ui.setMap3DVisible(true);
        this.isMap3DActive = true;
        this.updateRendererSize();
        this.camera.position.set(size * 0.9, size * this.vScale * 0.6, size * 0.9);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        this.hideCanvasInstant();

        // --- 2. Place permanent start + exit markers ---
        const startPos = this.mazeGen.startPos;
        const exitPos  = this.getExitPos();
        const markerGeom = new THREE.BoxGeometry(0.92, 0.92, 0.92);

        const startMat = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_START, emissive: CONFIG.COLORS.THREE_START,
            emissiveIntensity: 0.6, transparent: true, opacity: 0.95
        });
        const startMesh = new THREE.Mesh(markerGeom, startMat);
        startMesh.position.set(
            Math.floor(startPos.x) - size / 2,
            (startPos.z - size / 2) * this.vScale,
            Math.floor(startPos.y) - size / 2
        );
        this.scene.add(startMesh);

        const exitMat = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_EXIT, emissive: CONFIG.COLORS.THREE_EXIT,
            emissiveIntensity: 0.6, transparent: true, opacity: 0.95
        });
        const exitMesh = new THREE.Mesh(markerGeom, exitMat);
        exitMesh.position.set(
            exitPos.x - size / 2,
            (exitPos.z - size / 2) * this.vScale,
            exitPos.y - size / 2
        );
        this.scene.add(exitMesh);

        // --- 3. BFS from start AND exit to build reveal order ---
        const dirs3D = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
        const startKey = `${Math.floor(startPos.x)},${Math.floor(startPos.y)},${startPos.z}`;
        const exitKey  = `${exitPos.x},${exitPos.y},${exitPos.z}`;
        const visited  = new Set([startKey, exitKey]);

        const qA = [{ x: Math.floor(startPos.x), y: Math.floor(startPos.y), z: startPos.z }];
        const qB = [{ x: exitPos.x, y: exitPos.y, z: exitPos.z }];
        let iA = 0, iB = 0;

        const revealOrder = [];
        while (iA < qA.length || iB < qB.length) {
            for (const [q, getI, setI] of [[qA, () => iA, v => iA = v], [qB, () => iB, v => iB = v]]) {
                const i = getI();
                if (i >= q.length) continue;
                setI(i + 1);
                const { x, y, z } = q[i];
                for (const [dx, dy, dz] of dirs3D) {
                    const nx = x + dx, ny = y + dy, nz = z + dz;
                    const key = `${nx},${ny},${nz}`;
                    if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size
                        && !visited.has(key)
                        && this.maze.get(nx, ny, nz) !== this.mazeGen.TYPES.WALL) {
                        visited.add(key);
                        q.push({ x: nx, y: ny, z: nz });
                        revealOrder.push({ x: nx, y: ny, z: nz });
                    }
                }
            }
        }

        // --- 4. Enable auto-rotation ---
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 1.8;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.enableRotate = false;

        // --- 5. Batch reveal for consistent ~3-5s duration ---
        const pathGeom = new THREE.BoxGeometry(0.88, 0.88, 0.88);
        const pathMat  = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_VISITED, transparent: true, opacity: 0.72
        });

        const TICK_MS = 20;
        const TARGET_TICKS = 200;
        const totalSteps = revealOrder.length;
        const batchSize = Math.max(1, Math.ceil(totalSteps / TARGET_TICKS));

        let stepIndex = 0;
        this.activeIntroTimer = null;
        const revealedMeshes = [];

        const finishIntro = () => {
            if (this.activeIntroTimer) { clearTimeout(this.activeIntroTimer); this.activeIntroTimer = null; }
            if (this.activeSkipHandler) {
                window.removeEventListener('keydown', this.activeSkipHandler);
                window.removeEventListener('touchstart', this.activeSkipHandler);
                this.activeSkipHandler = null;
            }
            this._playGlitchAndTransition(revealedMeshes);
        };

        this.activeSkipHandler = () => finishIntro();
        window.addEventListener('keydown', this.activeSkipHandler, { once: true });
        window.addEventListener('touchstart', this.activeSkipHandler, { once: true });

        const revealNext = () => {
            if (this.isDestroyed) return;
            const end = Math.min(stepIndex + batchSize, revealOrder.length);
            for (; stepIndex < end; stepIndex++) {
                const { x, y, z } = revealOrder[stepIndex];
                const isShaft = z % 2 === 0;
                let geom;
                if (isShaft) {
                    geom = new THREE.CylinderGeometry(0.35, 0.35, 2.0 * this.vScale, 8);
                } else {
                    geom = pathGeom;
                }
                const mesh = new THREE.Mesh(geom, pathMat);
                mesh.position.set(x - size / 2, (z - size / 2) * this.vScale, y - size / 2);
                this.scene.add(mesh);
                revealedMeshes.push(mesh);
            }
            if (stepIndex < revealOrder.length) {
                this.activeIntroTimer = setTimeout(revealNext, TICK_MS);
            } else {
                if (this.activeSkipHandler) {
                    window.removeEventListener('keydown', this.activeSkipHandler);
                    window.removeEventListener('touchstart', this.activeSkipHandler);
                    this.activeSkipHandler = null;
                }
                this._playGlitchAndTransition(revealedMeshes);
            }
        };

        this.activeIntroTimer = setTimeout(revealNext, TICK_MS);
    }

    _playGlitchAndTransition(revealedMeshes) {
        if (this.isDestroyed) return;
        const GLITCH_FLASHES = 5;
        const FLASH_INTERVAL = 90;
        let flash = 0;

        const doFlash = () => {
            if (this.isDestroyed) return;
            const visible = flash % 2 === 0;
            revealedMeshes.forEach(m => { if (m) m.visible = visible; });
            flash++;
            if (flash < GLITCH_FLASHES * 2) {
                setTimeout(doFlash, FLASH_INTERVAL);
            } else {
                revealedMeshes.forEach(m => { if (m) m.visible = false; });
                setTimeout(() => this._transitionToGame(), 400);
            }
        };
        doFlash();
    }

    _transitionToGame() {
        if (this.isDestroyed) return;

        this.controls.autoRotate = false;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        this.controls.enableRotate = true;

        this.ui.uiMap3dContainer.classList.add('intro-fade-out');

        setTimeout(() => {
            if (this.isDestroyed) return;
            this.ui.setMap3DVisible(false);
            this.ui.uiMap3dContainer.classList.remove('intro-fade-out');
            this.isMap3DActive = false;
            this.isIntroPlaying = false;

            if (this.ui.uiMobileMap) {
                this.ui.uiMobileMap.disabled = false;
            }

            const mapArea = document.getElementById('map-area-container');
            const leftHud = document.getElementById('left-hud-panel');
            const rightHud = document.getElementById('right-hud-panel');
            if (mapArea) {
                mapArea.classList.remove('intro-hidden');
                mapArea.classList.add('intro-reveal');
                setTimeout(() => mapArea.classList.remove('intro-reveal'), 700);
            }
            if (leftHud) {
                leftHud.classList.remove('intro-hidden');
                leftHud.classList.add('intro-reveal');
                setTimeout(() => leftHud.classList.remove('intro-reveal'), 700);
            }
            if (rightHud) {
                rightHud.classList.remove('intro-hidden');
                rightHud.classList.add('intro-reveal');
                setTimeout(() => rightHud.classList.remove('intro-reveal'), 700);
            }
        }, 600);
    }

    toggleTeleportMap(show) {
        this.isMap3DActive = show;
        this.isTeleportMode = show;
        
        this.ui.setTeleportWarning(show);
        
        if (show) {
            this.ui.setMap3DVisible(true);
            this.build3DMap();
            this.updateRendererSize();
        } else {
            this.ui.setMap3DVisible(false);
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
                
                const px = Math.floor(this.player.x);
                const py = Math.floor(this.player.y);
                const pz = this.player.z;
                const isCurrentPos = gridX === px && gridY === py && gridZ === pz;

                if (isCurrentPos) {
                    this.toggleTeleportMap(false);
                } else if (!isTargetInactive) {
                    this.teleportTo(gridX, gridY, gridZ);
                }
            }
        } else {
            const intersects = this.raycaster.intersectObjects(this.knownMeshes);
            if (intersects.length > 0) {
                const hitMesh = intersects[0].object;
                const { gridX, gridY, gridZ } = hitMesh.userData;
                
                this.triggerPathReveal(gridX, gridY, gridZ);
            }
        }
    }

    toggleZoom() {
        if (this.mazeGen.size <= 11) return;
        this.isZoomActive = !this.isZoomActive;
        this.staticMapCacheDirty = true;
        
        const zoomOutIcon = document.getElementById('zoom-out-icon');
        const zoomInIcon = document.getElementById('zoom-in-icon');
        if (zoomOutIcon && zoomInIcon) {
            if (this.isZoomActive) {
                zoomOutIcon.classList.remove('hidden');
                zoomInIcon.classList.add('hidden');
            } else {
                zoomOutIcon.classList.add('hidden');
                zoomInIcon.classList.remove('hidden');
            }
        }
    }

    togglePause() {
        if (this.isGameOver || this.isDestroyed || this.isIntroPlaying) return;

        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.ui.showPause();
            if (this.ui.uiMobilePauseBtn) {
                this.ui.uiMobilePauseBtn.classList.add('hidden');
            }
        } else {
            this.ui.hidePause();
            if (this.ui.uiMobilePauseBtn && !this.ui.uiMobileControls.classList.contains('hidden')) {
                this.ui.uiMobilePauseBtn.classList.remove('hidden');
            }
        }
    }

    checkExitNeighborVisited() {
        const exitPos = this.getExitPos();
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 2 }, { dx: 0, dy: 0, dz: -2 }
        ];
        for (const d of dirs) {
            const nx = exitPos.x + d.dx;
            const ny = exitPos.y + d.dy;
            const nz = exitPos.z + d.dz;
            if (nx >= 0 && nx < this.mazeGen.size && ny >= 0 && ny < this.mazeGen.size && nz >= 0 && nz < this.mazeGen.size) {
                const val = this.maze.get(nx, ny, nz);
                if (val !== this.mazeGen.TYPES.WALL) {
                    const isVisited = val === this.mazeGen.TYPES.VISITED || 
                                      val === this.mazeGen.TYPES.START || 
                                      val === this.mazeGen.TYPES.ELEVATOR_VISITED;
                    if (isVisited) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    findShortestPath(start, end, restrictToVisited = false) {
        const size = this.mazeGen.size;
        const tempMaze = new Int8Array(size * size * size);
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const idx = x * size * size + y * size + z;
                    const val = this.maze.get(x, y, z);
                    
                    const isPlayerStart = x === start.x && y === start.y && z === start.z;
                    const isTargetEnd = x === end.x && y === end.y && z === end.z;
                    
                    const isWall = val === this.mazeGen.TYPES.WALL;
                    if (isWall) {
                        tempMaze[idx] = 0; // parede é sempre intransitável
                        continue;
                    }

                    const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                    const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                    
                    const isVisited = val === this.mazeGen.TYPES.VISITED || 
                                      val === this.mazeGen.TYPES.START || 
                                      val === this.mazeGen.TYPES.ELEVATOR_VISITED || 
                                      isTeleportDiscovered;
                    
                    const isKnown = (val === this.mazeGen.TYPES.PATH || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);

                    let isPassable = false;
                    if (restrictToVisited) {
                        isPassable = isVisited || isPlayerStart || isTargetEnd;
                    } else {
                        isPassable = isVisited || isKnown || isPlayerStart || isTargetEnd;
                    }

                    tempMaze[idx] = isPassable ? 1 : 0;
                }
            }
        }
        return aStarPath(start, end, tempMaze, size, 0) ?? [];
    }

    triggerPathReveal(tx, ty, tz) {
        if (this.pathfindersRemaining <= 0) {
            this.ui.showInfoBanner("NO PATHFINDERS REMAINING");
            return;
        }

        if (this.pathRevealInterval) {
            clearInterval(this.pathRevealInterval);
            this.pathRevealInterval = null;
        }

        const isExitClicked = this.maze.get(tx, ty, tz) === this.mazeGen.TYPES.EXIT;
        if (isExitClicked) {
            if (!this.exitPathfinderUnlocked) {
                this.ui.showInfoBanner("EXIT NOT FOUND YET");
                return;
            }
        }

        let targetZ = tz;
        if (tz % 2 === 0) {
            // Se o destino for um poço de elevador (par), redireciona para o andar jogável (ímpar) mais próximo do player
            targetZ = Math.abs((tz - 1) - this.player.z) < Math.abs((tz + 1) - this.player.z) ? (tz - 1) : (tz + 1);
            if (targetZ < 0) targetZ = 1;
            if (targetZ >= this.mazeGen.size) targetZ = this.mazeGen.size - 1;
        }

        const start = {
            x: Math.floor(this.player.x),
            y: Math.floor(this.player.y),
            z: this.player.z
        };
        const end = { x: tx, y: ty, z: targetZ };
        const path = this.findShortestPath(start, end, isExitClicked);

        if (!path || path.length === 0) return;

        this.pathfindersRemaining--;
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
        saveGame(this);

        this.activePathReveal = path;
        this.revealedPathProgress = 0;
        this.revealedPathSet.add(`${tx},${ty},${tz}`);

        this.pathRevealInterval = setInterval(() => {
            if (this.revealedPathProgress < this.activePathReveal.length) {
                const node = this.activePathReveal[this.revealedPathProgress];
                const key = `${node.x},${node.y},${node.z}`;
                this.revealedPathSet.add(key);
                
                // Se houve salto vertical no caminho, revela o poço de elevador intermediário (par)
                if (this.revealedPathProgress > 0) {
                    const prevNode = this.activePathReveal[this.revealedPathProgress - 1];
                    if (Math.abs(node.z - prevNode.z) === 2) {
                        const midZ = (node.z + prevNode.z) / 2;
                        const shaftKey = `${node.x},${node.y},${midZ}`;
                        this.revealedPathSet.add(shaftKey);

                        if (this.isMap3DActive && this.gridMeshes) {
                            const size = this.mazeGen.size;
                            const mesh = this.gridMeshes[(node.x * size * size) + (node.y * size) + midZ];
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
                    }
                }

                this.staticMapCacheDirty = true;
                
                if (this.isMap3DActive && this.gridMeshes) {
                    const size = this.mazeGen.size;
                    const mesh = this.gridMeshes[(node.x * size * size) + (node.y * size) + node.z];
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
        this.skipCellAnimations = true;
        this.player.x = x + 0.5;
        this.player.y = y + 0.5;
        this.player.z = z;
        this.staticMapCacheDirty = true;
        
        this.toggleTeleportMap(false);
        
        if (this.maze.get(x, y, z) === this.mazeGen.TYPES.PATH) {
            this.maze.set(x, y, z, this.mazeGen.TYPES.VISITED);
        }

        const nTicks = Math.floor(this.degree * 1.5) + 3;
        this.teleportCooldownTicks = nTicks;
        this.inactiveTeleportPos = { x, y, z };

        this.ui.updateCooldownTimer(this.teleportCooldownTicks);

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
        this.input.keys = {};
    }
}
