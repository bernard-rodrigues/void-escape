import { test } from 'node:test';
import assert from 'node:assert';

// Mock getGamepads globally on globalThis
let mockGamepad = null;
if (!globalThis.navigator) {
    globalThis.navigator = {};
}
Object.defineProperty(globalThis.navigator, 'getGamepads', {
    value: () => [mockGamepad],
    configurable: true,
    writable: true
});

// Mock THREE globally
globalThis.THREE = {
    Vector3: class {
        constructor() {
            this.x = 0; this.y = 0; this.z = 0;
        }
        copy(v) { this.x = v.x; this.y = v.y; this.z = v.z; return this; }
        sub(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this; }
        add(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this; }
        setFromSpherical(s) {
            // Map theta/phi to check them in assertions
            this.x = s.theta;
            this.y = s.phi;
            return this;
        }
    },
    Spherical: class {
        constructor() {
            this.theta = 0;
            this.phi = Math.PI / 2;
        }
        setFromVector3(v) { return this; }
        makeSafe() { return this; }
    }
};

// Copy function definitions from engine.js to test them in isolation without Three.js import issues
function getTeleportCandidates(engine) {
    const px = Math.floor(engine.player.x);
    const py = Math.floor(engine.player.y);
    const pz = engine.player.z;
    return Array.from(engine.discoveredTeleports).map(str => {
        const [x, y, z] = str.split(',').map(Number);
        return { x, y, z };
    }).filter(pos => {
        if (pos.x === px && pos.y === py && pos.z === pz) return false;
        if (engine.inactiveTeleportPos && 
            engine.inactiveTeleportPos.x === pos.x && 
            engine.inactiveTeleportPos.y === pos.y && 
            engine.inactiveTeleportPos.z === pos.z) return false;
        return true;
    });
}

