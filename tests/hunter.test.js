import { test } from 'node:test';
import assert from 'node:assert';
import { Hunter } from '../hunter.js';

test('Hunter - Initialization state', () => {
    const mockMaze = { startPos: { x: 0.5, y: 1.5, z: 1 } };
    const hunter = new Hunter(mockMaze, { x: 3, y: 3, z: 1 }, 9);
    
    assert.strictEqual(hunter.id, 9);
    assert.strictEqual(hunter.x, 3);
    assert.strictEqual(hunter.y, 3);
    assert.strictEqual(hunter.z, 1);
    assert.strictEqual(hunter.state, 'WANDERING');
    assert.deepStrictEqual(hunter.lastPos, { x: 3, y: 3, z: 1 });
});

test('Hunter - State transitions on player visited trail', () => {
    const mockMaze = { startPos: { x: 0.5, y: 1.5, z: 1 } };
    const hunter = new Hunter(mockMaze, { x: 3, y: 3, z: 1 }, 0);
    
    const size = 5;
    const matrix = new Int8Array(size * size * size);
    matrix.size = size;
    matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
    matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };
    
    // Set cell types
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    
    // Fill path cells so hunter has options
    matrix.set(3, 3, 1, TYPES.PATH);
    matrix.set(3, 4, 1, TYPES.PATH);
    
    // Player position
    const playerPos = { x: 3.5, y: 4.5, z: 1 };
    
    // First move: hunter is WANDERING
    assert.strictEqual(hunter.state, 'WANDERING');
    hunter.move(playerPos, matrix, TYPES);
    
    // Mark current hunter cell as visited (simulating player was here)
    matrix.set(hunter.x, hunter.y, hunter.z, TYPES.VISITED);
    
    // Next move should transition hunter to TRACKING state
    hunter.move(playerPos, matrix, TYPES);
    assert.strictEqual(hunter.state, 'TRACKING', 'Hunter should transition to TRACKING when stepping on a player VISITED cell');
});

test('Hunter - Avoid player starting safe position', () => {
    const mockMaze = { startPos: { x: 1, y: 1, z: 1 } }; // Safe zone
    const hunter = new Hunter(mockMaze, { x: 1, y: 2, z: 1 }, 0);
    
    const size = 5;
    const matrix = new Int8Array(size * size * size);
    matrix.size = size;
    matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
    matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };
    
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    
    // Path includes the safe starting zone (1,1,1) and a safe alternate (1,3,1)
    matrix.set(1, 2, 1, TYPES.PATH);
    matrix.set(1, 1, 1, TYPES.PATH); // startPos
    matrix.set(1, 3, 1, TYPES.PATH);
    
    const neighbors = hunter.getValidNeighbors(matrix, TYPES);
    
    // Verify starting safe zone (1,1,1) is filtered out and NOT in valid neighbors list
    const hasSafeZone = neighbors.some(n => n.x === 1 && n.y === 1 && n.z === 1);
    assert.strictEqual(hasSafeZone, false, 'Hunter must not route into player starting safe zone');
    
    const hasAlternate = neighbors.some(n => n.x === 1 && n.y === 3 && n.z === 1);
    assert.strictEqual(hasAlternate, true, 'Hunter should route to normal paths');
});
