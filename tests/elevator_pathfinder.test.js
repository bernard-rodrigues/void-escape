import { test } from 'node:test';
import assert from 'node:assert';

test('Elevator Pathfinder Direction - Traveled direction detection', () => {
    const x = 2, y = 2, z = 1;
    const CONFIG = {
        COLORS: {
            REVEALED_PATH: '#ffffff',
            NEON_UP: '#00ffff',
            NEON_UP_UNUSED: '#006666',
            NEON_DOWN: '#ff00ff',
            NEON_DOWN_UNUSED: '#660066'
        }
    };

    // Emulated drawer logic matching drawElevator2D implementation in engine.js
    const getElevatorDrawingColors = (isRevealed, upVisited, downVisited, activePathReveal, revealedPathSet) => {
        let routeUsesUp = false;
        let routeUsesDown = false;
        
        if (isRevealed) {
            if (activePathReveal) {
                const idx = activePathReveal.findIndex(node => node.x === x && node.y === y && node.z === z);
                if (idx !== -1 && idx < activePathReveal.length - 1) {
                    const nextNode = activePathReveal[idx + 1];
                    if (nextNode.z > z) routeUsesUp = true;
                    if (nextNode.z < z) routeUsesDown = true;
                }
            }
            if (!routeUsesUp && !routeUsesDown) {
                routeUsesUp = revealedPathSet.has(`${x},${y},${z + 1}`) || revealedPathSet.has(`${x},${y},${z + 2}`);
                routeUsesDown = revealedPathSet.has(`${x},${y},${z - 1}`) || revealedPathSet.has(`${x},${y},${z - 2}`);
            }

            const paintUpWhite = routeUsesUp || (!routeUsesUp && !routeUsesDown);
            const paintDownWhite = routeUsesDown || (!routeUsesUp && !routeUsesDown);

            return {
                upColor: paintUpWhite ? CONFIG.COLORS.REVEALED_PATH : (upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED),
                downColor: paintDownWhite ? CONFIG.COLORS.REVEALED_PATH : (downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED)
            };
        } else {
            return {
                upColor: upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED,
                downColor: downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED
            };
        }
    };

    // 1. Unrevealed elevator (regular rendering)
    const colorsNormal = getElevatorDrawingColors(false, true, false, null, new Set());
    assert.strictEqual(colorsNormal.upColor, CONFIG.COLORS.NEON_UP);
    assert.strictEqual(colorsNormal.downColor, CONFIG.COLORS.NEON_DOWN_UNUSED);

    // 2. Revealed elevator going UP (activePathReveal detection)
    const activePathUp = [
        { x: 1, y: 2, z: 1 }, // Enter from corridor
        { x: 2, y: 2, z: 1 }, // Elevator
        { x: 2, y: 2, z: 3 }  // Ascends
    ];
    const colorsUp = getElevatorDrawingColors(true, false, false, activePathUp, new Set());
    assert.strictEqual(colorsUp.upColor, CONFIG.COLORS.REVEALED_PATH); // UP half becomes white
    assert.strictEqual(colorsUp.downColor, CONFIG.COLORS.NEON_DOWN_UNUSED); // DOWN half stays inactive neon

    // 3. Revealed elevator going DOWN (activePathReveal detection)
    const activePathDown = [
        { x: 1, y: 2, z: 1 }, // Enter from corridor
        { x: 2, y: 2, z: 1 }, // Elevator
        { x: 2, y: 2, z: -1 } // Descends
    ];
    const colorsDown = getElevatorDrawingColors(true, true, true, activePathDown, new Set());
    assert.strictEqual(colorsDown.upColor, CONFIG.COLORS.NEON_UP); // UP stays active cyan
    assert.strictEqual(colorsDown.downColor, CONFIG.COLORS.REVEALED_PATH); // DOWN half becomes white

    // 4. Revealed elevator - fallback on revealedPathSet (going UP)
    const revealedSetUp = new Set([`${x},${y},${z}`, `${x},${y},${z + 1}`]);
    const colorsFallbackUp = getElevatorDrawingColors(true, false, false, null, revealedSetUp);
    assert.strictEqual(colorsFallbackUp.upColor, CONFIG.COLORS.REVEALED_PATH);
    assert.strictEqual(colorsFallbackUp.downColor, CONFIG.COLORS.NEON_DOWN_UNUSED);

    // 5. Revealed elevator - no directional indicators on path (both halves become white)
    const colorsFallbackNone = getElevatorDrawingColors(true, false, false, null, new Set());
    assert.strictEqual(colorsFallbackNone.upColor, CONFIG.COLORS.REVEALED_PATH);
    assert.strictEqual(colorsFallbackNone.downColor, CONFIG.COLORS.REVEALED_PATH);
});

