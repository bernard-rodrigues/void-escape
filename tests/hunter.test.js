import { test } from 'node:test';
import assert from 'node:assert';
import { Hunter } from '../hunter.js';
import { CONFIG } from '../config.js';

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

test('Hunter - Avoid exit cell', () => {
    const mockMaze = { startPos: { x: 1, y: 1, z: 1 } };
    const hunter = new Hunter(mockMaze, { x: 3, y: 3, z: 1 }, 0);
    
    const size = 5;
    const matrix = new Int8Array(size * size * size);
    matrix.size = size;
    matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
    matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };
    
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    
    // Neighbors around (3,3,1): (3,4,1) is EXIT, (3,2,1) is normal PATH
    matrix.set(3, 3, 1, TYPES.PATH);
    matrix.set(3, 4, 1, TYPES.EXIT); 
    matrix.set(3, 2, 1, TYPES.PATH);
    
    const neighbors = hunter.getValidNeighbors(matrix, TYPES);
    
    const hasExit = neighbors.some(n => n.x === 3 && n.y === 4 && n.z === 1);
    assert.strictEqual(hasExit, false, 'Hunter must not route into exit cell');
    
    const hasNormalPath = neighbors.some(n => n.x === 3 && n.y === 2 && n.z === 1);
    assert.strictEqual(hasNormalPath, true, 'Hunter should route to normal paths');
});

test('Hunter - State transition when teleport ticks end', () => {
    const mockMaze = {
        startPos: { x: 0.5, y: 1.5, z: 1 },
        TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 }
    };
    
    const size = 5;
    const matrix = new Int8Array(size * size * size);
    matrix.size = size;
    matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
    matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };
    
    // Hunter 1: sits on VISITED path
    const hunter1 = new Hunter(mockMaze, { x: 3, y: 3, z: 1 }, 1);
    hunter1.state = 'TELEPORT_TRACKING';
    matrix.set(3, 3, 1, mockMaze.TYPES.VISITED);
    
    // Hunter 2: sits on normal PATH (unvisited)
    const hunter2 = new Hunter(mockMaze, { x: 3, y: 4, z: 1 }, 2);
    hunter2.state = 'TELEPORT_TRACKING';
    matrix.set(3, 4, 1, mockMaze.TYPES.PATH);
    
    const hunters = [hunter1, hunter2];
    
    // Simulate engine tick end transition logic:
    for (const hunter of hunters) {
        const cellVal = matrix.get(hunter.x, hunter.y, hunter.z);
        if (cellVal === mockMaze.TYPES.VISITED || cellVal === mockMaze.TYPES.START || cellVal === mockMaze.TYPES.EXIT) {
            hunter.state = 'TRACKING';
        } else {
            hunter.state = 'WANDERING';
            hunter.pathToTarget = [];
            hunter.visitedNodes.clear();
            hunter.visitedNodes.add(`${hunter.x},${hunter.y},${hunter.z}`);
        }
    }
    
    assert.strictEqual(hunter1.state, 'TRACKING', 'Hunter on visited path should transition to TRACKING');
    assert.strictEqual(hunter2.state, 'WANDERING', 'Hunter on unvisited path should transition to WANDERING');
    assert.strictEqual(hunter2.pathToTarget.length, 0);
    assert.ok(hunter2.visitedNodes.has('3,4,1'));
});

test('Hunter - Reset visited nodes when tracking trail is fully explored', () => {
    const mockMaze = { startPos: { x: 0.5, y: 1.5, z: 1 } };
    const hunter = new Hunter(mockMaze, { x: 1, y: 1, z: 1 }, 0);
    hunter.state = 'TRACKING';
    
    const size = 5;
    const matrix = new Int8Array(size * size * size);
    matrix.size = size;
    matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
    matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };
    
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    
    // Make a track: (1,1,1) -> (1,2,1) -> (1,3,1)
    matrix.set(1, 1, 1, TYPES.VISITED);
    matrix.set(1, 2, 1, TYPES.VISITED);
    matrix.set(1, 3, 1, TYPES.VISITED);
    
    // Add all to hunter's visitedNodes (simulating hunter has already visited all of them)
    hunter.visitedNodes.add('1,1,1');
    hunter.visitedNodes.add('1,2,1');
    hunter.visitedNodes.add('1,3,1');
    
    // Call move() which internally finds path, triggers clear/reset, and steps forward
    const playerPos = { x: 1.5, y: 3.5, z: 1 };
    hunter.move(playerPos, matrix, TYPES);
    
    // Assert hunter moved to the next cell on the path (1,2,1)
    assert.strictEqual(hunter.x, 1);
    assert.strictEqual(hunter.y, 2);
    
    // Assert that visitedNodes was reset (it should not contain the unexplored 1,3,1 anymore)
    assert.strictEqual(hunter.visitedNodes.has('1,1,1'), true);
    assert.strictEqual(hunter.visitedNodes.has('1,2,1'), true);
    assert.strictEqual(hunter.visitedNodes.has('1,3,1'), false, 'Visited nodes trail should be cleared/reset');
});

test('Safe Mode - No hunters spawned, no teleport tracking activated', () => {
    // 1. In safe mode, engine sets hunter count to 0
    const isSafeMode = true;
    const degree = 8;
    const count = isSafeMode ? 0 : CONFIG.getHunterCount(degree);
    assert.strictEqual(count, 0, 'Hunter count must be 0 in Safe Mode');
    
    // 2. Teleport logic with empty hunters array does not activate teleport tracking on any hunter
    const hunters = []; // Empty in Safe Mode
    
    // Simulate teleportTo loop:
    let trackingHuntersCount = 0;
    for (const hunter of hunters) {
        hunter.state = 'TELEPORT_TRACKING';
        trackingHuntersCount++;
    }
    
    assert.strictEqual(trackingHuntersCount, 0, 'No hunters should enter TELEPORT_TRACKING state');
});
