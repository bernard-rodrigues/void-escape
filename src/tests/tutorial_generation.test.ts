import { describe, it, expect } from 'vitest';
import { Maze3D } from '../engine/maze3d.js';
import { TUTORIALS } from '../engine/tutorials.js';
import { Engine } from '../engine/engine.js';

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
            expect(engine.hunters[0].state).toBe('SLEEP');
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
});
