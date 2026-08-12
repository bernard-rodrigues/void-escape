import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';
import { Hunter } from './hunter.js';
import { TUTORIALS } from './tutorials.js';

export interface Player {
    x: number;
    y: number;
    z: number;
    visualX?: number;
    visualY?: number;
    visualZ?: number;
    rot?: number;
}
export interface GameState {
    isPlaying: boolean;
    isPaused: boolean;
    isSafeMode: boolean;
}

import { Maze3D } from './maze3d.js';
import { aStarDistance, aStarPath, proximeterDistance, findShortestPath } from './pathfinder.js';
import { UIManager } from './ui.js';
import { HunterManager } from './hunterManager.js';
import { ThreeRenderer } from './threeRenderer.js';
import { CanvasRenderer } from './canvasRenderer.js';
import { InputHandler } from './input.js';
import { saveGame, clearSave, restoreHunter, restoreMatrix } from './save.js';

function moveTowards(current: number, target: number, maxDelta: number): number {
    if (Math.abs(target - current) <= maxDelta) {
        return target;
    }
    return current + Math.sign(target - current) * maxDelta;
}

/**
 * Main Game Engine - 2D Map Navigation & 3D Overview
 */
export class Engine {
    degree: number;
    branchingFactor: number;
    isSafeMode: boolean;
    vScale: number;
    ui: UIManager;
    input: InputHandler;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    seed: number;
    mazeGen: Maze3D;
    maze: any;
    isResumedFromSave: boolean;
    mapCompletion100Triggered: boolean;
    hunterOnSameFloorDetected: boolean;
    dialogueUpTriggered: boolean;
    dialogueDownTriggered: boolean;
    dialogueWhichWayTriggered: boolean;
    dialogueDetectedTriggered: boolean;
    wallImage: HTMLImageElement;
    floorImage: HTMLImageElement;
    keyImage: HTMLImageElement;
    manaImage: HTMLImageElement;
    statueImage: HTMLImageElement;
    mageImages: Record<string, HTMLImageElement>;
    playerSide: string;
    playerVertical: string;
    playerWalkCycle: number;
    playerSquashTargetX: number;
    playerSquashTargetY: number;
    playerSquashX: number;
    playerSquashY: number;
    player: { x: number; y: number; z: number; dir: number };
    hunters: Hunter[];
    keysCollected: number;
    totalKeys: number;
    manaCollected: number;
    totalMana: number;
    totalPathfinders: number;
    pathfindersRemaining: number;
    activeMapFloor: number;
    visualActiveFloor: number;
    mapCursor: { x: number; y: number; z: number };
    pathfinderRewardsGranted: number;
    isometricCanvas: HTMLCanvasElement | null;
    isometricCtx: CanvasRenderingContext2D | null;
    floorClickRects: { floor: number; x: number; y: number; w: number; h: number }[];
    teleportModalClickRects!: { x: number; y: number; w: number; h: number; selection: 'go' | 'cancel' }[];
    mapZoom: number;
    mapPanOffsetX: number;
    mapPanOffsetY!: number;
    isZoomTransitionActive: boolean;
    zoomTransitionTimer: number;
    preloadedStoryImages: HTMLImageElement[];
    storyImagesLoadedCount: number;
    storyImagesTotalCount: number;
    storyImagesPreloadPromise: Promise<any> | null;
    lastFrameTime: number;
    revealedPathSet: Set<string>;
    activePathReveal: any[];
    revealedPathProgress: number;

    pathRevealInterval: any;
    pathfinderBlockedUntil: number;
    isMap3DActive: boolean;
    teleportAnim: any | null;
    auraHeight: number;
    auraTime: number;
    isGameOver: boolean;
    deathAnimation: any;
    isTutorialMode!: boolean;
    currentTutorialId!: string | null;
    currentTutorialStage!: any;
    notificationQueue: string[];
    activeNotification: any;
    isPaused: boolean;
    manaCharges!: number;
    jellyPortalCount!: number;
    jellyPortalFreezeTimer!: number;
    jellyPortalResetCells!: Set<string>;
    jellyPortalResetDuration!: number;
    jellyPortalResetElapsed!: number;
    dyingHunters!: any[];
    pathfinderConfirmTarget!: { x: number; y: number; z: number } | null;
    isDestroyed: boolean;
    isIntroPlaying: boolean;
    isStoryActive: boolean;
    threeRenderer!: ThreeRenderer;
    canvasRenderer!: CanvasRenderer;
    discoveredTeleports: Set<string>;
    visitedCells: Set<string>;
    lastSavePos: { x: number; y: number; z: number } | null;
    suppressWakeHuntersBanner: boolean;
    hunterManager!: HunterManager;
    allTeleports: { x: number; y: number; z: number }[];
    vortexAngles!: Map<string, number>;
    
    // Additional properties set in other methods
    isTouchDevice!: boolean;
    isMouseOrTouchDetected!: boolean;
    teleportGoBtnClickRect!: { x: number; y: number; w: number; h: number } | null;
    lastTeleportCloseTime!: number;
    zoomVisibleCells!: number;
    

    inactiveTeleportPos!: { x: number; y: number; z: number } | null;
    teleportCooldownTicks!: number;
    
    // Story animation properties
    storyImages!: any[];
    storyOpacity!: number;
    storyOverlayOpacity!: number;
    storyFrameIndex!: number;
    storyTimer!: number;
    storyTextQueue!: string[];
    storyTextIndex!: number;
    storyDisplayedText!: string;
    storyState!: string;
    storyWaitTimer!: number;
    storyTextHeight!: number;
    storyWidthProgress!: number;
    storyCharIndex!: number;
    storyTypeTimer!: number;
    storyMsgIndex!: number;
    storyCloseProgress!: number;

    selectedTeleportIndex!: number | null;
    teleportConfirmModalActive!: boolean;
    teleportModalSelection!: 'go' | 'cancel';
    teleportDotsClickRects!: { x: number; y: number; w: number; h: number; index: number }[];
    isTeleportMode!: boolean;
    floorTransition!: any;
    hasSavePoint!: boolean;
    lastPlayerCell!: { x: number; y: number; z: number } | null;
    exitPathfinderUnlocked!: boolean;
    isZoomActive!: boolean;
    lastInputDevice!: string;
    skipCellAnimations!: boolean;
    activeSkipHandler!: any;
    activeIntroTimer!: any;
    activeContinueTimer!: any;
    get scene(): THREE.Scene { return this.threeRenderer.scene; }
    set scene(val: THREE.Scene) { this.threeRenderer.scene = val; }
    get camera(): THREE.PerspectiveCamera { return this.threeRenderer.camera; }
    set camera(val: THREE.PerspectiveCamera) { this.threeRenderer.camera = val; }
    get renderer(): THREE.WebGLRenderer { return this.threeRenderer.renderer; }
    set renderer(val: THREE.WebGLRenderer) { this.threeRenderer.renderer = val; }
    get controls(): any { return this.threeRenderer.controls; }
    set controls(val: any) { this.threeRenderer.controls = val; }
    get pulsatingMaterials(): any[] { return this.threeRenderer.pulsatingMaterials; }
    set pulsatingMaterials(val: any[]) { this.threeRenderer.pulsatingMaterials = val; }
    get hunterMeshes(): any[] { return this.threeRenderer.hunterMeshes; }
    set hunterMeshes(val: any[]) { this.threeRenderer.hunterMeshes = val; }
    get teleportMeshes(): any[] { return this.threeRenderer.teleportMeshes; }
    set teleportMeshes(val: any[]) { this.threeRenderer.teleportMeshes = val; }
    get knownMeshes(): any[] { return this.threeRenderer.knownMeshes; }
    set knownMeshes(val: any[]) { this.threeRenderer.knownMeshes = val; }
    get keyMeshes(): any[] { return this.threeRenderer.keyMeshes; }
    set keyMeshes(val: any[]) { this.threeRenderer.keyMeshes = val; }
    get manaMeshes(): any[] { return this.threeRenderer.manaMeshes; }
    set manaMeshes(val: any[]) { this.threeRenderer.manaMeshes = val; }
    get exitMesh(): any { return this.threeRenderer.exitMesh; }
    set exitMesh(val: any) { this.threeRenderer.exitMesh = val; }
    get gridMeshes(): any[] | null { return this.threeRenderer.gridMeshes; }
    set gridMeshes(val: any[] | null) { this.threeRenderer.gridMeshes = val || []; }
    get raycaster(): THREE.Raycaster { return this.threeRenderer.raycaster; }
    set raycaster(val: THREE.Raycaster) { this.threeRenderer.raycaster = val; }
    get pointer(): THREE.Vector2 { return this.threeRenderer.pointer; }
    set pointer(val: THREE.Vector2) { this.threeRenderer.pointer = val; }
    get handleCanvasClick(): any { return this.threeRenderer.handleCanvasClick; }
    set handleCanvasClick(val: any) { this.threeRenderer.handleCanvasClick = val; }
    get handlePointerDown(): any { return this.threeRenderer.handlePointerDown; }
    set handlePointerDown(val: any) { this.threeRenderer.handlePointerDown = val; }
    get handlePointerUp(): any { return this.threeRenderer.handlePointerUp; }
    set handlePointerUp(val: any) { this.threeRenderer.handlePointerUp = val; }

    get staticMapCacheCanvas(): HTMLCanvasElement { return this.canvasRenderer.staticMapCacheCanvas; }
    set staticMapCacheCanvas(val: HTMLCanvasElement) { this.canvasRenderer.staticMapCacheCanvas = val; }
    get staticMapCacheCtx(): CanvasRenderingContext2D | null { return this.canvasRenderer.staticMapCacheCtx; }
    set staticMapCacheCtx(val: CanvasRenderingContext2D | null) { this.canvasRenderer.staticMapCacheCtx = val; }
    get staticMapCacheDirty(): boolean { return this.canvasRenderer.staticMapCacheDirty; }
    set staticMapCacheDirty(val: boolean) { this.canvasRenderer.staticMapCacheDirty = val; }
    get fullyRevealedCells(): Set<string> { return this.canvasRenderer.fullyRevealedCells; }
    set fullyRevealedCells(val: Set<string>) { this.canvasRenderer.fullyRevealedCells = val; }
    get revealedCellsAnimation(): Map<string, number> { return this.canvasRenderer.revealedCellsAnimation; }
    set revealedCellsAnimation(val: Map<string, number>) { this.canvasRenderer.revealedCellsAnimation = val; }
    handleKeyDownExtra!: any;
    handleKeyboardDetection!: any;
    handleResize!: any;
    handleStoryKeyDown!: any;
    handleStoryClick!: any;
    handleStoryTouch!: any;
    lastHunterMove!: number;
    lastLockedWarningTime!: number;
    prevGamepadButtons!: boolean[];
    isPreloadingActive!: boolean;
    prevGamepadStick!: { left: boolean; right: boolean; up: boolean; down: boolean; } | null;
    gamepadTeleportSelectedIndex!: number | null;
    deathsCount!: number;
    elapsedTime!: number;

    constructor(degree: number, branchingFactor: number, savedState: any = null, tutorialStage: any = null) {
        this.degree = degree !== undefined ? degree : (CONFIG.MAZE_DEGREE !== undefined ? CONFIG.MAZE_DEGREE : 8);
        this.branchingFactor = branchingFactor !== undefined ? branchingFactor : (CONFIG.BRANCHING_FACTOR !== undefined ? CONFIG.BRANCHING_FACTOR : 0.2);
        
        // Restore or initialize Safe Mode status
        if (savedState) {
            this.isSafeMode = savedState.isSafeMode ?? false;
        } else {
            const safeModeCheckbox = document.getElementById('safe-mode') as HTMLInputElement;
            this.isSafeMode = safeModeCheckbox ? safeModeCheckbox.checked : false;
        }

        this.vScale = 2.0;

        // Initialize UI and Input handlers
        this.ui = new UIManager();
        this.input = new InputHandler(this);
        this.hunterManager = new HunterManager(this);
        this.threeRenderer = new ThreeRenderer(this);
        this.canvasRenderer = new CanvasRenderer(this);
        this.input.setupTouch(() => this.isMap3DActive, () => this.isGameOver);

        this.canvas = document.getElementById('main-2d-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        
        this.seed = savedState ? savedState.seed : (CONFIG.SEED !== null && CONFIG.SEED !== undefined ? CONFIG.SEED : Date.now());
        this.isTutorialMode = !!tutorialStage;
        this.currentTutorialId = tutorialStage ? tutorialStage.id : null;
        this.currentTutorialStage = tutorialStage;

        if (this.isTutorialMode) {
            this.mazeGen = new Maze3D();
            this.maze = this.mazeGen.generateFromLayout(tutorialStage);
        } else {
            this.mazeGen = new Maze3D(degree, branchingFactor, this.seed);
            this.maze = this.mazeGen.generate();
        }
        this.isResumedFromSave = !!savedState;
        this.deathsCount = savedState ? (savedState.deathsCount || 0) : 0;
        this.elapsedTime = savedState ? (savedState.elapsedTime || 0) : 0;
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
        this.keyImage.src = 'assets/images/key.png';

        this.manaImage = new Image();
        this.manaImage.onload = () => {
            this.staticMapCacheDirty = true;
        };
        this.manaImage.src = 'assets/images/mana.png';
        
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
        if (this.isTutorialMode) {
            if (this.mazeGen.tutorialHunterSpawns && this.mazeGen.tutorialHunterSpawns.length > 0 && !this.isSafeMode) {
                let hunterId = 1;
                for (const hPos of this.mazeGen.tutorialHunterSpawns) {
                    const hunter = new Hunter(this.mazeGen, { x: hPos.x, y: hPos.y, z: hPos.z }, hunterId++);
                    this.hunters.push(hunter);
                }
            }
            this.lastHunterMove = performance.now();
        } else {
            this.hunterManager.initHunters(degree);
        }

        this.keyMeshes = [];
        this.exitMesh = null;
        this.keysCollected = 0;
        
        if (this.isTutorialMode) {
            let keysCount = 0;
            const size = this.mazeGen.size;
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    for (let z = 0; z < size; z++) {
                        if (this.maze.get(x, y, z) === this.mazeGen.TYPES.KEY) {
                            keysCount++;
                        }
                    }
                }
            }
            this.totalKeys = keysCount;
        } else {
            this.totalKeys = CONFIG.getKeyCount(degree);
        }

