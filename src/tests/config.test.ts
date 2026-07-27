import { test, describe, assert } from 'vitest';
import { CONFIG } from '../engine/config';

test('CONFIG - Teleport Count non-linear scaling constraints', () => {
    // 1. Lower degrees (linear scaling, min 2)
    assert.strictEqual(CONFIG.getTeleportCount(3), 2, 'Degree 3 should yield 2 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(4), 2, 'Degree 4 should yield 2 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(5), 2, 'Degree 5 should yield 2 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(6), 3, 'Degree 6 should yield 3 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(7), 3, 'Degree 7 should yield 3 teleports');
    
    // 2. Pivot boundary (exactly 4)
    assert.strictEqual(CONFIG.getTeleportCount(8), 4, 'Degree 8 should yield exactly 4 teleports');
    
    // 3. Smooth transition at D=9 (no sudden jump to 9, should be 4)
    assert.strictEqual(CONFIG.getTeleportCount(9), 4, 'Degree 9 should yield exactly 4 teleports (smooth transition)');
    
    // 4. Accelerating growth (non-linear scaling)
    assert.strictEqual(CONFIG.getTeleportCount(10), 5, 'Degree 10 should yield 5 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(11), 6, 'Degree 11 should yield 6 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(12), 8, 'Degree 12 should yield 8 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(13), 9, 'Degree 13 should yield 9 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(14), 11, 'Degree 14 should yield 11 teleports');
    assert.strictEqual(CONFIG.getTeleportCount(15), 13, 'Degree 15 should yield 13 teleports');
    
    // 5. High degree target (exactly 16)
    assert.strictEqual(CONFIG.getTeleportCount(16), 16, 'Degree 16 should yield exactly 16 teleports');
});

test('CONFIG - Default configuration parameters exist and are configurable', () => {
    assert.ok(CONFIG.MAZE_DEGREE !== undefined, 'MAZE_DEGREE should be defined in CONFIG');
    assert.ok(CONFIG.BRANCHING_FACTOR !== undefined, 'BRANCHING_FACTOR should be defined in CONFIG');
    
    // Test MAZE_DEGREE value is editable
    const prevDegree = CONFIG.MAZE_DEGREE;
    CONFIG.MAZE_DEGREE = 12;
    assert.strictEqual(CONFIG.MAZE_DEGREE, 12, 'MAZE_DEGREE should be editable');
    CONFIG.MAZE_DEGREE = prevDegree;
});

// Import Maze3D to test integration
import { Maze3D } from '../engine/maze3d';

test('CONFIG - Maze3D constructor respects CONFIG.MAZE_DEGREE and CONFIG.BRANCHING_FACTOR', () => {
    const originalDegree = CONFIG.MAZE_DEGREE;
    const originalBranching = CONFIG.BRANCHING_FACTOR;
    
    try {
        CONFIG.MAZE_DEGREE = 10;
        CONFIG.BRANCHING_FACTOR = 0.45;
        
        const maze = new Maze3D();
        assert.strictEqual(maze.n, 10, 'Maze3D should default to CONFIG.MAZE_DEGREE (10)');
        assert.strictEqual(maze.branchingFactor, 0.45, 'Maze3D should default to CONFIG.BRANCHING_FACTOR (0.45)');
    } finally {
        CONFIG.MAZE_DEGREE = originalDegree;
        CONFIG.BRANCHING_FACTOR = originalBranching;
    }
});