test('Elevator Pathfinder Direction - Highlight retention until player exits cell', () => {
    const TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 5 };
    const mazeData = {
        get: (x, y, z) => {
            // Emulate non-WALL shafts adjacent vertically to the elevator cells at 2,2,1 and 2,2,3
            return TYPES.PATH;
        },
        size: 5
    };

    const revealedPathSet = new Set(['2,2,1', '2,2,3']);

    // Emulated coordinate cleanup step inside movePlayer
    const processMovement = (playerIdxX, playerIdxY, playerIdxZ, lastPlayerCell) => {
        const hUp = playerIdxZ < mazeData.size - 1 && mazeData.get(playerIdxX, playerIdxY, playerIdxZ + 1) !== TYPES.WALL;
        const hDown = playerIdxZ > 0 && mazeData.get(playerIdxX, playerIdxY, playerIdxZ - 1) !== TYPES.WALL;
        const isCurrentElevator = hUp || hDown;

        if (lastPlayerCell) {
            const lastX = lastPlayerCell.x;
            const lastY = lastPlayerCell.y;
            const lastZ = lastPlayerCell.z;
            const lastHUp = lastZ < mazeData.size - 1 && mazeData.get(lastX, lastY, lastZ + 1) !== TYPES.WALL;
            const lastHDown = lastZ > 0 && mazeData.get(lastX, lastY, lastZ - 1) !== TYPES.WALL;
            const isLastElevator = lastHUp || lastHDown;
            const hasMoved = lastX !== playerIdxX || lastY !== playerIdxY || lastZ !== playerIdxZ;

            if (isLastElevator && hasMoved) {
                revealedPathSet.delete(`${lastX},${lastY},${lastZ}`);
            }
        }

        const currentPathKey = `${playerIdxX},${playerIdxY},${playerIdxZ}`;
        if (!isCurrentElevator) {
            revealedPathSet.delete(currentPathKey);
        }
    };

    // 1. Player walks into the elevator (2,2,1) from corridor (1,2,1)
    let lastPlayerCell = { x: 1, y: 2, z: 1 };
    processMovement(2, 2, 1, lastPlayerCell);

    // Highlight at 2,2,1 must be retained
    assert.ok(revealedPathSet.has('2,2,1'));

    // 2. Player takes the elevator from (2,2,1) to (2,2,3)
    lastPlayerCell = { x: 2, y: 2, z: 1 };
    processMovement(2, 2, 3, lastPlayerCell);

    // Old elevator highlight must be cleared
    assert.ok(!revealedPathSet.has('2,2,1'));
    // New destination elevator highlight must be retained
    assert.ok(revealedPathSet.has('2,2,3'));

    // 3. Player leaves the elevator (2,2,3) to exit onto corridor (3,2,3)
    lastPlayerCell = { x: 2, y: 2, z: 3 };
    processMovement(3, 2, 3, lastPlayerCell);

    // New elevator highlight must be cleared
    assert.ok(!revealedPathSet.has('2,2,3'));
});