        if (this.isTutorialMode) {
            this.totalPathfinders = tutorialStage.pathfinders !== undefined ? tutorialStage.pathfinders : 0;
            this.pathfindersRemaining = this.totalPathfinders;
            this.manaCharges = tutorialStage.mana !== undefined ? tutorialStage.mana : 0;
            this.activeMapFloor = this.mazeGen.startPos.z;
            this.visualActiveFloor = this.mazeGen.startPos.z;
            this.player.x = this.mazeGen.startPos.x;
            this.player.y = this.mazeGen.startPos.y;
            this.player.z = this.mazeGen.startPos.z;
        } else {
            this.totalPathfinders = CONFIG.getPathfinderCount(degree);
            this.pathfindersRemaining = this.totalPathfinders;
            this.activeMapFloor = 1;
            this.visualActiveFloor = 1;
        }
        this.mapCursor = { x: 0, y: 0, z: 1 };
        this.pathfinderRewardsGranted = 0;
        this.isometricCanvas = null;
        this.isometricCtx = null;
        this.floorClickRects = [];
        this.mapZoom = 1.0;
        this.mapPanOffsetX = 0;
        this.isZoomTransitionActive = false;
        this.zoomTransitionTimer = 0;

        this.preloadedStoryImages = [];
        this.storyImagesLoadedCount = 0;
        this.storyImagesTotalCount = 0;
        this.storyImagesPreloadPromise = null;
        this.preloadStoryImages();


        this.lastFrameTime = performance.now();
        this.revealedPathSet = new Set();
        this.activePathReveal = [];
        this.revealedPathProgress = 0;
        this.knownMeshes = [];
        this.gridMeshes = null;
        this.pathRevealInterval = null;
        this.pathfinderBlockedUntil = 0;

        this.manaCollected = this.isTutorialMode && tutorialStage && tutorialStage.mana !== undefined ? tutorialStage.mana : 0;
        this.totalMana = 0;
        this.manaMeshes = [];
        const mazeSizeForMana = this.mazeGen.size;
        for (let x = 0; x < mazeSizeForMana; x++) {
            for (let y = 0; y < mazeSizeForMana; y++) {
                for (let z = 0; z < mazeSizeForMana; z++) {
                    if (this.maze.get(x, y, z) === this.mazeGen.TYPES.MANA) {
                        this.totalMana++;
                    }
                }
            }
        }
        if (this.isTutorialMode && tutorialStage && tutorialStage.mana !== undefined) {
            this.totalMana += tutorialStage.mana;
        }

        if (this.isTutorialMode) {
            this.jellyPortalCount = tutorialStage && tutorialStage.jellyPortals !== undefined ? tutorialStage.jellyPortals : 0;
        } else {
            this.jellyPortalCount = this.totalMana < 10 ? 1 : (CONFIG.JELLY_PORTAL_COUNT || 0);
        }
        this.jellyPortalFreezeTimer = 0;
        this.jellyPortalResetCells = new Set();
        this.jellyPortalResetDuration = 1.5;
        this.jellyPortalResetElapsed = 0;
        this.dyingHunters = [];

        this.ui.initGameUI(this.isSafeMode);
        this.ui.onInfoBanner = (msg) => this.queueNotification(msg);
        this.ui.updateKeysHUD(this.keysCollected, this.totalKeys);
        this.ui.updateManaHUD(this.manaCollected, this.totalMana);
        this.ui.updatePathfindersHUD(this.pathfindersRemaining, this.totalPathfinders);
        this.ui.updateJellyPortalHUD(this.jellyPortalCount);

        this.isMap3DActive = false;
        this.teleportAnim = null;
        this.auraHeight = 0;
        this.auraTime = 0;
        this.isGameOver = false;
        this.deathAnimation = null;
        this.notificationQueue = [];
        this.activeNotification = null;
        this.isPaused = false;
        this.isDestroyed = false;
        this.isIntroPlaying = false;
        this.isStoryActive = false;
        this.pulsatingMaterials = [];
        this.hunterMeshes = [];
        this.discoveredTeleports = new Set();
        this.visitedCells = new Set();
        this.lastSavePos = null;
        this.suppressWakeHuntersBanner = false;
        const startGridX = Math.floor(this.player.x);
        const startGridY = Math.floor(this.player.y);
        const startGridZ = this.player.z;
        this.discoveredTeleports.add(`${startGridX},${startGridY},${startGridZ}`);

        // Scan all teleport coordinates in the maze
        this.allTeleports = [];
        const mazeSize = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;
        for (let z = 0; z < mazeSize; z++) {
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
        this.pathfinderConfirmTarget = null;
        this.isMouseOrTouchDetected = false;
        this.teleportGoBtnClickRect = null;
        this.lastTeleportCloseTime = 0;
        this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

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

        this.vortexAngles = new Map();
        this.skipCellAnimations = true;
        this.populateFullyRevealedCells(this.player.z);

        // Memory leak cleanup properties for animations and skip handlers
        this.activeSkipHandler = null;
        this.activeIntroTimer = null;
        this.activeContinueTimer = null;
        
        this.exitPathfinderUnlocked = this.checkExitNeighborVisited();

        this.initThree();
        this.populateVisitedCells();
        this.init(savedState);
    }

