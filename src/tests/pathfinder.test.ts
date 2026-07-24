import { test, describe, assert } from 'vitest';
import { aStarPath, aStarDistance, proximeterDistance, bfsNearestUnvisited } from '../engine/pathfinder';

test('Pathfinder - MinHeap priority sorting', () => {
    // Testing the inner MinHeap if accessible or pathfinder behavior
    // We can verify prioritizing through distance outputs, but let's test aStar path directly.
});

test('Pathfinder - A* Shortest Path', () => {
    const size = 5;
    const maze = new Int8Array(size * size * size);
    
    // Clear out a path from (1,1,1) -> (1,2,1) -> (1,3,1)
    const _idx = (x, y, z) => (x * size * size) + (y * size) + z;
    maze[_idx(1, 1, 1)] = 1;
    maze[_idx(1, 2, 1)] = 1;
    maze[_idx(1, 3, 1)] = 1;
    
    // Blocking (1,2,1) wall for testing search bypass
    // Let's create an alternate path via (2,1,1) -> (2,2,1) -> (2,3,1) -> (1,3,1)
    maze[_idx(2, 1, 1)] = 1;
    maze[_idx(2, 2, 1)] = 1;
    maze[_idx(2, 3, 1)] = 1;
    
    // Test direct path (should be 2 steps: 1,2,1 then 1,3,1)
    const pathDirect = aStarPath({ x: 1, y: 1, z: 1 }, { x: 1, y: 3, z: 1 }, maze, size, 0);
    assert.ok(pathDirect, 'Path should be found');
    assert.strictEqual(pathDirect.length, 2);
    assert.deepStrictEqual(pathDirect[0], { x: 1, y: 2, z: 1 });
    assert.deepStrictEqual(pathDirect[1], { x: 1, y: 3, z: 1 });
    
    // Block (1,2,1) with wall (0)
    maze[_idx(1, 2, 1)] = 0;
    
    // Path should detour: (2,1,1) -> (2,2,1) -> (2,3,1) -> (1,3,1)
    const pathDetour = aStarPath({ x: 1, y: 1, z: 1 }, { x: 1, y: 3, z: 1 }, maze, size, 0);
    assert.ok(pathDetour, 'Detour path should be found');
    assert.strictEqual(pathDetour.length, 4);
    assert.deepStrictEqual(pathDetour[0], { x: 2, y: 1, z: 1 });
    assert.deepStrictEqual(pathDetour[3], { x: 1, y: 3, z: 1 });
});

test('Pathfinder - A* Distance', () => {
    const size = 5;
    const maze = new Int8Array(size * size * size);
    const _idx = (x, y, z) => (x * size * size) + (y * size) + z;
    
    maze[_idx(1, 1, 1)] = 1;
    maze[_idx(1, 2, 1)] = 1;
    maze[_idx(1, 3, 1)] = 1;
    
    const dist = aStarDistance({ x: 1, y: 1, z: 1 }, { x: 1, y: 3, z: 1 }, maze, size, 0);
    assert.strictEqual(dist, 2);
    
    // Unreachable
    const unreachableDist = aStarDistance({ x: 1, y: 1, z: 1 }, { x: 3, y: 3, z: 1 }, maze, size, 0);
    assert.strictEqual(unreachableDist, Infinity);
});

test('Pathfinder - Proximeter 0-1 BFS Distance (elevator shafts free)', () => {
    const size = 5;
    const maze = new Int8Array(size * size * size);
    const _idx = (x, y, z) => (x * size * size) + (y * size) + z;
    
    // Elevators sit at even z indices: z=2. Paths at odd z: z=1, z=3.
    // Connect floor 1 and floor 3 vertically at (1,1)
    maze[_idx(1, 1, 1)] = 1; // Floor 1
    maze[_idx(1, 1, 2)] = 1; // Shaft
    maze[_idx(1, 1, 3)] = 1; // Floor 3
    
    // Horizontal movements on Floor 3
    maze[_idx(1, 2, 3)] = 1;
    
    // Test: distance from (1,1,1) to (1,2,3)
    // Vertical transit from z=1 -> z=2 (cost 0) and z=2 -> z=3 (cost 1). Total vertical cost = 1.
    // Then (1,1,3) to (1,2,3) horizontally (cost 1).
    // Total proximeter distance should be 2.
    const dist = proximeterDistance({ x: 1, y: 1, z: 1 }, { x: 1, y: 2, z: 3 }, maze, size, 0, 10);
    assert.strictEqual(dist, 2);
});

test('Pathfinder - BFS Nearest Unvisited', () => {
    const size = 5;
    const maze = new Int8Array(size * size * size);
    const _idx = (x, y, z) => (x * size * size) + (y * size) + z;
    
    maze[_idx(1, 1, 1)] = 1;
    maze[_idx(1, 2, 1)] = 1;
    maze[_idx(1, 3, 1)] = 1;
    
    const visited = new Set();
    visited.add('1,1,1');
    visited.add('1,2,1');
    
    const getNeighbors = (cx, cy, cz) => {
        const list = [];
        const dirs = [{dx:1,dy:0,dz:0}, {dx:-1,dy:0,dz:0}, {dx:0,dy:1,dz:0}, {dx:0,dy:-1,dz:0}];
        for(const d of dirs) {
            const nx = cx + d.dx, ny = cy + d.dy;
            if (nx >= 0 && nx < size && ny >= 0 && ny < size && maze[_idx(nx, ny, cz)] !== 0) {
                list.push({ x: nx, y: ny, z: cz });
            }
        }
        return list;
    };
    
    const path = bfsNearestUnvisited({ x: 1, y: 1, z: 1 }, visited, maze, size, {}, getNeighbors);
    assert.ok(path);
    assert.strictEqual(path.length, 2);
    assert.deepStrictEqual(path[1], { x: 1, y: 3, z: 1 }); // nearest unvisited is 1,3,1
});
