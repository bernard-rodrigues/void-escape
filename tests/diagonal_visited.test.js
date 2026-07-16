import { test } from 'node:test';
import assert from 'node:assert';

test('Diagonal Movement - Corner-cutting visited cells marking simulation', () => {
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 5, KEY: 7 };

    // Simulate engine state
    const state = {
        keysCollected: 0,
        totalKeys: 4,
        staticMapCacheDirty: false,
        player: {
            x: 1.5,
            y: 1.5,
            z: 1
        },
        maze: {
            grid: new Int8Array(10 * 10 * 10),
            get(x, y, z) {
                return this.grid[x * 100 + y * 10 + z];
            },
            set(x, y, z, val) {
                this.grid[x * 100 + y * 10 + z] = val;
            }
        },
        collectKey(x, y, z) {
            this.maze.set(x, y, z, TYPES.VISITED);
            this.keysCollected++;
        }
    };

    // Initialize cells:
    // (1,1) -> START
    // (2,2) -> PATH
    // (1,2) -> PATH (diagonal corner)
    // (2,1) -> PATH (diagonal corner)
    state.maze.set(1, 1, 1, TYPES.START);
    state.maze.set(2, 2, 1, TYPES.PATH);
    state.maze.set(1, 2, 1, TYPES.PATH);
    state.maze.set(2, 1, 1, TYPES.PATH);

    const isPassable = (gx, gy, gz) => {
        const val = state.maze.get(gx, gy, gz);
        if (val === TYPES.WALL) return false;
        return true;
    };

    // Simulate diagonal move function
    const simulateMove = (moveX, moveY) => {
        const oldGridX = Math.floor(state.player.x);
        const oldGridY = Math.floor(state.player.y);
        const nextX = state.player.x + moveX;
        const nextY = state.player.y + moveY;

        const gridIdxX = Math.floor(nextX);
        const gridIdxY = Math.floor(state.player.y);
        if (gridIdxX >= 0 && gridIdxX < 10 && isPassable(gridIdxX, gridIdxY, state.player.z)) {
            state.player.x = nextX;
        }

        const currentGridIdxX = Math.floor(state.player.x);
        const nextGridIdxY = Math.floor(nextY);
        if (nextGridIdxY >= 0 && nextGridIdxY < 10 && isPassable(currentGridIdxX, nextGridIdxY, state.player.z)) {
            state.player.y = nextY;
        }

        const finalGridIdxX = Math.floor(state.player.x);
        const finalGridIdxY = Math.floor(state.player.y);
        const z = state.player.z;

        const markOrCollect = (gx, gy, gz) => {
            const val = state.maze.get(gx, gy, gz);
            if (val === TYPES.PATH || val === TYPES.KEY) {
                if (val === TYPES.KEY) {
                    state.collectKey(gx, gy, gz);
                } else {
                    state.maze.set(gx, gy, gz, TYPES.VISITED);
                }
                state.staticMapCacheDirty = true;
            }
        };

        markOrCollect(finalGridIdxX, finalGridIdxY, z);

        if (finalGridIdxX !== oldGridX && finalGridIdxY !== oldGridY) {
            markOrCollect(finalGridIdxX, oldGridY, z);
            markOrCollect(oldGridX, finalGridIdxY, z);
        }
    };

    // 1. Perform diagonal movement from (1.5, 1.5) to (2.5, 2.5)
    simulateMove(1.0, 1.0);

    // Verify final player coordinates
    assert.strictEqual(state.player.x, 2.5);
    assert.strictEqual(state.player.y, 2.5);

    // Verify all cells marked as visited
    assert.strictEqual(state.maze.get(2, 2, 1), TYPES.VISITED, 'Target cell (2,2) should be visited');
    assert.strictEqual(state.maze.get(2, 1, 1), TYPES.VISITED, 'Corner cell (2,1) should be visited');
    assert.strictEqual(state.maze.get(1, 2, 1), TYPES.VISITED, 'Corner cell (1,2) should be visited');
    assert.strictEqual(state.staticMapCacheDirty, true, 'Map cache should be marked dirty');
});
