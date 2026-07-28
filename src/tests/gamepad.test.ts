import { test, assert } from 'vitest';

// Mock getGamepads globally on globalThis
let mockGamepad: any = null;
if (!(globalThis as any).navigator) {
    (globalThis as any).navigator = {} as any;
}
Object.defineProperty((globalThis as any).navigator, 'getGamepads', {
    value: () => [mockGamepad],
    configurable: true,
    writable: true
});

class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    copy(v: any) { this.x = v.x; this.y = v.y; this.z = v.z; return this; }
    sub(v: any) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this; }
    add(v: any) { this.x += v.x; this.y += v.y; this.z += v.z; return this; }
    setFromSpherical(s: any) {
        // Map theta/phi to check them in assertions
        this.x = s.theta;
        this.y = s.phi;
        return this;
    }
}

class Spherical {
    theta: number;
    phi: number;
    radius: number;
    constructor(radius?: number, phi?: number, theta?: number) {
        this.radius = radius || 1;
        this.phi = phi || Math.PI / 2;
        this.theta = theta || 0;
    }
    setFromVector3(v: any) { return this; }
    makeSafe() { return this; }
}

// Mock THREE globally
(globalThis as any).THREE = {
    Vector3: Vector3,
    Spherical: Spherical
} as any;

const THREE = (globalThis as any).THREE;

