import { test, assert } from 'vitest';
import { Maze3D } from '../engine/maze3d';

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
    
    const matrix = mazeGen.generate() as any;
    assert.strictEqual(matrix.length, size * size * size);
    assert.strictEqual(matrix.size, size);
});

test('Maze3D - Entry and exit placements', () => {
    const mazeGen = new Maze3D(5, 0.2, 12345);
    const matrix = mazeGen.generate() as any;
    
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
    const matrix = mazeGen.generate() as any;
    
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
    const matrix = mazeGen.generate() as any;
    
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

test('Maze3D - Statue placement in Z dead-ends and solvability', () => {
    const mazeGen = new Maze3D(6, 0.2, 777);
    const matrix = mazeGen.generate() as any;
    
    // 1. Verify that the maze is solvable after generation
    const solvable = mazeGen.isSolvable();
    assert.strictEqual(solvable, true, 'Generated maze with statues must be solvable');
    
    // 2. Count statues placed
    let statuesCount = 0;
    for (let x = 0; x < mazeGen.size; x++) {
        for (let y = 0; y < mazeGen.size; y++) {
            for (let z = 0; z < mazeGen.size; z++) {
                if (matrix.get(x, y, z) === mazeGen.TYPES.STATUE) {
                    statuesCount++;
                    
                    // Verify it was indeed a horizontal dead-end (surrounded by walls)
                    const horizontalDirs = [
                        { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
                        { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
                    ];
                    for (const d of horizontalDirs) {
                        const nx = x + d.dx, ny = y + d.dy;
                        if (nx >= 0 && nx < mazeGen.size && ny >= 0 && ny < mazeGen.size) {
                            assert.strictEqual(matrix.get(nx, ny, z), mazeGen.TYPES.WALL, 'Statue cell must be horizontally surrounded by walls');
                        }
                    }
                    
                    // Verify that the elevator shaft directly below or above was converted to WALL
                    if (z - 1 >= 0) {
                        assert.strictEqual(matrix.get(x, y, z - 1), mazeGen.TYPES.WALL, 'Below shaft must be wall');
                    }
                    if (z + 1 < mazeGen.size) {
                        assert.strictEqual(matrix.get(x, y, z + 1), mazeGen.TYPES.WALL, 'Above shaft must be wall');
                    }
                }
            }
        }
    }
    
    // Since we generated with seed 777, there should be some dead-ends. Let's make sure it's valid
    console.log(`Placed ${statuesCount} statues in seeded test maze.`);
});

test('Maze3D - Reachability of all playable corridor/path cells', () => {
    const mazeGen = new Maze3D(6, 0.2, 555);
    const matrix = mazeGen.generate() as any;
    
    // We run a BFS from startPos to verify connectivity of all cells
    const visited = new Set<string>();
    const startX = Math.floor(mazeGen.startPos.x);
    const startY = Math.floor(mazeGen.startPos.y);
    const startZ = mazeGen.startPos.z;
    const queue = [{ x: startX, y: startY, z: startZ }];
    const startStr = `${startX},${startY},${startZ}`;
    visited.add(startStr);
    
    while (queue.length > 0) {
        const curr = queue.shift()!;
        
        // 1. Horizontal neighbors
        const dirs = [
            { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
            { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
        ];
        for (const d of dirs) {
            const nx = curr.x + d.dx;
            const ny = curr.y + d.dy;
            const nz = curr.z;
            if (nx >= 0 && nx < mazeGen.size && ny >= 0 && ny < mazeGen.size) {
                const nStr = `${nx},${ny},${nz}`;
                const val = matrix.get(nx, ny, nz);
                if (val !== mazeGen.TYPES.WALL && val !== mazeGen.TYPES.STATUE && !visited.has(nStr)) {
                    visited.add(nStr);
                    queue.push({ x: nx, y: ny, z: nz });
                }
            }
        }
        
        // 2. Vertical neighbors (Elevators)
        for (const dz of [-2, 2]) {
            const nz = curr.z + dz;
            if (nz >= 0 && nz < mazeGen.size) {
                const midZ = curr.z + dz / 2;
                const shaftVal = matrix.get(curr.x, curr.y, midZ);
                const destVal = matrix.get(curr.x, curr.y, nz);
                
                if (shaftVal !== mazeGen.TYPES.WALL && shaftVal !== mazeGen.TYPES.STATUE &&
                    destVal !== mazeGen.TYPES.WALL && destVal !== mazeGen.TYPES.STATUE) {
                    const nStr = `${curr.x},${curr.y},${nz}`;
                    if (!visited.has(nStr)) {
                        visited.add(nStr);
                        queue.push({ x: curr.x, y: curr.y, z: nz });
                    }
                }
            }
        }
    }
    
    // Assert that every playable/walkable non-wall, non-statue cell on Z odd floors is reached by the BFS
    for (let x = 0; x < mazeGen.size; x++) {
        for (let y = 0; y < mazeGen.size; y++) {
            for (let z = 1; z < mazeGen.size; z += 2) {
                const val = matrix.get(x, y, z);
                if (val !== mazeGen.TYPES.WALL && val !== mazeGen.TYPES.STATUE) {
                    const coordsStr = `${x},${y},${z}`;
                    assert.ok(visited.has(coordsStr), `Walkable path at ${x},${y},${z} should be reachable from startPos`);
                }
            }
        }
    }
});
