import { test } from 'node:test';
import assert from 'node:assert';
import { aStarPath } from '../pathfinder.js';

test('Exit Pathfinder - Restricted A* pathfinding prefers visited nodes', () => {
    const size = 5;
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    
    // Setup a simple 5x5x5 grid (using 1D flat array mapping)
    const maze = new Int8Array(size * size * size);
    const getIdx = (x, y, z) => x * size * size + y * size + z;
    
    // Create two possible paths from player (0,0,1) to exit (4,0,1):
    // Path 1 (Shorter, but unvisited PATH cells):
    // (0,0,1) -> (1,0,1) -> (2,0,1) -> (3,0,1) -> (4,0,1) [Length: 4 steps]
    for (let x = 0; x <= 4; x++) {
        maze[getIdx(x, 0, 1)] = TYPES.PATH;
    }
    maze[getIdx(0, 0, 1)] = TYPES.START;
    maze[getIdx(4, 0, 1)] = TYPES.EXIT;
    
    // Path 2 (Longer, but marked as VISITED):
    // (0,0,1) -> (0,1,1) -> (1,1,1) -> (2,1,1) -> (3,1,1) -> (4,1,1) -> (4,0,1) [Length: 6 steps]
    maze[getIdx(0, 1, 1)] = TYPES.VISITED;
    maze[getIdx(1, 1, 1)] = TYPES.VISITED;
    maze[getIdx(2, 1, 1)] = TYPES.VISITED;
    maze[getIdx(3, 1, 1)] = TYPES.VISITED;
    maze[getIdx(4, 1, 1)] = TYPES.VISITED;
    
    const start = { x: 0, y: 0, z: 1 };
    const end = { x: 4, y: 0, z: 1 };
    
    // 1. Without restrictToVisited: it must choose the shorter geometric route (Path 1, 4 steps)
    const shortestPathUnrestricted = aStarPath(start, end, maze, size, TYPES.WALL) ?? [];
    assert.strictEqual(shortestPathUnrestricted.length, 4);
    assert.strictEqual(shortestPathUnrestricted[0].x, 1);
    assert.strictEqual(shortestPathUnrestricted[0].y, 0); // traverses non-visited coordinates (y=0)
    
    // 2. With restrictToVisited:
    // Generate tempMaze considering only visited/start/end cells as passable
    const tempMaze = new Int8Array(size * size * size);
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            for (let z = 0; z < size; z++) {
                const idx = getIdx(x, y, z);
                const val = maze[idx];
                const isPlayerStart = x === start.x && y === start.y && z === start.z;
                const isTargetEnd = x === end.x && y === end.y && z === end.z;
                const isVisited = val === TYPES.VISITED || val === TYPES.START;
                
                if (isVisited || isPlayerStart || isTargetEnd) {
                    tempMaze[idx] = 1;
                } else {
                    tempMaze[idx] = 0;
                }
            }
        }
    }
    
    const pathRestricted = aStarPath(start, end, tempMaze, size, 0) ?? [];
    
    // The route must follow Path 2: (0,1,1) -> (1,1,1) -> (2,1,1) -> (3,1,1) -> (4,1,1) -> (4,0,1)
    // Thus it has length 6
    assert.strictEqual(pathRestricted.length, 6);
    assert.strictEqual(pathRestricted[0].x, 0);
    assert.strictEqual(pathRestricted[0].y, 1); // traverses visited coordinates (y=1)
    assert.strictEqual(pathRestricted[4].x, 4);
    assert.strictEqual(pathRestricted[4].y, 1);
    assert.strictEqual(pathRestricted[5].x, 4);
    assert.strictEqual(pathRestricted[5].y, 0);
});

test('Exit Pathfinder - checkExitNeighborVisited emulates visited neighbors check', () => {
    const size = 5;
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4 };
    const maze = new Int8Array(size * size * size);
    const getIdx = (x, y, z) => x * size * size + y * size + z;
    
    const exitPos = { x: 4, y: 3, z: 1 };
    maze[getIdx(exitPos.x, exitPos.y, exitPos.z)] = TYPES.EXIT;
    
    // Exit neighbor: (3, 3, 1) is a PATH (unvisited)
    const neighborPos = { x: 3, y: 3, z: 1 };
    maze[getIdx(neighborPos.x, neighborPos.y, neighborPos.z)] = TYPES.PATH;
    
    // Helper function matching Engine's checkExitNeighborVisited logic
    const checkExitNeighborVisited = () => {
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 2 }, { dx: 0, dy: 0, dz: -2 }
        ];
        for (const d of dirs) {
            const nx = exitPos.x + d.dx;
            const ny = exitPos.y + d.dy;
            const nz = exitPos.z + d.dz;
            if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size) {
                const val = maze[getIdx(nx, ny, nz)];
                if (val !== TYPES.WALL) {
                    const isVisited = val === TYPES.VISITED || val === TYPES.START;
                    if (isVisited) return true;
                }
            }
        }
        return false;
    };
    
    // 1. Neighbor is unvisited -> check must return false
    assert.strictEqual(checkExitNeighborVisited(), false);
    
    // 2. Neighbor is visited -> check must return true
    maze[getIdx(neighborPos.x, neighborPos.y, neighborPos.z)] = TYPES.VISITED;
    assert.strictEqual(checkExitNeighborVisited(), true);
});
