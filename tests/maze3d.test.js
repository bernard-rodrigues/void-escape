import { test } from 'node:test';
import assert from 'node:assert';
import { Maze3D } from '../maze3d.js';
import { CONFIG } from '../config.js';

test('Maze3D - Seeded Mulberry32 PRNG consistency', () => {
    const seed = 'void-escape-test';
    const maze1 = new Maze3D(8, 0.2, seed);
    const maze2 = new Maze3D(8, 0.2, seed);
    
    // Generate random values
    const val1_a = maze1.random();
    const val1_b = maze1.random();
    
    const val2_a = maze2.random();
    const val2_b = maze2.random();
    
    assert.strictEqual(val1_a, val2_a);
    assert.strictEqual(val1_b, val2_b);
});

test('Maze3D - Grid dimensions and boundaries', () => {
    const degree = 5;
    const mazeGen = new Maze3D(degree, 0.2, 42);
    const size = 2 * degree + 1; // 11
    
    assert.strictEqual(mazeGen.size, size);
    
    const matrix = mazeGen.generate();
    assert.strictEqual(matrix.length, size * size * size);
    assert.strictEqual(matrix.size, size);
});

test('Maze3D - Entry and exit placements', () => {
    const mazeGen = new Maze3D(5, 0.2, 12345);
    const matrix = mazeGen.generate();
    
    let hasStart = false;
    let hasExit = false;
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] === mazeGen.TYPES.TELEPORT && i === mazeGen._idx(0, 1, mazeGen.startPos.z)) {
            hasStart = true;
        }
        if (matrix[i] === mazeGen.TYPES.EXIT) {
            hasExit = true;
        }
    }
    
    assert.ok(hasStart, 'Maze should contain a starting teleport at x=0, y=1');
    assert.ok(hasExit, 'Maze should contain an exit block');
});

test('Maze3D - Braid constraints (no 2x2 wide path corridors)', () => {
    const mazeGen = new Maze3D(6, 0.5, 999); // high braid factor candidate
    const matrix = mazeGen.generate();
    
    // Scan all cells and check if there are 2x2 path clusters on any plane
    for (let x = 1; x < mazeGen.size - 1; x++) {
        for (let y = 1; y < mazeGen.size - 1; y++) {
            for (let z = 1; z < mazeGen.size - 1; z++) {
                // If it is a path cell, assert it does not violate wide connection rules
                if (matrix.get(x, y, z) !== mazeGen.TYPES.WALL) {
                    const isWide = mazeGen.isWideConnection(x, y, z);
                    assert.strictEqual(isWide, false, `Cell at ${x},${y},${z} should not form a 2x2 wide corridor`);
                }
            }
        }
    }
});

test('Maze3D - Elevator constraints (no adjacent/diagonal elevators)', () => {
    const mazeGen = new Maze3D(6, 0.5, 888);
    const matrix = mazeGen.generate();
    
    for (let x = 1; x < mazeGen.size - 1; x++) {
        for (let y = 1; y < mazeGen.size - 1; y++) {
            for (let z = 2; z < mazeGen.size - 1; z += 2) {
                // If this is an elevator cell (path at even Z index)
                if (matrix.get(x, y, z) !== mazeGen.TYPES.WALL) {
                    // Check neighbors in XY plane at current Z, Z-2, Z+2
                    const hasAdjacent = mazeGen.isAdjacentElevator(x, y, z);
                    assert.strictEqual(hasAdjacent, false, `Elevator at ${x},${y},${z} should not have adjacent elevators`);
                }
            }
        }
    }
});
