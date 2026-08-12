/**
 * InputHandler - Handles keyboard controls, gamepad controls, and touch/gesture swipes for mobile devices.
 */
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';
import type { Engine } from './engine.js';

export class InputHandler {
    engine: Engine;
    keys: Record<string, boolean>;
    touchStart: { x: number; y: number } | null;
    touchMoveVector: { x: number; y: number } | null;
    preventScrollKeys: string[];
    
    handleKeyDown: ((e: KeyboardEvent) => void) | null;
    handleKeyUp: ((e: KeyboardEvent) => void) | null;
    handleTouchStart: ((e: TouchEvent) => void) | null;
    handleTouchMove: ((e: TouchEvent) => void) | null;
    handleTouchEnd: (() => void) | null;
    handleKeyboardDetection: (() => void) | null;

    prevGamepadButtons: boolean[] | null;
    prevGamepadStick: { left: boolean; right: boolean; up: boolean; down: boolean } | null;

    constructor(engine: Engine) {
        this.engine = engine;
        this.keys = {};
        this.touchStart = null;
        this.touchMoveVector = null;
        this.preventScrollKeys = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'pageup', 'pagedown'];
        this.prevGamepadButtons = null;
        this.prevGamepadStick = null;
        
        this.handleKeyDown = null;
        this.handleKeyUp = null;
        this.handleTouchStart = null;
        this.handleTouchMove = null;
        this.handleTouchEnd = null;
        this.handleKeyboardDetection = null;

