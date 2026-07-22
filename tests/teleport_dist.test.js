import { test } from 'node:test';
import assert from 'node:assert';
import { Maze3D } from '../maze3d.js';
import { CONFIG } from '../config.js';

test('Maze3D - Teleports strictly in dead-ends', () => {
    // Test with different branching factors (0.0, 0.5, 1.0)
    const branchingFactors = [0.0, 0.5, 1.0];
    const degree = 8;
    const expectedTeleportCount = CONFIG.getTeleportCount(degree);

    for (const bf of branchingFactors) {
        const mazeGen = new Maze3D(degree, bf, `seed-${bf}`);
        const matrix = mazeGen.generate();
        const size = mazeGen.size;

        let placedTeleports = [];
        let entranceTeleport = null;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    if (matrix.get(x, y, z) === mazeGen.TYPES.TELEPORT) {
                        if (x === 0) {
                            entranceTeleport = { x, y, z };
                        } else {
                            placedTeleports.push({ x, y, z });
                        }
                    }
                }
            }
        }

        // 1. Verify count
        assert.ok(placedTeleports.length <= expectedTeleportCount, `Should place at most ${expectedTeleportCount} teleports at branching factor ${bf}`);
        assert.ok(placedTeleports.length > 0, `Should place at least one teleport`);
        assert.ok(entranceTeleport, 'Entrance teleport should exist at x=0');

        // 2. Verify all teleports are strictly in dead-ends (exactly 1 neighbor that is not WALL)
        const allTeleports = [entranceTeleport, ...placedTeleports];
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
        ];

        for (const t of allTeleports) {
            let openNeighbors = 0;
            for (const d of dirs) {
                const nx = t.x + d.dx;
                const ny = t.y + d.dy;
                const nz = t.z + d.dz;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size) {
                    if (matrix.get(nx, ny, nz) !== mazeGen.TYPES.WALL) {
                        openNeighbors++;
                    }
                }
            }
            assert.strictEqual(openNeighbors, 1, `Teleport at (${t.x},${t.y},${t.z}) must have exactly 1 open neighbor (be in a dead-end) at branching factor ${bf}`);
        }
    }
});

test('Maze3D - Teleport dead-end requirement under exhaustion', () => {
    // Generate a tiny maze with high braid factor to guarantee dead-ends are highly constrained
    const degree = 3;
    const branchingFactor = 0.5;
    
    // Test multiple random seeds to ensure robustness
    for (let i = 0; i < 5; i++) {
        const mazeGen = new Maze3D(degree, branchingFactor, `exhaustion-seed-${i}`);
        const matrix = mazeGen.generate();
        const size = mazeGen.size;

        let placedTeleports = [];
        let entranceTeleport = null;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    if (matrix.get(x, y, z) === mazeGen.TYPES.TELEPORT) {
                        if (x === 0) {
                            entranceTeleport = { x, y, z };
                        } else {
                            placedTeleports.push({ x, y, z });
                        }
                    }
                }
            }
        }

        const allTeleports = [entranceTeleport, ...placedTeleports];
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
        ];

        for (const t of allTeleports) {
            let openNeighbors = 0;
            for (const d of dirs) {
                const nx = t.x + d.dx;
                const ny = t.y + d.dy;
                const nz = t.z + d.dz;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size) {
                    if (matrix.get(nx, ny, nz) !== mazeGen.TYPES.WALL) {
                        openNeighbors++;
                    }
                }
            }
            assert.strictEqual(openNeighbors, 1, `Under exhaustion, teleport at (${t.x},${t.y},${t.z}) must still have exactly 1 open neighbor (be in a dead-end)`);
        }
    }
});