    populateVisitedCells() {
        this.visitedCells.clear();
        const size = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;
        const revealAll = this.isTutorialMode && this.currentTutorialStage && this.currentTutorialStage.revealed;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.maze.get(x, y, z);
                    if (revealAll) {
                        if (val !== TYPES.WALL) {
                            this.visitedCells.add(`${x},${y},${z}`);
                            
                            // Check if this cell connects vertically to other paths (elevator shaft)
                            const hUp = z < size - 1 && this.maze.get(x, y, z + 1) !== TYPES.WALL;
                            const hDown = z > 0 && this.maze.get(x, y, z - 1) !== TYPES.WALL;
                            const isElevator = hUp || hDown;

                            if (val === TYPES.PATH) {
                                if (isElevator) {
                                    this.maze.set(x, y, z, TYPES.ELEVATOR_VISITED);
                                } else {
                                    this.maze.set(x, y, z, TYPES.VISITED);
                                }
                            } else if (val === TYPES.TELEPORT) {
                                this.discoveredTeleports.add(`${x},${y},${z}`);
                            }
                        }
                    } else {
                        const isTeleportDiscovered = val === TYPES.TELEPORT && this.discoveredTeleports.has(`${x},${y},${z}`);
                        if (val === TYPES.VISITED || val === TYPES.START || val === TYPES.ELEVATOR_VISITED || isTeleportDiscovered) {
                            this.visitedCells.add(`${x},${y},${z}`);
                        }
                    }
                }
            }
        }
    }

    destroy() {
        this.isDestroyed = true;
        this.hideGameUI();
        
        this.input.destroy();
        this.ui.destroy();
        
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
        if (this.handleStoryKeyDown) {
            window.removeEventListener('keydown', this.handleStoryKeyDown);
            this.handleStoryKeyDown = null;
        }
        const storyEl = document.getElementById('story-screen');
        if (storyEl) {
            if (this.handleStoryClick) {
                storyEl.removeEventListener('click', this.handleStoryClick);
                this.handleStoryClick = null;
            }
            if (this.handleStoryTouch) {
                storyEl.removeEventListener('touchstart', this.handleStoryTouch);
                this.handleStoryTouch = null;
            }
            storyEl.classList.add('hidden');
        }
        
        this.threeRenderer.destroy();
        
        // Clean up listeners on mobile buttons
        if (this.ui.uiMobileUp) this.ui.uiMobileUp.onclick = null;
        if (this.ui.uiMobileDown) this.ui.uiMobileDown.onclick = null;
        if (this.ui.uiMobileMap) this.ui.uiMobileMap.onclick = null;
        
        if (this.pathRevealInterval) clearInterval(this.pathRevealInterval);
    }

    preloadStoryImages() {
        const paths = [
            'assets/images/presentation/1-mystical-church-of-chaos.jpg',
            'assets/images/presentation/2-mystical-church-of-chaos.jpg',
            'assets/images/presentation/3-the-jelly-god.jpg',
            'assets/images/presentation/4-player-alone.jpg',
            'assets/images/presentation/5-player-thrown.jpg'
        ];

        this.storyImagesLoadedCount = 0;
        this.storyImagesTotalCount = paths.length;
        this.storyImagesPreloadPromise = Promise.all(paths.map((path, idx) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.src = path;
                img.onload = () => {
                    this.preloadedStoryImages[idx] = img;
                    this.storyImagesLoadedCount++;
                    resolve();
                };
                img.onerror = () => {
                    console.warn(`Failed to preload story image: ${path}`);
                    resolve();
                };
            });
        }));
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
        if (this.isTutorialMode) return;
        saveGame(this);
        this.hasSavePoint = true;
        this.lastSavePos = { x: this.player.x, y: this.player.y, z: this.player.z };
        this.ui.showSavingIndicator();
    }

    tryActivateJellyPortal() {
        if (this.isGameOver || this.isPaused || this.isIntroPlaying || this.isStoryActive || this.jellyPortalFreezeTimer > 0) return;

        const px = Math.floor(this.player.x);
        const py = Math.floor(this.player.y);
        const pz = this.player.z;
        const val = this.maze.get(px, py, pz);

        const hUp = pz < this.mazeGen.size - 1 && this.maze.get(px, py, pz + 1) !== this.mazeGen.TYPES.WALL;
        const hDown = pz > 0 && this.maze.get(px, py, pz - 1) !== this.mazeGen.TYPES.WALL;
        const isElevator = hUp || hDown;
        
        const isStartPos = px === Math.floor(this.mazeGen.startPos.x) && 
                           py === Math.floor(this.mazeGen.startPos.y) && 
                           pz === this.mazeGen.startPos.z;

        const isConventionalTeleport = val === this.mazeGen.TYPES.TELEPORT;

        if (isElevator || isConventionalTeleport || isStartPos || val !== this.mazeGen.TYPES.VISITED) {
            this.ui.showInfoBanner(getTranslation('msgJellyPortalNotHere'));
            return;
        }

        if (this.jellyPortalCount <= 0) {
            this.ui.showInfoBanner(getTranslation('msgJellyPortalNoPortalCount'));
            return;
        }

        this.jellyPortalCount--;
        this.ui.updateJellyPortalHUD(this.jellyPortalCount);

        this.maze.set(px, py, pz, this.mazeGen.TYPES.JELLY_PORTAL);
        const key = `${px},${py},${pz}`;
        this.discoveredTeleports.add(key);
        this.allTeleports.push({ x: px, y: py, z: pz });
        this.allTeleports.sort((a, b) => {
            if (a.z !== b.z) return a.z - b.z;
            if (a.x !== b.x) return a.x - b.x;
            return a.y - b.y;
        });
        this.selectedTeleportIndex = this.allTeleports.findIndex(t => t.x === px && t.y === py && t.z === pz);
        this.staticMapCacheDirty = true;

        this.ui.showInfoBanner(getTranslation('msgJellyPortalActivated'));

        // Salva imediatamente, definindo esta célula como o novo ponto de respawn
        this.triggerSave();

        this.jellyPortalFreezeTimer = 1.5;
        this.jellyPortalResetElapsed = 0;
        this.jellyPortalResetCells.clear();

        const size = this.mazeGen.size;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const dist = Math.abs(x - px) + Math.abs(y - py);
                if (dist <= 5) {
                    this.jellyPortalResetCells.add(`${x},${y}`);
                }
            }
        }

        const activationPercentage = this.getMapVisitedPercentage();
        for (const hunter of this.hunters) {
            if (hunter.state !== 'SLEEP' && hunter.state !== 'DEAD_BY_JELLY' && hunter.state !== 'DYING' && hunter.z === pz && hunter.x !== null && hunter.y !== null) {
                const hDist = Math.abs(hunter.x - px) + Math.abs(hunter.y - py);
                if (hDist <= 5) {
                    hunter.state = 'DYING';
                    hunter.respawnThresholdPercentage = activationPercentage;
                }
            }
        }
    }

    executeJellyPortalReset(px: number, py: number, pz: number) {
        const size = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;
        const startX = Math.floor(this.mazeGen.startPos.x);
        const startY = Math.floor(this.mazeGen.startPos.y);
        const startZ = this.mazeGen.startPos.z;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const dist = Math.abs(x - px) + Math.abs(y - py);
                if (dist <= 5) {
                    const val = this.maze.get(x, y, pz);
                    const cellKey = `${x},${y},${pz}`;

                    if (val === TYPES.STATUE) continue;
                    if (val === TYPES.WALL) {
                        let adjacentToStatue = false;
                        for (const [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1]]) {
                            const nx = x + dx, ny = y + dy;
                            if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                                if (this.maze.get(nx, ny, pz) === TYPES.STATUE) {
                                    adjacentToStatue = true;
                                    break;
                                }
                            }
                        }
                        if (adjacentToStatue) continue;
                    }

                    if (x === startX && y === startY && pz === startZ) continue;
                    if (x === px && y === py) continue;

                    // Limpa estados de visita e cache
                    this.visitedCells.delete(cellKey);
                    this.fullyRevealedCells.delete(cellKey);
                    this.revealedCellsAnimation.delete(cellKey);

                    if (dist === 1) {
                        if (val === TYPES.VISITED || val === TYPES.ELEVATOR_VISITED) {
                            this.maze.set(x, y, pz, TYPES.PATH);
                        }
                        if (val === TYPES.TELEPORT) {
                            this.discoveredTeleports.delete(cellKey);
                        }
                        continue;
                    }

                    if (val === TYPES.VISITED || val === TYPES.ELEVATOR_VISITED) {
                        this.maze.set(x, y, pz, TYPES.PATH);
                    } else if (val === TYPES.TELEPORT) {
                        this.discoveredTeleports.delete(cellKey);
                    }
                }
            }
        }

        for (const hunter of this.hunters) {
            if (hunter.state === 'DYING') {
                hunter.state = 'DEAD_BY_JELLY';
                hunter.x = null;
                hunter.y = null;
                hunter.z = null;
                hunter.visualX = null;
                hunter.visualY = null;
                hunter.visualZ = null;
                hunter.pathToTarget = [];
                hunter.history = [];
            }
        }

        if (this.dyingHunters.length > 0) {
            this.hunterManager.respawnDyingHunters();
            this.dyingHunters = [];
        }

        this.staticMapCacheDirty = true;
        this.triggerSave();
    }



    triggerVictory() {
        this.isGameOver = true;
        if (!this.isTutorialMode) {
            clearSave(); // Victory clears the save so "Continue" is no longer offered
        }
        
        let hasNext = false;
        if (this.isTutorialMode && this.currentTutorialId) {
            const currentIndex = TUTORIALS.findIndex(t => t.id === this.currentTutorialId);
            hasNext = (currentIndex !== -1 && currentIndex + 1 < TUTORIALS.length);
        }

        const percent = this.getMapVisitedPercentage();
        this.ui.showVictory(
            percent, 
            this.deathsCount, 
            this.degree, 
            this.elapsedTime, 
            this.manaCollected, 
            this.totalMana, 
            this.isTutorialMode, 
            hasNext
        );
    }

    triggerDeath() {
        this.isGameOver = true;
        this.ui.showDeath(this.hasSavePoint);
    }

    collectKey(x: number, y: number, z: number) {
        this.maze.set(x, y, z, this.mazeGen.TYPES.VISITED);
        this.visitedCells.add(`${x},${y},${z}`);
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

    collectMana(x: number, y: number, z: number) {
        this.maze.set(x, y, z, this.mazeGen.TYPES.VISITED);
        this.visitedCells.add(`${x},${y},${z}`);
        this.manaCollected++;
        this.staticMapCacheDirty = true;
        this.ui.updateManaHUD(this.manaCollected, this.totalMana);
        this.ui.showInfoBanner(getTranslation('msgManaSecured', { collected: this.manaCollected, total: this.totalMana }));
        
        if (this.manaCollected % 10 === 0) {
            this.jellyPortalCount++;
            this.ui.updateJellyPortalHUD(this.jellyPortalCount);
            setTimeout(() => {
                this.ui.showInfoBanner(getTranslation('msgJellyPortalEarned'));
            }, 1200); // Mostra o banner da personagem um pouco depois para não encavalar
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
    restoreFromSave(snapshot: any) {
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
        const useFixedHunters = this.isTutorialMode &&
                                this.currentTutorialStage &&
                                this.currentTutorialStage.hunterBehavior &&
                                this.currentTutorialStage.hunterBehavior.fixed;

        for (let i = 0; i < this.hunters.length && i < snapshot.hunters.length; i++) {
            if (useFixedHunters && this.mazeGen.tutorialHunterSpawns && this.mazeGen.tutorialHunterSpawns[i]) {
                const initPos = this.mazeGen.tutorialHunterSpawns[i];
                const hunter = this.hunters[i];
                hunter.x = initPos.x;
                hunter.y = initPos.y;
                hunter.z = initPos.z;
                hunter.visualX = initPos.x;
                hunter.visualY = initPos.y;
                hunter.visualZ = initPos.z;
                hunter.state = 'WANDERING';
                hunter.lastPos = { x: initPos.x, y: initPos.y, z: initPos.z };
                hunter.visitedNodes.clear();
                hunter.visitedNodes.add(`${initPos.x},${initPos.y},${initPos.z}`);
                hunter.history = [];
                hunter.pathToTarget = [];
                hunter.respawnThresholdPercentage = null;
            } else {
                restoreHunter(this.hunters[i], snapshot.hunters[i]);
            }
        }

        // Restore teleport state
        this.discoveredTeleports = new Set(snapshot.discoveredTeleports);
        this.inactiveTeleportPos = snapshot.inactiveTeleportPos;
        this.teleportCooldownTicks = snapshot.teleportCooldownTicks;

        // Rebuild allTeleports since JELLY_PORTALs might now exist in the restored matrix
        this.allTeleports = [];
        const mazeSize = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;
        for (let z = 0; z < mazeSize; z++) {
            for (let y = 0; y < mazeSize; y++) {
                for (let x = 0; x < mazeSize; x++) {
                    const cellVal = this.maze.get(x, y, z);
                    if (cellVal === TYPES.TELEPORT || cellVal === TYPES.JELLY_PORTAL) {
                        this.allTeleports.push({ x, y, z });
                    }
                }
            }
        }
        this.allTeleports.sort((a, b) => {
            if (a.z !== b.z) return a.z - b.z;
            if (a.y !== b.y) return a.y - b.y;
            return a.x - b.x;
        });

        // Restore selectedTeleportIndex
        const startGridX = Math.floor(this.player.x);
        const startGridY = Math.floor(this.player.y);
        const startGridZ = this.player.z;
        this.selectedTeleportIndex = this.allTeleports.findIndex(
            t => t.x === startGridX && t.y === startGridY && t.z === startGridZ
        );
        if (this.selectedTeleportIndex === -1) this.selectedTeleportIndex = 0;

        this.keysCollected = snapshot.keysCollected !== undefined ? snapshot.keysCollected : 0;
        this.totalKeys = snapshot.totalKeys !== undefined ? snapshot.totalKeys : CONFIG.getKeyCount(this.degree);
        this.ui.updateKeysHUD(this.keysCollected, this.totalKeys);

        this.manaCollected = snapshot.manaCollected !== undefined ? snapshot.manaCollected : 0;
        this.totalMana = snapshot.totalMana !== undefined ? snapshot.totalMana : 0;
        this.ui.updateManaHUD(this.manaCollected, this.totalMana);
        this.jellyPortalCount = snapshot.jellyPortalCount !== undefined ? snapshot.jellyPortalCount : (this.totalMana < 10 ? 1 : 0);
        this.ui.updateJellyPortalHUD(this.jellyPortalCount);

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
        this.deathsCount = snapshot.deathsCount !== undefined ? snapshot.deathsCount : 0;
        this.elapsedTime = snapshot.elapsedTime !== undefined ? snapshot.elapsedTime : 0;

        this.populateVisitedCells();
        this.lastSavePos = { x: snapshot.player.x, y: snapshot.player.y, z: snapshot.player.z };
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


    hideGameUI() {
        this.ui.hideGameUI();
        this.ui.hidePause();
        this.canvas.classList.remove('hunted-map-effect');
        this.isMap3DActive = false;
    }

    initThree() {
        this.threeRenderer.initThree();
    }

    init(savedState: any = null) {
        this.handleResize = () => this.resize();
        window.addEventListener('resize', this.handleResize);

        const zoomBtn = document.getElementById('mobile-zoom-btn');
        if (zoomBtn) {
            zoomBtn.onclick = (e) => {
                e.stopPropagation();
                if (Date.now() - this.lastTeleportCloseTime < 500) return;
                this.toggleZoom();
            };
        }

        if (this.ui.uiMobileUp) {
            this.ui.uiMobileUp.onclick = () => {
                if (Date.now() - this.lastTeleportCloseTime < 500) return;
                this.changeFloor(2);
            };
        }
        if (this.ui.uiMobileDown) {
            this.ui.uiMobileDown.onclick = () => {
                if (Date.now() - this.lastTeleportCloseTime < 500) return;
                this.changeFloor(-2);
            };
        }
        
        if (this.ui.uiMobileMap) {
            this.ui.uiMobileMap.onclick = () => {
                if (Date.now() - this.lastTeleportCloseTime < 500) return;
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
                const isJelly = this.maze.get(px, py, pz) === this.mazeGen.TYPES.JELLY_PORTAL;
                const isOnTeleport = this.maze.get(px, py, pz) === this.mazeGen.TYPES.TELEPORT || isJelly;
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


        
        this.resize();
        this.updateFloorUI();
        this.hideCanvasInstant();
        if (savedState) {
            this.restoreFromSave(savedState);
            this.playContinueAnimation();
        } else if (this.isTutorialMode) {
            this.isStoryActive = false;
            this.isIntroPlaying = false;
            
            const mapArea = document.getElementById('map-area-container');
            const leftHud = document.getElementById('left-hud-panel');
            const rightHud = document.getElementById('right-hud-panel');
            const bottomHud = document.getElementById('bottom-hud-container');
            if (mapArea) mapArea.classList.remove('hidden', 'intro-hidden');
            if (leftHud) leftHud.classList.remove('hidden', 'intro-hidden');
            if (rightHud) rightHud.classList.remove('hidden', 'intro-hidden');
            if (bottomHud) bottomHud.classList.remove('hidden', 'intro-hidden');
            
            if (this.ui.uiMobileMap) {
                this.ui.uiMobileMap.disabled = false;
            }
            
            this.ui.setMap3DVisible(false);
            this.isMap3DActive = false;
            this.staticMapCacheDirty = true;
            this.isZoomTransitionActive = true;
            this.zoomTransitionTimer = 2.0;
        } else {
            this.startStorytelling();
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

    drawElevator2D(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number, hUp: boolean, hDown: boolean, px: number, py: number, isRevealed: boolean = false, z: number = 0) {
        this.canvasRenderer.drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, isRevealed, z);
    }

    drawCellShadow2D(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number, size: number, val: number, z: number) {
        this.canvasRenderer.drawCellShadow2D(ctx, x, y, cellSize, size, val, z);
    }

    updateRendererSize() {
        this.threeRenderer.resize();
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

    checkPathfinderRewards(percent: number) {
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


    queueNotification(text: string) {
        this.notificationQueue.push(text);
    }

    updateNotification(dt: number) {
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
            if (!this.isZoomTransitionActive) {
                n.waitTimer += dt;
            }
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

    update(dt: number) {
        if (this.isGameOver || this.isDestroyed || !dt) return;

        if (this.teleportAnim && this.teleportAnim.active) {
            this.teleportAnim.elapsed += dt;
            this.auraTime = (this.auraTime || 0) + dt;
            
            if (this.teleportAnim.elapsed >= this.teleportAnim.duration) {
                if (this.teleportAnim.stage === 'OUT') {
                    this.player.x = this.teleportAnim.targetX;
                    this.player.y = this.teleportAnim.targetY;
                    this.player.z = this.teleportAnim.targetZ;
                    this.activeMapFloor = this.teleportAnim.targetZ;
                    this.visualActiveFloor = this.teleportAnim.targetZ;
                    this.lastPlayerCell = {
                        x: Math.floor(this.teleportAnim.targetX),
                        y: Math.floor(this.teleportAnim.targetY),
                        z: this.teleportAnim.targetZ
                    };
                    
                    const tx = Math.floor(this.player.x);
                    const ty = Math.floor(this.player.y);
                    const tz = this.player.z;
                    if (this.maze.get(tx, ty, tz) === this.mazeGen.TYPES.PATH) {
                        this.maze.set(tx, ty, tz, this.mazeGen.TYPES.VISITED);
                        this.visitedCells.add(`${tx},${ty},${tz}`);
                    }
                    this.updateFloorUI();
                    this.staticMapCacheDirty = true;
                    
                    this.teleportAnim.stage = 'IN';
                    this.teleportAnim.elapsed = 0;
                } else {
                    this.teleportAnim = null;
                }
            }
            this.updateNotification(dt);
            this.input.updateGamepad(dt);
            return;
        }

        if (this.jellyPortalFreezeTimer > 0) {
            this.jellyPortalFreezeTimer -= dt;
            this.jellyPortalResetElapsed += dt;
            if (this.jellyPortalFreezeTimer <= 0) {
                this.jellyPortalFreezeTimer = 0;
                this.executeJellyPortalReset(Math.floor(this.player.x), Math.floor(this.player.y), this.player.z);
                this.jellyPortalResetCells.clear();
            }
            this.updateNotification(dt);
            this.input.updateGamepad(dt);
            return;
        }

        if (!this.isPaused && !this.isIntroPlaying && !this.isStoryActive) {
            this.elapsedTime += dt;
            
            // Animate teleport aura height and time
            const px = Math.floor(this.player.x);
            const py = Math.floor(this.player.y);
            const pz = this.player.z;
            const val = this.maze.get(px, py, pz);
            const isStartPos = px === Math.floor(this.mazeGen.startPos.x) && py === Math.floor(this.mazeGen.startPos.y) && pz === this.mazeGen.startPos.z;
            const isTeleportBlock = (val === this.mazeGen.TYPES.TELEPORT || val === this.mazeGen.TYPES.START || isStartPos) && val !== this.mazeGen.TYPES.JELLY_PORTAL;

            const targetAuraHeight = isTeleportBlock ? 1.0 : 0.0;
            if (this.auraHeight < targetAuraHeight) {
                this.auraHeight = Math.min(targetAuraHeight, this.auraHeight + dt * 4.0);
            } else if (this.auraHeight > targetAuraHeight) {
                this.auraHeight = Math.max(targetAuraHeight, this.auraHeight - dt * 4.0);
            }
            this.auraTime = (this.auraTime || 0) + dt;
        }

        if (this.isStoryActive) {
            this.input.updateGamepad(dt);
            this.updateStory(dt);
            return;
        }

        if (this.isZoomTransitionActive) {
            this.zoomTransitionTimer -= dt;
            if (this.zoomTransitionTimer <= 0) {
                this.isZoomTransitionActive = false;
                this.zoomTransitionTimer = 0;
            }
        }

        this.updateNotification(dt);

        this.input.updateGamepad(dt);

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
                this.hunterManager.wakeHunters();
            }
        }

        // Check if any dead-by-jelly hunters can respawn now
        const currentPercent = this.getMapVisitedPercentage();
        const disableRespawn = this.isTutorialMode && 
                               this.currentTutorialStage && 
                               this.currentTutorialStage.hunterBehavior && 
                               this.currentTutorialStage.hunterBehavior.respawn === false;

        for (const hunter of this.hunters) {
            if (hunter.state === 'DEAD_BY_JELLY' && hunter.respawnThresholdPercentage !== null) {
                if (!disableRespawn && currentPercent >= hunter.respawnThresholdPercentage) {
                    this.hunterManager.respawnSingleHunter(hunter);
                    this.ui.showInfoBanner(getTranslation('msgHunterReturned'));
                }
            }
        }

        // Update hunter visual positions toward their target grid positions
        const speed = 1000 / CONFIG.HUNTER_SPEED;
        const maxDelta = speed * dt;
        for (const hunter of this.hunters) {
            if (hunter.visualX === null) hunter.visualX = hunter.x;
            if (hunter.visualY === null) hunter.visualY = hunter.y;
            if (hunter.visualZ === null) hunter.visualZ = hunter.z;
            if (hunter.state === 'DEAD_BY_JELLY' || hunter.x === null || hunter.y === null || hunter.z === null) continue;
            hunter.visualX = moveTowards(hunter.visualX!, hunter.x, maxDelta);
            hunter.visualY = moveTowards(hunter.visualY!, hunter.y, maxDelta);
            hunter.visualZ = moveTowards(hunter.visualZ!, hunter.z, maxDelta * 2);
            hunter.generateCloudTexture(dt);
        }

        if (this.isMap3DActive) {
            this.threeRenderer.update(dt);
        }

        if (!this.isMap3DActive && !this.isZoomTransitionActive) {
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
                
                const isPassable = (gx: number, gy: number, gz: number) => {
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
                const isBoxPassable = (cx: number, cy: number, cz: number) => {
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
                
                const markOrCollect = (gx: number, gy: number, gz: number) => {
                    const val = this.maze.get(gx, gy, gz);
                    if (val === this.mazeGen.TYPES.PATH || val === this.mazeGen.TYPES.KEY || val === this.mazeGen.TYPES.MANA) {
                        if (val === this.mazeGen.TYPES.KEY) {
                            this.collectKey(gx, gy, gz);
                        } else if (val === this.mazeGen.TYPES.MANA) {
                            this.collectMana(gx, gy, gz);
                        } else {
                            this.maze.set(gx, gy, gz, this.mazeGen.TYPES.VISITED);
                            this.visitedCells.add(`${gx},${gy},${gz}`);
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
            this.hunterManager.checkHunterCollision();
            if (this.isGameOver) return;

            const playerIdxX = Math.floor(this.player.x), playerIdxY = Math.floor(this.player.y);
            const playerIdxZ = this.player.z;
            const isJellyPortal = this.maze.get(playerIdxX, playerIdxY, playerIdxZ) === this.mazeGen.TYPES.JELLY_PORTAL;
            const isOnTeleport = this.maze.get(playerIdxX, playerIdxY, playerIdxZ) === this.mazeGen.TYPES.TELEPORT || isJellyPortal;
            const isInactive = this.teleportCooldownTicks > 0;

            if (playerIdxX >= 0 && playerIdxX < this.mazeGen.size && playerIdxY >= 0 && playerIdxY < this.mazeGen.size) {
                if (this.maze.get(playerIdxX, playerIdxY, playerIdxZ) === this.mazeGen.TYPES.PATH) {
                    this.maze.set(playerIdxX, playerIdxY, playerIdxZ, this.mazeGen.TYPES.VISITED);
                    this.visitedCells.add(`${playerIdxX},${playerIdxY},${playerIdxZ}`);
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
                        if (isJellyPortal) {
                            this.triggerSave();
                            this.ui.showInfoBanner(getTranslation('msgJellyPortalNotSafe'));
                        } else {
                            // Reentered or newly found teleport -> auto-save
                            this.triggerSave();
                            this.ui.showInfoBanner(getTranslation('msgSafePointTeleport'));
                        }
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

            if (this.input.keys['r']) {
                this.input.keys['r'] = false;
                this.tryActivateJellyPortal();
            }
            const movedCell = !this.lastPlayerCell || 
                              this.lastPlayerCell.x !== playerIdxX || 
                              this.lastPlayerCell.y !== playerIdxY || 
                              this.lastPlayerCell.z !== playerIdxZ;
            if (movedCell) {
                this.staticMapCacheDirty = true;
            }
            const isPortrait = window.innerHeight > window.innerWidth;
            this.ui.updateMobileMapButton(isOnTeleport, !!isInactive, isPortrait, isJellyPortal);
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
                        if (hunter.state === 'DEAD_BY_JELLY') continue;
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
                if (hunter.state === 'SLEEP' || hunter.state === 'DEAD_BY_JELLY' || hunter.state === 'DYING') continue;

                // Support static hunter behavior in tutorials
                const isStatic = this.isTutorialMode && 
                                 this.currentTutorialStage && 
                                 this.currentTutorialStage.hunterBehavior && 
                                 this.currentTutorialStage.hunterBehavior.static;

                if (isStatic) {
                    this.hunterManager.checkHunterCollision();
                    if (this.isGameOver) return;
                    continue;
                }

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
                        { x: hunter.x!, y: hunter.y!, z: hunter.z! },
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
                this.hunterManager.checkHunterCollision();
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
                    { x: hunter.x!, y: hunter.y!, z: hunter.z! },
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

    changeFloor(delta: number) {
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
                this.renderMapToContext(ctxOld!, this.player.z);

                this.player.x = currentX + CONFIG.PLAYER_START_X;
                this.player.y = currentY + (CONFIG.PLAYER_START_Y % 1.0);
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
                this.renderMapToContext(ctxNew!, this.player.z);

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
            this.isometricCanvas!.style.display = 'block';
        } else {
            if (this.ui.uiMobileControls) this.ui.uiMobileControls.classList.remove('hidden');
            this.ui.setMap3DVisible(false);
            if (this.isometricCanvas) {
                this.isometricCanvas.style.display = 'none';
            }
        }
    }

    build3DMap(isIntro = false) {
        this.threeRenderer.build3DMap(isIntro);
    }    
    


    draw2DMap(dt = 0.016) {
        this.canvasRenderer.draw2DMap(dt);
    }

    renderMapToContext(ctx: CanvasRenderingContext2D, z: number) {
        this.canvasRenderer.renderMapToContext(ctx, z);
    }

    updateStaticMapCache(z: number) {
        this.canvasRenderer.updateStaticMapCache(z);
    }

    isAdjacentToNonWall(x: number, y: number, z: number): boolean {
        const size = this.mazeGen.size;
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                    if (this.maze.get(nx, ny, z) !== this.mazeGen.TYPES.WALL) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    getAuraHeightAt(x: number, y: number, z: number): number {
        const val = this.maze.get(x, y, z);
        const isStartPos = x === Math.floor(this.mazeGen.startPos.x) && y === Math.floor(this.mazeGen.startPos.y) && z === this.mazeGen.startPos.z;
        const isTeleportBlock = (val === this.mazeGen.TYPES.TELEPORT || val === this.mazeGen.TYPES.START || isStartPos) && val !== this.mazeGen.TYPES.JELLY_PORTAL;

        if (!isTeleportBlock) return 0;

        if (this.teleportAnim && this.teleportAnim.active) {
            const anim = this.teleportAnim;
            const progress = Math.min(1.0, anim.elapsed / anim.duration);
            if (anim.stage === 'OUT') {
                if (x === Math.floor(anim.startX) && y === Math.floor(anim.startY) && z === anim.startZ) {
                    return 1.0 - progress;
                }
            } else if (anim.stage === 'IN') {
                if (x === Math.floor(anim.targetX) && y === Math.floor(anim.targetY) && z === anim.targetZ) {
                    return progress;
                }
            }
            return 0;
        }

        const isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
        if (isPlayerHere) {
            return this.auraHeight || 0;
        }
        return 0;
    }

    isWallVisible(x: number, y: number, z: number): boolean {
        const val = this.maze.get(x, y, z);
        if (val !== 0) return false;
        
        const isTutorialRevealed = this.isTutorialMode && 
                                   this.currentTutorialStage && 
                                   this.currentTutorialStage.revealed;
                                   
        return this.isNearVisited(x, y, z) || 
               this.isAdjacentToStatue(x, y, z) || 
               (isTutorialRevealed && this.isAdjacentToNonWall(x, y, z));
    }

    isNearVisited(x: number, y: number, z: number) {
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < this.mazeGen.size && ny >= 0 && ny < this.mazeGen.size) {
                    const v = this.maze.get(nx, ny, z);
                    // ELEVATOR_VISITED (5) and EXIT (4) cells do not automatically reveal adjacent
                    // paths by proximity.
                    if (v === 2 || v === 3 || v === this.mazeGen.TYPES.JELLY_PORTAL) return true;
                    if (v === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${nx},${ny},${z}`)) return true;
                }
            }
        }
        return false;
    }

    isAdjacentToStatue(x: number, y: number, z: number) {
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

    populateFullyRevealedCells(z: number) {
        const size = this.mazeGen.size;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const val = this.maze.get(x, y, z);
                const isTeleport = val === this.mazeGen.TYPES.TELEPORT;
                const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);
                const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);
                if (isVisited || isKnown || isRevealedPath || this.isWallVisible(x, y, z)) {
                    this.fullyRevealedCells.add(`${x},${y},${z}`);
                }
            }
        }
    }

    // getPathDistance3D and getProximeterDistance have been moved to pathfinder.js
    // as aStarDistance() and proximeterDistance() respectively.


    updatePulse() {
        this.threeRenderer.updatePulse();
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
            this.threeRenderer.update(clampedDt);
        }

        this.updateVortexAngles(clampedDt);

        if (this.isMap3DActive || this.isIntroPlaying) {
            if (this.isIntroPlaying) {
                this.threeRenderer.render();
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

    updateVortexAngles(dt: number) {
        if (!this.vortexAngles) return;
        const px = Math.floor(this.player.x);
        const py = Math.floor(this.player.y);
        const pz = this.player.z;

        // 1. Start Pos
        const startX = Math.floor(this.mazeGen.startPos.x);
        const startY = Math.floor(this.mazeGen.startPos.y);
        const startZ = this.mazeGen.startPos.z;
        const startKey = `${startX},${startY},${startZ}`;
        const isPlayerOnStart = px === startX && py === startY && pz === startZ;
        const startSpeed = isPlayerOnStart ? CONFIG.VORTEX_SPEED_FAST : CONFIG.VORTEX_SPEED_NORMAL;
        this.vortexAngles.set(startKey, (this.vortexAngles.get(startKey) || 0) + dt * startSpeed);

        // 2. Teleports
        if (this.allTeleports) {
            this.allTeleports.forEach(t => {
                const key = `${t.x},${t.y},${t.z}`;
                const isPlayerOnTeleport = px === t.x && py === t.y && pz === t.z;
                const isInactive = this.inactiveTeleportPos && 
                                   this.inactiveTeleportPos.x === t.x && 
                                   this.inactiveTeleportPos.y === t.y && 
                                   this.inactiveTeleportPos.z === t.z;
                const speed = (isPlayerOnTeleport && !isInactive) ? CONFIG.VORTEX_SPEED_FAST : CONFIG.VORTEX_SPEED_NORMAL;
                this.vortexAngles.set(key, (this.vortexAngles.get(key) || 0) + dt * speed);
            });
        }

        // 3. Exit Pos
        const exitPos = this.getExitPos();
        if (exitPos) {
            const exitKey = `${exitPos.x},${exitPos.y},${exitPos.z}`;
            const exitSpeed = CONFIG.VORTEX_SPEED_NORMAL;
            this.vortexAngles.set(exitKey, (this.vortexAngles.get(exitKey) || 0) + dt * exitSpeed);
        }
    }

    getHexColorVariation(hex: string, amount: number): string {
        let color = hex.replace('#', '');
        if (color.length === 3) {
            color = color.split('').map(c => c + c).join('');
        }
        let num = parseInt(color, 16);
        let r = (num >> 16) + amount;
        let g = ((num >> 8) & 0x00FF) + amount;
        let b = (num & 0x0000FF) + amount;
        
        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));
        
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    drawVortex2D(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number, baseColor: string, isPlayerOnCell: boolean, cellKey: string) {
        const cx = x * cellSize + cellSize / 2;
        const cy = y * cellSize + cellSize / 2;
        
        ctx.save();
        ctx.translate(cx, cy);
        
        // 1. Desenha o fundo sólido ANTES de aplicar a rotação para mantê-lo estático
        ctx.fillStyle = baseColor;
        ctx.fillRect(-cellSize / 2, -cellSize / 2, cellSize, cellSize);
        
        // 2. Aplica a rotação apenas ao redemoinho interno
        const angle = this.vortexAngles.get(cellKey) || 0;
        ctx.rotate(angle);
        
        // Variações de cor
        const varLight = this.getHexColorVariation(baseColor, 45);
        const varDark = this.getHexColorVariation(baseColor, -45);
        
        // Criação de gradientes radiais dinâmicos centralizados em (0, 0)
        const gradDark = ctx.createRadialGradient(0, 0, 0, 0, 0, cellSize * 0.45);
        gradDark.addColorStop(0, varLight);
        gradDark.addColorStop(0.4, baseColor);
        gradDark.addColorStop(1, varDark);

        const gradLight = ctx.createRadialGradient(0, 0, 0, 0, 0, cellSize * 0.45);
        gradLight.addColorStop(0, '#ffffff');
        gradLight.addColorStop(0.3, varLight);
        gradLight.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Dissipação suave
        
        const numArms = 3;
        const maxRadius = cellSize * 0.45;
        
        for (let arm = 0; arm < numArms; arm++) {
            const startArmAngle = (arm * 2 * Math.PI) / numArms;
            
            // Braço externo / grosso com gradiente escuro
            ctx.beginPath();
            ctx.strokeStyle = gradDark;
            ctx.lineWidth = cellSize * 0.09;
            ctx.lineCap = 'round';
            for (let r = 0; r <= maxRadius; r += 1) {
                const spiralFactor = 5 / maxRadius;
                const theta = startArmAngle + r * spiralFactor;
                const lx = r * Math.cos(theta);
                const ly = r * Math.sin(theta);
                if (r === 0) ctx.moveTo(lx, ly);
                else ctx.lineTo(lx, ly);
            }
            ctx.stroke();

            // Brilho interno / fino com gradiente claro
            ctx.beginPath();
            ctx.strokeStyle = gradLight;
            ctx.lineWidth = cellSize * 0.04;
            ctx.lineCap = 'round';
            for (let r = cellSize * 0.12; r <= maxRadius; r += 1) {
                const spiralFactor = 5 / maxRadius;
                const theta = startArmAngle + r * spiralFactor + 0.15;
                const lx = r * Math.cos(theta);
                const ly = r * Math.sin(theta);
                if (r === Math.floor(cellSize * 0.12)) ctx.moveTo(lx, ly);
                else ctx.lineTo(lx, ly);
            }
            ctx.stroke();
        }
        
        ctx.restore();
    }

    /**
     * Continue transition animation: renders the map instantly in its current state
     * (showing already visited and known paths with their official colors), auto-rotates
     * the camera, and then zooms in onto the player's current location before transitioning to 2D.
     */
    playContinueAnimation() {
        this.threeRenderer.playContinueAnimation();
    }

    animateCameraToPlayer(onComplete?: () => void) {
        this.threeRenderer.animateCameraToPlayer(onComplete);
    }

    playIntroAnimation() {
        this.threeRenderer.playIntroAnimation();
    }

    _transitionToGame() {
        if (this.isDestroyed) return;

        if (this.controls) {
            this.controls.autoRotate = false;
            this.controls.enableZoom = true;
            this.controls.enablePan = true;
            this.controls.enableRotate = true;
        }

        if (this.ui.uiMap3dContainer) {
            this.ui.uiMap3dContainer.classList.add('intro-fade-out');
        }

        setTimeout(() => {
            if (this.isDestroyed) return;
            this.ui.setMap3DVisible(false);
            if (this.ui.uiMap3dContainer) {
                this.ui.uiMap3dContainer.classList.remove('intro-fade-out');
            }
            this.isMap3DActive = false;
            this.isIntroPlaying = false;

            if (this.ui.uiMobileMap) {
                (this.ui.uiMobileMap as HTMLButtonElement).disabled = false;
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

            this.isZoomTransitionActive = true;
            this.zoomTransitionTimer = 2.0;

            if (!this.isResumedFromSave) {
                this.ui.showInfoBanner(getTranslation('msgWhereAmI'));
            }
        }, 600);
    }

    startStorytelling() {
        this.isStoryActive = true;
        this.storyMsgIndex = 0;
        this.storyState = "OPENING";
        this.storyWidthProgress = 0;
        this.storyCloseProgress = 1;
        this.storyCharIndex = 0;
        this.storyTypeTimer = 0;

        const storyEl = document.getElementById('story-screen');
        if (storyEl) {
            storyEl.classList.remove('hidden');
        }

        const loaderEl = document.getElementById('story-image-loader');
        const dialogueBox = document.getElementById('story-dialogue');

        this.isPreloadingActive = false;

        const initStorytellingWithPreloadedImages = () => {
            this.isPreloadingActive = false;
            if (dialogueBox) {
                dialogueBox.style.transform = "scaleX(0)"; // Start closed to animate smoothly
            }
            this.updateStoryImage();

            // 1. Keyboard event listener
            this.handleStoryKeyDown = (e: KeyboardEvent) => {
                const key = e.key.toLowerCase();
                if (key === 'escape') {
                    this.skipStory();
                } else if (!this.isPreloadingActive) {
                    this.triggerAdvanceStory();
                }
                e.preventDefault();
            };
            window.addEventListener('keydown', this.handleStoryKeyDown);

            // 2. Click event listener on story screen (excluding SKIP button)
            this.handleStoryClick = (e: MouseEvent) => {
                const target = e.target as HTMLElement | null;
                if (target && target.closest('#story-skip-btn')) return;
                if (!this.isPreloadingActive) {
                    this.triggerAdvanceStory();
                }
            };
            this.handleStoryTouch = (e: TouchEvent) => {
                const target = e.target as HTMLElement | null;
                if (target && target.closest('#story-skip-btn')) return;
                if (!this.isPreloadingActive) {
                    this.triggerAdvanceStory();
                }
                e.preventDefault();
            };
            if (storyEl) {
                storyEl.addEventListener('click', this.handleStoryClick);
                storyEl.addEventListener('touchstart', this.handleStoryTouch, { passive: false });
            }
        };

        // Always register the skip button listener right away (even during preloading)
        const skipBtn = document.getElementById('story-skip-btn');
        if (skipBtn) {
            skipBtn.onclick = (e) => {
                e.stopPropagation();
                this.skipStory();
            };
        }

        if (loaderEl && dialogueBox) {
            dialogueBox.style.transform = "scaleX(0)"; // Keep closed during loading
            
            if (this.storyImagesLoadedCount < this.storyImagesTotalCount) {
                this.isPreloadingActive = true;
                loaderEl.classList.remove('hidden');
                
                this.storyImagesPreloadPromise!.then(() => {
                    loaderEl!.classList.add('hidden');
                    initStorytellingWithPreloadedImages();
                });
                return;
            }
        }

        initStorytellingWithPreloadedImages();
    }

    endStorytelling() {
        this.isStoryActive = false;
        this.isPreloadingActive = false;

        const storyEl = document.getElementById('story-screen');
        if (storyEl) {
            storyEl.classList.add('hidden');
        }

        if (this.handleStoryKeyDown) {
            window.removeEventListener('keydown', this.handleStoryKeyDown);
            this.handleStoryKeyDown = null;
        }
        if (this.handleStoryClick && storyEl) {
            storyEl.removeEventListener('click', this.handleStoryClick);
            this.handleStoryClick = null;
        }
        if (this.handleStoryTouch && storyEl) {
            storyEl.removeEventListener('touchstart', this.handleStoryTouch);
            this.handleStoryTouch = null;
        }

        // Enable mobile map button
        if (this.ui.uiMobileMap) {
            this.ui.uiMobileMap.disabled = false;
        }

        // Ensure 2D game UI is displayed and not hidden
        const mapArea = document.getElementById('map-area-container');
        const leftHud = document.getElementById('left-hud-panel');
        const rightHud = document.getElementById('right-hud-panel');
        const bottomHud = document.getElementById('bottom-hud-container');
        if (mapArea) {
            mapArea.classList.remove('hidden', 'intro-hidden');
            mapArea.classList.add('intro-reveal');
            setTimeout(() => mapArea.classList.remove('intro-reveal'), 700);
        }
        if (leftHud) {
            leftHud.classList.remove('hidden', 'intro-hidden');
            leftHud.classList.add('intro-reveal');
            setTimeout(() => leftHud.classList.remove('intro-reveal'), 700);
        }
        if (rightHud) {
            rightHud.classList.remove('hidden', 'intro-hidden');
            rightHud.classList.add('intro-reveal');
            setTimeout(() => rightHud.classList.remove('intro-reveal'), 700);
        }
        if (bottomHud) {
            bottomHud.classList.remove('hidden', 'intro-hidden');
            bottomHud.classList.add('intro-reveal');
            setTimeout(() => bottomHud.classList.remove('intro-reveal'), 700);
        }

        // Hide 3D view (start game in 2D)
        this.ui.setMap3DVisible(false);
        this.isMap3DActive = false;
        this.isIntroPlaying = false;

        // Force static map cache generation
        this.staticMapCacheDirty = true;

        this.isZoomTransitionActive = true;
        this.zoomTransitionTimer = 2.0;

        if (!this.isResumedFromSave) {
            this.ui.showInfoBanner(getTranslation('msgWhereAmI'));
        }
    }

    updateStoryImage() {
        const imgEl = document.getElementById('story-img') as HTMLImageElement | null;
        const imgBox = document.getElementById('story-image-canvas');
        if (!imgEl || !imgBox) return;

        // Reset default background style
        imgBox.style.background = '#0b0b0b';

        if (this.storyMsgIndex === 5) {
            // Slide 6: Black background with radial gradient
            imgEl.style.display = 'none';
            imgBox.style.background = 'radial-gradient(circle, #222222 0%, #000000 80%)';
            imgBox.removeAttribute('data-placeholder');
        } else {
            const preloadedImg = this.preloadedStoryImages[this.storyMsgIndex];
            if (preloadedImg) {
                imgEl.src = preloadedImg.src;
                imgEl.style.display = 'block';
                imgBox.removeAttribute('data-placeholder');
            } else {
                let imgPath = "";
                if (this.storyMsgIndex === 0) {
                    imgPath = 'assets/images/presentation/1-mystical-church-of-chaos.jpg';
                } else if (this.storyMsgIndex === 1) {
                    imgPath = 'assets/images/presentation/2-mystical-church-of-chaos.jpg';
                } else if (this.storyMsgIndex === 2) {
                    imgPath = 'assets/images/presentation/3-the-jelly-god.jpg';
                } else if (this.storyMsgIndex === 3) {
                    imgPath = 'assets/images/presentation/4-player-alone.jpg';
                } else if (this.storyMsgIndex === 4) {
                    imgPath = 'assets/images/presentation/5-player-thrown.jpg';
                }

                imgEl.src = imgPath;
                imgEl.onerror = () => {
                    imgEl.style.display = 'none';
                    imgBox.setAttribute('data-placeholder', `[Image ${this.storyMsgIndex + 1}]`);
                };
                imgEl.onload = () => {
                    imgEl.style.display = 'block';
                    imgBox.removeAttribute('data-placeholder');
                };
            }
        }
    }

    updateStory(dt: number) {
        if (!this.isStoryActive || this.isPreloadingActive) return;

        const textEl = document.getElementById('story-text');
        const dialogueBox = document.getElementById('story-dialogue');
        const arrowEl = document.getElementById('story-arrow');

        if (!dialogueBox || !textEl) return;

        const msgs = [
            "storyMsg1",
            "storyMsg2",
            "storyMsg3",
            "storyMsg4",
            "storyMsg5",
            "storyMsg6"
        ];

        if (this.storyMsgIndex >= msgs.length) {
            this.endStorytelling();
            return;
        }

        const fullText = getTranslation(msgs[this.storyMsgIndex]);
        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        if (this.storyState === "OPENING") {
            textEl.textContent = "";
            if (arrowEl) arrowEl.classList.add('hidden');

            this.storyWidthProgress += dt / 0.45;
            if (this.storyWidthProgress >= 1) {
                this.storyWidthProgress = 1;
                this.storyState = "TYPING";
                this.storyCharIndex = 0;
                this.storyTypeTimer = 0;
            }
            dialogueBox.style.transform = `scaleX(${easeInOutCubic(this.storyWidthProgress)})`;
        } 
        else if (this.storyState === "TYPING") {
            dialogueBox.style.transform = "scaleX(1)";
            if (arrowEl) arrowEl.classList.add('hidden');

            this.storyTypeTimer += dt;
            if (this.storyTypeTimer >= 0.025) {
                this.storyTypeTimer = 0;
                this.storyCharIndex++;
                textEl.textContent = fullText.substring(0, this.storyCharIndex);
                
                if (this.storyCharIndex >= fullText.length) {
                    this.storyState = "WAITING";
                }
            }
        } 
        else if (this.storyState === "WAITING") {
            dialogueBox.style.transform = "scaleX(1)";
            textEl.textContent = fullText;
            if (arrowEl) arrowEl.classList.remove('hidden');
        } 
        else if (this.storyState === "CLOSING") {
            textEl.textContent = "";
            if (arrowEl) arrowEl.classList.add('hidden');

            this.storyCloseProgress -= dt / 0.45;
            if (this.storyCloseProgress <= 0) {
                this.storyCloseProgress = 0;
                this.endStorytelling();
            }
            dialogueBox.style.transform = `scaleX(${easeInOutCubic(this.storyCloseProgress)})`;
        }
    }

    triggerAdvanceStory() {
        const msgs = [
            "storyMsg1",
            "storyMsg2",
            "storyMsg3",
            "storyMsg4",
            "storyMsg5",
            "storyMsg6"
        ];
        if (this.storyMsgIndex >= msgs.length) return;
        const fullText = getTranslation(msgs[this.storyMsgIndex]);

        if (this.storyState === "CLOSING") {
            this.skipStory();
            return;
        }

        if (this.storyState === "OPENING") {
            this.storyState = "TYPING";
            this.storyWidthProgress = 1;
            this.storyCharIndex = 0;
            this.storyTypeTimer = 0;
        } else if (this.storyState === "TYPING") {
            this.storyState = "WAITING";
            this.storyCharIndex = fullText.length;
            const textEl = document.getElementById('story-text');
            if (textEl) textEl.textContent = fullText;
        } else if (this.storyState === "WAITING") {
            if (this.storyMsgIndex + 1 < msgs.length) {
                this.storyMsgIndex++;
                this.storyState = "TYPING";
                this.storyCharIndex = 0;
                this.storyTypeTimer = 0;
                this.updateStoryImage();
                const textEl = document.getElementById('story-text');
                if (textEl) textEl.textContent = "";
            } else {
                this.storyState = "CLOSING";
                this.storyCloseProgress = 1;
            }
        }
    }

    skipStory() {
        this.endStorytelling();
    }

    toggleTeleportMap(show: boolean) {
        this.isMap3DActive = show;
        this.isTeleportMode = show;
        
        const telExitBtn = document.getElementById('mobile-teleport-exit-btn');
        
        if (show) {
            this.isMouseOrTouchDetected = false;
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
            this.lastTeleportCloseTime = Date.now();
            if (telExitBtn) telExitBtn.classList.add('hidden');
            if (this.ui.uiMobileControls) this.ui.uiMobileControls.classList.remove('hidden');
            this.ui.setMap3DVisible(false);
            if (this.isometricCanvas) {
                this.isometricCanvas.style.display = 'none';
            }
            this.teleportConfirmModalActive = false;
        }
    }

    onCanvasClick(event: MouseEvent) {
        this.threeRenderer.onCanvasClick(event);
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
            if (this.ui.uiMobilePauseBtn && !this.ui.uiMobileControls!.classList.contains('hidden')) {
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



    triggerPathReveal(tx: number, ty: number, tz: number, bypassConfirm: boolean = false) {
        if (this.pathRevealInterval || (this.pathfinderBlockedUntil && Date.now() < this.pathfinderBlockedUntil)) {
            return;
        }

        if (this.pathfindersRemaining <= 0) {
            this.ui.showInfoBanner(getTranslation('msgNoPathfindersRemaining'));
            return;
        }

        const isExitClicked = this.maze.get(tx, ty, tz) === this.mazeGen.TYPES.EXIT;
        if (isExitClicked) {
            if (!this.exitPathfinderUnlocked) {
                this.ui.showInfoBanner(getTranslation('msgExitNotFoundYet'));
                return;
            }
        }

        if (!bypassConfirm) {
            const modal = document.getElementById('pathfinder-confirm-modal');
            if (modal) {
                this.pathfinderConfirmTarget = { x: tx, y: ty, z: tz };
                modal.classList.remove('hidden');
                this.ui.localizeDOM();
                return;
            }
        }

        if (this.pathRevealInterval) {
            clearInterval(this.pathRevealInterval);
            this.pathRevealInterval = null;
        }
        this.revealedPathSet.clear();

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
        const path = findShortestPath(this, start, end, isExitClicked);

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

    teleportTo(x: number, y: number, z: number) {
        this.toggleTeleportMap(false);

        this.teleportAnim = {
            active: true,
            stage: 'OUT',
            startX: this.player.x,
            startY: this.player.y,
            startZ: this.player.z,
            targetX: x + CONFIG.PLAYER_START_X,
            targetY: y + (CONFIG.PLAYER_START_Y % 1.0),
            targetZ: z,
            duration: 0.4, // 400ms per phase
            elapsed: 0
        };

        this.skipCellAnimations = true;
        
        if (!this.isSafeMode) {
            const nTicks = Math.floor(this.degree * 1.5) + 3;
            this.teleportCooldownTicks = nTicks;
            this.inactiveTeleportPos = { x, y, z };

            this.ui.showInfoBanner(getTranslation('msgOopsNoisyShit'));

            for (const hunter of this.hunters) {
                if (hunter.state === 'DEAD_BY_JELLY') continue;
                hunter.state = 'TELEPORT_TRACKING';
                const path = hunter.findPathToTarget({ x, y, z }, this.maze, this.mazeGen.TYPES);
                if (path) {
                    hunter.pathToTarget = path;
                } else {
                    hunter.pathToTarget = [];
                }
            }
        }
        
        this.input.keys = {};
    }

    initIsometricCanvas() {
        const canvas = document.createElement('canvas');
        this.isometricCanvas = canvas;
        canvas.id = 'isometric-map-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '101';
        this.isometricCtx = canvas.getContext('2d');
        this.ui.uiMap3dContainer!.appendChild(canvas);

        // Click handler
        canvas.addEventListener('click', (e) => this.handleIsometricClick(e));

        const detectMouseOrTouch = () => {
            if (!this.isMouseOrTouchDetected) {
                this.isMouseOrTouchDetected = true;
            }
        };
        canvas.addEventListener('mousemove', detectMouseOrTouch);
        canvas.addEventListener('pointerdown', detectMouseOrTouch);

        // Touch gestures handler (Pinch zoom, vertical swipe to change floors, drag to pan)
        let initialTouchDist: number | null = null;
        let initialZoom: number | null = null;
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartPanX = 0;
        let touchStartPanY = 0;
        let isPinchZooming = false;
        let isTouchPanning = false;
        let hasSwipedFloor = false;
        let totalTouchMoveDist = 0;

        canvas.addEventListener('touchstart', (e) => {
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

        canvas.addEventListener('touchmove', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;

            if (isPinchZooming && e.touches.length === 2) {
                e.preventDefault();
                const t1 = e.touches[0];
                const t2 = e.touches[1];
                const currentDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
                if (initialTouchDist && initialTouchDist > 0 && initialZoom) {
                    const rect = canvas.getBoundingClientRect();
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
                            // Swipe UP -> Floor Down
                            if (this.activeMapFloor - 2 >= 1) {
                                this.activeMapFloor -= 2;
                                hasSwipedFloor = true;
                            }
                        } else if (deltaY > 40) {
                            // Swipe DOWN -> Floor Up
                            if (this.activeMapFloor + 2 <= size - 2) {
                                this.activeMapFloor += 2;
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

        canvas.addEventListener('touchend', (e) => {
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
        canvas.addEventListener('wheel', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;
            e.preventDefault();

            const rect = canvas.getBoundingClientRect();
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

        canvas.addEventListener('mousedown', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;
            const rect = canvas.getBoundingClientRect();
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
                if (this.isMouseOrTouchDetected && !this.teleportConfirmModalActive && this.teleportGoBtnClickRect) {
                    const r = this.teleportGoBtnClickRect;
                    if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                        return;
                    }
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
        canvas.addEventListener('mousemove', (e) => {
            if (!this.isMap3DActive || this.isIntroPlaying) return;

            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            canvas.style.cursor = 'default';

            // 1. Check Teleport Mode Hover
            if (this.isTeleportMode) {
                if (this.isMouseOrTouchDetected && !this.teleportConfirmModalActive && this.teleportGoBtnClickRect) {
                    const r = this.teleportGoBtnClickRect;
                    if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                        canvas.style.cursor = 'pointer';
                        return;
                    }
                }
                if (this.teleportConfirmModalActive && this.teleportModalClickRects) {
                    for (const r of this.teleportModalClickRects) {
                        if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                            this.teleportModalSelection = r.selection;
                            canvas.style.cursor = 'pointer';
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
                                canvas.style.cursor = 'pointer';
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
                            canvas.style.cursor = 'pointer';
                            return;
                        }
                    }
                }
            }

        });
    }

    handleIsometricClick(event: MouseEvent | { clientX: number, clientY: number }) {
        if (!this.isMap3DActive || this.isIntroPlaying) return;
 
        // Evita clique fantasma emulado pelo browser mobile após o touchend
        if (event instanceof MouseEvent && Date.now() - this.lastTeleportCloseTime < 500) {
            return;
        }

        const rect = this.isometricCanvas!.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // Teleport Selection Click Checks
        if (this.isTeleportMode) {
            if (this.teleportConfirmModalActive) {
                if (this.teleportModalClickRects) {
                    for (const r of this.teleportModalClickRects) {
                        if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                            if (r.selection === 'go') {
                                const targetT = this.allTeleports[this.selectedTeleportIndex!];
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

            if (!this.teleportConfirmModalActive && this.teleportGoBtnClickRect) {
                const r = this.teleportGoBtnClickRect;
                if (clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h) {
                    const targetT = this.allTeleports[this.selectedTeleportIndex!];
                    const px = Math.floor(this.player.x);
                    const py = Math.floor(this.player.y);
                    const pz = this.player.z;
                    const isCurrent = targetT && targetT.x === px && targetT.y === py && targetT.z === pz;
                    if (targetT && !isCurrent) {
                        this.teleportTo(targetT.x, targetT.y, targetT.z);
                        this.toggleTeleportMap(false);
                    }
                    return;
                }
            }

            if (this.teleportDotsClickRects) {
                const match = this.teleportDotsClickRects.find(r => clickX >= r.x && clickX <= r.x + r.w && clickY >= r.y && clickY <= r.y + r.h);
                if (match) {
                    const selectable = this.getSelectableTeleportIndices();
                    if (selectable.includes(match.index)) {
                        this.selectedTeleportIndex = match.index;
                        const targetT = this.allTeleports[match.index];
                        this.activeMapFloor = targetT.z;
                        this.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
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

        const getIsoCoords = (x: number, y: number, z: number) => {
            const px = (x - y) * tileWidthHalf + centerX;
            const py = (x + y) * tileHeightHalf - (z - activeZ) * floorOffset + centerY;
            return { x: px, y: py };
        };

        // If in teleport mode, block all non-teleport cell clicks
        if (this.isTeleportMode) {
            const elements = this.getInteractiveElements(activeZ);
            let closestElement = null;
            let minElementDist = Infinity;
            const maxClickRadius = this.isTouchDevice ? 52 : 35;
            
            for (const el of elements) {
                if (el.type !== 'teleport') continue;
                const coords = getIsoCoords(el.x, el.y, el.z);
                const dx = clickX - coords.x;
                const dy = clickY - coords.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minElementDist) {
                    minElementDist = dist;
                    closestElement = el;
                }
            }
            if (closestElement && minElementDist <= maxClickRadius) {
                const { x, y, z } = closestElement;
                const index = this.allTeleports.findIndex(t => t.x === x && t.y === y && t.z === z);
                const selectable = this.getSelectableTeleportIndices();
                if (index !== -1 && selectable.includes(index)) {
                    this.selectedTeleportIndex = index;
                    this.mapCursor = { x, y, z };
                }
            }
            return;
        }

        // Check if clicked close to any interactive element (generous target, especially for mobile)
        const elements = this.getInteractiveElements(activeZ);
        let closestElement = null;
        let minElementDist = Infinity;
        const maxClickRadius = this.isTouchDevice ? 52 : 35;
        
        for (const el of elements) {
            const coords = getIsoCoords(el.x, el.y, el.z);
            const dx = clickX - coords.x;
            const dy = clickY - coords.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minElementDist) {
                minElementDist = dist;
                closestElement = el;
            }
        }
        
        if (closestElement && minElementDist <= maxClickRadius) {
            this.mapCursor = { x: closestElement.x, y: closestElement.y, z: closestElement.z };
            this.triggerPathReveal(closestElement.x, closestElement.y, closestElement.z);
            return;
        }
    }

    navigateCursor(direction: 'up' | 'down' | 'left' | 'right') {
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

    getInteractiveElements(activeZ: number) {
        const elements = [];
        const size = this.mazeGen.size;
        const TYPES = this.mazeGen.TYPES;

        const isFloorVisited = (fx: number, fy: number, fz: number) => {
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
        if (!canvas || !ctx) return;
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

        const getIsoCoords = (x: number, y: number, z: number) => {
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

        const drawGrid = (gridOpacity: number) => {
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

        const drawIsoBox = (cx: number, cy: number, w: number, h: number, H: number, color: string, opacity = 1.0) => {
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

        const drawVortexIsometric = (cx: number, cy: number, w: number, h: number, H: number, baseColor: string, isPlayerOnCell: boolean, cellKey: string, opacity = 1.0) => {
            ctx.save();
            ctx.globalAlpha = opacity;

            // 1. Face lateral esquerda
            ctx.beginPath();
            ctx.moveTo(cx - w, cy);
            ctx.lineTo(cx, cy + h);
            ctx.lineTo(cx, cy + h - H);
            ctx.lineTo(cx - w, cy - H);
            ctx.closePath();
            ctx.fillStyle = baseColor;
            ctx.fill();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fill();

            // 2. Face lateral direita
            ctx.beginPath();
            ctx.moveTo(cx, cy + h);
            ctx.lineTo(cx + w, cy);
            ctx.lineTo(cx + w, cy - H);
            ctx.lineTo(cx, cy + h - H);
            ctx.closePath();
            ctx.fillStyle = baseColor;
            ctx.fill();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fill();

            // 3. Face superior (tampa) com clipping e escala isométrica
            ctx.restore();
            
            ctx.save();
            ctx.globalAlpha = opacity;
            
            // Fundo losango angular para máscara
            ctx.beginPath();
            ctx.moveTo(cx - w, cy - H);
            ctx.lineTo(cx, cy + h - H);
            ctx.lineTo(cx + w, cy - H);
            ctx.lineTo(cx, cy - h - H);
            ctx.closePath();
            ctx.fillStyle = baseColor;
            ctx.fill();
            ctx.clip(); // Limita o vortex ao losango

            // Translação e escala para projeção isométrica
            ctx.translate(cx, cy - H);
            ctx.scale(1, 0.5);

            // Rotação
            const angle = this.vortexAngles.get(cellKey) || 0;
            ctx.rotate(angle);

            // Tons de cor
            const varLight = this.getHexColorVariation(baseColor, 45);
            const varDark = this.getHexColorVariation(baseColor, -45);

            // Gradientes radiais
            const maxRadius = w;
            const gradDark = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
            gradDark.addColorStop(0, varLight);
            gradDark.addColorStop(0.4, baseColor);
            gradDark.addColorStop(1, varDark);

            const gradLight = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
            gradLight.addColorStop(0, '#ffffff');
            gradLight.addColorStop(0.3, varLight);
            gradLight.addColorStop(1, 'rgba(255, 255, 255, 0)');

            const numArms = 3;
            for (let arm = 0; arm < numArms; arm++) {
                const startArmAngle = (arm * 2 * Math.PI) / numArms;

                // Braço principal
                ctx.beginPath();
                ctx.strokeStyle = gradDark;
                ctx.lineWidth = w * 0.18;
                ctx.lineCap = 'round';
                for (let r = 0; r <= maxRadius; r += 1) {
                    const spiralFactor = 5 / maxRadius;
                    const theta = startArmAngle + r * spiralFactor;
                    const lx = r * Math.cos(theta);
                    const ly = r * Math.sin(theta);
                    if (r === 0) ctx.moveTo(lx, ly);
                    else ctx.lineTo(lx, ly);
                }
                ctx.stroke();

                // Braço de brilho
                ctx.beginPath();
                ctx.strokeStyle = gradLight;
                ctx.lineWidth = w * 0.08;
                ctx.lineCap = 'round';
                for (let r = maxRadius * 0.12; r <= maxRadius; r += 1) {
                    const spiralFactor = 5 / maxRadius;
                    const theta = startArmAngle + r * spiralFactor + 0.15;
                    const lx = r * Math.cos(theta);
                    const ly = r * Math.sin(theta);
                    if (r === Math.floor(maxRadius * 0.12)) ctx.moveTo(lx, ly);
                    else ctx.lineTo(lx, ly);
                }
                ctx.stroke();
            }

            ctx.restore();
        };

        const isFloorVisited = (fx: number, fy: number, fz: number) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.maze.get(fx, fy, fz);
            return fVal === this.mazeGen.TYPES.VISITED || fVal === this.mazeGen.TYPES.START || fVal === this.mazeGen.TYPES.ELEVATOR_VISITED || (fVal === this.mazeGen.TYPES.TELEPORT && this.discoveredTeleports.has(`${fx},${fy},${fz}`));
        };

        const drawElevatorBox = (cx: number, cy: number, w: number, h: number, H: number, hUp: boolean, hDown: boolean, isVisited: boolean, isRevealed: boolean, opacity: number) => {
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

        const drawFloorCells = (z: number, opacity: number) => {
            const TYPES = this.mazeGen.TYPES;
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const val = this.maze.get(x, y, z);
                    const coords = getIsoCoords(x, y, z);

                    // Jelly Portal Animation Inversion Effect (Isometric)
                    const isUnderJellyPortal = this.jellyPortalFreezeTimer > 0 && this.jellyPortalResetCells.has(`${x},${y}`) && z === this.player.z;
                    if (isUnderJellyPortal) {
                        const elapsed = 1.5 - this.jellyPortalFreezeTimer;
                        const holdTime = 0.6;
                        let animProgress = 0;
                        if (elapsed > holdTime) {
                            animProgress = Math.min(1.0, (elapsed - holdTime) / 0.9);
                        }
                        
                        ctx.save();
                        const invertPercent = Math.round(100 * (1.0 - animProgress));
                        ctx.filter = `invert(${invertPercent}%)`;
                        
                        const isCenter = x === Math.floor(this.player.x) && y === Math.floor(this.player.y);
                        const isStatue = val === TYPES.STATUE;
                        const shouldFadeOut = !isCenter && !isStatue;
                        
                        if (shouldFadeOut) {
                            ctx.globalAlpha = (1.0 - animProgress) * opacity;
                        } else {
                            ctx.globalAlpha = opacity;
                        }
                        
                        if (val === TYPES.WALL || isStatue) {
                            const H = 1.5;
                            if (isStatue) {
                                drawIsoBox(coords.x, coords.y, tileWidthHalf, tileHeightHalf, H, '#444444', opacity);
                                drawStatue(coords.x, coords.y, opacity);
                            } else {
                                const subW = tileWidthHalf * 0.45;
                                const subH = tileHeightHalf * 0.45;
                                const boxH = tileHeight * 0.25;
                                const color = 'rgba(90, 20, 160, 0.8)';
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
                        } else {
                            let color = '#444444';
                            let isVortex = false;
                            let vortexColor = '';
                            if (isCenter) {
                                vortexColor = CONFIG.COLORS.JELLY_PORTAL;
                                isVortex = true;
                            } else if (val === TYPES.TELEPORT) {
                                vortexColor = CONFIG.COLORS.TELEPORT_INACTIVE;
                                isVortex = true;
                            } else if (val === TYPES.EXIT) {
                                vortexColor = CONFIG.COLORS.EXIT;
                                isVortex = true;
                            }
                            
                            if (isVortex) {
                                drawVortexIsometric(coords.x, coords.y, tileWidthHalf, tileHeightHalf, 1.5, vortexColor, false, `${x},${y},${z}`, opacity);
                            } else {
                                drawIsoBox(coords.x, coords.y, tileWidthHalf, tileHeightHalf, 1.5, color, opacity);
                            }
                            
                            if (val === TYPES.KEY) {
                                drawKey(coords.x, coords.y - 1.5, opacity);
                            } else if (val === TYPES.MANA) {
                                drawMana(coords.x, coords.y - 1.5, opacity);
                            }
                        }
                        
                        ctx.restore();
                        continue;
                    }

                    const isJelly = val === TYPES.JELLY_PORTAL;
                    const isTeleport = val === TYPES.TELEPORT || isJelly;
                    const isTeleportDiscovered = isTeleport && this.discoveredTeleports.has(`${x},${y},${z}`);
                    const isVisited = val === TYPES.VISITED || val === TYPES.START || val === TYPES.ELEVATOR_VISITED || isTeleportDiscovered;
                    const isKnown = (val === TYPES.PATH || (isTeleport && !isTeleportDiscovered)) && this.isNearVisited(x, y, z);
                    const isRevealedPath = this.revealedPathSet.has(`${x},${y},${z}`);

                    const isKey = val === TYPES.KEY;
                    const isMana = val === TYPES.MANA;
                    const isExit = val === TYPES.EXIT;

                    if (val === TYPES.WALL || val === TYPES.STATUE) {
                        const isVisible = (val === TYPES.WALL && this.isWallVisible(x, y, z)) ||
                                          (val === TYPES.STATUE && (this.isNearVisited(x, y, z) || (this.isTutorialMode && this.currentTutorialStage && this.currentTutorialStage.revealed)));
                        if (isVisible) {
                            const subW = tileWidthHalf * 0.45;
                            const subH = tileHeightHalf * 0.45;
                            const boxH = tileHeight * 0.25;
                            const color = 'rgba(90, 20, 160, 0.8)'; // dark purple neon

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
                        if (h.state === 'SLEEP' || h.state === 'DEAD_BY_JELLY') continue;
                        const hz = h.visualZ !== null ? h.visualZ : h.z;
                        const hx = h.visualX !== null ? h.visualX : h.x;
                        const hy = h.visualY !== null ? h.visualY : h.y;
                        if (hz === null || hx === null || hy === null) continue;
                        const closestPlayableFloor = Math.round((hz - 1) / 2) * 2 + 1;
                        const hGridX = Math.max(0, Math.min(size - 1, Math.floor(hx)));
                        const hGridY = Math.max(0, Math.min(size - 1, Math.floor(hy)));
                        if (x === hGridX && y === hGridY && z === closestPlayableFloor) {
                            const hCoords = getIsoCoords(hx, hy, hz);
                            drawHunter(h, hCoords.x, hCoords.y - 1.5, opacity);
                        }
                    }

                    const isVisible = isVisited || isKnown || isRevealedPath || isKey || isMana || isExit;

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
                            let isVortex = false;
                            let vortexColor = '';
                            const isPlayerHere = Math.floor(this.player.x) === x && Math.floor(this.player.y) === y && z === this.player.z;
                            const key = `${x},${y},${z}`;

                            if (isRevealedPath) {
                                color = '#ffffff';
                            } else if (isExit) {
                                const isUnlocked = this.keysCollected === this.totalKeys;
                                vortexColor = isUnlocked ? CONFIG.COLORS.EXIT : '#ff3300';
                                isVortex = true;
                            } else if (isTeleportDiscovered) {
                                const isStartTeleport = x === Math.floor(this.mazeGen.startPos.x) && y === Math.floor(this.mazeGen.startPos.y) && z === this.mazeGen.startPos.z;
                                const isInactive = this.teleportCooldownTicks > 0;
                                if (isStartTeleport) {
                                    vortexColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : (isPlayerHere ? CONFIG.COLORS.TELEPORT : CONFIG.COLORS.START);
                                } else {
                                    vortexColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : (isJelly ? CONFIG.COLORS.JELLY_PORTAL : CONFIG.COLORS.TELEPORT);
                                }
                                isVortex = true;
                            } else if (isVisited) {
                                if (val === TYPES.START) {
                                    const isInactive = this.teleportCooldownTicks > 0;
                                    vortexColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : (isPlayerHere ? CONFIG.COLORS.TELEPORT : CONFIG.COLORS.START);
                                    isVortex = true;
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
                            } else if (isKey || isMana) {
                                color = '#111111'; // dark tile under unvisited keys and mana
                            }

                            if (isVortex) {
                                drawVortexIsometric(coords.x, coords.y, tileWidthHalf, tileHeightHalf, H, vortexColor, isPlayerHere, key, opacity);
                            } else {
                                drawIsoBox(coords.x, coords.y, tileWidthHalf, tileHeightHalf, H, color, opacity);
                            }
                        }

                        if (isKey) {
                            drawKey(coords.x, coords.y - H, opacity);
                        }

                        if (isMana) {
                            drawMana(coords.x, coords.y - H, opacity);
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

                        let isPlayerHere = x === Math.floor(this.player.x) && y === Math.floor(this.player.y) && z === this.player.z;
                        let tScaleX = 1.0;
                        let tScaleY = 1.0;
                        let tOpacity = 1.0;

                        if (this.teleportAnim && this.teleportAnim.active) {
                            const anim = this.teleportAnim;
                            const progress = Math.min(1.0, anim.elapsed / anim.duration);
                            if (anim.stage === 'OUT') {
                                isPlayerHere = x === Math.floor(anim.startX) && y === Math.floor(anim.startY) && z === anim.startZ;
                                tScaleX = 1.0 - progress * 0.9;
                                tScaleY = 1.0 + progress * 2.0;
                                tOpacity = 1.0 - progress;
                            } else {
                                isPlayerHere = x === Math.floor(anim.targetX) && y === Math.floor(anim.targetY) && z === anim.targetZ;
                                tScaleX = progress;
                                tScaleY = 3.0 - progress * 2.0;
                                tOpacity = progress;
                            }
                        }

                        const auraHeight = this.getAuraHeightAt(x, y, z);
                        if (auraHeight > 0) {
                            drawCylinderAura(coords.x, coords.y - H, tileWidthHalf * 0.6, tileHeightHalf * 0.6, tileHeight * 1.0, auraHeight, opacity * tOpacity, 'BACK');
                        }

                        if (isPlayerHere) {
                            drawPlayer(coords.x, coords.y - H, opacity * tOpacity, tScaleX, tScaleY);
                        }

                        if (auraHeight > 0) {
                            drawCylinderAura(coords.x, coords.y - H, tileWidthHalf * 0.6, tileHeightHalf * 0.6, tileHeight * 1.0, auraHeight, opacity * tOpacity, 'FRONT');
                        }
                    }
                }
            }
        };

        const drawShafts = (z: number, opacity: number) => {
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

                        const hexToRgb = (hex: string) => {
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

        const drawKey = (cx: number, cy: number, opacity: number) => {
            ctx.save();
            ctx.globalAlpha = opacity;
            const bounce = Math.sin(performance.now() / 200) * 3 - 6;
            const y = cy + bounce;

            if (this.keyImage.complete && this.keyImage.naturalWidth !== 0) {
                const img = this.keyImage;
                const aspect = img.naturalWidth / img.naturalHeight;
                const maxDim = tileWidth * 0.55;
                let dw = maxDim;
                let dh = maxDim;
                if (aspect > 1) {
                    dh = maxDim / aspect;
                } else {
                    dw = maxDim * aspect;
                }
                ctx.drawImage(img, cx - dw / 2, y - dh / 2, dw, dh);
            } else {
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
            }
            ctx.restore();
        };

        const drawMana = (cx: number, cy: number, opacity: number) => {
            ctx.save();
            ctx.globalAlpha = opacity;
            const bounce = Math.sin(performance.now() / 250) * 3 - 6;
            const y = cy + bounce;

            if (this.manaImage.complete && this.manaImage.naturalWidth !== 0) {
                const img = this.manaImage;
                const aspect = img.naturalWidth / img.naturalHeight;
                const maxDim = tileWidth * 0.55;
                let dw = maxDim;
                let dh = maxDim;
                if (aspect > 1) {
                    dh = maxDim / aspect;
                } else {
                    dw = maxDim * aspect;
                }
                
                ctx.shadowColor = 'rgba(0, 255, 255, 0.85)';
                ctx.shadowBlur = tileWidth * 0.25;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.drawImage(img, cx - dw / 2, y - dh / 2, dw, dh);
            } else {
                ctx.beginPath();
                ctx.moveTo(cx, y - 5);
                ctx.lineTo(cx + 4, y);
                ctx.lineTo(cx, y + 5);
                ctx.lineTo(cx - 4, y);
                ctx.closePath();
                ctx.fillStyle = '#00ffff';
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            ctx.restore();
        };

        const drawTeleport = (cx: number, cy: number, color: string, opacity: number, isSelected: boolean) => {
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

        const drawStatue = (cx: number, cy: number, opacity: number) => {
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

        const drawCylinderAura = (cx: number, cy: number, rX: number, rY: number, fullHeight: number, progress: number, opacity: number, layer: 'BACK' | 'FRONT') => {
            const h = fullHeight * progress; // Aura height scales with progress
            if (h <= 0) return;

            const time = this.auraTime || 0;

            ctx.save();

            const colorAura = 'rgba(0, 220, 255, 0.4)';
            const colorAuraBright = 'rgba(0, 255, 255, 0.8)';
            const colorAuraFade = 'rgba(0, 100, 255, 0.05)';

            // Draw bottom ellipse (ground cap)
            ctx.beginPath();
            ctx.ellipse(cx, cy, rX, rY, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 220, 255, 0.05)';
            ctx.fill();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = `rgba(0, 220, 255, ${opacity * 0.4})`;
            ctx.stroke();

            // Cylindrical body wall (fading out vertically)
            const grad = ctx.createLinearGradient(cx, cy, cx, cy - h);
            grad.addColorStop(0, `rgba(0, 220, 255, ${opacity * 0.45})`);
            grad.addColorStop(0.3, `rgba(0, 200, 255, ${opacity * 0.3})`);
            grad.addColorStop(1, `rgba(0, 150, 255, 0.0)`);

            ctx.beginPath();
            ctx.moveTo(cx - rX, cy);
            ctx.lineTo(cx - rX, cy - h);
            ctx.ellipse(cx, cy - h, rX, rY, 0, Math.PI, 0, true);
            ctx.lineTo(cx + rX, cy);
            ctx.ellipse(cx, cy, rX, rY, 0, 0, Math.PI, false);
            
            ctx.fillStyle = grad;
            ctx.fill();

            // Side vertical outline glow lines (fading out vertically)
            const sideGrad = ctx.createLinearGradient(cx, cy, cx, cy - h);
            sideGrad.addColorStop(0, `rgba(0, 255, 255, ${opacity * 0.7})`);
            sideGrad.addColorStop(1, `rgba(0, 255, 255, 0.0)`);

            ctx.strokeStyle = sideGrad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx - rX, cy);
            ctx.lineTo(cx - rX, cy - h);
            ctx.moveTo(cx + rX, cy);
            ctx.lineTo(cx + rX, cy - h);
            ctx.stroke();

            // Moving horizontal rings rising upwards
            for (let i = 0; i < 3; i++) {
                const ringProgress = ((time * 0.8 + i / 3) % 1.0) * progress;
                const ringY = cy - fullHeight * ringProgress;
                if (ringY > cy - h) {
                    const ringOpacity = (1.0 - ringProgress) * opacity * 0.6;
                    ctx.beginPath();
                    ctx.ellipse(cx, ringY, rX, rY, 0, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${ringOpacity})`;
                    ctx.lineWidth = 1.0;
                    ctx.stroke();
                }
            }

            // Top ellipse cap
            const topOpacity = (1.0 - progress * 0.3) * opacity * 0.8;
            ctx.beginPath();
            ctx.ellipse(cx, cy - h, rX, rY, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 255, ${topOpacity * 0.1})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(0, 255, 255, ${topOpacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.restore();
        };

        const drawPlayer = (cx: number, cy: number, opacity: number, tScaleX = 1.0, tScaleY = 1.0) => {
            const stateKey = `${this.playerVertical}_${this.playerSide}`;
            const img = this.mageImages[stateKey];
            
            let playerOpacity = opacity;
            if (this.deathAnimation && this.deathAnimation.active) {
                const flashInterval = 120; // ms
                const show = Math.floor(Date.now() / flashInterval) % 2 === 0;
                if (!show) {
                    playerOpacity = 0.2;
                }
            }

            // ==========================================
            // AJUSTE DE POSIÇÃO DA SOMBRA DO JOGADOR AQUI:
            // ==========================================
            const shadowW = tileWidthHalf * 0.55 * tScaleX;
            const shadowH = tileHeightHalf * 0.55;
            const shadowX = cx - tileWidthHalf * 0.12; // <--- Subtraia mais para ir mais para a ESQUERDA
            const shadowY = cy - tileHeightHalf * 0.12; // <--- Subtraia mais para ir mais para CIMA
            
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(shadowX, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 0, 0, ${playerOpacity * 0.45})`;
            ctx.fill();
            ctx.restore();

            if (img && img.complete) {
                ctx.save();
                ctx.globalAlpha = playerOpacity;
                
                const drawSize = tileWidth * 0.70; 
                const imgW = drawSize;
                const imgH = drawSize * (img.height / img.width);
                
                // Translate to bottom center for scaling anchor
                ctx.translate(cx, cy);
                ctx.scale(tScaleX, tScaleY);
                
                const offsetY = -imgH; 
                ctx.drawImage(img, -imgW / 2, offsetY, imgW, imgH);
                ctx.restore();
            } else {
                ctx.save();
                ctx.globalAlpha = playerOpacity;
                ctx.translate(cx, cy);
                ctx.scale(tScaleX, tScaleY);
                ctx.beginPath();
                ctx.arc(0, -3, 5, 0, Math.PI * 2);
                ctx.fillStyle = CONFIG.COLORS.PLAYER;
                ctx.fill();
                ctx.strokeStyle = CONFIG.COLORS.PLAYER_OUTLINE;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }

            if (this.deathAnimation && this.deathAnimation.active) {
                // Key jumps/arcs up and down during the pre-death freeze phase (vertical throw starting at head and landing on ground)
                const progress = Math.min(1.0, this.deathAnimation.delayElapsed / this.deathAnimation.delayDuration);
                
                // Mage height (head level is negative Y offset)
                const startH = -(img && img.complete ? (tileWidth * 0.70 * (img.height / img.width)) : (tileWidth * 0.5));
                const peakHeight = tileWidth * 0.7; // peak height above player head
                
                // Parabolic interpolation from head (startH) to ground (0)
                const keyYOffset = (1.0 - progress) * startH - 4 * peakHeight * progress * (1.0 - progress);
                
                if (this.keyImage.complete && this.keyImage.naturalWidth !== 0) {
                    ctx.save();
                    const img = this.keyImage;
                    const aspect = img.naturalWidth / img.naturalHeight;
                    const maxDim = tileWidth * 0.55;
                    let dw = maxDim;
                    let dh = maxDim;
                    if (aspect > 1) {
                        dh = maxDim / aspect;
                    } else {
                        dw = maxDim * aspect;
                    }
                    ctx.drawImage(img, cx - dw / 2, cy - dh / 2 + keyYOffset, dw, dh);
                    ctx.restore();
                } else {
                    // Fallback gold dot
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(cx, cy + keyYOffset, tileWidth * 0.15, 0, 2*Math.PI);
                    ctx.fillStyle = '#ffd700';
                    ctx.fill();
                    ctx.restore();
                }
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

        const drawHunter = (h: any, cx: number, cy: number, opacity: number) => {
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

        const getFloorOpacity = (fz: number) => {
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
        const rightPadding = this.isTouchDevice ? 65 : 45;
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
        ctx.arc(lineX, sliderY, this.isTouchDevice ? 8 : 5, 0, Math.PI * 2);
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

            const isMobile = this.isTouchDevice;
            const rectW = isMobile ? 90 : 60;
            const rectH = isMobile ? 50 : 36;
            const rectX = lineX - rectW - (isMobile ? 20 : 15); // float to the left of the line
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
            ctx.font = isMobile ? 'bold 12px "Courier New"' : 'bold 8px "Courier New"';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText('LEVEL', rectX + rectW / 2, rectY + (isMobile ? 8 : 6));

            // Draw Value Text ("1F")
            ctx.fillStyle = '#ffffff';
            ctx.font = isMobile ? 'bold 22px "Courier New"' : 'bold 15px "Courier New"';
            ctx.textBaseline = 'top';
            ctx.fillText(pos.label, rectX + rectW / 2, rectY + (isMobile ? 22 : 16));

            this.floorClickRects.push({
                floor: pos.floor,
                x: rectX,
                y: rectY,
                w: rectW + (isMobile ? 25 : 15), // cover click area up to the line
                h: rectH
            });
        });

        // 3. Draw Pathfinder HUD Panel (Normal Map Mode only)
        if (!this.isTeleportMode) {
            const isMobile = this.isTouchDevice;
            const rectX = isMobile ? 30 : 25;
            const rectY = isMobile ? 30 : 30;
            const rectW = isMobile ? 160 : 120;
            const rectH = isMobile ? 50 : 36;

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
            ctx.font = `bold ${isMobile ? 11 : 8}px 'Roboto', sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(getTranslation('hudPathfinders'), rectX + rectW / 2, rectY + (isMobile ? 8 : 5));

            ctx.fillStyle = '#ffffff';
            ctx.font = `bold ${isMobile ? 18 : 13}px 'Roboto', sans-serif`;
            ctx.textBaseline = 'top';
            ctx.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`, rectX + rectW / 2, rectY + (isMobile ? 23 : 16));
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
            const numTeleports = this.allTeleports.length;
            const isMobile = this.isTouchDevice;

            // Escala e tamanhos adequados para toque
            const spacing = isMobile ? 72 : 56;
            const unselectedR = isMobile ? 16 : 10;
            const selectedR = isMobile ? 24 : 15;
            const clickRSize = isMobile ? 38 : 25;
            
            const goBtnW = isMobile ? 90 : 62;
            const goBtnH = isMobile ? 46 : 30;
            const gap = isMobile ? 46 : 36;
            
            const showGoBtn = !this.teleportConfirmModalActive;
            const extraW = showGoBtn ? (gap + goBtnW) : 0;
            
            // Largura máxima do dock para não estourar a tela (20px de margem em cada lado)
            const maxDockW = width - 40;
            const totalDotsWidth = (numTeleports - 1) * spacing;
            const singleRowWidth = totalDotsWidth + 60 + extraW;
            const mustWrap = isMobile && (singleRowWidth > maxDockW);

            let dockW: number, dockH: number, dockYPos: number, dockX: number;
            this.teleportDotsClickRects = [];

            if (mustWrap) {
                // Quebra em duas linhas equilibradas
                const dotsInRow1 = Math.ceil(numTeleports / 2);
                const dotsInRow2 = numTeleports - dotsInRow1;
                const row1DotsWidth = (dotsInRow1 - 1) * spacing;
                const row2DotsWidth = (dotsInRow2 - 1) * spacing;
                const maxRowDotsWidth = Math.max(row1DotsWidth, row2DotsWidth);

                dockW = maxRowDotsWidth + 60 + extraW;
                dockH = 124;
                dockYPos = height - 145;
                dockX = width / 2 - dockW / 2;

                const dotsAreaW = maxRowDotsWidth;
                const startX1 = dockX + 30 + (dotsAreaW - row1DotsWidth) / 2;
                const startX2 = dockX + 30 + (dotsAreaW - row2DotsWidth) / 2;

                const dotY1 = dockYPos + 35;
                const dotY2 = dockYPos + 89;

                // Desenha o container de dock
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(dockX + 10, dockYPos);
                ctx.lineTo(dockX + dockW - 10, dockYPos);
                ctx.lineTo(dockX + dockW, dockYPos + 10);
                ctx.lineTo(dockX + dockW, dockYPos + dockH - 10);
                ctx.lineTo(dockX + dockW - 10, dockYPos + dockH);
                ctx.lineTo(dockX + 10, dockYPos + dockH);
                ctx.lineTo(dockX, dockYPos + dockH - 10);
                ctx.lineTo(dockX, dockYPos + 10);
                ctx.closePath();
                ctx.fillStyle = 'rgba(0, 0, 0, 0.72)';
                ctx.strokeStyle = 'rgba(0, 255, 255, 0.25)';
                ctx.lineWidth = 1.5;
                ctx.fill();
                ctx.stroke();
                ctx.restore();

                // Desenha cada bolinha
                this.allTeleports.forEach((t, idx) => {
                    const inRow1 = idx < dotsInRow1;
                    const rowIdx = inRow1 ? idx : idx - dotsInRow1;
                    const dotX = (inRow1 ? startX1 : startX2) + rowIdx * spacing;
                    const dotY = inRow1 ? dotY1 : dotY2;

                    const coordsStr = `${t.x},${t.y},${t.z}`;
                    const isDiscovered = this.discoveredTeleports.has(coordsStr);
                    const isSelected = (idx === this.selectedTeleportIndex);
                    const isPlayerHere = (t.x === Math.floor(this.player.x) && t.y === Math.floor(this.player.y) && t.z === this.player.z);
                    const isInactive = this.inactiveTeleportPos && 
                                       (t.x === this.inactiveTeleportPos.x && t.y === this.inactiveTeleportPos.y && t.z === this.inactiveTeleportPos.z);

                    ctx.save();

                    if (!isDiscovered) {
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, unselectedR, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(100, 100, 100, 0.45)';
                        ctx.fill();
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                        ctx.stroke();
                    } else if (isInactive) {
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, unselectedR, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(255, 45, 0, 0.2)';
                        ctx.fill();
                        ctx.strokeStyle = 'rgba(255, 45, 0, 0.4)';
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                    } else {
                        if (isSelected) {
                            const pulse = 1.0 + 0.3 * (0.5 + 0.5 * Math.sin(performance.now() / 120));
                            const highlightR = (isMobile ? 36 : 22) * pulse;
                            ctx.beginPath();
                            ctx.arc(dotX, dotY, highlightR, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(0, 255, 255, 0.18)';
                            ctx.fill();
                        }

                        ctx.beginPath();
                        ctx.arc(dotX, dotY, isSelected ? selectedR : unselectedR, 0, Math.PI * 2);
                        ctx.fillStyle = isSelected ? '#ffffff' : '#00b3ff';
                        ctx.fill();
                        ctx.strokeStyle = isSelected ? '#00ffff' : '#ffffff';
                        ctx.lineWidth = isSelected ? 2 : 1;
                        ctx.stroke();

                        if (isPlayerHere) {
                            ctx.beginPath();
                            ctx.arc(dotX, dotY, isSelected ? (isMobile ? 12 : 8) : (isMobile ? 8 : 5), 0, Math.PI * 2);
                            ctx.fillStyle = '#39ff14';
                            ctx.fill();
                        }
                    }

                    ctx.restore();

                    this.teleportDotsClickRects.push({
                        x: dotX - clickRSize,
                        y: dotY - clickRSize,
                        w: clickRSize * 2,
                        h: clickRSize * 2,
                        index: idx
                    });
                });

                if (showGoBtn) {
                    const goBtnX = dockX + 30 + dotsAreaW + gap;
                    const goBtnY = dockYPos + dockH / 2 - goBtnH / 2;

                    ctx.save();
                    ctx.beginPath();
                    if (ctx.roundRect) {
                        ctx.roundRect(goBtnX, goBtnY, goBtnW, goBtnH, 6);
                    } else if (ctx.rect) {
                        ctx.rect(goBtnX, goBtnY, goBtnW, goBtnH);
                    }
                    ctx.fillStyle = 'rgba(0, 255, 255, 0.15)';
                    ctx.strokeStyle = '#00ffff';
                    ctx.lineWidth = 2;
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = '#ffffff';
                    ctx.font = "bold 15px 'Roboto', sans-serif";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(getTranslation('teleportGo'), goBtnX + goBtnW / 2, goBtnY + goBtnH / 2);
                    ctx.restore();

                    this.teleportGoBtnClickRect = {
                        x: goBtnX,
                        y: goBtnY,
                        w: goBtnW,
                        h: goBtnH
                    };
                } else {
                    this.teleportGoBtnClickRect = null;
                }
            } else {
                // Layout clássico em uma única linha
                const dotY = height - (isMobile ? 70 : 60);
                dockW = totalDotsWidth + 60 + extraW;
                dockH = isMobile ? 86 : 62;
                dockYPos = dotY - dockH / 2;
                dockX = width / 2 - dockW / 2;
                const startX = dockX + 30;

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
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, unselectedR, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(100, 100, 100, 0.45)';
                        ctx.fill();
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                        ctx.stroke();
                    } else if (isInactive) {
                        ctx.beginPath();
                        ctx.arc(dotX, dotY, unselectedR, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(255, 45, 0, 0.2)';
                        ctx.fill();
                        ctx.strokeStyle = 'rgba(255, 45, 0, 0.4)';
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                    } else {
                        if (isSelected) {
                            const pulse = 1.0 + 0.3 * (0.5 + 0.5 * Math.sin(performance.now() / 120));
                            const highlightR = (isMobile ? 36 : 22) * pulse;
                            ctx.beginPath();
                            ctx.arc(dotX, dotY, highlightR, 0, Math.PI * 2);
                            ctx.fillStyle = 'rgba(0, 255, 255, 0.18)';
                            ctx.fill();
                        }

                        ctx.beginPath();
                        ctx.arc(dotX, dotY, isSelected ? selectedR : unselectedR, 0, Math.PI * 2);
                        ctx.fillStyle = isSelected ? '#ffffff' : '#00b3ff';
                        ctx.fill();
                        ctx.strokeStyle = isSelected ? '#00ffff' : '#ffffff';
                        ctx.lineWidth = isSelected ? 2 : 1;
                        ctx.stroke();

                        if (isPlayerHere) {
                            ctx.beginPath();
                            ctx.arc(dotX, dotY, isSelected ? (isMobile ? 12 : 8) : (isMobile ? 8 : 5), 0, Math.PI * 2);
                            ctx.fillStyle = '#39ff14';
                            ctx.fill();
                        }
                    }

                    ctx.restore();

                    this.teleportDotsClickRects.push({
                        x: dotX - clickRSize,
                        y: dotY - clickRSize,
                        w: clickRSize * 2,
                        h: clickRSize * 2,
                        index: idx
                    });
                });

                if (showGoBtn) {
                    const goBtnX = startX + totalDotsWidth + gap;
                    const goBtnY = dotY - goBtnH / 2;

                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(goBtnX, goBtnY, goBtnW, goBtnH);
                    ctx.fillStyle = 'rgba(0, 255, 255, 0.15)';
                    ctx.strokeStyle = '#00ffff';
                    ctx.lineWidth = 1.5;
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = '#ffffff';
                    ctx.font = `bold ${isMobile ? 15 : 12}px 'Roboto', sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(getTranslation('teleportGo'), goBtnX + goBtnW / 2, goBtnY + goBtnH / 2);
                    ctx.restore();

                    this.teleportGoBtnClickRect = {
                        x: goBtnX,
                        y: goBtnY,
                        w: goBtnW,
                        h: goBtnH
                    };
                } else {
                    this.teleportGoBtnClickRect = null;
                }
            }

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
                const targetT = this.allTeleports[this.selectedTeleportIndex!];
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

                const drawModalButton = (bx: number, by: number, label: string, selectionVal: 'go' | 'cancel') => {
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