        this.init();
    }

    /**
     * Set up window keyboard listeners.
     */
    init() {
        this.handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();
            this.keys[key] = true;
            if (this.preventScrollKeys.includes(key)) {
                e.preventDefault();
            }
            this.handleKeyDownExtra(e);
        };

        this.handleKeyUp = (e: KeyboardEvent) => {
            this.keys[e.key.toLowerCase()] = false;
        };

        this.handleKeyboardDetection = () => {
            if (this.engine.lastInputDevice !== 'keyboard') {
                this.engine.lastInputDevice = 'keyboard';
                this.engine.ui.updateControlsHint('keyboard', this.engine.mazeGen.size > 11);
            }
            this.engine.isMouseOrTouchDetected = false;
        };

        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('keydown', this.handleKeyboardDetection);
    }

    /**
     * Set up touch/swipe support on mobile devices.
     * Takes checking functions as arguments to prevent input handling when not applicable.
     */
    setupTouch(isMapActiveFn: () => boolean, isGameOverFn: () => boolean) {
        this.handleTouchStart = (e: TouchEvent) => {
            const target = e.target as HTMLElement;
            if (isMapActiveFn() || isGameOverFn() || (target && target.closest && target.closest('button'))) {
                return;
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            this.touchStart = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        };

        this.handleTouchMove = (e: TouchEvent) => {
            if (!this.touchStart || isMapActiveFn() || isGameOverFn()) {
                return;
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            const dx = e.touches[0].clientX - this.touchStart.x;
            const dy = e.touches[0].clientY - this.touchStart.y;
            const mag = Math.sqrt(dx * dx + dy * dy);
            
            // Register movement if it exceeds threshold
            if (mag > 10) {
                this.touchMoveVector = { x: dx / mag, y: dy / mag };
            }
        };

        this.handleTouchEnd = () => {
            this.touchStart = null;
            this.touchMoveVector = null;
        };

        window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        window.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Extra keyboard actions (menus, portals, map interactions, shortcuts).
     */
    handleKeyDownExtra(e: KeyboardEvent) {
        const key = e.key.toLowerCase();
        const engine = this.engine;

        if (engine.pathfinderConfirmTarget) {
            if (key === 'enter' || key === ' ' || key === 'y') {
                const target = engine.pathfinderConfirmTarget;
                engine.pathfinderConfirmTarget = null;
                const modal = document.getElementById('pathfinder-confirm-modal');
                if (modal) modal.classList.add('hidden');
                engine.triggerPathReveal(target.x, target.y, target.z, true);
                e.preventDefault();
            }
            if (key === 'escape' || key === 'backspace') {
                engine.pathfinderConfirmTarget = null;
                const modal = document.getElementById('pathfinder-confirm-modal');
                if (modal) modal.classList.add('hidden');
                e.preventDefault();
            }
            return;
        }
        if (key === 'escape') {
            if (engine.isMap3DActive) {
                if (engine.isTeleportMode) {
                    engine.toggleTeleportMap(false);
                } else {
                    engine.toggleMap3D();
                }
                e.preventDefault();
                return;
            }
            engine.togglePause();
            return;
        }
        if (engine.isPaused) return;

        // Se o jogador estiver sobre um teleporte ativo, Q, E, M, Space e Enter abrem a tela de teleporte
        const px = Math.floor(engine.player.x);
        const py = Math.floor(engine.player.y);
        const pz = engine.player.z;
        const val = engine.maze ? engine.maze.get(px, py, pz) : 0;
        const isJelly = val === engine.mazeGen.TYPES.JELLY_PORTAL;
        const isTeleport = val === engine.mazeGen.TYPES.TELEPORT || isJelly;
        const isInactive = engine.inactiveTeleportPos && 
                           engine.inactiveTeleportPos.x === px && 
                           engine.inactiveTeleportPos.y === py && 
                           engine.inactiveTeleportPos.z === pz;
        const isOnTeleport = isTeleport && engine.discoveredTeleports.has(`${px},${py},${pz}`);

        if (!engine.isMap3DActive && isOnTeleport && !isInactive) {
            if (key === 'q' || key === 'e' || key === 'm' || key === ' ' || key === 'enter') {
                e.preventDefault();
                if (engine.discoveredTeleports.size >= 2) {
                    engine.toggleTeleportMap(true);
                } else {
                    engine.ui.showInfoBanner(getTranslation('msgNoOtherActiveTeleport'));
                }
                return;
            }
        }

        if (key === 'm') {
            if (engine.isTeleportMode) {
                engine.toggleTeleportMap(false);
            } else {
                engine.toggleMap3D();
            }
        }
        if (key === 'z') {
            engine.toggleZoom();
        }

        if (engine.isMap3DActive && !engine.isIntroPlaying) {
            // Teleport Mode keys
            if (engine.isTeleportMode) {
                if (engine.teleportConfirmModalActive) {
                    if (key === 'a' || key === 'arrowleft' || key === 'd' || key === 'arrowright') {
                        engine.teleportModalSelection = engine.teleportModalSelection === 'go' ? 'cancel' : 'go';
                        e.preventDefault();
                    }
                    if (key === 'enter' || key === ' ' || key === 'y') {
                        if (engine.teleportModalSelection === 'go' && engine.selectedTeleportIndex !== null) {
                            const targetT = engine.allTeleports[engine.selectedTeleportIndex];
                            engine.teleportTo(targetT.x, targetT.y, targetT.z);
                            engine.toggleTeleportMap(false);
                        } else {
                            engine.teleportConfirmModalActive = false;
                        }
                        e.preventDefault();
                    }
                    if (key === 'escape' || key === 'backspace') {
                        engine.teleportConfirmModalActive = false;
                        e.preventDefault();
                    }
                    return;
                }

                const selectable = engine.getSelectableTeleportIndices();
                if (selectable.length > 0) {
                    let currentIdx = selectable.indexOf(engine.selectedTeleportIndex as number);
                    if (key === 'a' || key === 'arrowleft') {
                        currentIdx = (currentIdx - 1 + selectable.length) % selectable.length;
                        engine.selectedTeleportIndex = selectable[currentIdx];
                        const targetT = engine.allTeleports[engine.selectedTeleportIndex];
                        engine.activeMapFloor = targetT.z;
                        engine.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        e.preventDefault();
                    }
                    if (key === 'd' || key === 'arrowright') {
                        currentIdx = (currentIdx + 1) % selectable.length;
                        engine.selectedTeleportIndex = selectable[currentIdx];
                        const targetT = engine.allTeleports[engine.selectedTeleportIndex];
                        engine.activeMapFloor = targetT.z;
                        engine.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        e.preventDefault();
                    }
                    if ((key === 'enter' || key === ' ' || key === 'y') && engine.selectedTeleportIndex !== null) {
                        const targetT = engine.allTeleports[engine.selectedTeleportIndex];
                        const px = Math.floor(engine.player.x);
                        const py = Math.floor(engine.player.y);
                        const pz = engine.player.z;
                        const isCurrent = targetT && targetT.x === px && targetT.y === py && targetT.z === pz;
                        if (targetT && !isCurrent) {
                            engine.teleportTo(targetT.x, targetT.y, targetT.z);
                            engine.toggleTeleportMap(false);
                        }
                        e.preventDefault();
                    }
                }
                if (key === 'escape' || key === 'backspace') {
                    engine.toggleTeleportMap(false);
                    e.preventDefault();
                }
                return;
            }

            // Normal Map Mode keys
            if (key === 'q' || key === 'pagedown') {
                if (engine.activeMapFloor - 2 >= 1) {
                    engine.activeMapFloor -= 2;
                }
                e.preventDefault();
            }
            if (key === 'e' || key === 'pageup') {
                if (engine.activeMapFloor + 2 <= engine.mazeGen.size - 2) {
                    engine.activeMapFloor += 2;
                }
                e.preventDefault();
            }

            if (key === 'a' || key === 'arrowleft') {
                engine.navigateCursor('left');
                e.preventDefault();
            }
            if (key === 'd' || key === 'arrowright') {
                engine.navigateCursor('right');
                e.preventDefault();
            }
            if (key === 'w' || key === 'arrowup') {
                engine.navigateCursor('up');
                e.preventDefault();
            }
            if (key === 's' || key === 'arrowdown') {
                engine.navigateCursor('down');
                e.preventDefault();
            }

            if (key === 'enter' || key === ' ' || key === 'y') {
                const x = engine.mapCursor.x;
                const y = engine.mapCursor.y;
                const z = engine.mapCursor.z;
                const elements = engine.getInteractiveElements(engine.activeMapFloor);
                const isInteractive = elements.some(el => el.x === x && el.y === y && el.z === z);
                if (isInteractive) {
                    engine.triggerPathReveal(x, y, z);
                }
                e.preventDefault();
            }
        }
    }

    /**
     * Gamepad analog axes and edge-triggered button checks.
     */
    updateGamepad(dt: number) {
        const engine = this.engine;
        const gp = navigator.getGamepads ? navigator.getGamepads()[0] || navigator.getGamepads().find(g => g !== null) : null;
        if (!gp) return;

        const deadzone = 0.25;
        const isGamepadActive = 
            Math.abs(gp.axes[0]) > deadzone || 
            Math.abs(gp.axes[1]) > deadzone || 
            (gp.axes[2] !== undefined && Math.abs(gp.axes[2]) > deadzone) ||
            (gp.axes[3] !== undefined && Math.abs(gp.axes[3]) > deadzone) ||
            gp.buttons.some(b => b.pressed);

        if (isGamepadActive) {
            engine.isMouseOrTouchDetected = false;
            if (engine.lastInputDevice !== 'gamepad') {
                engine.lastInputDevice = 'gamepad';
                engine.ui.updateControlsHint('gamepad', engine.mazeGen.size > 11);
            }
        }

        // 1. Movement axes (Left Analog / D-pad)
        const axisX = gp.axes[0];
        const axisY = gp.axes[1];
        let left = axisX < -deadzone;
        let right = axisX > deadzone;
        let up = axisY < -deadzone;
        let down = axisY > deadzone;

        if (gp.buttons[12] && gp.buttons[12].pressed) up = true;
        if (gp.buttons[13] && gp.buttons[13].pressed) down = true;
        if (gp.buttons[14] && gp.buttons[14].pressed) left = true;
        if (gp.buttons[15] && gp.buttons[15].pressed) right = true;

        if (left) this.keys['arrowleft'] = true;
        else if (engine.lastInputDevice === 'gamepad') this.keys['arrowleft'] = false;

        if (right) this.keys['arrowright'] = true;
        else if (engine.lastInputDevice === 'gamepad') this.keys['arrowright'] = false;

        if (up) this.keys['arrowup'] = true;
        else if (engine.lastInputDevice === 'gamepad') this.keys['arrowup'] = false;

        if (down) this.keys['arrowdown'] = true;
        else if (engine.lastInputDevice === 'gamepad') this.keys['arrowdown'] = false;

        // 2. Buttons (Edge triggered)
        if (!this.prevGamepadButtons) {
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        const wasPressed = (btnIdx: number) => this.prevGamepadButtons![btnIdx];
        const isPressed = (btnIdx: number) => gp.buttons[btnIdx] && gp.buttons[btnIdx].pressed;
        const justPressed = (btnIdx: number) => isPressed(btnIdx) && !wasPressed(btnIdx);

        if (engine.pathfinderConfirmTarget) {
            if (justPressed(0) || justPressed(2)) { // A or X -> Confirm
                const target = engine.pathfinderConfirmTarget;
                engine.pathfinderConfirmTarget = null;
                const modal = document.getElementById('pathfinder-confirm-modal');
                if (modal) modal.classList.add('hidden');
                engine.triggerPathReveal(target.x, target.y, target.z, true);
            }
            if (justPressed(1) || justPressed(8)) { // B or Back -> Cancel
                engine.pathfinderConfirmTarget = null;
                const modal = document.getElementById('pathfinder-confirm-modal');
                if (modal) modal.classList.add('hidden');
            }
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        if (engine.isStoryActive) {
            if (justPressed(9)) {
                engine.skipStory();
            } else if (!engine.isPreloadingActive) {
                for (let i = 0; i < gp.buttons.length; i++) {
                    if (i !== 9 && justPressed(i)) {
                        engine.triggerAdvanceStory();
                        break;
                    }
                }
            }
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        // Start / Menu Button (Button 9): Toggle Pause
        if (justPressed(9)) {
            engine.togglePause();
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        // If paused, ignore all other inputs
        if (engine.isPaused) {
            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        // Map Mode Gamepad Controls
        if (engine.isMap3DActive && !engine.isIntroPlaying) {
            // Gamepad LT/RT Zoom (focusing on mapCursor)
            const zoomInPressed = isPressed(7); // RT
            const zoomOutPressed = isPressed(6); // LT
            if (zoomInPressed || zoomOutPressed) {
                const size = engine.mazeGen.size;
                let baseTileWidth = (window.innerWidth * 0.7) / size;
                baseTileWidth = Math.max(20, Math.min(48, baseTileWidth));
                const tileWidth = baseTileWidth * engine.mapZoom;
                const tileWidthHalf = tileWidth / 2;
                const tileHeightHalf = tileWidth / 4;
                const floorOffset = tileWidthHalf * 5;

                const centerX = window.innerWidth / 2 + engine.mapPanOffsetX;
                const centerY = window.innerHeight / 2 + engine.mapPanOffsetY;

                const rx = engine.mapCursor.x;
                const ry = engine.mapCursor.y;
                const rz = engine.mapCursor.z;
                const visualZ = engine.visualActiveFloor;

                const focusX = (rx - ry) * tileWidthHalf + centerX;
                const focusY = (rx + ry) * tileHeightHalf - (rz - visualZ) * floorOffset + centerY;

                const oldZoom = engine.mapZoom;
                const factor = 1.025;
                let newZoom = zoomInPressed ? oldZoom * factor : oldZoom / factor;
                newZoom = Math.max(0.5, Math.min(4.0, newZoom));

                if (newZoom !== oldZoom) {
                    const ratio = newZoom / oldZoom;
                    engine.mapPanOffsetX = focusX - (focusX - (window.innerWidth / 2 + engine.mapPanOffsetX)) * ratio - window.innerWidth / 2;
                    engine.mapPanOffsetY = focusY - (focusY - (window.innerHeight / 2 + engine.mapPanOffsetY)) * ratio - window.innerHeight / 2;
                    engine.mapZoom = newZoom;
                }
            }

            const justLeft = left && (!this.prevGamepadStick || !this.prevGamepadStick.left);
            const justRight = right && (!this.prevGamepadStick || !this.prevGamepadStick.right);
            const justUp = up && (!this.prevGamepadStick || !this.prevGamepadStick.up);
            const justDown = down && (!this.prevGamepadStick || !this.prevGamepadStick.down);

            this.prevGamepadStick = { left, right, up, down };

            if (engine.isTeleportMode) {
                if (engine.teleportConfirmModalActive) {
                    if (justLeft || justPressed(14) || justRight || justPressed(15)) {
                        engine.teleportModalSelection = engine.teleportModalSelection === 'go' ? 'cancel' : 'go';
                    }
                    if (justPressed(0) || justPressed(3) || justPressed(2)) { // A, Y, or X
                        if (engine.teleportModalSelection === 'go') {
                            const targetT = engine.allTeleports[engine.selectedTeleportIndex!];
                            engine.teleportTo(targetT.x, targetT.y, targetT.z);
                            engine.toggleTeleportMap(false);
                        } else {
                            engine.teleportConfirmModalActive = false;
                        }
                    }
                    if (justPressed(1)) { // B button
                        engine.teleportConfirmModalActive = false;
                    }
                } else {
                    const selectable = engine.getSelectableTeleportIndices();
                    if (selectable.length > 0) {
                        let currentIdx = selectable.indexOf(engine.selectedTeleportIndex!);
                        if (justLeft || justPressed(14)) {
                            currentIdx = (currentIdx - 1 + selectable.length) % selectable.length;
                            engine.selectedTeleportIndex = selectable[currentIdx];
                            const targetT = engine.allTeleports[engine.selectedTeleportIndex!];
                            engine.activeMapFloor = targetT.z;
                            engine.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        }
                        if (justRight || justPressed(15)) {
                            currentIdx = (currentIdx + 1) % selectable.length;
                            engine.selectedTeleportIndex = selectable[currentIdx];
                            const targetT = engine.allTeleports[engine.selectedTeleportIndex!];
                            engine.activeMapFloor = targetT.z;
                            engine.mapCursor = { x: targetT.x, y: targetT.y, z: targetT.z };
                        }
                        if (justPressed(0) || justPressed(3) || justPressed(2)) { // A, Y, or X
                            const targetT = engine.allTeleports[engine.selectedTeleportIndex!];
                            const px = Math.floor(engine.player.x);
                            const py = Math.floor(engine.player.y);
                            const pz = engine.player.z;
                            const isCurrent = targetT && targetT.x === px && targetT.y === py && targetT.z === pz;
                            if (targetT && !isCurrent) {
                                engine.teleportTo(targetT.x, targetT.y, targetT.z);
                                engine.toggleTeleportMap(false);
                            }
                        }
                    }
                    if (justPressed(1) || justPressed(8)) {
                        engine.toggleTeleportMap(false);
                    }
                }

                this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
                return;
            }

            // Normal Map Mode Controls
            if (justLeft || justPressed(14)) engine.navigateCursor('left');
            if (justRight || justPressed(15)) engine.navigateCursor('right');
            if (justUp || justPressed(12)) engine.navigateCursor('up');
            if (justDown || justPressed(13)) engine.navigateCursor('down');

            // Floor transition with Bumpers or A (Button 0)
            if (justPressed(0) || justPressed(4)) { // A or Left Bumper -> Floor Down
                if (engine.activeMapFloor - 2 >= 1) {
                    engine.activeMapFloor -= 2;
                }
            }
            if (justPressed(5)) { // Right Bumper -> Floor Up
                if (engine.activeMapFloor + 2 <= engine.mazeGen.size - 2) {
                    engine.activeMapFloor += 2;
                }
            }

            // Confirm selection / trigger pathfinder with Y (Button 3) or X (Button 2)
            if (justPressed(3) || justPressed(2)) {
                const x = engine.mapCursor.x;
                const y = engine.mapCursor.y;
                const z = engine.mapCursor.z;
                const elements = engine.getInteractiveElements(engine.activeMapFloor);
                const isInteractive = elements.some(el => el.x === x && el.y === y && el.z === z);
                if (isInteractive) {
                    engine.triggerPathReveal(x, y, z);
                }
            }

            // Exit Map with B (Button 1) or View (Button 8)
            if (justPressed(1) || justPressed(8)) {
                engine.toggleMap3D();
            }

            this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
            return;
        }

        // Se o jogador estiver sobre um teleporte ativo, os botões equivalentes do gamepad (A, X, Y, Back) abrem a tela de teleporte
        if (!engine.isMap3DActive && !engine.isTeleportMode) {
            const px = Math.floor(engine.player.x);
            const py = Math.floor(engine.player.y);
            const pz = engine.player.z;
            const val = engine.maze ? engine.maze.get(px, py, pz) : 0;
            const isJelly = val === engine.mazeGen.TYPES.JELLY_PORTAL;
            const isTeleport = val === engine.mazeGen.TYPES.TELEPORT || isJelly;
            const isInactive = engine.inactiveTeleportPos && 
                               engine.inactiveTeleportPos.x === px && 
                               engine.inactiveTeleportPos.y === py && 
                               engine.inactiveTeleportPos.z === pz;
            const isOnTeleport = isTeleport && engine.discoveredTeleports.has(`${px},${py},${pz}`);

            if (isOnTeleport && !isInactive) {
                if (justPressed(0) || justPressed(2) || justPressed(3) || justPressed(8)) {
                    if (engine.discoveredTeleports.size >= 2) {
                        engine.toggleTeleportMap(true);
                        engine.gamepadTeleportSelectedIndex = 0;
                    } else {
                        engine.ui.showInfoBanner(getTranslation('msgNoOtherActiveTeleport'));
                    }
                    this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
                    return;
                }
            }
        }

        // A Button (Button 0): Descend floor / Confirm teleport
        if (justPressed(0)) {
            if (engine.isTeleportMode) {
                const candidates = engine.getTeleportCandidates();
                const selected = candidates[engine.gamepadTeleportSelectedIndex!];
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
                const isJelly = val === engine.mazeGen.TYPES.JELLY_PORTAL;
                const isTeleport = val === engine.mazeGen.TYPES.TELEPORT || isJelly;
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
                        engine.ui.showInfoBanner(getTranslation('msgNoOtherActiveTeleport'));
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
                const candidates = engine.getTeleportCandidates();
                if (candidates.length > 0) {
                    if (prevTeleport) {
                        engine.gamepadTeleportSelectedIndex = (engine.gamepadTeleportSelectedIndex! - 1 + candidates.length) % candidates.length;
                    } else {
                        engine.gamepadTeleportSelectedIndex = (engine.gamepadTeleportSelectedIndex! + 1) % candidates.length;
                    }
                }
            }
        }

        // Right Bumper (Button 5): Try activate Jelly Portal when not in teleport or map mode
        if (justPressed(5) && !engine.isTeleportMode && !engine.isMap3DActive) {
            engine.tryActivateJellyPortal();
        }

        // 4. Right Analog Stick (axes 2 & 3): Rotate 3D Camera / Triggers (LT/RT): Zoom 3D Camera
        if (engine.isMap3DActive && engine.controls) {
            const rotX = gp.axes[2];
            const rotY = gp.axes[3];
            const zoomInVal = gp.buttons[7] ? gp.buttons[7].value : 0;  // RT
            const zoomOutVal = gp.buttons[6] ? gp.buttons[6].value : 0; // LT
            
            const rotDeadzone = 0.15;
            const zoomDeadzone = 0.15;
            const rotSpeed = (CONFIG.ROT_SPEED !== undefined ? CONFIG.ROT_SPEED : 2.0) * dt;
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

        this.prevGamepadButtons = gp.buttons.map(b => b.pressed);
    }

    /**
     * Clear all registered event listeners.
     */
    destroy() {
        if (this.handleKeyDown) {
            window.removeEventListener('keydown', this.handleKeyDown);
        }
        if (this.handleKeyUp) {
            window.removeEventListener('keyup', this.handleKeyUp);
        }
        if (this.handleKeyboardDetection) {
            window.removeEventListener('keydown', this.handleKeyboardDetection);
        }
        if (this.handleTouchStart) {
            window.removeEventListener('touchstart', this.handleTouchStart);
        }
        if (this.handleTouchMove) {
            window.removeEventListener('touchmove', this.handleTouchMove);
        }
        if (this.handleTouchEnd) {
            window.removeEventListener('touchend', this.handleTouchEnd);
        }
    }
}