function updateGamepad(engine, dt) {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = gamepads[0] || gamepads.find(g => g !== null);
    if (!gp) return;

    // 1. Movement axes (Left Analog / D-pad)
    const axisX = gp.axes[0];
    const axisY = gp.axes[1];
    
    const deadzone = 0.25;
    let left = axisX < -deadzone;
    let right = axisX > deadzone;
    let up = axisY < -deadzone;
    let down = axisY > deadzone;

    if (gp.buttons[12] && gp.buttons[12].pressed) up = true;
    if (gp.buttons[13] && gp.buttons[13].pressed) down = true;
    if (gp.buttons[14] && gp.buttons[14].pressed) left = true;
    if (gp.buttons[15] && gp.buttons[15].pressed) right = true;

    engine.input.keys['arrowleft'] = left;
    engine.input.keys['arrowright'] = right;
    engine.input.keys['arrowup'] = up;
    engine.input.keys['arrowdown'] = down;

    // 2. Buttons (Edge triggered)
    if (!engine.prevGamepadButtons) {
        engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
        return;
    }

    const wasPressed = (btnIdx) => engine.prevGamepadButtons[btnIdx];
    const isPressed = (btnIdx) => gp.buttons[btnIdx] && gp.buttons[btnIdx].pressed;
    const justPressed = (btnIdx) => isPressed(btnIdx) && !wasPressed(btnIdx);

    // Start / Menu Button (Button 9): Toggle Pause
    if (justPressed(9)) {
        engine.togglePause();
        engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
        return;
    }

    // If paused, ignore all other inputs
    if (engine.isPaused) {
        engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
        return;
    }

    // A Button (Button 0): Descend floor / Confirm teleport
    if (justPressed(0)) {
        if (engine.isTeleportMode) {
            const candidates = getTeleportCandidates(engine);
            const selected = candidates[engine.gamepadTeleportSelectedIndex];
            if (selected) {
                engine.teleportTo(selected.x, selected.y, selected.z);
            }
        } else if (!engine.isMap3DActive) {
            const px = Math.floor(engine.player.x);
            const py = Math.floor(engine.player.y);
            const pz = engine.player.z;
            const hDown = pz > 0 && engine.maze.get(px, py, pz - 1) !== 0;
            const val = engine.maze.get(px, py, pz);
            const isTeleport = val === engine.mazeGen.TYPES.TELEPORT;
            const isInactive = engine.inactiveTeleportPos && 
                               engine.inactiveTeleportPos.x === px && 
                               engine.inactiveTeleportPos.y === py && 
                               engine.inactiveTeleportPos.z === pz;
            const isOnTeleport = isTeleport && engine.discoveredTeleports.has(`${px},${py},${pz}`);

            if (!isOnTeleport || isInactive) {
                if (hDown) engine.changeFloor(-2);
            }
        }
    }

    // B Button (Button 1): Toggle Zoom / Cancel Teleport
    if (justPressed(1)) {
        if (engine.isTeleportMode) {
            engine.toggleTeleportMap(false);
        } else {
            engine.toggleZoom();
        }
    }

    // X Button (Button 2): Interact with portal
    if (justPressed(2)) {
        if (!engine.isTeleportMode && !engine.isMap3DActive) {
            const px = Math.floor(engine.player.x);
            const py = Math.floor(engine.player.y);
            const pz = engine.player.z;
            const val = engine.maze.get(px, py, pz);
            const isTeleport = val === engine.mazeGen.TYPES.TELEPORT;
            const isInactive = engine.inactiveTeleportPos && 
                               engine.inactiveTeleportPos.x === px && 
                               engine.inactiveTeleportPos.y === py && 
                               engine.inactiveTeleportPos.z === pz;
            const isOnTeleport = isTeleport && engine.discoveredTeleports.has(`${px},${py},${pz}`);

            if (isOnTeleport && !isInactive) {
                if (engine.discoveredTeleports.size >= 2) {
                    engine.toggleTeleportMap(true);
                    engine.gamepadTeleportSelectedIndex = 0;
                } else {
                    engine.ui.showInfoBanner("FIND ANOTHER TELEPORT TO ACTIVATE");
                }
            }
        }
    }

    // Y Button (Button 3): Ascend floor
    if (justPressed(3)) {
        if (!engine.isTeleportMode && !engine.isMap3DActive) {
            const px = Math.floor(engine.player.x);
            const py = Math.floor(engine.player.y);
            const pz = engine.player.z;
            const hUp = pz < engine.mazeGen.size - 1 && engine.maze.get(px, py, pz + 1) !== 0;
            const val = engine.maze.get(px, py, pz);
            const isTeleport = val === engine.mazeGen.TYPES.TELEPORT;
            const isInactive = engine.inactiveTeleportPos && 
                               engine.inactiveTeleportPos.x === px && 
                               engine.inactiveTeleportPos.y === py && 
                               engine.inactiveTeleportPos.z === pz;
            const isOnTeleport = isTeleport && engine.discoveredTeleports.has(`${px},${py},${pz}`);

            if (!isOnTeleport || isInactive) {
                if (hUp) engine.changeFloor(2);
            }
        }
    }

    // Back / View Button (Button 8): Toggle 3D Map
    if (justPressed(8)) {
        if (engine.isTeleportMode) {
            engine.toggleTeleportMap(false);
        } else {
            engine.toggleMap3D();
        }
    }

    // 3. Teleport target selection (LB/RB or D-pad Left/Right in Teleport Mode)
    if (engine.isTeleportMode) {
        const prevTeleport = justPressed(4) || justPressed(14);
        const nextTeleport = justPressed(5) || justPressed(15);

        if (prevTeleport || nextTeleport) {
            const candidates = getTeleportCandidates(engine);
            if (candidates.length > 0) {
                if (prevTeleport) {
                    engine.gamepadTeleportSelectedIndex = (engine.gamepadTeleportSelectedIndex - 1 + candidates.length) % candidates.length;
                } else {
                    engine.gamepadTeleportSelectedIndex = (engine.gamepadTeleportSelectedIndex + 1) % candidates.length;
                }
            }
        }
    }

    // 4. Right Analog Stick (axes 2 & 3): Rotate 3D Camera / Triggers (LT/RT): Zoom 3D Camera
    if (engine.isMap3DActive && engine.controls) {
        const rotX = gp.axes[2];
        const rotY = gp.axes[3];
        const zoomInVal = gp.buttons[7] ? gp.buttons[7].value : 0;  // RT
        const zoomOutVal = gp.buttons[6] ? gp.buttons[6].value : 0; // LT
        
        const rotDeadzone = 0.15;
        const zoomDeadzone = 0.15;
        const rotSpeed = 2.0 * dt;
        const zoomSpeed = 20.0 * dt;

        const hasRotation = Math.abs(rotX) > rotDeadzone || Math.abs(rotY) > rotDeadzone;
        const hasZoom = zoomInVal > zoomDeadzone || zoomOutVal > zoomDeadzone;

        if (hasRotation || hasZoom) {
            const offset = new THREE.Vector3().copy(engine.camera.position).sub(engine.controls.target);
            const spherical = new THREE.Spherical().setFromVector3(offset);

            if (Math.abs(rotX) > rotDeadzone) {
                spherical.theta -= rotX * rotSpeed;
            }
            if (Math.abs(rotY) > rotDeadzone) {
                spherical.phi -= rotY * rotSpeed;
                const minPolar = engine.controls.minPolarAngle || 0;
                const maxPolar = engine.controls.maxPolarAngle || Math.PI;
                spherical.phi = Math.max(minPolar, Math.min(maxPolar, spherical.phi));
            }

            if (zoomInVal > zoomDeadzone) {
                spherical.radius -= zoomInVal * zoomSpeed;
            }
            if (zoomOutVal > zoomDeadzone) {
                spherical.radius += zoomOutVal * zoomSpeed;
            }
            const minDist = engine.controls.minDistance || 2;
            const maxDist = engine.controls.maxDistance || 100;
            spherical.radius = Math.max(minDist, Math.min(maxDist, spherical.radius));

            spherical.makeSafe();
            offset.setFromSpherical(spherical);
            engine.camera.position.copy(engine.controls.target).add(offset);
            engine.controls.update();
        }
    }

    engine.prevGamepadButtons = gp.buttons.map(b => b.pressed);
}

