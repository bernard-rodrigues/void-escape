import { describe, it, expect } from 'vitest';
import { Maze3D } from '../engine/maze3d.js';
import { TUTORIALS } from '../engine/tutorials.js';
import { Engine } from '../engine/engine.js';
import { saveGame, loadSave } from '../engine/save.js';

describe('Maze3D - Tutorial Generation & Auto-Wrapping', () => {
    it('should generate a 3D maze from a custom tutorial layout with correct dimensions', () => {
        const stage = TUTORIALS[0];
        const maze = new Maze3D();
        const matrix = maze.generateFromLayout(stage);

        // O tutorial tem largura 7, comprimento 5 e altura 3.
        // O maior lado é 7, então a matriz deve ser 7x7x7.
        expect(maze.size).toBe(7);
        expect(maze.n).toBe(3);
        expect(matrix.length).toBe(7 * 7 * 7);

        // S deve estar na posição x=0, y=1, z=1
        // z=1, y=1, x=0 -> "S"
        // z=1, y=1, x=5 -> "K"
        // z=1, y=3, x=1 -> "K"
        // z=1, y=3, x=6 -> "E"
        expect(matrix.get(0, 1, 1)).toBe(maze.TYPES.TELEPORT);
        expect(maze.startPos).toEqual({ x: 0.5, y: 1.5, z: 1 });

        expect(matrix.get(5, 1, 1)).toBe(maze.TYPES.KEY);
        expect(matrix.get(1, 3, 1)).toBe(maze.TYPES.KEY);
        expect(matrix.get(6, 3, 1)).toBe(maze.TYPES.EXIT);

        // Elementos fora do layout devem ser paredes (WALL = 0)
        // Por exemplo, y = 5 (fora do layout de comprimento 5)
        expect(matrix.get(1, 5, 1)).toBe(maze.TYPES.WALL);
        expect(matrix.get(3, 5, 3)).toBe(maze.TYPES.WALL);
    });

    it('should calculate custom totals from layout', () => {
        const stage = TUTORIALS[0];
        const maze = new Maze3D();
        const matrix = maze.generateFromLayout(stage);
        
        let keysCount = 0;
        let exitCount = 0;
        
        for (let x = 0; x < maze.size; x++) {
            for (let y = 0; y < maze.size; y++) {
                for (let z = 0; z < maze.size; z++) {
                    if (matrix.get(x, y, z) === maze.TYPES.KEY) {
                        keysCount++;
                    }
                    if (matrix.get(x, y, z) === maze.TYPES.EXIT) {
                        exitCount++;
                    }
                }
            }
        }
        
        expect(keysCount).toBe(2);
        expect(exitCount).toBe(1);
    });

    it('should reveal all path cells when stage.revealed is true', () => {
        const dummyStage = {
            id: 'dummy_tut',
            title: { en: 'Dummy', ptBr: 'Dummy', ja: 'Dummy', es: 'Dummy' },
            description: { en: 'Dummy', ptBr: 'Dummy', ja: 'Dummy', es: 'Dummy' },
            layers: [
                [
                    "###",
                    "#S.",
                    "###"
                ],
                [
                    "###",
                    "#K#",
                    "#T#"
                ],
                [
                    "###",
                    "#H#",
                    "###"
                ]
            ],
            revealed: true
        };

        const canvas = document.createElement('canvas');
        canvas.id = 'main-2d-canvas';
        document.body.appendChild(canvas);

        const safeModeInput = document.createElement('input');
        safeModeInput.id = 'safe-mode';
        safeModeInput.type = 'checkbox';
        document.body.appendChild(safeModeInput);

        const originalInitThree = Engine.prototype.initThree;
        const originalLoop = Engine.prototype.loop;
        Engine.prototype.initThree = function() {
            this.scene = { children: [], remove: () => {}, add: () => {} } as any;
            this.camera = { aspect: 1, updateProjectionMatrix: () => {} } as any;
            this.renderer = { domElement: document.createElement('div'), setSize: () => {} } as any;
            this.controls = { update: () => {} } as any;
        };
        Engine.prototype.loop = function() {};

        try {
            const engine = new Engine(3, 0.2, null, dummyStage);

            expect(engine.visitedCells.has('1,1,0')).toBe(true); // START cell
            expect(engine.visitedCells.has('2,1,0')).toBe(true); // PATH cell (revealed as visited)
            expect(engine.visitedCells.has('1,1,1')).toBe(true); // KEY cell
            expect(engine.visitedCells.has('1,2,1')).toBe(true); // TELEPORT cell (revealed as visited)
            expect(engine.discoveredTeleports.has('1,2,1')).toBe(true); // TELEPORT cell marked as discovered
            expect(engine.allTeleports.some(t => t.x === 1 && t.y === 2 && t.z === 1)).toBe(true); // TELEPORT in allTeleports
            expect(engine.visitedCells.has('1,1,2')).toBe(true); // HUNTER cell (revealed as visited path)
            expect(engine.hunters.length).toBe(1); // One hunter spawned from layout 'H'
            expect(engine.hunters[0].x).toBe(1);
            expect(engine.hunters[0].y).toBe(1);
            expect(engine.hunters[0].z).toBe(2);
            expect(engine.hunters[0].state).toBe('WANDERING');
            expect(engine.visitedCells.has('0,0,0')).toBe(false);

            // Verify that normal path cells are converted to TYPES.VISITED in the maze matrix
            const mazeSize = engine.mazeGen.size;
            const TYPES = engine.mazeGen.TYPES;
            let pathCellsCount = 0;
            let visitedPathCellsCount = 0;

            for (let x = 0; x < mazeSize; x++) {
                for (let y = 0; y < mazeSize; y++) {
                    for (let z = 0; z < mazeSize; z++) {
                        const val = engine.maze.get(x, y, z);
                        if (val === TYPES.PATH) {
                            pathCellsCount++;
                        } else if (val === TYPES.VISITED) {
                            visitedPathCellsCount++;
                        }
                    }
                }
            }

            expect(pathCellsCount).toBe(0); // All path cells should be converted
            expect(visitedPathCellsCount).toBeGreaterThan(0); // There should be visited path cells
        } finally {
            Engine.prototype.initThree = originalInitThree;
            Engine.prototype.loop = originalLoop;
            document.body.removeChild(canvas);
            document.body.removeChild(safeModeInput);
        }
    });

    it('should apply custom hunter behavior (static, respawn, fixed) in tutorial mode', () => {
        const behaviorStage = {
            id: 'behavior_tut',
            title: { en: 'Behavior', ptBr: 'Behavior', ja: 'Behavior', es: 'Behavior' },
            description: { en: 'Behavior', ptBr: 'Behavior', ja: 'Behavior', es: 'Behavior' },
            layers: [
                [
                    "###",
                    "#S.",
                    "###"
                ],
                [
                    "###",
                    "#K#",
                    "#H#"
                ],
                [
                    "###",
                    "###",
                    "###"
                ]
            ],
            revealed: true,
            hunterBehavior: {
                static: true,
                respawn: false,
                fixed: true
            }
        };

        const canvas = document.createElement('canvas');
        canvas.id = 'main-2d-canvas';
        document.body.appendChild(canvas);

        const safeModeInput = document.createElement('input');
        safeModeInput.id = 'safe-mode';
        safeModeInput.type = 'checkbox';
        document.body.appendChild(safeModeInput);

        const originalInitThree = Engine.prototype.initThree;
        const originalLoop = Engine.prototype.loop;
        Engine.prototype.initThree = function() {
            this.scene = { children: [], remove: () => {}, add: () => {} } as any;
            this.camera = { aspect: 1, updateProjectionMatrix: () => {} } as any;
            this.renderer = { domElement: document.createElement('div'), setSize: () => {} } as any;
            this.controls = { update: () => {} } as any;
        };
        Engine.prototype.loop = function() {};

        try {
            const engine = new Engine(3, 0.2, null, behaviorStage);

            // Test 1: Hunter starts in WANDERING (active) state
            const hunter = engine.hunters[0];
            expect(hunter.state).toBe('WANDERING');
            const initialX = hunter.x;
            const initialY = hunter.y;
            const initialZ = hunter.z;

            // Test 2: static = true, hunter does not move when engine updates
            const initialMoveTime = engine.lastHunterMove;
            // Advance time to trigger hunter movement
            engine.lastHunterMove = initialMoveTime - 5000;
            const oldMove = hunter.move;
            let moveCalled = false;
            hunter.move = function() {
                moveCalled = true;
            };

            // Call update to trigger hunter logic
            engine.update(0.1);
            expect(moveCalled).toBe(false); // Move should not be called since static is true
            expect(hunter.x).toBe(initialX);
            expect(hunter.y).toBe(initialY);
            expect(hunter.z).toBe(initialZ);

            // Test 3: respawn = false, hunter killed by jelly portal does not respawn
            hunter.state = 'DEAD_BY_JELLY';
            hunter.respawnThresholdPercentage = 10;
            // Trigger respawn check
            engine.update(0.1);
            expect(hunter.state).toBe('DEAD_BY_JELLY'); // Should remain dead

            // Test 4: fixed = true, restoreFromSave resets hunter to initial layout coordinates
            // Modify coordinates to simulate wandering / different save state
            hunter.x = 2;
            hunter.y = 2;
            hunter.z = 2;
            hunter.state = 'TRACKING';

            // Simulate save/restore using saveGame/loadSave to get a valid matrix snapshot
            saveGame(engine);
            const snapshot = loadSave();
            
            // Modify coordinates in snapshot to simulate wandering / different save state
            snapshot.hunters[0] = { id: 1, x: 2, y: 2, z: 2, state: 'TRACKING' };
            
            engine.restoreFromSave(snapshot);
            expect(hunter.x).toBe(initialX);
            expect(hunter.y).toBe(initialY);
            expect(hunter.z).toBe(initialZ);
            expect(hunter.state).toBe('WANDERING'); // Reset to initial layout state

        } finally {
            Engine.prototype.initThree = originalInitThree;
            Engine.prototype.loop = originalLoop;
            document.body.removeChild(canvas);
            document.body.removeChild(safeModeInput);
        }
    });

    it('should reset tutorial hunters correctly when player dies', () => {
        const deathStage = {
            id: 'death_tut',
            title: { en: 'Death', ptBr: 'Death', ja: 'Death', es: 'Death' },
            description: { en: 'Death', ptBr: 'Death', ja: 'Death', es: 'Death' },
            layers: [
                [
                    "###",
                    "#S.",
                    "###"
                ],
                [
                    "###",
                    "#K#",
                    "#H#"
                ],
                [
                    "###",
                    "###",
                    "###"
                ]
            ],
            revealed: true,
            hunterBehavior: {
                static: false,
                respawn: true,
                fixed: true // Fixed to spawn at original position upon player death respawn
            }
        };

        const originalGetContext = HTMLCanvasElement.prototype.getContext;
        const mockGradient = { addColorStop: () => {} };
        HTMLCanvasElement.prototype.getContext = function(type: string) {
            if (type === '2d') {
                return {
                    canvas: this,
                    clearRect: () => {},
                    fillRect: () => {},
                    drawImage: () => {},
                    save: () => {},
                    restore: () => {},
                    translate: () => {},
                    scale: () => {},
                    beginPath: () => {},
                    arc: () => {},
                    fill: () => {},
                    stroke: () => {},
                    createRadialGradient: () => mockGradient,
                    createLinearGradient: () => mockGradient,
                    rotate: () => {},
                    moveTo: () => {},
                    lineTo: () => {},
                    clip: () => {},
                    rect: () => {},
                    closePath: () => {},
                    strokeRect: () => {},
                    fillText: () => {},
                    measureText: () => ({ width: 10 })
                } as any;
            }
            return originalGetContext.apply(this, arguments as any);
        };

        const canvas = document.createElement('canvas');
        canvas.id = 'main-2d-canvas';
        document.body.appendChild(canvas);

        const safeModeInput = document.createElement('input');
        safeModeInput.id = 'safe-mode';
        safeModeInput.type = 'checkbox';
        document.body.appendChild(safeModeInput);

        const originalInitThree = Engine.prototype.initThree;
        const originalLoop = Engine.prototype.loop;
        Engine.prototype.initThree = function() {
            this.scene = { children: [], remove: () => {}, add: () => {} } as any;
            this.camera = { aspect: 1, updateProjectionMatrix: () => {} } as any;
            this.renderer = { domElement: document.createElement('div'), setSize: () => {} } as any;
            this.controls = { update: () => {} } as any;
        };
        Engine.prototype.loop = function() {};

        try {
            const engine = new Engine(3, 0.2, null, deathStage);
            const hunter = engine.hunters[0];
            const initialX = hunter.x;
            const initialY = hunter.y;
            const initialZ = hunter.z;

            // Trigger player death by manually setting a deathAnimation and simulating its completion
            engine.deathAnimation = {
                active: true,
                hunter: hunter,
                playerPos: { x: engine.player.x, y: engine.player.y, z: engine.player.z },
                elapsed: 1.8,
                duration: 1.8,
                screenFilled: false,
                reversing: false,
                delayElapsed: 1.5,
                delayDuration: 1.5,
                glitchElapsed: 0,
                glitchDuration: 1.5,
                uiFade: 0,
                uiTriggered: false
            };

            // Call draw2DMap to trigger death resolution
            engine.draw2DMap(0.1);

            // The hunters array should be re-initialized and NOT empty
            expect(engine.hunters.length).toBe(1);
            expect(engine.hunters[0].x).toBe(initialX);
            expect(engine.hunters[0].y).toBe(initialY);
            expect(engine.hunters[0].z).toBe(initialZ);
            expect(engine.hunters[0].state).toBe('WANDERING');

        } finally {
            HTMLCanvasElement.prototype.getContext = originalGetContext;
            Engine.prototype.initThree = originalInitThree;
            Engine.prototype.loop = originalLoop;
            document.body.removeChild(canvas);
            document.body.removeChild(safeModeInput);
        }
    });

    it('should initialize jellyPortalCount from tutorial stage config', () => {
        const portalStage = {
            id: 'portal_tut',
            title: { en: 'Portal', ptBr: 'Portal', ja: 'Portal', es: 'Portal' },
            description: { en: 'Portal', ptBr: 'Portal', ja: 'Portal', es: 'Portal' },
            layers: [
                [
                    "###",
                    "#S.",
                    "###"
                ],
                [
                    "###",
                    "#E#",
                    "###"
                ],
                [
                    "###",
                    "###",
                    "###"
                ]
            ],
            jellyPortals: 3
        };

        const canvas = document.createElement('canvas');
        canvas.id = 'main-2d-canvas';
        document.body.appendChild(canvas);

        const safeModeInput = document.createElement('input');
        safeModeInput.id = 'safe-mode';
        safeModeInput.type = 'checkbox';
        document.body.appendChild(safeModeInput);

        const originalInitThree = Engine.prototype.initThree;
        const originalLoop = Engine.prototype.loop;
        Engine.prototype.initThree = function() {
            this.scene = { children: [], remove: () => {}, add: () => {} } as any;
            this.camera = { aspect: 1, updateProjectionMatrix: () => {} } as any;
            this.renderer = { domElement: document.createElement('div'), setSize: () => {} } as any;
            this.controls = { update: () => {} } as any;
        };
        Engine.prototype.loop = function() {};

        try {
            const engine = new Engine(3, 0.2, null, portalStage);
            expect(engine.jellyPortalCount).toBe(3);
        } finally {
            Engine.prototype.initThree = originalInitThree;
            Engine.prototype.loop = originalLoop;
            document.body.removeChild(canvas);
            document.body.removeChild(safeModeInput);
        }
    });
});
