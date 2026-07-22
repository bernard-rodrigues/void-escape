import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';
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
        this.degree = degree !== undefined ? degree : (CONFIG.MAZE_DEGREE !== undefined ? CONFIG.MAZE_DEGREE : 8);
        this.branchingFactor = branchingFactor !== undefined ? branchingFactor : (CONFIG.BRANCHING_FACTOR !== undefined ? CONFIG.BRANCHING_FACTOR : 0.2);
        
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
        this.isResumedFromSave = !!savedState;
        this.mapCompletion100Triggered = false;
        this.hunterOnSameFloorDetected = false;
        this.dialogueUpTriggered = false;
        this.dialogueDownTriggered = false;
        this.dialogueWhichWayTriggered = false;
        this.dialogueDetectedTriggered = false;

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
        
        this.statueImage = new Image();
        this.statueImage.onload = () => {
            this.staticMapCacheDirty = true;
        };
        this.statueImage.src = 'assets/images/statue.png';

        this.mageImages = {
            down_left: new Image(),
            down_right: new Image(),
            up_left: new Image(),
            up_right: new Image()
        };
        for (const key in this.mageImages) {
            this.mageImages[key].onload = () => {
                this.staticMapCacheDirty = true;
            };
            this.mageImages[key].src = `assets/images/mage_${key}.png`;
        }

        this.playerSide = 'right';
        this.playerVertical = 'down';
        this.playerWalkCycle = 0;
        this.playerSquashTargetX = 1;
        this.playerSquashTargetY = 1;
        this.playerSquashX = 1;
        this.playerSquashY = 1;
        
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
        this.activeMapFloor = 1;
        this.visualActiveFloor = 1;
        this.mapCursor = { x: 0, y: 0, z: 1 };
        this.pathfinderRewardsGranted = 0;
        this.isometricCanvas = null;
        this.isometricCtx = null;
        this.floorClickRects = [];
        this.mapZoom = 1.0;
        this.mapPanOffsetX = 0;
        this.mapPanOffsetY = 0;

        this.lastFrameTime = performance.now();
        this.revealedPathSet = new Set();
        this.activePathReveal = [];
        this.revealedPathProgress = 0;
        this.knownMeshes = [];
        this.gridMeshes = null;
        this.pathRevealInterval = null;
        this.pathfinderBlockedUntil = 0;

        this.ui.initGameUI(this.isSafeMode);
        this.ui.onInfoBanner = (msg) => this.queueNotification(msg);
        this.ui.updateKeysHUD(this.keysCollected, this.totalKeys);
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);

        this.isMap3DActive = false;
        this.isGameOver = false;
        this.deathAnimation = null;
        this.notificationQueue = [];
        this.activeNotification = null;
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

        // Scan all teleport coordinates in the maze
        this.allTeleports = [];
        const mazeSize = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;
        for (let z = 1; z < mazeSize; z += 2) {
            for (let y = 0; y < mazeSize; y++) {
                for (let x = 0; x < mazeSize; x++) {
                    if (this.maze.get(x, y, z) === TYPES.TELEPORT) {
                        this.allTeleports.push({ x, y, z });
                    }
                }
            }
        }
        // Sort deterministically (z first, then y, then x)
        this.allTeleports.sort((a, b) => {
            if (a.z !== b.z) return a.z - b.z;
            if (a.y !== b.y) return a.y - b.y;
            return a.x - b.x;
        });

        this.selectedTeleportIndex = this.allTeleports.findIndex(
            t => t.x === startGridX && t.y === startGridY && t.z === startGridZ
        );
        if (this.selectedTeleportIndex === -1) this.selectedTeleportIndex = 0;

        this.teleportConfirmModalActive = false;
        this.teleportModalSelection = 'go'; // 'go' or 'cancel'

        this.teleportMeshes = [];
        this.isTeleportMode = false;
        this.teleportCooldownTicks = 0;
        this.inactiveTeleportPos = null;
        this.floorTransition = null;
        this.hasSavePoint = false;
        this.lastPlayerCell = { x: startGridX, y: startGridY, z: startGridZ };
        this.exitPathfinderUnlocked = false;
        this.isZoomActive = true;
        this.zoomVisibleCells = 11;
        this.lastInputDevice = 'keyboard';

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
        if (this.handleKeyboardDetection) {
            window.removeEventListener('keydown', this.handleKeyboardDetection);
        }
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

        const startX = Math.floor(this.mazeGen.startPos.x);
        const startY = Math.floor(this.mazeGen.startPos.y);
        const startZ = this.mazeGen.startPos.z;

        // Gather all unvisited path cells (TYPES.PATH) on playable floors (odd z indices), excluding starting safe point
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const isStartPos = (x === startX && y === startY && z === startZ);
                    if (this.maze.get(x, y, z) === this.mazeGen.TYPES.PATH && z % 2 !== 0 && !isStartPos) {
                        candidates.push({ x, y, z });
                    }
                }
            }
        }

        if (candidates.length === 0) {
            // Fallback: if no unvisited path cells exist, use visited ones that are not the player cell, starting cell, and are on playable floors
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    for (let z = 0; z < size; z++) {
                        const val = this.maze.get(x, y, z);
                        const isStartPos = (x === startX && y === startY && z === startZ);
                        const isExit = (val === this.mazeGen.TYPES.EXIT);
                        if (val !== this.mazeGen.TYPES.WALL && !isExit && z % 2 !== 0 && (x !== px || y !== py || z !== pz) && !isStartPos) {
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

        this.ui.showInfoBanner(getTranslation('msgVoidHuntersDetected'));
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
        const percent = this.getMapVisitedPercentage();
        this.ui.showVictory(percent);
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
        this.ui.showInfoBanner(getTranslation('msgKeySecured', { collected: this.keysCollected, total: this.totalKeys }));
        
        if (this.keysCollected === this.totalKeys) {
            this.ui.showInfoBanner(getTranslation('msgExitUnlocked'));
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
            this.ui.showInfoBanner(getTranslation('msgKeysRemaining', { count: missing }));
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

        // Restore pathfinder rewards progress
        const rewardStep = (this.degree >= 12) ? 10 : (this.degree >= 8 ? 20 : 0);
        const currentPercent = this.getMapVisitedPercentage();
        this.pathfinderRewardsGranted = snapshot.pathfinderRewardsGranted !== undefined 
            ? snapshot.pathfinderRewardsGranted 
            : (rewardStep > 0 ? Math.floor(currentPercent / rewardStep) : 0);

        // Restore revealed paths
        this.revealedPathSet = new Set(snapshot.revealedPathSet);
        this.mapCompletion100Triggered = snapshot.mapCompletion100Triggered || false;
        this.dialogueUpTriggered = snapshot.dialogueUpTriggered || false;
        this.dialogueDownTriggered = snapshot.dialogueDownTriggered || false;
        this.dialogueWhichWayTriggered = snapshot.dialogueWhichWayTriggered || false;
        this.dialogueDetectedTriggered = snapshot.dialogueDetectedTriggered || false;
        this.hunterOnSameFloorDetected = snapshot.hunterOnSameFloorDetected || false;

        // Mark that this session was loaded from a save (so Continue remains available
        // until the player reaches a new teleport or dies)
        this.hasSavePoint = true;
        this.lastPlayerCell = {
            x: Math.floor(this.player.x),
            y: Math.floor(this.player.y),
            z: this.player.z
        };
        this.populateFullyRevealedCells(this.player.z);
        this.exitPathfinderUnlocked = this.checkExitNeighborVisited();
    }

    /**
     * Checks every frame whether any hunter occupies the same cell as the player.
     * Must be called independently of the hunter-move tick so the player cannot
     * "pass through" a stationary hunter between ticks.
     */
    checkHunterCollision() {
        if (this.deathAnimation && this.deathAnimation.active) return;

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
                // Trava o caçador na posição atual
                hunter.visualX = hunter.x;
                hunter.visualY = hunter.y;
                hunter.visualZ = hunter.z;

                this.isGameOver = true;
                this.hideGameUI(); // Desativa o mapa 3D se ativo, controles etc.

                this.deathAnimation = {
                    active: true,
                    hunter: hunter,
                    playerPos: { x: this.player.x, y: this.player.y, z: this.player.z },
                    elapsed: 0,
                    duration: 1.8, // 1.8 segundos para a corrupção cobrir toda a tela
                    screenFilled: false,
                    glitchElapsed: 0,
                    glitchDuration: 1.5,
                    uiFade: 0,
                    uiTriggered: false
                };
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
                if (this.isMap3DActive) {
                    if (this.isTeleportMode) {
                        this.toggleTeleportMap(false);
                    } else {
                        this.toggleMap3D();
                    }
                    e.preventDefault();
                    return;
                }
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

            if (this.isMap3DActive && !this.isIntroPlaying) {
                // Teleport Mode keys
                if (this.isTeleportMode) {
                    if (this.teleportConfirmModalActive) {
                        if (key === 'a' || key === 'arrowleft' || key === 'd' || key === 'arrowright') {
                            this.teleportModalSelection = this.teleportModalSelection === 'go' ? 'cancel' : 'go';
                            e.preventDefault();
                        }
                        if (key === 'enter' || key === ' ' || key === 'y') {
                            if (this.teleportModalSelection === 'go') {
                                const targetT = this.allTeleports[this.selectedTeleportIndex];
                                this.teleportTo(targetT.x, targetT.y, targetT.z);
                                this.toggleTeleportMap(false);
                            } else {
                                this.teleportConfirmModalActive = false;
                            }
                            e.preventDefault();
                        }
                        if (key === 'escape' || key === 'backspace') {
                            this.teleportConfirmModalActive = false;
                            e.preventDefault();
                        }
                        return;
                    }

                    const selectable = this.getSelectableTeleportIndices();
                    if (selectable.length > 0) {
                        let currentIdx = selectable.indexOf(this.selectedTeleportIndex);
                        if (key === 'a' || key === 'arrowleft') {
                            currentIdx = (currentIdx - 1 + selectable.length) % selectable.length;
                            this.selectedTeleportIndex = selectable[currentIdx];
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            this.activeMapFloor = targetT.z;
                            this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                            e.preventDefault();
                        }
                        if (key === 'd' || key === 'arrowright') {
                            currentIdx = (currentIdx + 1) % selectable.length;
                            this.selectedTeleportIndex = selectable[currentIdx];
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            this.activeMapFloor = targetT.z;
                            this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                            e.preventDefault();
                        }
                        if (key === 'enter' || key === ' ' || key === 'y') {
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            const px = Math.floor(this.player.x);
                            const py = Math.floor(this.player.y);
                            const pz = this.player.z;
                            const isCurrent = targetT && targetT.x === px && targetT.y === py && targetT.z === pz;
                            if (!isCurrent) {
                                this.teleportConfirmModalActive = true;
                                this.teleportModalSelection = 'go';
                            }
                            e.preventDefault();
                        }
                    }
                    if (key === 'escape' || key === 'backspace') {
                        this.toggleTeleportMap(false);
                        e.preventDefault();
                    }
                    return;
                }

                // Normal Map Mode keys
                if (key === 'q' || key === 'pagedown') {
                    if (this.activeMapFloor - 2 >= 1) {
                        this.activeMapFloor -= 2;
                    }
                    e.preventDefault();
                }
                if (key === 'e' || key === 'pageup') {
                    if (this.activeMapFloor + 2 <= this.mazeGen.size - 2) {
                        this.activeMapFloor += 2;
                    }
                    e.preventDefault();
                }

                if (key === 'a' || key === 'arrowleft') {
                    this.navigateCursor('left');
                    e.preventDefault();
                }
                if (key === 'd' || key === 'arrowright') {
                    this.navigateCursor('right');
                    e.preventDefault();
                }
                if (key === 'w' || key === 'arrowup') {
                    this.navigateCursor('up');
                    e.preventDefault();
                }
                if (key === 's' || key === 'arrowdown') {
                    this.navigateCursor('down');
                    e.preventDefault();
                }

                if (key === 'enter' || key === ' ' || key === 'y') {
                    const x = this.mapCursor.x;
                    const y = this.mapCursor.y;
                    const z = this.mapCursor.z;
                    const elements = this.getInteractiveElements(this.activeMapFloor);
                    const isInteractive = elements.some(el => el.x === x && el.y === y && el.z === z);
                    if (isInteractive) {
                        this.triggerPathReveal(x, y, z);
                    }
                    e.preventDefault();
                }
            }
        };
        this.handleResize = () => this.resize();
        this.handleKeyboardDetection = () => {
            if (this.lastInputDevice !== 'keyboard') {
                this.lastInputDevice = 'keyboard';
                this.ui.updateControlsHint('keyboard', this.mazeGen.size > 11);
            }
        };

        window.addEventListener('keydown', this.handleKeyDownExtra);
        window.addEventListener('keydown', this.handleKeyboardDetection);
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
                        this.ui.showInfoBanner(getTranslation('msgNoOtherActiveTeleport'));
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
        if (savedState) {
            this.restoreFromSave(savedState);
            this.playContinueAnimation();
        } else {
            this.playIntroAnimation();
        }

        this.loop();

        // Hides zoom controls if the maze size <= 11 (degree <= 5)
        const size = this.mazeGen.size;
        const mobileZoomBtn = document.getElementById('mobile-zoom-btn');
        if (size <= 11) {
            if (mobileZoomBtn) mobileZoomBtn.classList.add('hidden');
        } else {
            if (mobileZoomBtn) mobileZoomBtn.classList.remove('hidden');
        }

        this.ui.updateControlsHint(this.lastInputDevice, size > 11);
    }

    hideCanvasInstant() {
        const mapArea = document.getElementById('map-area-container');
        const leftHud = document.getElementById('left-hud-panel');
        const rightHud = document.getElementById('right-hud-panel');
        const bottomHud = document.getElementById('bottom-hud-container');
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
        if (bottomHud) {
            bottomHud.style.transition = 'none';
            bottomHud.classList.remove('intro-reveal');
            bottomHud.classList.add('intro-hidden');
            bottomHud.offsetHeight;
            bottomHud.style.transition = '';
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
                    // WALL, EXIT, and STATUE do not count towards the total corridors
                    if (val === TYPES.WALL || val === TYPES.EXIT || val === TYPES.STATUE) {
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

        if (percent === 100 && !this.mapCompletion100Triggered) {
            this.ui.showInfoBanner(getTranslation('msgWorldSaved'));
            this.mapCompletion100Triggered = true;
        }

        // Check for pathfinder rewards!
        this.checkPathfinderRewards(percent);
    }

    checkPathfinderRewards(percent) {
        const step = (this.degree >= 12) ? 10 : (this.degree >= 8 ? 20 : 0);
        if (step === 0) return;

        if (this.pathfinderRewardsGranted === undefined) {
            this.pathfinderRewardsGranted = 0;
        }

        const expectedRewards = Math.floor(percent / step);
        if (expectedRewards > this.pathfinderRewardsGranted) {
            const countToAward = expectedRewards - this.pathfinderRewardsGranted;
            this.pathfindersRemaining += countToAward;
            this.totalPathfinders += countToAward;
            this.pathfinderRewardsGranted = expectedRewards;

            this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
            this.ui.showInfoBanner(getTranslation('msgFoundPathfinder'));
            
            // Save state immediately
            saveGame(this);
        }
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

    getSelectableTeleportIndices() {
        const px = Math.floor(this.player.x);
        const py = Math.floor(this.player.y);
        const pz = this.player.z;
        return this.allTeleports.map((t, idx) => ({ t, idx })).filter(item => {
            const coordsStr = `${item.t.x},${item.t.y},${item.t.z}`;
            const isDiscovered = this.discoveredTeleports.has(coordsStr);
            const isInactive = this.inactiveTeleportPos && 
                               item.t.x === this.inactiveTeleportPos.x && 
                               item.t.y === this.inactiveTeleportPos.y && 
                               item.t.z === this.inactiveTeleportPos.z;
            const isCurrentPos = item.t.x === px && item.t.y === py && item.t.z === pz;
            return isDiscovered && !isInactive && !isCurrentPos;
        }).map(item => item.idx);
    }

    updateGamepad(dt) {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        const gp = gamepads[0] || gamepads.find(g => g !== null);
        if (!gp) return;

        const deadzone = 0.25;
        const isGamepadActive = 
            Math.abs(gp.axes[0]) > deadzone || 
            Math.abs(gp.axes[1]) > deadzone || 
            (gp.axes[2] !== undefined && Math.abs(gp.axes[2]) > deadzone) ||
            (gp.axes[3] !== undefined && Math.abs(gp.axes[3]) > deadzone) ||
            gp.buttons.some(b => b.pressed);

        if (isGamepadActive && this.lastInputDevice !== 'gamepad') {
            this.lastInputDevice = 'gamepad';
            this.ui.updateControlsHint('gamepad', this.mazeGen.size > 11);
        }

        // 1. Movement axes (Left Analog / D-pad)
        const axisX = gp.axes[0];
        const axisY = gp.axes[1];
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

        // Map Mode Gamepad Controls
        if (this.isMap3DActive && !this.isIntroPlaying) {
            // Gamepad LT/RT Zoom (focusing on mapCursor)
            const zoomInPressed = isPressed(7); // RT
            const zoomOutPressed = isPressed(6); // LT
            if (zoomInPressed || zoomOutPressed) {
                const size = this.mazeGen.size;
                let baseTileWidth = (window.innerWidth * 0.7) / size;
                baseTileWidth = Math.max(20, Math.min(48, baseTileWidth));
                const tileWidth = baseTileWidth * this.mapZoom;
                const tileWidthHalf = tileWidth / 2;
                const tileHeightHalf = tileWidth / 4;
                const floorOffset = tileWidthHalf * 5;

                const centerX = window.innerWidth / 2 + this.mapPanOffsetX;
                const centerY = window.innerHeight / 2 + this.mapPanOffsetY;

                const rx = this.mapCursor.x;
                const ry = this.mapCursor.y;
                const rz = this.mapCursor.z;
                const visualZ = this.visualActiveFloor;

                const focusX = (rx - ry) * tileWidthHalf + centerX;
                const focusY = (rx + ry) * tileHeightHalf - (rz - visualZ) * floorOffset + centerY;

                const oldZoom = this.mapZoom;
                const factor = 1.025;
                let newZoom = zoomInPressed ? oldZoom * factor : oldZoom / factor;
                newZoom = Math.max(0.5, Math.min(4.0, newZoom));

                if (newZoom !== oldZoom) {
                    const ratio = newZoom / oldZoom;
                    this.mapPanOffsetX = focusX - (focusX - (window.innerWidth / 2 + this.mapPanOffsetX)) * ratio - window.innerWidth / 2;
                    this.mapPanOffsetY = focusY - (focusY - (window.innerHeight / 2 + this.mapPanOffsetY)) * ratio - window.innerHeight / 2;
                    this.mapZoom = newZoom;
                }
            }

            const justLeft = left && (!this.prevGamepadStick || !this.prevGamepadStick.left);
            const justRight = right && (!this.prevGamepadStick || !this.prevGamepadStick.right);
            const justUp = up && (!this.prevGamepadStick || !this.prevGamepadStick.up);
            const justDown = down && (!this.prevGamepadStick || !this.prevGamepadStick.down);

            this.prevGamepadStick = { left, right, up, down };

            if (this.isTeleportMode) {
                if (this.teleportConfirmModalActive) {
                    if (justLeft || justPressed(14) || justRight || justPressed(15)) {
                        this.teleportModalSelection = this.teleportModalSelection === 'go' ? 'cancel' : 'go';
                    }
                    if (justPressed(0) || justPressed(3) || justPressed(2)) { // A, Y, or X
                        if (this.teleportModalSelection === 'go') {
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            this.teleportTo(targetT.x, targetT.y, targetT.z);
                            this.toggleTeleportMap(false);
                        } else {
                            this.teleportConfirmModalActive = false;
                        }
                    }
                    if (justPressed(1)) { // B button
                        this.teleportConfirmModalActive = false;
                    }
                } else {
                    const selectable = this.getSelectableTeleportIndices();
                    if (selectable.length > 0) {
                        let currentIdx = selectable.indexOf(this.selectedTeleportIndex);
                        if (justLeft || justPressed(14)) {
                            currentIdx = (currentIdx - 1 + selectable.length) % selectable.length;
                            this.selectedTeleportIndex = selectable[currentIdx];
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            this.activeMapFloor = targetT.z;
                            this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        }
                        if (justRight || justPressed(15)) {
                            currentIdx = (currentIdx + 1) % selectable.length;
                            this.selectedTeleportIndex = selectable[currentIdx];
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            this.activeMapFloor = targetT.z;
                            this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        }
                        if (justPressed(0) || justPressed(3) || justPressed(2)) { // A, Y, or X
                            const targetT = this.allTeleports[this.selectedTeleportIndex];
                            const px = Math.floor(this.player.x);
                            const py = Math.floor(this.player.y);
                            const pz = this.player.z;
                            const isCurrent = targetT && targetT.x === px && targetT.y === py && targetT.z === pz;
                            if (!isCurrent) {
                                this.teleportConfirmModalActive = true;
                                this.teleportModalSelection = 'go';
                            }
                        }
                    }
                    if (justPressed(1) || justPressed(8)) {
                        this.toggleTeleportMap(false);
                    }
                }

                this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
                return;
            }

            // Normal Map Mode Controls
            if (justLeft || justPressed(14)) this.navigateCursor('left');
            if (justRight || justPressed(15)) this.navigateCursor('right');
            if (justUp || justPressed(12)) this.navigateCursor('up');
            if (justDown || justPressed(13)) this.navigateCursor('down');

            // Floor transition with Bumpers or A (Button 0)
            if (justPressed(0) || justPressed(4)) { // A or Left Bumper -> Floor Down
                if (this.activeMapFloor - 2 >= 1) {
                    this.activeMapFloor -= 2;
                }
            }
            if (justPressed(5)) { // Right Bumper -> Floor Up
                if (this.activeMapFloor + 2 <= this.mazeGen.size - 2) {
                    this.activeMapFloor += 2;
                }
            }

            // Confirm selection / trigger pathfinder with Y (Button 3) or X (Button 2)
            if (justPressed(3) || justPressed(2)) {
                const x = this.mapCursor.x;
                const y = this.mapCursor.y;
                const z = this.mapCursor.z;
                const elements = this.getInteractiveElements(this.activeMapFloor);
                const isInteractive = elements.some(el => el.x === x && el.y === y && el.z === z);
                if (isInteractive) {
                    this.triggerPathReveal(x, y, z);
                }
            }

            // Exit Map with B (Button 1) or View (Button 8)
            if (justPressed(1) || justPressed(8)) {
                this.toggleMap3D();
            }

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
                        this.ui.showInfoBanner(getTranslation('msgNoOtherActiveTeleport'));
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
            const rotSpeed = (CONFIG.ROT_SPEED !== undefined ? CONFIG.ROT_SPEED : 2.0) * dt;
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

    queueNotification(text) {
        this.notificationQueue.push(text);
    }

    updateNotification(dt) {
        if (!this.activeNotification) {
            if (this.notificationQueue.length > 0) {
                const text = this.notificationQueue.shift();
                this.activeNotification = {
                    text: text,
                    displayText: "",
                    state: "OPENING",
                    widthProgress: 0,
                    typeTimer: 0,
                    charIndex: 0,
                    waitTimer: 0,
                    closeProgress: 1
                };
            }
            return;
        }

        const n = this.activeNotification;
        if (n.state === "OPENING") {
            n.widthProgress += dt / 0.15;
            if (n.widthProgress >= 1) {
                n.widthProgress = 1;
                n.state = "TYPING";
            }
        } else if (n.state === "TYPING") {
            n.typeTimer += dt;
            if (n.typeTimer >= 0.025) {
                n.typeTimer = 0;
                n.charIndex++;
                n.displayText = n.text.substring(0, n.charIndex);
                if (n.charIndex >= n.text.length) {
                    n.state = "WAITING";
                    n.waitTimer = 0;
                }
            }
        } else if (n.state === "WAITING") {
            n.waitTimer += dt;
            if (n.waitTimer >= 1.0) {
                n.state = "CLOSING";
                n.closeProgress = 1;
            }
        } else if (n.state === "CLOSING") {
            n.closeProgress -= dt / 0.15;
            if (n.closeProgress <= 0) {
                n.closeProgress = 0;
                this.activeNotification = null;
            }
        }
    }

    update(dt) {
        if (this.isGameOver || this.isDestroyed || !dt) return;

        this.updateNotification(dt);

        this.updateGamepad(dt);

        if (this.isPaused) return;

        if (!this.isIntroPlaying) {
            const hasHunterOnSameFloor = this.hunters.some(h => h.state !== 'SLEEP' && h.z === this.player.z);
            if (hasHunterOnSameFloor) {
                if (!this.hunterOnSameFloorDetected) {
                    this.ui.showInfoBanner(getTranslation('msgDidYouHearThat'));
                    this.hunterOnSameFloorDetected = true;
                }
            }
        }

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
                
                // Calcula o progresso p do passo atual (de 0 a 1) baseado na distância física
                const dx = h.x - h.visualX;
                const dy = h.y - h.visualY;
                const stepDist = Math.sqrt(dx * dx + dy * dy);
                const p = Math.max(0, Math.min(1, 1 - stepDist));

                // 1. Rastro 1 (newest) na posição h.lastPos
                if (h.lastPos && (h.lastPos.x !== h.x || h.lastPos.y !== h.y)) {
                    hm.trail1.position.set(h.lastPos.x - size/2, (h.lastPos.z - size/2) * this.vScale, h.lastPos.y - size/2);
                    hm.trail1.visible = true;
                    
                    const time1 = h.jellyTime - 0.2;
                    const scale1 = 0.95 - p * 0.47;
                    const scaleX1 = scale1 * (1 + Math.sin(time1 * 1.2) * 0.07);
                    const scaleY1 = scale1 * (1 + Math.cos(time1 * 0.8) * 0.07);
                    const scaleZ1 = scale1 * (1 + Math.sin(time1 * 1.5) * 0.07);
                    hm.trail1.scale.set(scaleX1, scaleY1, scaleZ1);
                    
                    // Suaviza a opacidade do material
                    if (hm.trail1.material) {
                        hm.trail1.material.opacity = (0.40 - p * 0.20) * opFactor;
                    }
                } else {
                    hm.trail1.visible = false;
                }

                // 2. Rastro 2 (oldest) na posição anterior do histórico (history[0]) apenas se houver 2 posições consecutivas
                if (h.history && h.history.length === 2) {
                    const oldestPos = h.history[0];
                    hm.trail2.position.set(oldestPos.x - size/2, (oldestPos.z - size/2) * this.vScale, oldestPos.y - size/2);
                    
                    const scale2 = 0.48 * (1 - p);
                    if (scale2 > 0.02) {
                        hm.trail2.visible = true;
                        
                        const time2 = h.jellyTime - 0.4;
                        const scaleX2 = scale2 * (1 + Math.sin(time2 * 1.2) * 0.07);
                        const scaleY2 = scale2 * (1 + Math.cos(time2 * 0.8) * 0.07);
                        const scaleZ2 = scale2 * (1 + Math.sin(time2 * 1.5) * 0.07);
                        hm.trail2.scale.set(scaleX2, scaleY2, scaleZ2);
                        
                        if (hm.trail2.material) {
                            hm.trail2.material.opacity = (0.20 * (1 - p)) * opFactor;
                        }
                    } else {
                        hm.trail2.visible = false;
                    }
                } else {
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

            let isMoving = false;
            if (moveX !== 0 || moveY !== 0) {
                isMoving = true;
                
                // Determinamos o movimento dominante ou diagonal para aplicar a memória de direção
                const threshold = 0.01;
                const hasX = Math.abs(moveX) > threshold;
                const hasY = Math.abs(moveY) > threshold;

                if (hasX && hasY) {
                    // Movimento diagonal: atualiza ambos
                    this.playerSide = moveX > 0 ? 'right' : 'left';
                    this.playerVertical = moveY > 0 ? 'down' : 'up';
                } else if (hasX) {
                    // Movimento horizontal puro (A/D): atualiza apenas lado horizontal, memoriza vertical
                    this.playerSide = moveX > 0 ? 'right' : 'left';
                } else if (hasY) {
                    // Movimento vertical puro (W/S): atualiza apenas vertical, memoriza lado horizontal
                    this.playerVertical = moveY > 0 ? 'down' : 'up';
                }
            }

            if (isMoving) {
                this.playerWalkCycle = (this.playerWalkCycle || 0) + dt * 18;
                this.playerSquashTargetX = 1 + Math.sin(this.playerWalkCycle) * 0.15;
                this.playerSquashTargetY = 1 - Math.sin(this.playerWalkCycle) * 0.15;
            } else {
                this.playerSquashTargetX = 1;
                this.playerSquashTargetY = 1;
            }

            this.playerSquashX = this.playerSquashX || 1;
            this.playerSquashY = this.playerSquashY || 1;
            this.playerSquashX += (this.playerSquashTargetX - this.playerSquashX) * 0.25;
            this.playerSquashY += (this.playerSquashTargetY - this.playerSquashY) * 0.25;

            if (moveX !== 0 || moveY !== 0) {
                const oldGridX = Math.floor(this.player.x);
                const oldGridY = Math.floor(this.player.y);
                const nextX = this.player.x + moveX;
                const nextY = this.player.y + moveY;
                
                const isPassable = (gx, gy, gz) => {
                    const val = this.maze.get(gx, gy, gz);
                    if (val === this.mazeGen.TYPES.WALL || val === this.mazeGen.TYPES.STATUE) return false;
                    if (val === this.mazeGen.TYPES.EXIT && this.keysCollected < this.totalKeys) {
                        this.triggerLockedExitWarning();
                        return false;
                    }
                    return true;
                };

                const R = CONFIG.PLAYER_COLLISION_RADIUS; // Raio de colisão físico do jogador (evita clipping)
                const offsetX = CONFIG.PLAYER_COLLISION_OFFSET_X || 0;
                const offsetY = CONFIG.PLAYER_COLLISION_OFFSET_Y || 0;
                const isBoxPassable = (cx, cy, cz) => {
                    const minGx = Math.floor(cx + offsetX - R);
                    const maxGx = Math.floor(cx + offsetX + R);
                    const minGy = Math.floor(cy + offsetY - R);
                    const maxGy = Math.floor(cy + offsetY + R);
                    for (let gx = minGx; gx <= maxGx; gx++) {
                        for (let gy = minGy; gy <= maxGy; gy++) {
                            if (gx < 0 || gx >= this.mazeGen.size || gy < 0 || gy >= this.mazeGen.size) {
                                return false;
                            }
                            if (!isPassable(gx, gy, cz)) {
                                return false;
                            }
                        }
                    }
                    return true;
                };

                if (isBoxPassable(nextX, this.player.y, this.player.z)) {
                    this.player.x = nextX;
                }
                if (isBoxPassable(this.player.x, nextY, this.player.z)) {
                    this.player.y = nextY;
                }
                
                const finalGridIdxX = Math.floor(this.player.x);
                const finalGridIdxY = Math.floor(this.player.y);
                const z = this.player.z;

                const cellChanged = (finalGridIdxX !== oldGridX || finalGridIdxY !== oldGridY);
                if (cellChanged) {
                    const oldVal = this.maze.get(oldGridX, oldGridY, z);
                    const oldIsVisited = oldVal === this.mazeGen.TYPES.VISITED || oldVal === this.mazeGen.TYPES.START || oldVal === this.mazeGen.TYPES.TELEPORT;
                    if (oldIsVisited) {
                        const hUp = z + 1 < this.mazeGen.size && this.maze.get(finalGridIdxX, finalGridIdxY, z + 1) !== this.mazeGen.TYPES.WALL;
                        const hDown = z - 1 >= 0 && this.maze.get(finalGridIdxX, finalGridIdxY, z - 1) !== this.mazeGen.TYPES.WALL;
                        if (hUp && hDown) {
                            if (!this.dialogueWhichWayTriggered) {
                                this.ui.showInfoBanner(getTranslation('msgWhichWay'));
                                this.dialogueWhichWayTriggered = true;
                            }
                        } else if (hUp) {
                            if (!this.dialogueUpTriggered) {
                                this.ui.showInfoBanner(getTranslation('msgElevatorUp'));
                                this.dialogueUpTriggered = true;
                            }
                        } else if (hDown) {
                            if (!this.dialogueDownTriggered) {
                                this.ui.showInfoBanner(getTranslation('msgElevatorDown'));
                                this.dialogueDownTriggered = true;
                            }
                        }
                    }
                }
                
                const markOrCollect = (gx, gy, gz) => {
                    const val = this.maze.get(gx, gy, gz);
                    if (val === this.mazeGen.TYPES.PATH || val === this.mazeGen.TYPES.KEY) {
                        if (val === this.mazeGen.TYPES.KEY) {
                            this.collectKey(gx, gy, gz);
                        } else {
                            this.maze.set(gx, gy, gz, this.mazeGen.TYPES.VISITED);
                        }
                        this.staticMapCacheDirty = true;
                    }
                };

                markOrCollect(finalGridIdxX, finalGridIdxY, z);

                if (finalGridIdxX !== oldGridX && finalGridIdxY !== oldGridY) {
                    markOrCollect(finalGridIdxX, oldGridY, z);
                    markOrCollect(oldGridX, finalGridIdxY, z);
                }

                const finalVal = this.maze.get(finalGridIdxX, finalGridIdxY, z);
                
                // Desbloqueia o pathfinder da saída se visitou o vizinho dela
                if (!this.exitPathfinderUnlocked && this.checkExitNeighborVisited()) {
                    this.exitPathfinderUnlocked = true;
                    this.ui.showInfoBanner(getTranslation('msgExitFound'));
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
                        this.ui.showInfoBanner(getTranslation('msgSafePointTeleport'));
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
                        this.ui.showInfoBanner(getTranslation('msgNoOtherActiveTeleport'));
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
                if (this.teleportCooldownTicks === 0) {
                    this.inactiveTeleportPos = null;
                    
                    for (const hunter of this.hunters) {
                        const cellVal = this.maze.get(hunter.x, hunter.y, hunter.z);
                        if (cellVal === this.mazeGen.TYPES.VISITED || cellVal === this.mazeGen.TYPES.START || cellVal === this.mazeGen.TYPES.EXIT) {
                            const oldState = hunter.state;
                            hunter.state = 'TRACKING';
                            if (oldState !== 'TRACKING' && !this.dialogueDetectedTriggered) {
                                this.ui.showInfoBanner(getTranslation('msgIWasDetected'));
                                this.dialogueDetectedTriggered = true;
                            }
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
                const oldState = hunter.state;
                hunter.move(this.player, this.maze, this.mazeGen.TYPES);
                if (hunter.state === 'TRACKING' && oldState !== 'TRACKING' && !this.dialogueDetectedTriggered) {
                    this.ui.showInfoBanner(getTranslation('msgIWasDetected'));
                    this.dialogueDetectedTriggered = true;
                }
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
        const hUp = currentZ + 1 < this.mazeGen.size && 
                    this.maze.get(currentX, currentY, currentZ + 1) !== this.mazeGen.TYPES.WALL &&
                    this.maze.get(currentX, currentY, currentZ + 1) !== this.mazeGen.TYPES.STATUE;
        const hDown = currentZ - 1 >= 0 && 
                      this.maze.get(currentX, currentY, currentZ - 1) !== this.mazeGen.TYPES.WALL &&
                      this.maze.get(currentX, currentY, currentZ - 1) !== this.mazeGen.TYPES.STATUE;
        
        if ((delta > 0 && hUp) || (delta < 0 && hDown)) {
            const nextZ = currentZ + delta;
            if (nextZ >= 0 && nextZ < this.mazeGen.size && 
                this.maze.get(currentX, currentY, nextZ) !== this.mazeGen.TYPES.WALL &&
                this.maze.get(currentX, currentY, nextZ) !== this.mazeGen.TYPES.STATUE) {
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
        const telExitBtn = document.getElementById('mobile-teleport-exit-btn');
        if (telExitBtn) telExitBtn.classList.add('hidden');
        if (this.isMap3DActive) {
            this.ui.setMap3DVisible(true);
            
            // Set initial map floor and cursor to player position
            this.activeMapFloor = this.player.z;
            this.visualActiveFloor = this.player.z;
            this.mapCursor = {
                x: Math.floor(this.player.x),
                y: Math.floor(this.player.y),
                z: this.player.z
            };
            this.mapZoom = 1.0;
            this.mapPanOffsetX = 0;
            this.mapPanOffsetY = 0;

            // Hide Three.js canvas, show Isometric canvas
            if (this.renderer && this.renderer.domElement) {
                this.renderer.domElement.style.display = 'none';
            }
            const instEl = document.getElementById('map3d-instructions');
            if (instEl) instEl.style.display = 'none'; // Hide 3D instructions

            if (!this.isometricCanvas) {
                this.initIsometricCanvas();
            }
            this.isometricCanvas.style.display = 'block';
        } else {
            if (this.ui.uiMobileControls) this.ui.uiMobileControls.classList.remove('hidden');
            this.ui.setMap3DVisible(false);
            if (this.isometricCanvas) {
                this.isometricCanvas.style.display = 'none';
            }
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
                    if (val === this.mazeGen.TYPES.WALL || val === this.mazeGen.TYPES.STATUE) {
                        continue;
                    }

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

        const textureLoader = new THREE.TextureLoader();
        const playerTexture = textureLoader.load('assets/images/mage_down_right.png');
        const pMarkerMat = new THREE.SpriteMaterial({ map: playerTexture, depthWrite: false });
        const pMarker = new THREE.Sprite(pMarkerMat);
        pMarker.renderOrder = 99;
        pMarker.scale.set(0.9, 0.9, 1.0);
        pMarker.position.set(Math.floor(this.player.x) - size/2, (this.player.z - size/2) * this.vScale + 0.05, Math.floor(this.player.y) - size/2);
        this.scene.add(pMarker);
        const hGeom = new THREE.SphereGeometry(0.4);
        const hMat = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.8, depthWrite: false });
        
        // Trail materials with lower opacities and emissivities
        const trailMat1 = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, transparent: true, opacity: 0.40, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.3, depthWrite: false });
        const trailMat2 = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, transparent: true, opacity: 0.15, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.1, depthWrite: false });
        const trailGeom = hGeom; // Reutiliza a geometria esférica do monstro

        for (let i = 0; i < this.hunters.length; i++) {
            const h = this.hunters[i];
            if (h.state === 'SLEEP') continue;
            
            // Create trail meshes
            const tMesh2 = new THREE.Mesh(trailGeom, trailMat2); // Oldest
            const tMesh1 = new THREE.Mesh(trailGeom, trailMat1); // Newest
            
            tMesh2.visible = false;
            tMesh1.visible = false;
            
            tMesh2.renderOrder = 99;
            tMesh1.renderOrder = 99;
            
            this.scene.add(tMesh2);
            this.scene.add(tMesh1);

            const hGroup = new THREE.Group();
            hGroup.renderOrder = 99;
            
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
                    emissiveIntensity: 0.8,
                    depthWrite: false
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
        if (this.deathAnimation && this.deathAnimation.active) {
            if (!this.deathAnimation.screenFilled) {
                this.deathAnimation.elapsed += dt;
                if (this.deathAnimation.elapsed >= this.deathAnimation.duration) {
                    this.deathAnimation.screenFilled = true;
                }
            } else {
                this.deathAnimation.glitchElapsed += dt;
                if (!this.deathAnimation.uiTriggered) {
                    this.deathAnimation.uiTriggered = true;
                    this.ui.showDeath(this.hasSavePoint);
                    const el = document.getElementById('game-over-screen');
                    if (el) {
                        el.style.opacity = '0';
                    }
                }
                this.deathAnimation.uiFade = Math.min(1, this.deathAnimation.glitchElapsed / this.deathAnimation.glitchDuration);
                const el = document.getElementById('game-over-screen');
                if (el) {
                    el.style.opacity = this.deathAnimation.uiFade;
                }
            }
        }

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
            
            const distZ = Math.abs(h.visualZ - z);
            const scaleFactor = Math.max(0, 1 - distZ);
            if (scaleFactor <= 0) continue;

            // Calcula o progresso p do passo atual (de 0 a 1) baseado na distância física até o visualX/Y
            const dx = h.x - h.visualX;
            const dy = h.y - h.visualY;
            const stepDist = Math.sqrt(dx * dx + dy * dy);
            const p = Math.max(0, Math.min(1, 1 - stepDist));

            const trails = [];

            // 1. Rastro 1 (mais recente): na posição h.lastPos
            if (h.lastPos && (h.lastPos.x !== h.x || h.lastPos.y !== h.y)) {
                if (h.lastPos.z === z) {
                    const sizeFactor = 0.95 - p * 0.47;
                    const opacityFactor = 0.40 - p * 0.20;
                    trails.push({
                        pos: h.lastPos,
                        sizeFactor,
                        opacityFactor,
                        age: 1
                    });
                }
            }

            // 2. Rastro 2 (mais antigo): na posição anterior do histórico (history[0]) apenas se houver 2 posições consecutivas
            if (h.history && h.history.length === 2) {
                const oldestPos = h.history[0];
                if (oldestPos.z === z) {
                    const sizeFactor = 0.48 * (1 - p);
                    const opacityFactor = 0.20 * (1 - p);
                    if (sizeFactor > 0.01) {
                        trails.push({
                            pos: oldestPos,
                            sizeFactor,
                            opacityFactor,
                            age: 2
                        });
                    }
                }
            }

            // Desenha os rastros interpolados
            trails.forEach((trail) => {
                if (h.lowCanvas) {
                    const cx = trail.pos.x * cellSize + cellSize / 2;
                    const cy = trail.pos.y * cellSize + cellSize / 2;
                    const drawSize = cellSize * trail.sizeFactor * scaleFactor;

                    // MOVIMENTAÇÃO GELATINOSA LENTA DO RASTRO (leve atraso de fase na oscilação)
                    const time = h.jellyTime - trail.age * 0.2;
                    const skewX = Math.sin(time) * 6; 
                    const skewY = Math.cos(time * 0.7) * 4;
                    const scaleX = 1 + Math.sin(time * 1.2) * 0.06;
                    const scaleY = 1 + Math.cos(time * 0.8) * 0.06;
                    
                    const radX = skewX * Math.PI / 180;
                    const radY = skewY * Math.PI / 180;

                    // Desenha o rastro gelatinoso pixelado translúcido
                    ctx.save();
                    ctx.globalAlpha = trail.opacityFactor;
                    ctx.translate(cx, cy);
                    ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                    
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(h.lowCanvas, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
                    ctx.restore();
                }
            });
            if (h.lowCanvas) {
                const cx = h.visualX * cellSize + cellSize / 2;
                const cy = h.visualY * cellSize + cellSize / 2;
                const drawSize = cellSize * 0.95 * scaleFactor; // Contido dentro do limite da célula

                // MOVIMENTAÇÃO GELATINOSA LENTA (Baseada no tempo acumulado do Hunter)
                const time = h.jellyTime;
                const skewX = Math.sin(time) * 6; 
                const skewY = Math.cos(time * 0.7) * 4;
                const scaleX = 1 + Math.sin(time * 1.2) * 0.06;
                const scaleY = 1 + Math.cos(time * 0.8) * 0.06;
                
                const radX = skewX * Math.PI / 180;
                const radY = skewY * Math.PI / 180;

                // 3.1 Desenha a Sombra Gelatinosa (Deslocada à esquerda e acima, luz vinda do canto inferior direito)
                ctx.save();
                const shadowOffsetX = -cellSize * 0.12 * scaleFactor;
                const shadowOffsetY = -cellSize * 0.12 * scaleFactor;
                ctx.translate(cx + shadowOffsetX, cy + shadowOffsetY);
                ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                
                // Filtro para escurecer, aplicar blur e atenuar a opacidade
                ctx.filter = 'brightness(0) blur(1px) opacity(0.35)';
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(h.lowCanvas, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
                ctx.restore();

                // 3.2 Desenha o Núcleo Gelatinoso Real (Sem deslocamento)
                ctx.save();
                ctx.translate(cx, cy);
                ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(h.lowCanvas, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
                ctx.restore();
            }
        }

        // 4. Draw Player (isometric sprite with direction memory and squash/squeeze animation)
        if (!this.deathAnimation || !this.deathAnimation.active) {
            const stateKey = `${this.playerVertical}_${this.playerSide}`;
            const img = this.mageImages[stateKey];
            
            const cx = px * cellSize;
            const cy = py * cellSize;

            // =========================================================
            // AJUSTE DE POSIÇÃO DA SOMBRA DO JOGADOR NO MAPA 2D (MINIMAP) AQUI:
            // =========================================================
            const ox = CONFIG.PLAYER_SHADOW_OFFSET_X !== undefined ? CONFIG.PLAYER_SHADOW_OFFSET_X : -0.28;
            const oy = CONFIG.PLAYER_SHADOW_OFFSET_Y !== undefined ? CONFIG.PLAYER_SHADOW_OFFSET_Y : -0.28;
            const shadowX = cx + cellSize * ox;
            const shadowY = cy + cellSize * oy;

            // Draw flat ground shadow
            ctx.save();
            ctx.beginPath();
            const shadowW = cellSize * 0.45; // <--- Controle a LARGURA aqui (raio horizontal)
            const shadowH = cellSize * 0.30; // <--- Controle a ALTURA aqui (raio vertical)
            ctx.ellipse(shadowX, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fill();
            ctx.restore();

            if (img && img.complete) {
                ctx.save();
                
                const drawSize = cellSize * 0.90; 
                const imgW = drawSize;
                const imgH = drawSize * (img.height / img.width);
                
                // Translate to bottom center for squishing anchor
                ctx.translate(cx, cy);
                ctx.scale(this.playerSquashX || 1, this.playerSquashY || 1);
                
                // AJUSTE O ALINHAMENTO VERTICAL VISUAL DO MAGO AQUI:
                const offsetY = -imgH * 0.85;
                ctx.drawImage(img, -imgW / 2, offsetY, imgW, imgH);
                ctx.restore();
            } else {
                // Fallback to original ball and direction line if image is not loaded
                ctx.save();
                ctx.strokeStyle = CONFIG.COLORS.PLAYER_OUTLINE;
                ctx.lineWidth = 1;
                ctx.strokeRect(pCellX * cellSize + 2, pCellY * cellSize + 2, cellSize - 4, cellSize - 4);
                ctx.restore();
                
                ctx.fillStyle = CONFIG.COLORS.PLAYER;
                ctx.beginPath();
                ctx.arc(cx, cy, cellSize * 0.4, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.strokeStyle = CONFIG.COLORS.PLAYER;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(this.player.dir) * cellSize * 1, cy + Math.sin(this.player.dir) * cellSize * 1);
                ctx.stroke();
            }

            if (CONFIG.SHOW_COLLISION_DEBUG) {
                ctx.save();
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 1.5;
                const boxSize = CONFIG.PLAYER_COLLISION_RADIUS * 2 * cellSize;
                const drawOffsetX = (CONFIG.PLAYER_COLLISION_OFFSET_X || 0) * cellSize;
                const drawOffsetY = (CONFIG.PLAYER_COLLISION_OFFSET_Y || 0) * cellSize;
                ctx.strokeRect(cx + drawOffsetX - boxSize / 2, cy + drawOffsetY - boxSize / 2, boxSize, boxSize);
                ctx.restore();
            }
        }

        // Draw floating micro-notification box above the player
        if (this.activeNotification) {
            const n = this.activeNotification;
            ctx.save();
            
            ctx.font = `bold ${cellSize * 0.22}px monospace`;
            const textWidth = ctx.measureText(n.text).width;
            const padding = cellSize * 0.4;
            const totalWidth = textWidth + padding;
            const H = cellSize * 0.48;
            
            const X = px * cellSize;
            const Y = py * cellSize - cellSize * 1.5;
            
            let W = totalWidth;
            if (n.state === "OPENING") {
                W = totalWidth * n.widthProgress;
            } else if (n.state === "CLOSING") {
                W = totalWidth * n.closeProgress;
            }
            
            // Limites de ajuste do labirinto (container) para evitar estouro nas bordas
            const mazeWidth = this.mazeGen.size * cellSize;
            const mazeHeight = this.mazeGen.size * cellSize;
            
            let renderX = X;
            if (renderX - W/2 < 0) {
                renderX = W/2;
            } else if (renderX + W/2 > mazeWidth) {
                renderX = mazeWidth - W/2;
            }
            
            let renderY = Y;
            if (renderY - H/2 < 0) {
                renderY = H/2;
            } else if (renderY + H/2 > mazeHeight) {
                renderY = mazeHeight - H/2;
            }
            
            // Preenchimento preto
            ctx.fillStyle = '#000000';
            ctx.fillRect(renderX - W/2, renderY - H/2, W, H);
            
            // Borda azul neon
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = Math.max(1.5, cellSize * 0.04);
            ctx.strokeRect(renderX - W/2, renderY - H/2, W, H);
            
            // Desenha o texto apenas se a janela estiver aberta
            if (n.state === "TYPING" || n.state === "WAITING") {
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(n.displayText, renderX, renderY);
            }
            
            ctx.restore();
        }

        if (useZoom) {
            ctx.restore();
        }

        // Draw death animation corruption / glitch overlay
        if (this.deathAnimation && this.deathAnimation.active) {
            const h = this.deathAnimation.hunter;
            
            // Calcula o centro do hunter na tela
            let screenX, screenY;
            if (useZoom) {
                const scaleTransition = 11 / this.zoomVisibleCells;
                const half = this.zoomVisibleCells / 2;
                let camX = px;
                let camY = py;
                if (camX < half) camX = half;
                if (camX > size - half) camX = size - half;
                if (camY < half) camY = half;
                if (camY > size - half) camY = size - half;
                
                const cx = ctx.canvas.width / 2;
                const cy = ctx.canvas.height / 2;
                screenX = cx + (h.visualX + 0.5 - camX) * cellSize * scaleTransition;
                screenY = cy + (h.visualY + 0.5 - camY) * cellSize * scaleTransition;
            } else {
                screenX = (h.visualX + 0.5) * cellSize;
                screenY = (h.visualY + 0.5) * cellSize;
            }

            if (!this.deathAnimation.screenFilled) {
                const maxRadius = Math.hypot(ctx.canvas.width, ctx.canvas.height) * 1.1;
                const progress = this.deathAnimation.elapsed / this.deathAnimation.duration;
                // Easing in out para a expansão da corrupção
                const t = progress * progress * (3 - 2 * progress); // smoothstep
                const currentRadius = t * maxRadius;

                ctx.save();
                ctx.beginPath();
                ctx.arc(screenX, screenY, currentRadius, 0, Math.PI * 2);
                ctx.clip();

                // Fundo roxo bem escuro corrompido
                ctx.fillStyle = 'rgba(15, 0, 25, 0.96)';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                // Desenha glitches internos
                const numGlitches = 45;
                const baseScale = useZoom ? (11 / this.zoomVisibleCells) : 1;
                for (let i = 0; i < numGlitches; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    // Distribui mais glitches na borda para um efeito orgânico
                    const dist = Math.pow(Math.random(), 0.7) * currentRadius;
                    const gx = screenX + Math.cos(angle) * dist;
                    const gy = screenY + Math.sin(angle) * dist;
                    const gw = (15 + Math.random() * 70) * baseScale;
                    const gh = (3 + Math.random() * 12) * baseScale;

                    const r = 80 + Math.floor(Math.random() * 50);
                    const g = Math.floor(Math.random() * 25);
                    const b = 130 + Math.floor(Math.random() * 70);
                    ctx.fillStyle = Math.random() < 0.12 ? '#00ff66' : 
                                    Math.random() < 0.12 ? '#00ccff' : 
                                    Math.random() < 0.08 ? '#ffffff' : `rgb(${r},${g},${b})`;
                    ctx.fillRect(gx - gw/2, gy - gh/2, gw, gh);
                }

                // Trovões internos ocasionais
                if (Math.random() < 0.3) {
                    ctx.fillStyle = Math.random() < 0.7 ? '#ffffff' : '#b3ffff';
                    const tx = screenX + (Math.random() - 0.5) * currentRadius * 0.8;
                    const ty = screenY + (Math.random() - 0.5) * currentRadius * 0.8;
                    const tw = (2 + Math.random() * 5) * baseScale;
                    const th = (10 + Math.random() * 30) * baseScale;
                    ctx.fillRect(tx - tw/2, ty - th/2, tw, th);
                }

                ctx.restore();
            } else {
                // Tela totalmente preenchida pela corrupção -> efeito de glitch contínuo
                ctx.fillStyle = 'rgba(10, 0, 15, 1.0)';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                // Desenha scanlines horizontais de ruído digital
                ctx.fillStyle = 'rgba(138, 3, 196, 0.08)';
                for (let y = 0; y < ctx.canvas.height; y += 6) {
                    if (Math.random() < 0.6) {
                        ctx.fillRect(0, y + Math.sin(Date.now() * 0.01 + y) * 2, ctx.canvas.width, 2);
                    }
                }

                // Desenha blocos gigantes de glitch coloridos que piscam e se movem rapidamente
                const numBlocks = Math.floor(Math.random() * 5) + 3;
                const colors = ['#00ff66', '#ff0055', '#00ccff', '#ffff00', '#8a03c4', '#ffffff'];
                for (let i = 0; i < numBlocks; i++) {
                    const bx = Math.random() * ctx.canvas.width;
                    const by = Math.random() * ctx.canvas.height;
                    const bw = 80 + Math.random() * 250;
                    const bh = 8 + Math.random() * 30;
                    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    ctx.globalAlpha = 0.12 + Math.random() * 0.18;
                    ctx.fillRect(bx, by, bw, bh);
                }
                ctx.globalAlpha = 1.0;

                // Deslocamento de fatias horizontais da própria imagem da tela (horizontal screen displacement glitch)
                if (Math.random() < 0.35) {
                    const sy = Math.floor(Math.random() * ctx.canvas.height);
                    const sh = 15 + Math.floor(Math.random() * 80);
                    const shift = Math.floor(Math.random() * 40) - 20;
                    ctx.drawImage(ctx.canvas, 0, sy, ctx.canvas.width, sh, shift, sy, ctx.canvas.width, sh);
                }

                // Estática branca/cinza fina ocasional
                if (Math.random() < 0.15) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                    ctx.fillRect(0, Math.random() * ctx.canvas.height, ctx.canvas.width, 5 + Math.random() * 20);
                }
            }
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
                
                if (val === this.mazeGen.TYPES.STATUE) {
                    drawCellWithFade(x, y, () => {
                        // 1. Draw floor tile first
                        if (this.floorImage.complete && this.floorImage.naturalWidth !== 0) {
                            ctx.drawImage(this.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                        
                        // 2. Draw ground shadow for the statue
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                        ctx.beginPath();
                        ctx.ellipse(
                            x * cellSize + cellSize / 2,
                            (y + 1) * cellSize - cellSize * 0.15,
                            cellSize * 0.35,
                            cellSize * 0.12,
                            0, 0, Math.PI * 2
                        );
                        ctx.fill();

                        // 3. Draw Statue Image aligned by its bottom center
                        if (this.statueImage.complete && this.statueImage.naturalWidth !== 0) {
                            const aspect = this.statueImage.width / this.statueImage.height;
                            const targetWidth = cellSize * 0.85;
                            const targetHeight = targetWidth / aspect;
                            const cx = x * cellSize + cellSize / 2;
                            const bottomY = (y + 1) * cellSize - cellSize * 0.05; // slightly offset from cell bottom border
                            ctx.drawImage(
                                this.statueImage,
                                cx - targetWidth / 2,
                                bottomY - targetHeight,
                                targetWidth,
                                targetHeight
                            );
                        } else {
                            // Fallback
                            ctx.fillStyle = '#555555';
                            ctx.fillRect(x * cellSize + cellSize * 0.3, y * cellSize + cellSize * 0.1, cellSize * 0.4, cellSize * 0.8);
                        }
                    });
                    continue;
                }

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
                else if (val === 0 && (this.isNearVisited(x, y, z) || this.isAdjacentToStatue(x, y, z))) {
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

    isAdjacentToStatue(x, y, z) {
        const size = this.mazeGen.size;
        const dirs = [
            { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
            { dx: 0, dy: 1 }, { dx: 0, dy: -1 },
            { dx: 1, dy: 1 }, { dx: -1, dy: 1 },
            { dx: 1, dy: -1 }, { dx: -1, dy: -1 }
        ];
        for (const d of dirs) {
            const nx = x + d.dx;
            const ny = y + d.dy;
            if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                if (this.maze.get(nx, ny, z) === this.mazeGen.TYPES.STATUE) {
                    return true;
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
            if (this.isIntroPlaying) {
                this.renderer.render(this.scene, this.camera);
            } else {
                const lerpSpeed = 10;
                const ease = 1 - Math.exp(-lerpSpeed * clampedDt);
                this.visualActiveFloor += (this.activeMapFloor - this.visualActiveFloor) * ease;
                if (Math.abs(this.activeMapFloor - this.visualActiveFloor) < 0.001) {
                    this.visualActiveFloor = this.activeMapFloor;
                }
                this.drawIsometricMap();
            }
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

        // Ensure 3D canvas and instructions are visible, and isometric map canvas is hidden
        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.style.display = 'block';
        }
        const instEl = document.getElementById('map3d-instructions');
        if (instEl) instEl.style.display = 'block';
        if (this.isometricCanvas) {
            this.isometricCanvas.style.display = 'none';
        }

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

        // Ensure 3D canvas and instructions are visible, and isometric map canvas is hidden
        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.style.display = 'block';
        }
        const instEl = document.getElementById('map3d-instructions');
        if (instEl) instEl.style.display = 'block';
        if (this.isometricCanvas) {
            this.isometricCanvas.style.display = 'none';
        }

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
            color: 0xff3300, emissive: 0xff3300,
            emissiveIntensity: 0.6, transparent: true, opacity: 0.95
        });
        const exitMesh = new THREE.Mesh(markerGeom, exitMat);
        exitMesh.position.set(
            exitPos.x - size / 2,
            (exitPos.z - size / 2) * this.vScale,
            exitPos.y - size / 2
        );
        const cageGeom = new THREE.BoxGeometry(0.95, 0.95, 0.95);
        const cageMat = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
        const cageMesh = new THREE.Mesh(cageGeom, cageMat);
        exitMesh.add(cageMesh);
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
            const bottomHud = document.getElementById('bottom-hud-container');
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
            if (bottomHud) {
                bottomHud.classList.remove('intro-hidden');
                bottomHud.classList.add('intro-reveal');
                setTimeout(() => bottomHud.classList.remove('intro-reveal'), 700);
            }

            if (!this.isResumedFromSave) {
                this.ui.showInfoBanner(getTranslation('msgWhereAmI'));
            }
        }, 600);
    }

    toggleTeleportMap(show) {
        this.isMap3DActive = show;
        this.isTeleportMode = show;
        
        const telExitBtn = document.getElementById('mobile-teleport-exit-btn');
        
        if (show) {
            if (telExitBtn) telExitBtn.classList.remove('hidden');
            if (this.ui.uiMobileControls) this.ui.uiMobileControls.classList.add('hidden');
            this.ui.setMap3DVisible(true);
            
            // Re-center active floor and cursor to player position
            this.activeMapFloor = this.player.z;
            this.visualActiveFloor = this.player.z;
            this.mapCursor = {
                x: Math.floor(this.player.x),
                y: Math.floor(this.player.y),
                z: this.player.z
            };
            this.mapZoom = 1.0;
            this.mapPanOffsetX = 0;
            this.mapPanOffsetY = 0;

            // Re-sync selectedTeleportIndex to the current player position
            const px = Math.floor(this.player.x);
            const py = Math.floor(this.player.y);
            const pz = this.player.z;
            const currentIdx = this.allTeleports.findIndex(
                t => t.x === px && t.y === py && t.z === pz
            );
            if (currentIdx !== -1) {
                this.selectedTeleportIndex = currentIdx;
            }

            // Hide WebGL and show Isometric 2D
            if (this.renderer && this.renderer.domElement) {
                this.renderer.domElement.style.display = 'none';
            }
            const instEl = document.getElementById('map3d-instructions');
            if (instEl) instEl.style.display = 'none';

            if (!this.isometricCanvas) {
                this.initIsometricCanvas();
            } else {
                this.isometricCanvas.style.display = 'block';
            }
            
            this.teleportConfirmModalActive = false;
        } else {
            if (telExitBtn) telExitBtn.classList.add('hidden');
            if (this.ui.uiMobileControls) this.ui.uiMobileControls.classList.remove('hidden');
            this.ui.setMap3DVisible(false);
            if (this.isometricCanvas) {
                this.isometricCanvas.style.display = 'none';
            }
            this.teleportConfirmModalActive = false;
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
                    const isClickedShaft = x === end.x && y === end.y && (z === end.z - 1 || z === end.z + 1) && z % 2 === 0;

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
                        isPassable = isVisited || isPlayerStart || isTargetEnd || isClickedShaft;
                    } else {
                        isPassable = isVisited || isKnown || isPlayerStart || isTargetEnd || isClickedShaft;
                    }

                    tempMaze[idx] = isPassable ? 1 : 0;
                }
            }
        }
        return aStarPath(start, end, tempMaze, size, 0) ?? [];
    }

    triggerPathReveal(tx, ty, tz) {
        if (this.pathRevealInterval || (this.pathfinderBlockedUntil && Date.now() < this.pathfinderBlockedUntil)) {
            return;
        }

        if (this.pathfindersRemaining <= 0) {
            this.ui.showInfoBanner(getTranslation('msgNoPathfindersRemaining'));
            return;
        }

        if (this.pathRevealInterval) {
            clearInterval(this.pathRevealInterval);
            this.pathRevealInterval = null;
        }
        this.revealedPathSet.clear();

        const isExitClicked = this.maze.get(tx, ty, tz) === this.mazeGen.TYPES.EXIT;
        if (isExitClicked) {
            if (!this.exitPathfinderUnlocked) {
                this.ui.showInfoBanner(getTranslation('msgExitNotFoundYet'));
                return;
            }
        }

        let targetZ = tz;
        if (tz % 2 === 0) {
            // Se o destino for um poço de elevador (par), redireciona para o andar jogável (ímpar) do outro lado da cabine em relação ao jogador
            targetZ = (this.player.z < tz) ? (tz + 1) : (tz - 1);
            if (targetZ < 1) targetZ = 1;
            if (targetZ >= this.mazeGen.size) targetZ = this.mazeGen.size - 2;
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
                this.pathfinderBlockedUntil = Date.now() + 600;
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

        if (!this.isSafeMode) {
            const nTicks = Math.floor(this.degree * 1.5) + 3;
            this.teleportCooldownTicks = nTicks;
            this.inactiveTeleportPos = { x, y, z };

            this.ui.showInfoBanner(getTranslation('msgOopsNoisyShit'));

            for (const hunter of this.hunters) {
                hunter.state = 'TELEPORT_TRACKING';
                const path = hunter.findPathToTarget({ x, y, z }, this.maze, this.mazeGen.TYPES);
                if (path) {
                    hunter.pathToTarget = path;
                } else {
                    hunter.pathToTarget = [];
                }
            }
        }
        
        this.updateFloorUI();
        this.draw2DMap();
        this.input.keys = {};
    }

    initIsometricCanvas() {
        this.isometricCanvas = document.createElement('canvas');
        this.isometricCanvas.id = 'isometric-map-canvas';
        this.isometricCanvas.style.position = 'absolute';
        this.isometricCanvas.style.top = '0';
        this.isometricCanvas.style.left = '0';
        this.isometricCanvas.style.width = '100%';
        this.isometricCanvas.style.height = '100%';
        this.isometricCanvas.style.zIndex = '101';
        this.isometricCtx = this.isometricCanvas.getContext('2d');
        this.ui.uiMap3dContainer.appendChild(this.isometricCanvas);

        // Click handler
        this.isometricCanvas.addEventListener('click', (e) => this.handleIsometricClick(e));

        // Touch gestures handler (Pinch zoom, vertical swipe to change floors, drag to pan)
        let initialTouchDist = null;
        let initialZoom = null;
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartPanX = 0;
        let touchStartPanY = 0;
        let isPinchZooming = false;
        let isTouchPanning = false;
        let hasSwipedFloor = false;
        let totalTouchMoveDist = 0;

        this.isometricCanvas.addEventListener('touchstart', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;

            totalTouchMoveDist = 0;
            hasSwipedFloor = false;

            if (e.touches.length === 1) {
                const touch = e.touches[0];
                touchStartX = touch.clientX;
                touchStartY = touch.clientY;
                touchStartPanX = this.mapPanOffsetX;
                touchStartPanY = this.mapPanOffsetY;
                isTouchPanning = true;
                isPinchZooming = false;
            } else if (e.touches.length === 2) {
                isPinchZooming = true;
                isTouchPanning = false;
                const t1 = e.touches[0];
                const t2 = e.touches[1];
                initialTouchDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
                initialZoom = this.mapZoom;
            }
        }, { passive: false });

        this.isometricCanvas.addEventListener('touchmove', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;

            if (isPinchZooming && e.touches.length === 2) {
                e.preventDefault();
                const t1 = e.touches[0];
                const t2 = e.touches[1];
                const currentDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
                if (initialTouchDist > 0) {
                    const rect = this.isometricCanvas.getBoundingClientRect();
                    const touchCenterX = (t1.clientX + t2.clientX) / 2 - rect.left;
                    const touchCenterY = (t1.clientY + t2.clientY) / 2 - rect.top;

                    const oldZoom = this.mapZoom;
                    let newZoom = initialZoom * (currentDist / initialTouchDist);
                    newZoom = Math.max(0.5, Math.min(4.0, newZoom));

                    const ratio = newZoom / oldZoom;
                    this.mapPanOffsetX = touchCenterX - (touchCenterX - (rect.width / 2 + this.mapPanOffsetX)) * ratio - rect.width / 2;
                    this.mapPanOffsetY = touchCenterY - (touchCenterY - (rect.height / 2 + this.mapPanOffsetY)) * ratio - rect.height / 2;

                    this.mapZoom = newZoom;
                    totalTouchMoveDist = 100; // prevent click
                }
            } else if (isTouchPanning && e.touches.length === 1) {
                const touch = e.touches[0];
                const deltaX = touch.clientX - touchStartX;
                const deltaY = touch.clientY - touchStartY;
                const moveDist = Math.hypot(deltaX, deltaY);
                totalTouchMoveDist = Math.max(totalTouchMoveDist, moveDist);

                // Vertical swipe gesture for mobile floor navigation
                if (!hasSwipedFloor) {
                    if (Math.abs(deltaY) > 40 && Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
                        const size = this.mazeGen.size;
                        if (deltaY < -40) {
                            // Swipe UP -> Floor Up
                            if (this.activeMapFloor + 2 <= size - 2) {
                                this.activeMapFloor += 2;
                                hasSwipedFloor = true;
                            }
                        } else if (deltaY > 40) {
                            // Swipe DOWN -> Floor Down
                            if (this.activeMapFloor - 2 >= 1) {
                                this.activeMapFloor -= 2;
                                hasSwipedFloor = true;
                            }
                        }
                    }
                }

                if (!hasSwipedFloor) {
                    // Normal panning
                    this.mapPanOffsetX = touchStartPanX + deltaX;
                    this.mapPanOffsetY = touchStartPanY + deltaY;
                }
                e.preventDefault();
            }
        }, { passive: false });

        this.isometricCanvas.addEventListener('touchend', (e) => {
            isPinchZooming = false;
            isTouchPanning = false;

            // Trigger click only if touch moved very little and didn't swipe floor
            if (totalTouchMoveDist < 8 && !hasSwipedFloor) {
                const touch = e.changedTouches[0];
                if (touch) {
                    const dummyEvent = {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    };
                    this.handleIsometricClick(dummyEvent);
                }
            }
        });

        // Mouse wheel zoom
        this.isometricCanvas.addEventListener('wheel', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;
            e.preventDefault();

            const rect = this.isometricCanvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const oldZoom = this.mapZoom;
            const factor = 1.15;
            let newZoom = e.deltaY < 0 ? oldZoom * factor : oldZoom / factor;
            newZoom = Math.max(0.5, Math.min(4.0, newZoom));

            const width = rect.width;
            const height = rect.height;

            const ratio = newZoom / oldZoom;
            this.mapPanOffsetX = mouseX - (mouseX - (width / 2 + this.mapPanOffsetX)) * ratio - width / 2;
            this.mapPanOffsetY = mouseY - (mouseY - (height / 2 + this.mapPanOffsetY)) * ratio - height / 2;

            this.mapZoom = newZoom;
        }, { passive: false });

        // Mouse Drag to Pan
        let isDragging = false;
        let dragStartX = 0;
        let dragStartY = 0;

        this.isometricCanvas.addEventListener('mousedown', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;
            const rect = this.isometricCanvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Check if clicked floor selectors
            if (this.floorClickRects && this.floorClickRects.some(r => clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h)) {
                return;
            }
            // Check if clicked teleport dots
            if (this.isTeleportMode) {
                if (this.teleportConfirmModalActive && this.teleportModalClickRects && this.teleportModalClickRects.some(r => clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h)) {
                    return;
                }
                if (!this.teleportConfirmModalActive && this.teleportDotsClickRects && this.teleportDotsClickRects.some(r => clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h)) {
                    return;
                }
            }

            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const dx = e.clientX - dragStartX;
                const dy = e.clientY - dragStartY;
                this.mapPanOffsetX += dx;
                this.mapPanOffsetY += dy;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
            }
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Hover handler
        this.isometricCanvas.addEventListener('mousemove', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;

            const rect = this.isometricCanvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            this.isometricCanvas.style.cursor = 'default';

            // 1. Check Teleport Mode Hover
            if (this.isTeleportMode) {
                if (this.teleportConfirmModalActive && this.teleportModalClickRects) {
                    for (const r of this.teleportModalClickRects) {
                        if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                            this.teleportModalSelection = r.selection;
                            this.isometricCanvas.style.cursor = 'pointer';
                            return;
                        }
                    }
                } else if (this.teleportDotsClickRects) {
                    const selectable = this.getSelectableTeleportIndices();
                    for (const r of this.teleportDotsClickRects) {
                        if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                            if (selectable.includes(r.index)) {
                                this.selectedTeleportIndex = r.index;
                                const targetT = this.allTeleports[r.index];
                                this.activeMapFloor = targetT.z;
                                this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                                this.isometricCanvas.style.cursor = 'pointer';
                                return;
                            }
                        }
                    }
                }
            }

            // 2. Normal Map Hover (Only outside teleport mode)
            if (!this.isTeleportMode) {
                const size = this.mazeGen.size;
                const activeZ = this.activeMapFloor;

                let baseTileWidth = (rect.width * 0.7) / size;
                baseTileWidth = Math.max(20, Math.min(48, baseTileWidth));
                const tileWidth = baseTileWidth * this.mapZoom;
                const tileWidthHalf = tileWidth / 2;
                const tileHeightHalf = tileWidth / 4;
                const floorOffset = tileWidthHalf * 5;

                const centerX = rect.width / 2 + this.mapPanOffsetX;
                const centerY = rect.height / 2 + this.mapPanOffsetY;

                const floorsToTest = [];
                if (activeZ + 2 <= size - 2) floorsToTest.push(activeZ + 2);
                if (activeZ + 1 < size) floorsToTest.push(activeZ + 1);
                floorsToTest.push(activeZ);
                if (activeZ - 1 >= 0) floorsToTest.push(activeZ - 1);
                if (activeZ - 2 >= 1) floorsToTest.push(activeZ - 2);

                for (const z of floorsToTest) {
                    const Y_offset_adjusted = centerY - (z - activeZ) * floorOffset;
                    const A = (clickX - centerX) / tileWidthHalf;
                    const B = (clickY - Y_offset_adjusted) / tileHeightHalf;

                    const x = Math.round((A + B) / 2);
                    const y = Math.round((B - A) / 2);

                    if (x >= 0 && x < size && y >= 0 && y < size) {
                        const elements = this.getInteractiveElements(activeZ);
                        const isInteractive = elements.some(el => el.x === x && el.y === y && el.z === z);
                        if (isInteractive) {
                            this.mapCursor = { x, y, z };
                            this.isometricCanvas.style.cursor = 'pointer';
                            return;
                        }
                    }
                }
            }

        });
    }

    handleIsometricClick(event) {
        if (!this.isMap3DActive || this.isIntroPlaying) return;

        const rect = this.isometricCanvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // Teleport Selection Click Checks
        if (this.isTeleportMode) {
            if (this.teleportConfirmModalActive) {
                if (this.teleportModalClickRects) {
                    for (const r of this.teleportModalClickRects) {
                        if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                            if (r.selection === 'go') {
                                const targetT = this.allTeleports[this.selectedTeleportIndex];
                                this.teleportTo(targetT.x, targetT.y, targetT.z);
                                this.toggleTeleportMap(false);
                            } else {
                                this.teleportConfirmModalActive = false;
                            }
                            return;
                        }
                    }
                }
                // Click outside modal cancels it
                this.teleportConfirmModalActive = false;
                return;
            }

            if (this.teleportDotsClickRects) {
                const match = this.teleportDotsClickRects.find(r => clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h);
                if (match) {
                    const selectable = this.getSelectableTeleportIndices();
                    if (selectable.includes(match.index)) {
                        if (this.selectedTeleportIndex === match.index) {
                            this.teleportConfirmModalActive = true;
                            this.teleportModalSelection = 'go';
                        } else {
                            this.selectedTeleportIndex = match.index;
                            const targetT = this.allTeleports[match.index];
                            this.activeMapFloor = targetT.z;
                            this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        }
                    }
                    return;
                }
            }
        }

        // 1. Check if clicked on a floor box
        if (this.floorClickRects) {
            for (const r of this.floorClickRects) {
                if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                    this.activeMapFloor = r.floor;
                    return;
                }
            }
        }

        // 2. Geometry calculations
        const size = this.mazeGen.size;
        const activeZ = this.activeMapFloor;

        let baseTileWidth = (rect.width * 0.7) / size;
        baseTileWidth = Math.max(20, Math.min(48, baseTileWidth));
        const tileWidth = baseTileWidth * this.mapZoom;
        const tileWidthHalf = tileWidth / 2;
        const tileHeightHalf = tileWidth / 4;
        const floorOffset = tileWidthHalf * 5;

        const centerX = rect.width / 2 + this.mapPanOffsetX;
        const centerY = rect.height / 2 + this.mapPanOffsetY;

        const getIsoCoords = (x, y, z) => {
            const px = (x - y) * tileWidthHalf + centerX;
            const py = (x + y) * tileHeightHalf - (z - activeZ) * floorOffset + centerY;
            return { x: px, y: py };
        };

        // If in teleport mode, block all map cell clicks
        if (this.isTeleportMode) {
            return;
        }

        // Check if clicked close to any interactive shaft dot (generous target for mobile)
        const elements = this.getInteractiveElements(activeZ);
        const shaftElements = elements.filter(el => el.type === 'shaft');
        let closestShaft = null;
        let minShaftDist = Infinity;
        const maxShaftClickRadius = 35; 
        
        for (const el of shaftElements) {
            const coords = getIsoCoords(el.x, el.y, el.z);
            const dx = clickX - coords.x;
            const dy = clickY - coords.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minShaftDist) {
                minShaftDist = dist;
                closestShaft = el;
            }
        }
        
        if (closestShaft && minShaftDist <= maxShaftClickRadius) {
            this.mapCursor = { x: closestShaft.x, y: closestShaft.y, z: closestShaft.z };
            this.triggerPathReveal(closestShaft.x, closestShaft.y, closestShaft.z);
            return;
        }

        const floorsToTest = [];
        if (activeZ + 2 <= size - 2) floorsToTest.push(activeZ + 2);
        if (activeZ + 1 < size) floorsToTest.push(activeZ + 1);
        floorsToTest.push(activeZ);
        if (activeZ - 1 >= 0) floorsToTest.push(activeZ - 1);
        if (activeZ - 2 >= 1) floorsToTest.push(activeZ - 2);

        for (const z of floorsToTest) {
            const Y_offset_adjusted = centerY - (z - activeZ) * floorOffset;
            const A = (clickX - centerX) / tileWidthHalf;
            const B = (clickY - Y_offset_adjusted) / tileHeightHalf;

            const x = Math.round((A + B) / 2);
            const y = Math.round((B - A) / 2);

            if (x >= 0 && x < size && y >= 0 && y < size) {
                const elements = this.getInteractiveElements(activeZ);
                const isInteractive = elements.some(el => el.x === x && el.y === y && el.z === z);
                
                if (isInteractive) {
                    if (this.isTeleportMode) {
                        const targetTeleport = elements.find(el => el.x === x && el.y === y && el.z === z && el.type === 'teleport');
                        if (targetTeleport) {
                            const index = this.allTeleports.findIndex(t => t.x === x && t.y === y && t.z === z);
                            const selectable = this.getSelectableTeleportIndices();
                            if (index !== -1 && selectable.includes(index)) {
                                if (this.selectedTeleportIndex === index) {
                                    this.teleportConfirmModalActive = true;
                                    this.teleportModalSelection = 'go';
                                } else {
                                    this.selectedTeleportIndex = index;
                                    this.mapCursor = { x, y, z };
                                }
                            }
                        }
                    } else {
                        this.mapCursor = { x, y, z };
                        this.triggerPathReveal(x, y, z);
                    }
                    return;
                }
            }
        }
    }

    navigateCursor(direction) {
        const activeZ = this.activeMapFloor;
        const elements = this.getInteractiveElements(activeZ);
        if (elements.length === 0) return;

        const cx = this.mapCursor.x;
        const cy = this.mapCursor.y;
        const cz = this.mapCursor.z;
        const size = this.mazeGen.size;

        if (direction === 'left') {
            const other = elements.find(e => e.x === cx && e.y === cy && e.z === activeZ + 1 && cz === activeZ - 1);
            if (other) {
                this.mapCursor = { x: cx, y: cy, z: activeZ + 1 };
                return;
            }

            for (let x = cx - 1; x >= 0; x--) {
                const candidates = elements.filter(e => e.x === x && e.y === cy);
                if (candidates.length > 0) {
                    const hasDown = candidates.find(c => c.z === activeZ - 1);
                    const hasUp = candidates.find(c => c.z === activeZ + 1);
                    if (hasDown && hasUp) {
                        this.mapCursor = { x, y: cy, z: activeZ - 1 };
                    } else {
                        this.mapCursor = { x, y: cy, z: candidates[0].z };
                    }
                    return;
                }
            }
        } else if (direction === 'right') {
            const other = elements.find(e => e.x === cx && e.y === cy && e.z === activeZ - 1 && cz === activeZ + 1);
            if (other) {
                this.mapCursor = { x: cx, y: cy, z: activeZ - 1 };
                return;
            }

            for (let x = cx + 1; x < size; x++) {
                const candidates = elements.filter(e => e.x === x && e.y === cy);
                if (candidates.length > 0) {
                    const hasDown = candidates.find(c => c.z === activeZ - 1);
                    const hasUp = candidates.find(c => c.z === activeZ + 1);
                    if (hasDown && hasUp) {
                        this.mapCursor = { x, y: cy, z: activeZ + 1 };
                    } else {
                        this.mapCursor = { x, y: cy, z: candidates[0].z };
                    }
                    return;
                }
            }
        } else if (direction === 'up') {
            const other = elements.find(e => e.x === cx && e.y === cy && e.z === activeZ - 1 && cz === activeZ + 1);
            if (other) {
                this.mapCursor = { x: cx, y: cy, z: activeZ - 1 };
                return;
            }

            for (let y = cy - 1; y >= 0; y--) {
                const candidates = elements.filter(e => e.y === y);
                if (candidates.length > 0) {
                    let bestX = -1;
                    let minDist = Infinity;
                    for (const c of candidates) {
                        const dist = Math.abs(c.x - cx);
                        if (dist < minDist) {
                            minDist = dist;
                            bestX = c.x;
                        } else if (dist === minDist && c.x < bestX) {
                            bestX = c.x;
                        }
                    }

                    const bestCandidates = candidates.filter(c => c.x === bestX);
                    const hasDown = bestCandidates.find(c => c.z === activeZ - 1);
                    const hasUp = bestCandidates.find(c => c.z === activeZ + 1);
                    if (hasDown && hasUp) {
                        this.mapCursor = { x: bestX, y, z: activeZ + 1 };
                    } else {
                        this.mapCursor = { x: bestX, y, z: bestCandidates[0].z };
                    }
                    return;
                }
            }
        } else if (direction === 'down') {
            const other = elements.find(e => e.x === cx && e.y === cy && e.z === activeZ + 1 && cz === activeZ - 1);
            if (other) {
                this.mapCursor = { x: cx, y: cy, z: activeZ + 1 };
                return;
            }

            for (let y = cy + 1; y < size; y++) {
                const candidates = elements.filter(e => e.y === y);
                if (candidates.length > 0) {
                    let bestX = -1;
                    let minDist = Infinity;
                    for (const c of candidates) {
                        const dist = Math.abs(c.x - cx);
                        if (dist < minDist) {
                            minDist = dist;
                            bestX = c.x;
                        } else if (dist === minDist && c.x < bestX) {
                            bestX = c.x;
                        }
                    }

                    const bestCandidates = candidates.filter(c => c.x === bestX);
                    const hasDown = bestCandidates.find(c => c.z === activeZ - 1);
                    const hasUp = bestCandidates.find(c => c.z === activeZ + 1);
                    if (hasDown && hasUp) {
                        this.mapCursor = { x: bestX, y, z: activeZ - 1 };
                    } else {
                        this.mapCursor = { x: bestX, y, z: bestCandidates[0].z };
                    }
                    return;
                }
            }
        }
    }

    getInteractiveElements(activeZ) {
        const elements = [];
        const size = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;

        const isFloorVisited = (fx, fy, fz) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.maze.get(fx, fy, fz);
            return fVal === TYPES.VISITED || fVal === TYPES.START || fVal === TYPES.ELEVATOR_VISITED || (fVal === TYPES.TELEPORT && this.discoveredTeleports.has(`${fx},${fy},${fz}`));
        };

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const val = this.maze.get(x, y, activeZ);
                if (val === TYPES.WALL) continue;

                const isTeleport = val === TYPES.TELEPORT;
                const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${activeZ}`);
                
                if (isTeleportDiscovered) {
                    elements.push({ x, y, z: activeZ, type: 'teleport' });
                    continue;
                }
                
                if (val === TYPES.START) {
                    elements.push({ x, y, z: activeZ, type: 'start' });
                    continue;
                }

                if (val === TYPES.EXIT) {
                    if (this.keysCollected === this.totalKeys && this.exitPathfinderUnlocked) {
                        elements.push({ x, y, z: activeZ, type: 'exit' });
                    }
                    continue;
                }

                const isKnown = (val === TYPES.PATH || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, activeZ);
                if (isKnown) {
                    elements.push({ x, y, z: activeZ, type: 'known' });
                }
            }
        }

        for (const z of [activeZ - 1, activeZ + 1]) {
            if (z < 0 || z >= size || z - 1 < 1 || z + 1 >= size) continue;
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    const val = this.maze.get(x, y, z);
                    if (val === TYPES.WALL) continue;

                    const isShaftVisited = val === TYPES.ELEVATOR_VISITED;
                    const isShaftKnown = (val === 1) && (isFloorVisited(x, y, z - 1) || isFloorVisited(x, y, z + 1));

                    if (isShaftKnown && !isShaftVisited && isFloorVisited(x, y, activeZ)) {
                        elements.push({ x, y, z, type: 'shaft' });
                    }
                }
            }
        }

        return elements;
    }

    drawIsometricMap() {
        if (!this.isMap3DActive || this.isIntroPlaying) return;

        const canvas = this.isometricCanvas;
        const ctx = this.isometricCtx;
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        const size = this.mazeGen.size;
        const activeZ = this.activeMapFloor;
        const visualZ = this.visualActiveFloor;

        let baseTileWidth = (width * 0.7) / size;
        baseTileWidth = Math.max(20, Math.min(48, baseTileWidth));
        const tileWidth = baseTileWidth * this.mapZoom;
        const tileHeight = tileWidth / 2;
        const tileWidthHalf = tileWidth / 2;
        const tileHeightHalf = tileWidth / 4;
        const floorOffset = tileWidthHalf * 5;

        const centerX = width / 2 + this.mapPanOffsetX;
        const centerY = height / 2 + this.mapPanOffsetY;

        const getIsoCoords = (x, y, z) => {
            const rx = x;
            const ry = y;
            const px = (rx - ry) * tileWidthHalf + centerX;
            const py = (rx + ry) * tileHeightHalf - (z - visualZ) * floorOffset + centerY;
            return { x: px, y: py };
        };

        const floorsToDraw = [];
        if (activeZ - 2 >= 1) floorsToDraw.push(activeZ - 2);
        floorsToDraw.push(activeZ);
        if (activeZ + 2 <= size - 2) floorsToDraw.push(activeZ + 2);

        const drawGrid = (gridOpacity) => {
            ctx.strokeStyle = `rgba(0, 255, 0, ${0.15 * gridOpacity})`;
            ctx.lineWidth = 1;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const coords = getIsoCoords(x, y, activeZ);
                    ctx.beginPath();
                    ctx.moveTo(coords.x, coords.y - tileHeightHalf);
                    ctx.lineTo(coords.x + tileWidthHalf, coords.y);
                    ctx.lineTo(coords.x, coords.y + tileHeightHalf);
                    ctx.lineTo(coords.x - tileWidthHalf, coords.y);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        };

        const drawIsoBox = (cx, cy, w, h, H, color, opacity = 1.0) => {
            ctx.save();
            ctx.globalAlpha = opacity;

            // Left face
            ctx.beginPath();
            ctx.moveTo(cx - w, cy);
            ctx.lineTo(cx, cy + h);
            ctx.lineTo(cx, cy + h - H);
            ctx.lineTo(cx - w, cy - H);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fill();

            // Right face
            ctx.beginPath();
            ctx.moveTo(cx, cy + h);
            ctx.lineTo(cx + w, cy);
            ctx.lineTo(cx + w, cy - H);
            ctx.lineTo(cx, cy + h - H);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fill();

            // Top face
            ctx.beginPath();
            ctx.moveTo(cx - w, cy - H);
            ctx.lineTo(cx, cy + h - H);
            ctx.lineTo(cx + w, cy - H);
            ctx.lineTo(cx, cy - h - H);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();

            ctx.restore();
        };

        const isFloorVisited = (fx, fy, fz) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.maze.get(fx, fy, fz);
            return fVal === this.mazeGen.TYPES.VISITED || fVal === this.mazeGen.TYPES.START || fVal === this.mazeGen.TYPES.ELEVATOR_VISITED || (fVal === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${fx},${fy},${fz}`));
        };

        const drawElevatorBox = (cx, cy, w, h, H, hUp, hDown, isVisited, isRevealed, opacity) => {
            ctx.save();
            ctx.globalAlpha = opacity;

            const colorUp = isRevealed ? '#ffffff' : (isVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED);
            const colorDown = isRevealed ? '#ffffff' : (isVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED);

            if (hUp && hDown) {
                // Bidirectional: Left half is Down (pink/magenta), Right half is Up (cyan/blue)
                
                // Top Face
                ctx.beginPath();
                ctx.moveTo(cx, cy - H - h);
                ctx.lineTo(cx - w, cy - H);
                ctx.lineTo(cx, cy - H + h);
                ctx.lineTo(cx, cy - H);
                ctx.closePath();
                ctx.fillStyle = colorDown;
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(cx, cy - H - h);
                ctx.lineTo(cx, cy - H);
                ctx.lineTo(cx, cy - H + h);
                ctx.lineTo(cx + w, cy - H);
                ctx.closePath();
                ctx.fillStyle = colorUp;
                ctx.fill();

                // Side Faces
                ctx.beginPath();
                ctx.moveTo(cx - w, cy);
                ctx.lineTo(cx, cy + h);
                ctx.lineTo(cx, cy + h - H);
                ctx.lineTo(cx - w, cy - H);
                ctx.closePath();
                ctx.fillStyle = colorDown;
                ctx.fill();
                ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(cx, cy + h);
                ctx.lineTo(cx + w, cy);
                ctx.lineTo(cx + w, cy - H);
                ctx.lineTo(cx, cy + h - H);
                ctx.closePath();
                ctx.fillStyle = colorUp;
                ctx.fill();
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fill();
            } else {
                const color = hUp ? colorUp : colorDown;

                // Top Face
                ctx.beginPath();
                ctx.moveTo(cx - w, cy - H);
                ctx.lineTo(cx, cy + h - H);
                ctx.lineTo(cx + w, cy - H);
                ctx.lineTo(cx, cy - h - H);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();

                // Side Faces
                ctx.beginPath();
                ctx.moveTo(cx - w, cy);
                ctx.lineTo(cx, cy + h);
                ctx.lineTo(cx, cy + h - H);
                ctx.lineTo(cx - w, cy - H);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
                ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(cx, cy + h);
                ctx.lineTo(cx + w, cy);
                ctx.lineTo(cx + w, cy - H);
                ctx.lineTo(cx, cy + h - H);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fill();
            }

            ctx.restore();
        };

        const drawFloorCells = (z, opacity) => {
            const TYPES = this.mazeGen.TYPES;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const val = this.maze.get(x, y, z);
                    const coords = getIsoCoords(x, y, z);

                    const isTeleport = val === TYPES.TELEPORT;
                    const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                    const isVisited = val === TYPES.VISITED || val === TYPES.START || val === TYPES.ELEVATOR_VISITED || isTeleportDiscovered;
                    const isKnown = (val === TYPES.PATH || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);
                    const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);

                    const isKey = val === TYPES.KEY;
                    const isExit = val === TYPES.EXIT;

                    if (val === TYPES.WALL || val === TYPES.STATUE) {
                        if (this.isNearVisited(x, y, z)) {
                            const subW = tileWidthHalf * 0.45;
                            const subH = tileHeightHalf * 0.45;
                            const boxH = tileHeight * 0.25;
                            const color = 'rgba(0, 255, 0, 0.7)'; // matrix green

                            const offsets = [
                                { dx: -0.23, dy: -0.23 },
                                { dx: 0.23, dy: -0.23 },
                                { dx: -0.23, dy: 0.23 },
                                { dx: 0.23, dy: 0.23 }
                            ];

                            for (const offset of offsets) {
                                const subCoords = getIsoCoords(x + offset.dx, y + offset.dy, z);
                                drawIsoBox(subCoords.x, subCoords.y, subW, subH, boxH, color, opacity);
                            }
                        }
                        continue;
                    }

                    // Draw hunters in real-time even on unvisited corridors
                    for (const h of this.hunters) {
                        if (h.state === 'SLEEP') continue;
                        const closestPlayableFloor = Math.round((h.visualZ - 1) / 2) * 2 + 1;
                        const hGridX = Math.max(0, Math.min(size - 1, Math.floor(h.visualX)));
                        const hGridY = Math.max(0, Math.min(size - 1, Math.floor(h.visualY)));
                        if (x === hGridX && y === hGridY && z === closestPlayableFloor) {
                            const hCoords = getIsoCoords(h.visualX, h.visualY, h.visualZ);
                            drawHunter(h, hCoords.x, hCoords.y - 1.5, opacity);
                        }
                    }

                    const isVisible = isVisited || isKnown || isRevealedPath || isKey || isExit;

                    if (isVisible) {
                        const H = 1.5;
                        const hUp = z < size - 1 && 
                                    this.maze.get(x, y, z + 1) !== TYPES.WALL && 
                                    this.maze.get(x, y, z + 1) !== TYPES.STATUE;
                        const hDown = z > 0 && 
                                      this.maze.get(x, y, z - 1) !== TYPES.WALL && 
                                      this.maze.get(x, y, z - 1) !== TYPES.STATUE;
                        
                        const isCursorOnCell = this.mapCursor.x === x && this.mapCursor.y === y && this.mapCursor.z === z;
                        const showSpecial = isVisited || isRevealedPath;
                        const isElevator = showSpecial && (hUp || hDown);

                        if (isElevator) {
                            drawElevatorBox(coords.x, coords.y, tileWidthHalf, tileHeightHalf, H, hUp, hDown, isVisited, isRevealedPath, opacity);
                        } else {
                            let color = '#222222';

                            if (isRevealedPath) {
                                color = '#ffffff';
                            } else if (isExit) {
                                const isUnlocked = this.keysCollected === this.totalKeys;
                                color = isUnlocked ? CONFIG.COLORS.EXIT : '#ff3300';
                            } else if (isTeleportDiscovered) {
                                color = '#ffd700';
                            } else if (isVisited) {
                                if (val === TYPES.START) {
                                    color = CONFIG.COLORS.START;
                                } else {
                                    color = '#444444';
                                }
                            } else if (isKnown) {
                                if (isCursorOnCell) {
                                    const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 120);
                                    color = `rgb(${Math.floor(31 + 224 * pulse)}, ${Math.floor(58 + 197 * pulse)}, ${Math.floor(82 + 173 * pulse)})`;
                                } else {
                                    color = '#1f3a52';
                                }
                            } else if (isKey) {
                                color = '#111111'; // dark tile under unvisited keys
                            }

                            drawIsoBox(coords.x, coords.y, tileWidthHalf, tileHeightHalf, H, color, opacity);
                        }

                        if (isKey) {
                            drawKey(coords.x, coords.y - H, opacity);
                        }

                        if (isTeleportDiscovered) {
                            const isInactive = this.inactiveTeleportPos && 
                                               this.inactiveTeleportPos.x === x && 
                                               this.inactiveTeleportPos.y === y && 
                                               this.inactiveTeleportPos.z === z;
                            let teleportColor = CONFIG.COLORS.TELEPORT;
                            if (isInactive) {
                                teleportColor = CONFIG.COLORS.TELEPORT_INACTIVE;
                            }
                            drawTeleport(coords.x, coords.y - H, teleportColor, opacity, isCursorOnCell);
                        }

                        if (x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z) {
                            drawPlayer(coords.x, coords.y - H, opacity);
                        }
                    }
                }
            }
        };

        const drawShafts = (z, opacity) => {
            const TYPES = this.mazeGen.TYPES;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const val = this.maze.get(x, y, z);
                    if (val === TYPES.WALL) continue;

                    const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);
                    const isShaftVisited = val === TYPES.ELEVATOR_VISITED;
                    const isShaftKnown = (val === 1) && (isFloorVisited(x, y, z - 1) || isFloorVisited(x, y, z + 1));

                    if (isRevealedPath || isFloorVisited(x, y, activeZ)) {
                        const coordsBottom = getIsoCoords(x, y, z - 1);
                        coordsBottom.y -= 1.5; // sit exactly on top of lower floor's box
                        
                        const coordsTop = getIsoCoords(x, y, z + 1);

                        let color = CONFIG.COLORS.PATH_KNOWN;
                        if (isRevealedPath) {
                            color = '#ffffff';
                        } else if (isShaftVisited) {
                            color = CONFIG.COLORS.PATH_VISITED;
                        }

                        const isSelected = this.mapCursor.x === x && this.mapCursor.y === y && this.mapCursor.z === z;
                        let colColor = color;
                        let colOpacity = opacity;

                        if (isSelected) {
                            const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 120);
                            colOpacity = 0.4 + 0.6 * pulse;
                            colColor = '#ffffff';
                        }

                        const hexToRgb = (hex) => {
                            const clean = hex.replace('#', '');
                            const num = parseInt(clean, 16);
                            const r = (num >> 16) & 255;
                            const g = (num >> 8) & 255;
                            const b = num & 255;
                            return `${r}, ${g}, ${b}`;
                        };

                        const rgbStr = hexToRgb(colColor);

                        const colW = tileWidthHalf * 0.25;
                        
                        ctx.save();
                        ctx.globalAlpha = colOpacity;

                        // Create transparency gradient from bottom to top
                        const grad = ctx.createLinearGradient(0, coordsBottom.y, 0, coordsTop.y);
                        grad.addColorStop(0, `rgba(${rgbStr}, 0.15)`);
                        grad.addColorStop(0.2, `rgba(${rgbStr}, 0.65)`);
                        grad.addColorStop(0.5, `rgba(${rgbStr}, 0.95)`);
                        grad.addColorStop(0.8, `rgba(${rgbStr}, 0.65)`);
                        grad.addColorStop(1, `rgba(${rgbStr}, 0.15)`);
                        
                        // Left face
                        ctx.beginPath();
                        ctx.moveTo(coordsBottom.x - colW, coordsBottom.y);
                        ctx.lineTo(coordsBottom.x, coordsBottom.y + colW/2);
                        ctx.lineTo(coordsTop.x, coordsTop.y + colW/2);
                        ctx.lineTo(coordsTop.x - colW, coordsTop.y);
                        ctx.closePath();
                        ctx.fillStyle = grad;
                        ctx.fill();
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
                        ctx.fill();

                        // Right face
                        ctx.beginPath();
                        ctx.moveTo(coordsBottom.x, coordsBottom.y + colW/2);
                        ctx.lineTo(coordsBottom.x + colW, coordsBottom.y);
                        ctx.lineTo(coordsTop.x + colW, coordsTop.y);
                        ctx.lineTo(coordsTop.x, coordsTop.y + colW/2);
                        ctx.closePath();
                        ctx.fillStyle = grad;
                        ctx.fill();
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                        ctx.fill();

                        ctx.restore();
                    }
                }
            }
        };

        const drawKey = (cx, cy, opacity) => {
            ctx.save();
            ctx.globalAlpha = opacity;
            const bounce = Math.sin(performance.now() / 200) * 3 - 6;
            const y = cy + bounce;
            ctx.beginPath();
            ctx.moveTo(cx, y - 5);
            ctx.lineTo(cx + 4, y);
            ctx.lineTo(cx, y + 5);
            ctx.lineTo(cx - 4, y);
            ctx.closePath();
            ctx.fillStyle = '#ffd700';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        };

        const drawTeleport = (cx, cy, color, opacity, isSelected) => {
            ctx.save();
            ctx.globalAlpha = opacity;
            const bounce = Math.sin(performance.now() / 250) * 2 - 4;
            const y = cy + bounce;
            
            if (isSelected) {
                // Pulse halo glow behind the teleport
                ctx.save();
                const pulseScale = 1.0 + 0.35 * (0.5 + 0.5 * Math.sin(performance.now() / 100));
                ctx.beginPath();
                ctx.arc(cx, y, 7 * pulseScale, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.fill();
                ctx.restore();
            }

            ctx.beginPath();
            ctx.arc(cx, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = isSelected ? '#ffffff' : color;
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.restore();
        };

        const drawStatue = (cx, cy, opacity) => {
            if (this.statueImage && this.statueImage.complete && this.statueImage.naturalWidth !== 0) {
                // 1. Draw flat ground shadow
                ctx.save();
                ctx.beginPath();
                const shadowW = tileWidthHalf * 0.70;
                const shadowH = tileHeightHalf * 0.70;
                ctx.ellipse(cx, cy, shadowW, shadowH, 0, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fill();
                ctx.restore();

                // 2. Draw Statue aligned by its bottom center
                ctx.save();
                ctx.globalAlpha = opacity;
                const aspect = this.statueImage.width / this.statueImage.height;
                const targetWidth = tileWidth * 0.8;
                const targetHeight = targetWidth / aspect;
                
                ctx.drawImage(
                    this.statueImage,
                    cx - targetWidth / 2,
                    cy - targetHeight,
                    targetWidth,
                    targetHeight
                );
                ctx.restore();
            } else {
                // Fallback: draw a generic gray vertical box
                drawIsoBox(cx, cy, tileWidthHalf * 0.4, tileHeightHalf * 0.4, tileHeight * 0.8, '#555555', opacity);
            }
        };

        const drawPlayer = (cx, cy, opacity) => {
            const stateKey = `${this.playerVertical}_${this.playerSide}`;
            const img = this.mageImages[stateKey];
            
            // ==========================================
            // AJUSTE DE POSIÇÃO DA SOMBRA DO JOGADOR AQUI:
            // ==========================================
            const shadowW = tileWidthHalf * 0.55;
            const shadowH = tileHeightHalf * 0.55;
            const shadowX = cx - tileWidthHalf * 0.12; // <--- Subtraia mais para ir mais para a ESQUERDA
            const shadowY = cy - tileHeightHalf * 0.12; // <--- Subtraia mais para ir mais para CIMA
            
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(shadowX, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
            ctx.fill();
            ctx.restore();

            if (img && img.complete) {
                ctx.save();
                ctx.globalAlpha = opacity;
                
                const drawSize = tileWidth * 0.70; 
                const imgW = drawSize;
                const imgH = drawSize * (img.height / img.width);
                
                // AJUSTE O ALINHAMENTO VERTICAL VISUAL DO MAGO AQUI:
                const offsetY = cy - imgH; // Mude para algo como: cy - imgH * 0.8 ou cy - imgH + 4 para ajustar
                ctx.drawImage(img, cx - imgW / 2, offsetY, imgW, imgH);
                ctx.restore();
            } else {
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.arc(cx, cy - 3, 5, 0, Math.PI * 2);
                ctx.fillStyle = CONFIG.COLORS.PLAYER;
                ctx.fill();
                ctx.strokeStyle = CONFIG.COLORS.PLAYER_OUTLINE;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }

            if (CONFIG.SHOW_COLLISION_DEBUG) {
                ctx.save();
                const ox = CONFIG.PLAYER_COLLISION_OFFSET_X || 0;
                const oy = CONFIG.PLAYER_COLLISION_OFFSET_Y || 0;
                const isoOffsetX = (ox - oy) * tileWidthHalf;
                const isoOffsetY = (ox + oy) * tileHeightHalf;
                
                const icx = cx + isoOffsetX;
                const icy = cy + isoOffsetY;

                ctx.beginPath();
                ctx.moveTo(icx, icy - CONFIG.PLAYER_COLLISION_RADIUS * tileHeight);
                ctx.lineTo(icx + CONFIG.PLAYER_COLLISION_RADIUS * tileWidth, icy);
                ctx.lineTo(icx, icy + CONFIG.PLAYER_COLLISION_RADIUS * tileHeight);
                ctx.lineTo(icx - CONFIG.PLAYER_COLLISION_RADIUS * tileWidth, icy);
                ctx.closePath();
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }
        };

        const drawHunter = (h, cx, cy, opacity) => {
            if (h && h.lowCanvas) {
                ctx.save();
                ctx.globalAlpha = opacity;
                
                const drawSize = tileWidth * 0.90;
                
                // 1. Draw a flat isometric shadow on the floor (at cy)
                ctx.save();
                ctx.beginPath();
                const shadowW = tileWidthHalf * 0.60;
                const shadowH = tileHeightHalf * 0.60;
                ctx.ellipse(cx, cy, shadowW, shadowH, 0, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.35)'; // flat dark shadow on ground
                ctx.fill();
                ctx.restore();

                // 2. Floating offset with bobbing/bouncing animation
                const bounce = Math.sin(h.jellyTime * 3) * (tileWidth * 0.06);
                const floatOffset = tileWidth * 0.38 + bounce;
                const floatY = cy - floatOffset;

                // JELLY OSCILLATION (same as 2D)
                const time = h.jellyTime;
                const skewX = Math.sin(time) * 6; 
                const skewY = Math.cos(time * 0.7) * 4;
                const scaleX = 1 + Math.sin(time * 1.2) * 0.06;
                const scaleY = 1 + Math.cos(time * 0.8) * 0.06;
                
                const radX = skewX * Math.PI / 180;
                const radY = skewY * Math.PI / 180;

                // 3. Real Jelly Core (floating above)
                ctx.save();
                ctx.translate(cx, floatY);
                ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(h.lowCanvas, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
                ctx.restore();

                ctx.restore();
            } else {
                ctx.save();
                ctx.globalAlpha = opacity;
                const pulse = 4 + Math.sin(performance.now() / 100) * 1.5;
                ctx.beginPath();
                ctx.arc(cx, cy - 3, pulse, 0, Math.PI * 2);
                ctx.fillStyle = CONFIG.COLORS.HUNTER || '#ff00ff';
                ctx.fill();
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.restore();
            }
        };

        const getFloorOpacity = (fz) => {
            const dist = Math.abs(fz - visualZ);
            if (dist <= 2) {
                return 1.0 - (dist / 2) * (1.0 - 0.35);
            } else if (dist < 4) {
                return 0.35 * (1.0 - (dist - 2) / 2);
            }
            return 0;
        };

        // Draw all visible floors and connecting shafts in correct order (Painter's Algorithm)
        for (let z = 1; z < size; z += 2) {
            if (z - 1 >= 0) {
                // Only draw shafts connected to the active floor (activeZ - 1 and activeZ + 1)
                if (z - 1 === activeZ - 1 || z - 1 === activeZ + 1) {
                    const opBelow = getFloorOpacity(z - 2);
                    const opActive = getFloorOpacity(z);
                    const shaftOpacity = Math.max(opBelow, opActive) * 0.8;
                    if (shaftOpacity > 0.01) {
                        drawShafts(z - 1, shaftOpacity);
                    }
                }
            }

            const floorOpacity = getFloorOpacity(z);
            if (floorOpacity > 0.01) {
                if (z === activeZ) {
                    drawGrid(floorOpacity);
                }
                drawFloorCells(z, floorOpacity);
            }
        }

        // Draw Cursor
        const elements = this.getInteractiveElements(activeZ);

        // Draw floating indicative dots on interactive shafts so user knows where to hover
        elements.forEach(el => {
            if (el.type === 'shaft') {
                const coords = getIsoCoords(el.x, el.y, el.z);
                const isSelected = this.mapCursor.x === el.x && this.mapCursor.y === el.y && this.mapCursor.z === el.z;
                ctx.save();
                const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 150);
                ctx.beginPath();
                ctx.arc(coords.x, coords.y, 7.5 + pulse * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = isSelected ? '#ffffff' : '#00ffff';
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }
        });

        const isPlayerPos = this.mapCursor.x === Math.floor(this.player.x) && 
                            this.mapCursor.y === Math.floor(this.player.y) && 
                            this.mapCursor.z === this.player.z;
        const hasInteractiveCursor = isPlayerPos || elements.some(e => e.x === this.mapCursor.x && e.y === this.mapCursor.y && e.z === this.mapCursor.z);
        if (hasInteractiveCursor) {
            const cursorCoords = getIsoCoords(this.mapCursor.x, this.mapCursor.y, this.mapCursor.z);
            const bounce = Math.sin(performance.now() / 150) * 4;

            // Draw shadow on the floor tile
            ctx.save();
            const shadowScale = 1.0 - bounce / 16;
            const floorCoords = getIsoCoords(this.mapCursor.x, this.mapCursor.y, activeZ);
            ctx.translate(floorCoords.x, floorCoords.y);
            ctx.scale(1, 0.5);
            ctx.beginPath();
            ctx.arc(0, 0, 8 * shadowScale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 0, 0, ${0.55 * shadowScale})`;
            ctx.fill();
            ctx.restore();

            // Draw cursor arrow bouncing above
            ctx.save();
            const cx = cursorCoords.x;
            const cy = cursorCoords.y - tileHeight - 12 + bounce;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx - 6, cy - 8);
            ctx.lineTo(cx - 3, cy - 8);
            ctx.lineTo(cx - 3, cy - 16);
            ctx.lineTo(cx + 3, cy - 16);
            ctx.lineTo(cx + 3, cy - 8);
            ctx.lineTo(cx + 6, cy - 8);
            ctx.closePath();
            ctx.fillStyle = '#00ffff';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();
        }

        // Draw Floor Indicators Line on the right side
        const rightPadding = 45;
        const startYLine = height / 3;
        const endYLine = (height / 3) * 2;
        const lineX = width - rightPadding;

        // 1. Draw Background Track Line (Dark cyan)
        ctx.save();
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(lineX, startYLine);
        ctx.lineTo(lineX, endYLine);
        ctx.stroke();
        
        // Draw track ticks / notches
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.4)';
        ctx.lineWidth = 1.5;
        for (let y = startYLine; y <= endYLine; y += (endYLine - startYLine) / 6) {
            ctx.beginPath();
            ctx.moveTo(lineX - 5, y);
            ctx.lineTo(lineX + 5, y);
            ctx.stroke();
        }
        ctx.restore();

        // 2. Draw Active Sliding Indicator (smoothly sliding dot)
        const centerYTrack = (startYLine + endYLine) / 2;
        const slotHeight = (endYLine - startYLine) / 2;
        const visualDiff = visualZ - activeZ;
        const sliderY = centerYTrack - (visualDiff / 2) * slotHeight;

        ctx.save();
        ctx.fillStyle = '#00ffff';
        ctx.beginPath();
        ctx.arc(lineX, sliderY, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        this.floorClickRects = [];

        // Define the three fixed positions
        const positions = [
            { floor: activeZ + 2, y: startYLine, label: `${(activeZ + 2 + 1) / 2}F`, valid: activeZ + 2 <= size - 2 },
            { floor: activeZ, y: centerYTrack, label: `${(activeZ + 1) / 2}F`, valid: true },
            { floor: activeZ - 2, y: endYLine, label: `${(activeZ - 2 + 1) / 2}F`, valid: activeZ - 2 >= 1 }
        ];

        positions.forEach(pos => {
            if (!pos.valid) return;

            const rectW = 60;
            const rectH = 36;
            const rectX = lineX - rectW - 15; // float to the left of the line
            const rectY = pos.y - rectH / 2;

            const isActive = pos.floor === activeZ;

            ctx.save();

            // Draw sci-fi corner-cut container shape
            ctx.beginPath();
            ctx.moveTo(rectX + 6, rectY);
            ctx.lineTo(rectX + rectW, rectY);
            ctx.lineTo(rectX + rectW, rectY + rectH - 6);
            ctx.lineTo(rectX + rectW - 6, rectY + rectH);
            ctx.lineTo(rectX, rectY + rectH);
            ctx.lineTo(rectX, rectY + 6);
            ctx.closePath();

            // Fill and Stroke (glassmorphic style)
            ctx.fillStyle = isActive ? 'rgba(0, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.6)';
            ctx.strokeStyle = isActive ? '#00ffff' : 'rgba(0, 255, 255, 0.35)';
            ctx.lineWidth = isActive ? 2 : 1;
            ctx.fill();
            ctx.stroke();

            ctx.restore(); // remove shadow configuration

            // Draw a subtle cyan connecting notch pointing to the vertical track line
            ctx.strokeStyle = isActive ? '#00ffff' : 'rgba(0, 255, 255, 0.35)';
            ctx.lineWidth = isActive ? 2 : 1;
            ctx.beginPath();
            ctx.moveTo(rectX + rectW, pos.y);
            ctx.lineTo(lineX - 2, pos.y);
            ctx.stroke();

            // Draw Header Text ("LEVEL")
            ctx.fillStyle = isActive ? '#00ffff' : 'rgba(255, 255, 255, 0.5)';
            ctx.font = 'bold 8px Courier New';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText('LEVEL', rectX + rectW / 2, rectY + 6);

            // Draw Value Text ("1F")
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 15px Courier New';
            ctx.textBaseline = 'top';
            ctx.fillText(pos.label, rectX + rectW / 2, rectY + 16);

            this.floorClickRects.push({
                floor: pos.floor,
                x: rectX,
                y: rectY,
                w: rectW + 15, // cover click area up to the line
                h: rectH
            });
        });

        // 3. Draw Pathfinder HUD Panel (Normal Map Mode only)
        if (!this.isTeleportMode) {
            const rectX = 25;
            const rectY = 30;
            const rectW = 120;
            const rectH = 36;

            ctx.save();

            ctx.beginPath();
            ctx.moveTo(rectX + 6, rectY);
            ctx.lineTo(rectX + rectW, rectY);
            ctx.lineTo(rectX + rectW, rectY + rectH - 6);
            ctx.lineTo(rectX + rectW - 6, rectY + rectH);
            ctx.lineTo(rectX, rectY + rectH);
            ctx.lineTo(rectX, rectY + 6);
            ctx.closePath();

            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
            ctx.font = "bold 8px 'Roboto', sans-serif";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(getTranslation('hudPathfinders'), rectX + rectW / 2, rectY + 5);

            ctx.fillStyle = '#ffffff';
            ctx.font = "bold 13px 'Roboto', sans-serif";
            ctx.textBaseline = 'top';
            ctx.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`, rectX + rectW / 2, rectY + 16);
        }

        // 3. Draw Teleport Header Banner
        if (this.isTeleportMode) {
            const bannerW = 180;
            const bannerH = 38;
            const bannerX = width / 2 - bannerW / 2;
            const bannerY = 30;

            ctx.save();

            ctx.beginPath();
            ctx.moveTo(bannerX + 8, bannerY);
            ctx.lineTo(bannerX + bannerW - 8, bannerY);
            ctx.lineTo(bannerX + bannerW, bannerY + 8);
            ctx.lineTo(bannerX + bannerW, bannerY + bannerH - 8);
            ctx.lineTo(bannerX + bannerW - 8, bannerY + bannerH);
            ctx.lineTo(bannerX + 8, bannerY + bannerH);
            ctx.lineTo(bannerX, bannerY + bannerH - 8);
            ctx.lineTo(bannerX, bannerY + 8);
            ctx.closePath();

            ctx.fillStyle = 'rgba(255, 140, 0, 0.22)';
            ctx.strokeStyle = '#ff8c00';
            ctx.lineWidth = 2.5;
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            ctx.fillStyle = '#ffffff';
            ctx.font = "bold 15px 'Roboto', sans-serif";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(getTranslation('teleportWarning'), width / 2, bannerY + bannerH / 2);
        }

        // 3. Draw Teleport Selection Dots UI Dock
        if (this.isTeleportMode) {
            const spacing = 52;
            const numTeleports = this.allTeleports.length;
            const totalDotsWidth = (numTeleports - 1) * spacing;
            const dotY = height - 60;
            const startX = width / 2 - totalDotsWidth / 2;

            // Draw glassmorphic dock container background
            const dockW = totalDotsWidth + 60;
            const dockH = 58;
            const dockX = width / 2 - dockW / 2;
            const dockYPos = dotY - dockH / 2;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(dockX + 6, dockYPos);
            ctx.lineTo(dockX + dockW - 6, dockYPos);
            ctx.lineTo(dockX + dockW, dockYPos + 6);
            ctx.lineTo(dockX + dockW, dockYPos + dockH - 6);
            ctx.lineTo(dockX + dockW - 6, dockYPos + dockH);
            ctx.lineTo(dockX + 6, dockYPos + dockH);
            ctx.lineTo(dockX, dockYPos + dockH - 6);
            ctx.lineTo(dockX, dockYPos + 6);
            ctx.closePath();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.72)';
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)';
            ctx.lineWidth = 1;
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            this.teleportDotsClickRects = [];
            const selectable = this.getSelectableTeleportIndices();

            this.allTeleports.forEach((t, idx) => {
                const dotX = startX + idx * spacing;
                const coordsStr = `${t.x},${t.y},${t.z}`;
                const isDiscovered = this.discoveredTeleports.has(coordsStr);
                const isSelected = (idx === this.selectedTeleportIndex);
                const isPlayerHere = (t.x === Math.floor(this.player.x) && t.y === Math.floor(this.player.y) && t.z === this.player.z);
                const isInactive = this.inactiveTeleportPos && 
                                   (t.x === this.inactiveTeleportPos.x && t.y === this.inactiveTeleportPos.y && t.z === this.inactiveTeleportPos.z);

                ctx.save();

                if (!isDiscovered) {
                    // Locked/Undiscovered Dot (Grey/Lock representation)
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, 9, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(100, 100, 100, 0.45)';
                    ctx.fill();
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                    ctx.stroke();
                } else if (isInactive) {
                    // Inactive Dot (crossed/faded)
                    ctx.beginPath();
                    ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 45, 0, 0.2)';
                    ctx.fill();
                    ctx.strokeStyle = 'rgba(255, 45, 0, 0.4)';
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                } else {
                    // Active Discovered Dot
                    if (isSelected) {
                        // Bouncing/glowing highlight
                        const pulse = 1.0 + 0.3 * (0.5 + 0.5 * Math.sin(performance.now() / 120));
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, 20 * pulse, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(0, 255, 255, 0.18)';
                        ctx.fill();
                    }

                    ctx.beginPath();
                    ctx.arc(dotX, dotY, isSelected ? 14 : 9, 0, Math.PI * 2);
                    ctx.fillStyle = isSelected ? '#ffffff' : '#00b3ff';
                    ctx.fill();
                    ctx.strokeStyle = isSelected ? '#00ffff' : '#ffffff';
                    ctx.lineWidth = isSelected ? 1.5 : 1;
                    ctx.stroke();

                    // Mini inner core if player is on it
                    if (isPlayerHere) {
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, isSelected ? 6 : 4, 0, Math.PI * 2);
                        ctx.fillStyle = '#39ff14'; // glowing green core
                        ctx.fill();
                    }
                }

                ctx.restore();

                this.teleportDotsClickRects.push({
                    x: dotX - 24,
                    y: dotY - 24,
                    w: 48,
                    h: 48,
                    index: idx
                });
            });

            // 4. Draw Teleport Confirmation Modal Overlay
            if (this.teleportConfirmModalActive) {
                // Dim screen background
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(0, 0, width, height);

                const modalW = 320;
                const modalH = 160;
                const modalX = width / 2 - modalW / 2;
                const modalY = height / 2 - modalH / 2;

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(modalX + 10, modalY);
                ctx.lineTo(modalX + modalW - 10, modalY);
                ctx.lineTo(modalX + modalW, modalY + 10);
                ctx.lineTo(modalX + modalW, modalY + modalH - 10);
                ctx.lineTo(modalX + modalW - 10, modalY + modalH);
                ctx.lineTo(modalX + 10, modalY + modalH);
                ctx.lineTo(modalX, modalY + modalH - 10);
                ctx.lineTo(modalX, modalY + 10);
                ctx.closePath();
                ctx.fillStyle = 'rgba(10, 18, 30, 0.94)';
                ctx.strokeStyle = '#00ffff';
                ctx.lineWidth = 2;
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                // Modal Title
                ctx.fillStyle = '#00ffff';
                ctx.font = "bold 15px 'Roboto', sans-serif";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(getTranslation('teleportationLink'), width / 2, modalY + 16);

                ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(modalX + 15, modalY + 34);
                ctx.lineTo(modalX + modalW - 15, modalY + 34);
                ctx.stroke();

                // Modal Message details
                const targetT = this.allTeleports[this.selectedTeleportIndex];
                ctx.fillStyle = '#ffffff';
                ctx.font = "bold 15px 'Roboto', sans-serif";
                ctx.fillText(getTranslation('teleportJumpSector', { floor: ((targetT.z + 1) / 2) }), width / 2, modalY + 52);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.font = "13px 'Roboto', sans-serif";
                ctx.fillText(getTranslation('teleportTargetGrid', { x: targetT.x, y: targetT.y }), width / 2, modalY + 75);

                // GO / CANCEL Buttons
                const buttonW = 100;
                const buttonH = 30;
                const btnGoX = width / 2 - buttonW - 15;
                const btnGoY = modalY + 105;
                const btnCancelX = width / 2 + 15;
                const btnCancelY = modalY + 105;

                this.teleportModalClickRects = [
                    { x: btnGoX, y: btnGoY, w: buttonW, h: buttonH, selection: 'go' },
                    { x: btnCancelX, y: btnCancelY, w: buttonW, h: buttonH, selection: 'cancel' }
                ];

                const drawModalButton = (bx, by, label, selectionVal) => {
                    const isSel = (this.teleportModalSelection === selectionVal);
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(bx + 4, by);
                    ctx.lineTo(bx + buttonW - 4, by);
                    ctx.lineTo(bx + buttonW, by + 4);
                    ctx.lineTo(bx + buttonW, by + buttonH - 4);
                    ctx.lineTo(bx + buttonW - 4, by + buttonH);
                    ctx.lineTo(bx + 4, by + buttonH);
                    ctx.lineTo(bx, by + buttonH - 4);
                    ctx.lineTo(bx, by + 4);
                    ctx.closePath();
                    
                    ctx.fillStyle = isSel ? 'rgba(0, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.6)';
                    ctx.strokeStyle = isSel ? '#00ffff' : 'rgba(0, 255, 255, 0.35)';
                    ctx.lineWidth = isSel ? 2 : 1;
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();

                    ctx.fillStyle = isSel ? '#ffffff' : '#00ffff';
                    ctx.font = "bold 13px 'Roboto', sans-serif";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(label, bx + buttonW / 2, by + buttonH / 2);
                };

                drawModalButton(btnGoX, btnGoY, getTranslation('teleportGo'), 'go');
                drawModalButton(btnCancelX, btnCancelY, getTranslation('teleportCancel'), 'cancel');
            }
        }
    }
}