test('Gamepad Input - Movement mapping from Left Analog and D-pad', () => {
    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        input: {
            keys: {}
        },
        mazeGen: {
            size: 5,
            TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 6, KEY: 7 }
        },
        maze: {
            get(x, y, z) { return 1; }
        },
        player: { x: 1.5, y: 1.5, z: 0 },
        discoveredTeleports: new Set(),
        inactiveTeleportPos: null
    };

    // Scenario 1: Stick neutral, D-pad unpressed
    mockGamepad = {
        axes: [0.0, 0.0, 0.0, 0.0],
        buttons: Array.from({ length: 16 }, () => ({ pressed: false }))
    };

    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(mockEngine.input.keys['arrowleft'], false);
    assert.strictEqual(mockEngine.input.keys['arrowright'], false);
    assert.strictEqual(mockEngine.input.keys['arrowup'], false);
    assert.strictEqual(mockEngine.input.keys['arrowdown'], false);

    // Scenario 2: Left stick pushed Left (-1.0 on axis 0)
    mockGamepad.axes[0] = -1.0;
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(mockEngine.input.keys['arrowleft'], true);
    assert.strictEqual(mockEngine.input.keys['arrowright'], false);

    // Scenario 3: Left stick neutral, D-pad Up pressed (button index 12)
    mockGamepad.axes[0] = 0.0;
    mockGamepad.buttons[12] = { pressed: true };
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(mockEngine.input.keys['arrowup'], true);
    assert.strictEqual(mockEngine.input.keys['arrowdown'], false);
});

test('Gamepad Input - Edge triggered actions (A, B, Y, X, Start)', () => {
    let zoomToggled = false;
    let floorDelta = null;
    let teleportToggled = null;

    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        isTeleportMode: false,
        isMap3DActive: false,
        input: {
            keys: {}
        },
        mazeGen: {
            size: 5,
            TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 6, KEY: 7 }
        },
        maze: {
            get(x, y, z) {
                if (x === 1 && y === 1 && z === 2) return 6; // TELEPORT
                return 1;
            }
        },
        player: { x: 1.5, y: 3.5, z: 2 },
        discoveredTeleports: new Set(['1,1,2']),
        inactiveTeleportPos: null,
        
        // Mock method calls
        toggleZoom() { zoomToggled = true; },
        changeFloor(delta) { floorDelta = delta; },
        toggleTeleportMap(show) { teleportToggled = show; this.isTeleportMode = show; },
        toggleMap3D() { this.isMap3DActive = !this.isMap3DActive; }
    };

    // Frame 1: Controller connected, buttons not pressed
    mockGamepad = {
        axes: [0.0, 0.0, 0.0, 0.0],
        buttons: Array.from({ length: 16 }, () => ({ pressed: false }))
    };
    updateGamepad(mockEngine, 0.016);

    // Frame 2: Press Y Button (button 3) to climb floor
    mockGamepad.buttons[3] = { pressed: true };
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(floorDelta, 2);

    // Frame 3: Keep Y pressed (should NOT trigger again due to edge-triggering)
    floorDelta = null;
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(floorDelta, null);

    // Frame 4: Release Y, Press B (button 1) to toggle zoom
    mockGamepad.buttons[3] = { pressed: false };
    mockGamepad.buttons[1] = { pressed: true };
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(zoomToggled, true);

    // Frame 5: Move to portal and press X (button 2) to trigger portal interaction (player is on portal "1,1,2")
    mockEngine.player.y = 1.5;
    mockGamepad.buttons[1] = { pressed: false };
    mockGamepad.buttons[2] = { pressed: true };
    // Add another portal so size >= 2 is met to allow teleport mode
    mockEngine.discoveredTeleports.add('3,3,2');
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(teleportToggled, true);
});