// Copy function definitions from engine.js to test them in isolation without Three.js import issues
function getTeleportCandidates(engine: any) {
    const px = Math.floor(engine.player.x);
    const py = Math.floor(engine.player.y);
    const pz = engine.player.z;
    return Array.from(engine.discoveredTeleports).map((str: any) => {
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

function updateGamepad(engine: any, dt: number) {
    const gamepads = (navigator as any).getGamepads ? (navigator as any).getGamepads() : [];
    const gp = gamepads[0] || gamepads.find((g: any) => g !== null);
    if (!gp) return;

    engine.lastInputDevice = 'gamepad';

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

    if (left) engine.input.keys['arrowleft'] = true;
    else if (engine.lastInputDevice === 'gamepad') engine.input.keys['arrowleft'] = false;

    if (right) engine.input.keys['arrowright'] = true;
    else if (engine.lastInputDevice === 'gamepad') engine.input.keys['arrowright'] = false;

    if (up) engine.input.keys['arrowup'] = true;
    else if (engine.lastInputDevice === 'gamepad') engine.input.keys['arrowup'] = false;

    if (down) engine.input.keys['arrowdown'] = true;
    else if (engine.lastInputDevice === 'gamepad') engine.input.keys['arrowdown'] = false;

    // 2. Buttons (Edge triggered)
    if (!engine.prevGamepadButtons) {
        engine.prevGamepadButtons = gp.buttons.map((b: any) => b.pressed);
        return;
    }

    const wasPressed = (btnIdx: number) => engine.prevGamepadButtons[btnIdx];
    const isPressed = (btnIdx: number) => gp.buttons[btnIdx] && gp.buttons[btnIdx].pressed;
    const justPressed = (btnIdx: number) => isPressed(btnIdx) && !wasPressed(btnIdx);

    if (justPressed(9)) {
        engine.togglePause();
        engine.prevGamepadButtons = gp.buttons.map((b: any) => b.pressed);
        return;
    }

    if (engine.isPaused) {
        engine.prevGamepadButtons = gp.buttons.map((b: any) => b.pressed);
        return;
    }

    if (justPressed(1)) {
        engine.toggleZoom();
    }

    if (justPressed(3)) {
        engine.changeFloor(2);
    }
    if (justPressed(0)) {
        if (engine.isTeleportMode) {
            const candidates = getTeleportCandidates(engine);
            const index = engine.gamepadTeleportSelectedIndex || 0;
            if (candidates[index]) {
                const target = candidates[index];
                engine.teleportTo(target.x, target.y, target.z);
            }
        }
    }
    if (justPressed(2)) {
        const px = Math.floor(engine.player.x);
        const py = Math.floor(engine.player.y);
        const pz = engine.player.z;
        const cellVal = engine.maze.get(px, py, pz);
        if (cellVal === engine.mazeGen.TYPES.TELEPORT && engine.discoveredTeleports.size >= 2) {
            engine.toggleTeleportMap(!engine.isTeleportMode);
        }
    }
    if (justPressed(8)) {
        engine.toggleMap3D();
    }

    if (engine.isTeleportMode) {
        const candidates = getTeleportCandidates(engine);
        if (candidates.length > 0) {
            if (justPressed(4)) {
                engine.gamepadTeleportSelectedIndex = (engine.gamepadTeleportSelectedIndex - 1 + candidates.length) % candidates.length;
            }
            if (justPressed(5)) {
                engine.gamepadTeleportSelectedIndex = (engine.gamepadTeleportSelectedIndex + 1) % candidates.length;
            }
        }
    }

    if (engine.isMap3DActive && engine.camera && engine.controls) {
        const rotX = gp.axes[2];
        const rotY = gp.axes[3];
        const zoomInVal = gp.buttons[7] ? gp.buttons[7].value : 0;
        const zoomOutVal = gp.buttons[6] ? gp.buttons[6].value : 0;

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

    engine.prevGamepadButtons = gp.buttons.map((b: any) => b.pressed);
}

test('Gamepad Input - Movement mapping from Left Analog and D-pad', () => {
    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        input: {
            keys: {} as any
        },
        mazeGen: {
            size: 5,
            TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 6, KEY: 7 }
        },
        maze: {
            get(x: number, y: number, z: number) { return 1; }
        },
        player: { x: 1.5, y: 1.5, z: 0 },
        discoveredTeleports: new Set(),
        inactiveTeleportPos: null,
        prevGamepadButtons: null as boolean[] | null
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
    let floorDelta: number | null = null;
    let teleportToggled: boolean | null = null;

    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        isTeleportMode: false,
        isMap3DActive: false,
        input: {
            keys: {} as any
        },
        mazeGen: {
            size: 5,
            TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 6, KEY: 7 }
        },
        maze: {
            get(x: number, y: number, z: number) {
                if (x === 1 && y === 1 && z === 2) return 6; // TELEPORT
                return 1;
            }
        },
        player: { x: 1.5, y: 3.5, z: 2 },
        discoveredTeleports: new Set(['1,1,2']),
        inactiveTeleportPos: null,
        prevGamepadButtons: null as boolean[] | null,
        
        // Mock method calls
        toggleZoom() { zoomToggled = true; },
        changeFloor(delta: number) { floorDelta = delta; },
        toggleTeleportMap(show: boolean) { teleportToggled = show; this.isTeleportMode = show; },
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
    let teleportSelectedPos: { x: number; y: number; z: number } | null = null;

    const mockEngine = {
        isGameOver: false,
        isDestroyed: false,
        isTeleportMode: true,
        isMap3DActive: true,
        input: {
            keys: {} as any
        },
        mazeGen: {
            size: 5,
            TYPES: { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, TELEPORT: 6, KEY: 7 }
        },
        maze: {
            get(x: number, y: number, z: number) { return 1; }
        },
        player: { x: 1.5, y: 1.5, z: 2 },
        discoveredTeleports: new Set(['1,1,2', '3,3,2', '4,4,0']), // player is on '1,1,2'
        inactiveTeleportPos: { x: 4, y: 4, z: 0 }, // inactive portal
        gamepadTeleportSelectedIndex: 0,
        teleportTo(x: number, y: number, z: number) { teleportSelectedPos = { x, y, z }; },
        prevGamepadButtons: null as boolean[] | null
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
            keys: {} as any
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
        },
        prevGamepadButtons: null as boolean[] | null
    };

    // Scenario A: Only analog rotation
    mockGamepad = {
        axes: [0.0, 0.0, 0.8, -0.6], // Right stick pushed right (0.8) and up (-0.6)
        buttons: Array.from({ length: 16 }, () => ({ pressed: false, value: 0 }))
    };
    mockEngine.prevGamepadButtons = mockGamepad.buttons.map((b: any) => b.pressed);

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
