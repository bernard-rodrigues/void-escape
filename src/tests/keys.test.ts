import { test, assert } from 'vitest';
import { Maze3D } from '../engine/maze3d';
import { CONFIG } from '../engine/config';
import { saveGame, loadSave, clearSave } from '../engine/save';

// Mock localStorage globally
globalThis.localStorage = {
    _data: {} as Record<string, string>,
    length: 0,
    key(index: number) { return null; },
    setItem(key: string, val: string) { this._data[key] = String(val); this.length = Object.keys(this._data).length; },
    getItem(key: string) { return this._data[key] || null; },
    removeItem(key: string) { delete this._data[key]; this.length = Object.keys(this._data).length; },
    clear() { this._data = {}; this.length = 0; }
} as any;

test('Keys System - Spawn rate and strict dead-end distribution', () => {
    const branchingFactors = [0.0, 0.5, 1.0];
    const degree = 8;
    const expectedHunterCount = CONFIG.getHunterCount(degree);
    const expectedKeysCount = expectedHunterCount * 2; // 4 keys

    for (const bf of branchingFactors) {
        const mazeGen = new Maze3D(degree, bf, `keys-seed-${bf}`);
        const matrix = mazeGen.generate() as any;
        const size = mazeGen.size;

        let placedKeys: { x: number; y: number; z: number }[] = [];
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    if (matrix.get(x, y, z) === mazeGen.TYPES.KEY) {
                        placedKeys.push({ x, y, z });
                    }
                }
            }
        }

        // 1. Verify exact count
        assert.strictEqual(placedKeys.length, expectedKeysCount, `Should place exactly ${expectedKeysCount} keys`);

        // 2. Verify all keys are strictly in dead-ends (exactly 1 open neighbor)
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
        ];

        for (const k of placedKeys) {
            let openNeighbors = 0;
            for (const d of dirs) {
                const nx = k.x + d.dx;
                const ny = k.y + d.dy;
                const nz = k.z + d.dz;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size) {
                    if (matrix.get(nx, ny, nz) !== mazeGen.TYPES.WALL) {
                        openNeighbors++;
                    }
                }
            }
            assert.strictEqual(openNeighbors, 1, `Key at (${k.x},${k.y},${k.z}) must be strictly in a dead-end (1 open neighbor)`);
        }
    }
});

test('Keys System - Locked exit door blocking & key collection logic simulation', () => {
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 5, ESCALATOR: 6, KEY: 7 };
    
    // Simulate engine state
    const state = {
        keysCollected: 0,
        totalKeys: 4,
        maze: {
            grid: new Int8Array(100),
            get(x: number, y: number, z: number) { return this.grid[x * 10 + y]; },
            set(x: number, y: number, z: number, val: number) { this.grid[x * 10 + y] = val; }
        }
    };

    state.maze.set(5, 5, 1, TYPES.EXIT);
    
    // Simulate player colliding with locked exit
    const isPassable = (gx: number, gy: number, gz: number) => {
        const val = state.maze.get(gx, gy, gz);
        if (val === TYPES.WALL) return false;
        if (val === TYPES.EXIT && state.keysCollected < state.totalKeys) {
            return false; // Blocked!
        }
        return true;
    };
    
    assert.strictEqual(isPassable(5, 5, 1), false, 'Locked exit must not be passable');

    // Simulate key collection function
    const collectKey = (x: number, y: number, z: number) => {
        state.maze.set(x, y, z, TYPES.VISITED);
        state.keysCollected++;
    };

    state.maze.set(3, 3, 1, TYPES.KEY);
    collectKey(3, 3, 1);
    
    assert.strictEqual(state.keysCollected, 1, 'Keys collected count must increment');
    assert.strictEqual(state.maze.get(3, 3, 1), TYPES.VISITED, 'Key cell must turn into VISITED');

    // Collect remaining keys to unlock exit
    collectKey(3, 4, 1);
    collectKey(3, 5, 1);
    collectKey(3, 6, 1);
    
    assert.strictEqual(state.keysCollected, 4, 'Should have collected all 4 keys');
    assert.strictEqual(isPassable(5, 5, 1), true, 'Exit must become passable once all keys are collected');
});

test('Keys System - Save and restore state snapshot', () => {
    const matrix = new Int8Array(10);
    const mockEngine = {
        degree: 8,
        branchingFactor: 0.15,
        isSafeMode: false,
        seed: 'test-seed',
        mazeGen: {
            size: 17,
            startPos: { x: 1.5, y: 1.5, z: 1 },
            matrix: matrix
        },
        player: { x: 1.5, y: 1.5, z: 1, dir: 1.2 },
        hunters: [],
        discoveredTeleports: new Set(),
        inactiveTeleportPos: null,
        teleportCooldownTicks: 0,
        revealedPathSet: new Set(),
        keysCollected: 3,
        totalKeys: 4
    };

    clearSave();
    saveGame(mockEngine as any);

    const snapshot = loadSave();
    assert.ok(snapshot, 'Save should exist');
    assert.strictEqual(snapshot.keysCollected, 3);
    assert.strictEqual(snapshot.totalKeys, 4);
});

test('Keys System - Fallback behavior on degree 3 maze when dead-ends are exhausted', () => {
    const degree = 3;
    const mazeGen = new Maze3D(degree, 0.10, 'fallback-test-seed');
    const matrix = mazeGen.generate() as any;
    
    let keyCount = 0;
    for (let x = 0; x < mazeGen.size; x++) {
        for (let y = 0; y < mazeGen.size; y++) {
            for (let z = 0; z < mazeGen.size; z++) {
                if (matrix.get(x, y, z) === mazeGen.TYPES.KEY) {
                    keyCount++;
                }
            }
        }
    }

    const expectedKeys = CONFIG.getHunterCount(degree) * 2; // 2 keys
    assert.strictEqual(keyCount, expectedKeys, `Even on a tiny degree 3 maze, it must place exactly ${expectedKeys} keys by falling back to normal paths`);
});