test('Gamepad Input - Teleport candidates list and bumper selection cycling', () => {
    let teleportSelectedPos = null;

    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        isTeleportMode: true,
        isMap3DActive: true,
        input: {
            keys: {}
        },
        mazeGen: {
            size: 5,
            TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 6, KEY: 7 }
        },
        maze: {
            get(x, y, z) { return 1; }
        },
        player: { x: 1.5, y: 1.5, z: 2 },
        discoveredTeleports: new Set(['1,1,2', '3,3,2', '4,4,0']), // player is on '1,1,2'
        inactiveTeleportPos: { x: 4, y: 4, z: 0 }, // inactive portal
        gamepadTeleportSelectedIndex: 0,
        teleportTo(x, y, z) { teleportSelectedPos = { x, y, z }; }
    };

    // Candidates should exclude:
    // 1. Current player position (1,1,2)
    // 2. Inactive teleport pos (4,4,0)
    // So candidates should only have (3,3,2)
    const candidates = getTeleportCandidates(mockEngine);
    assert.strictEqual(candidates.length, 1);
    assert.deepStrictEqual(candidates[0], { x: 3, y: 3, z: 2 });

    // Add another portal so we can cycle between multiple candidates
    mockEngine.discoveredTeleports.add('2,2,0');
    // Candidates now: (3,3,2) and (2,2,0)
    const newCandidates = getTeleportCandidates(mockEngine);
    assert.strictEqual(newCandidates.length, 2);

    mockGamepad = {
        axes: [0.0, 0.0, 0.0, 0.0],
        buttons: Array.from({ length: 16 }, () => ({ pressed: false }))
    };
    updateGamepad(mockEngine, 0.016);

    // Frame 2: Press RB (button 5) to cycle index forward
    mockGamepad.buttons[5] = { pressed: true };
    updateGamepad(mockEngine, 0.016);
    assert.strictEqual(mockEngine.gamepadTeleportSelectedIndex, 1);

    // Frame 3: Release RB, Press A (button 0) to confirm teleport
    mockGamepad.buttons[5] = { pressed: false };
    mockGamepad.buttons[0] = { pressed: true };
    updateGamepad(mockEngine, 0.016);
    assert.deepStrictEqual(teleportSelectedPos, { x: 2, y: 2, z: 0 });
});

test('Gamepad Input - Right Analog Stick rotates and triggers zoom 3D camera', () => {
    let controlsUpdated = false;

    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        isTeleportMode: false,
        isMap3DActive: true,
        input: {
            keys: {}
        },
        mazeGen: {
            size: 5
        },
        camera: {
            position: new THREE.Vector3(10, 10, 10)
        },
        controls: {
            target: { x: 0, y: 0, z: 0 },
            update() { controlsUpdated = true; }
        }
    };

    // Scenario A: Only analog rotation
    mockGamepad = {
        axes: [0.0, 0.0, 0.8, -0.6], // Right stick pushed right (0.8) and up (-0.6)
        buttons: Array.from({ length: 16 }, () => ({ pressed: false, value: 0 }))
    };
    mockEngine.prevGamepadButtons = mockGamepad.buttons.map(b => b.pressed);

    updateGamepad(mockEngine, 0.1); // dt = 0.1s
    
    assert.strictEqual(Math.round(mockEngine.camera.position.x * 100) / 100, -0.16);
    assert.strictEqual(Math.round(mockEngine.camera.position.y * 100) / 100, 1.69);
    assert.strictEqual(controlsUpdated, true);

    // Scenario B: Zoom in using RT trigger (button 7 with value 0.5)
    mockGamepad.axes = [0.0, 0.0, 0.0, 0.0];
    mockGamepad.buttons[7] = { pressed: true, value: 0.5 };
    controlsUpdated = false;
    
    updateGamepad(mockEngine, 0.1);
    assert.strictEqual(controlsUpdated, true);
});
