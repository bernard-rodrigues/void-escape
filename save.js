/**
 * SaveManager - Handles game state persistence via localStorage.
 *
 * The maze matrix (Int8Array) is encoded as a base64 string for compact storage.
 * Sets are serialised as plain arrays and restored on load.
 *
 * Save key: 'void-escape-save'
 */

const SAVE_KEY = 'void-escape-save';

/**
 * Encode an Int8Array to a base64 string for JSON-safe storage.
 * @param {Int8Array} arr
 * @returns {string}
 */
function encodeMatrix(arr) {
    // Convert signed bytes to unsigned so btoa handles them
    const uint8 = new Uint8Array(arr.buffer);
    let binary = '';
    for (let i = 0; i < uint8.length; i++) {
        binary += String.fromCharCode(uint8[i]);
    }
    return btoa(binary);
}

/**
 * Decode a base64 string back to an Int8Array.
 * @param {string} b64
 * @returns {Int8Array}
 */
function decodeMatrix(b64) {
    const binary = atob(b64);
    const uint8 = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        uint8[i] = binary.charCodeAt(i);
    }
    return new Int8Array(uint8.buffer);
}

/**
 * Serialise a Hunter instance into a plain object.
 * @param {import('./hunter.js').Hunter} h
 * @returns {object}
 */
function serialiseHunter(h) {
    return {
        x: h.x,
        y: h.y,
        z: h.z,
        id: h.id,
        state: h.state,
        lastPos: h.lastPos ? { ...h.lastPos } : null,
        history: h.history.map(p => ({ ...p })),
        visitedNodes: Array.from(h.visitedNodes),
        pathToTarget: h.pathToTarget.map(p => ({ ...p })),
    };
}

/**
 * Build a snapshot of the entire engine state and persist it to localStorage.
 * @param {import('./engine.js').Engine} engine
 */
export function saveGame(engine) {
    try {
        const snapshot = {
            version: 1,
            timestamp: Date.now(),
            // Maze configuration — needed to reconstruct Maze3D with the same seed shape
            degree: engine.degree,
            branchingFactor: engine.branchingFactor,
            isSafeMode: engine.isSafeMode,
            seed: engine.seed,
            mazeSize: engine.mazeGen.size,
            mazeStartPos: { ...engine.mazeGen.startPos },
            // The live matrix (cells already visited, teleports discovered, etc.)
            matrix: encodeMatrix(engine.mazeGen.matrix),
            // Player
            player: { ...engine.player },
            // Hunters
            hunters: engine.hunters.map(serialiseHunter),
            // Teleport state
            discoveredTeleports: Array.from(engine.discoveredTeleports),
            inactiveTeleportPos: engine.inactiveTeleportPos
                ? { ...engine.inactiveTeleportPos }
                : null,
            teleportCooldownTicks: engine.teleportCooldownTicks,
            // Revealed path (fades over time but save its current state)
            revealedPathSet: Array.from(engine.revealedPathSet),
            // Key collection state
            keysCollected: engine.keysCollected,
            totalKeys: engine.totalKeys,
            // Pathfinder state
            totalPathfinders: engine.totalPathfinders,
            pathfindersRemaining: engine.pathfindersRemaining,
            pathfinderRewardsGranted: engine.pathfinderRewardsGranted !== undefined ? engine.pathfinderRewardsGranted : 0
        };

        localStorage.setItem(SAVE_KEY, JSON.stringify(snapshot));
    } catch (e) {
        console.warn('[SaveManager] Could not save game state:', e);
    }
}

/**
 * Load and return the persisted snapshot, or null if none exists.
 * @returns {object|null}
 */
export function loadSave() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return null;
        const snapshot = JSON.parse(raw);
        if (!snapshot || snapshot.version !== 1) return null;
        return snapshot;
    } catch (e) {
        console.warn('[SaveManager] Could not load save data:', e);
        return null;
    }
}

/**
 * Remove the persisted save (called on victory so Continue is no longer offered).
 */
export function clearSave() {
    localStorage.removeItem(SAVE_KEY);
}

/**
 * Returns true if a valid save exists.
 * @returns {boolean}
 */
export function hasSave() {
    return loadSave() !== null;
}

/**
 * Restore a serialised Hunter's mutable state onto an existing Hunter instance.
 * The Hunter must already exist (created by Engine.initHunters); this just overwrites
 * position and AI state without touching the maze/mazeGen references.
 * @param {import('./hunter.js').Hunter} hunter  Live instance to mutate
 * @param {object} data                          Serialised hunter from snapshot
 */
export function restoreHunter(hunter, data) {
    hunter.x = data.x;
    hunter.y = data.y;
    hunter.z = data.z;
    hunter.visualX = data.x;
    hunter.visualY = data.y;
    hunter.visualZ = data.z;
    hunter.state = data.state;
    hunter.lastPos = data.lastPos ? { ...data.lastPos } : null;
    hunter.history = data.history.map(p => ({ ...p }));
    hunter.visitedNodes = new Set(data.visitedNodes);
    hunter.pathToTarget = data.pathToTarget.map(p => ({ ...p }));
}

/**
 * Decode the stored matrix bytes and apply them on top of the live Maze3D matrix.
 * Called after Maze3D.generate() so the convenience .get/.set methods are already set.
 * @param {import('./maze3d.js').Maze3D} mazeGen
 * @param {string} encodedMatrix base64 string from snapshot
 */
export function restoreMatrix(mazeGen, encodedMatrix) {
    const decoded = decodeMatrix(encodedMatrix);
    for (let i = 0; i < decoded.length; i++) {
        mazeGen.matrix[i] = decoded[i];
    }
}

export { SAVE_KEY };