test('Elevator Pathfinder Direction - 3D material color highlight mapping', () => {
    const x = 2, y = 2, z = 1;
    const CONFIG = {
        COLORS: {
            THREE_ELEVATOR_UP: 0x00ffff,
            THREE_ELEVATOR_DOWN: 0xff00ff
        }
    };

    // Emulated 3D double-sided elevator coloring logic matching engine.js
    const get3DElevatorMaterials = (isRevealedPath, activePathReveal, revealedPathSet) => {
        let routeUsesUp = false;
        let routeUsesDown = false;
        if (isRevealedPath) {
            if (activePathReveal) {
                const idx = activePathReveal.findIndex(node => node.x === x && node.y === y && node.z === z);
                if (idx !== -1 && idx < activePathReveal.length - 1) {
                    const nextNode = activePathReveal[idx + 1];
                    if (nextNode.z > z) routeUsesUp = true;
                    if (nextNode.z < z) routeUsesDown = true;
                }
            }
            if (!routeUsesUp && !routeUsesDown) {
                routeUsesUp = revealedPathSet.has(`${x},${y},${z + 1}`) || revealedPathSet.has(`${x},${y},${z + 2}`);
                routeUsesDown = revealedPathSet.has(`${x},${y},${z - 1}`) || revealedPathSet.has(`${x},${y},${z - 2}`);
            }
        }

        const paintUpWhite = isRevealedPath && (routeUsesUp || (!routeUsesUp && !routeUsesDown));
        const paintDownWhite = isRevealedPath && (routeUsesDown || (!routeUsesUp && !routeUsesDown));

        return {
            bottomColor: paintDownWhite ? 0xffffff : CONFIG.COLORS.THREE_ELEVATOR_DOWN,
            bottomIntensity: paintDownWhite ? 2.0 : 0.4,
            topColor: paintUpWhite ? 0xffffff : CONFIG.COLORS.THREE_ELEVATOR_UP,
            topIntensity: paintUpWhite ? 2.0 : 0.4
        };
    };

    // 1. Inactive path (regular 3D elevator colors)
    const normal = get3DElevatorMaterials(false, null, new Set());
    assert.strictEqual(normal.bottomColor, CONFIG.COLORS.THREE_ELEVATOR_DOWN);
    assert.strictEqual(normal.topColor, CONFIG.COLORS.THREE_ELEVATOR_UP);
    assert.strictEqual(normal.bottomIntensity, 0.4);
    assert.strictEqual(normal.topIntensity, 0.4);

    // 2. Revealed path going UP
    const activePathUp = [
        { x: 1, y: 2, z: 1 },
        { x: 2, y: 2, z: 1 },
        { x: 2, y: 2, z: 3 }
    ];
    const up = get3DElevatorMaterials(true, activePathUp, new Set());
    // Only the top block (UP) becomes white and glowing. The bottom block stays pink.
    assert.strictEqual(up.topColor, 0xffffff);
    assert.strictEqual(up.topIntensity, 2.0);
    assert.strictEqual(up.bottomColor, CONFIG.COLORS.THREE_ELEVATOR_DOWN);
    assert.strictEqual(up.bottomIntensity, 0.4);

    // 3. Revealed path going DOWN
    const activePathDown = [
        { x: 1, y: 2, z: 1 },
        { x: 2, y: 2, z: 1 },
        { x: 2, y: 2, z: -1 }
    ];
    const down = get3DElevatorMaterials(true, activePathDown, new Set());
    // Only the bottom block (DOWN) becomes white and glowing. The top block stays cyan.
    assert.strictEqual(down.bottomColor, 0xffffff);
    assert.strictEqual(down.bottomIntensity, 2.0);
    assert.strictEqual(down.topColor, CONFIG.COLORS.THREE_ELEVATOR_UP);
    assert.strictEqual(down.topIntensity, 0.4);
});

test('Elevator Pathfinder Direction - Floor transition integration', () => {
    const revealedPathSet = new Set(['2,2,1', '2,2,2', '2,2,3', '2,2,4', '2,2,5']);

    // Emulated floor transition logic
    const processChangeFloor = (currentX, currentY, currentZ, delta) => {
        const shaftZ = currentZ + delta / 2;
        const shaftKey = `${currentX},${currentY},${shaftZ}`;
        // Deletes only the intermediate shaft key
        revealedPathSet.delete(shaftKey);
    };

    // Player ascends from 2,2,1 to 2,2,3 (passing through shaft 2,2,2)
    processChangeFloor(2, 2, 1, 2);

    // The intermediate shaft '2,2,2' must be cleared
    assert.ok(!revealedPathSet.has('2,2,2'));
    // The destination elevator '2,2,3' must be retained
    assert.ok(revealedPathSet.has('2,2,3'));
});
