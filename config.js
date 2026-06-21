/**
 * Configuration Constants for the Maze Engine
 */
export const CONFIG = {
    MAZE_DEGREE: 8,
    MOVE_SPEED_FACTOR: 2, // player is 2x faster than hunter speed
    ROT_SPEED: 3.0, // radians per second
    HUNTER_SPEED: 800, // ms per move
    getHunterCount(degree) {
        let count = 0;
        if (degree >= this.MAZE_DEGREE) count = 1;
        if (degree >= this.MAZE_DEGREE * 2) count = 2;
        if (degree >= this.MAZE_DEGREE * 3) count = 3;
        return count;
    },
    getTeleportCount(degree) {
        return Math.max(2, Math.floor(degree / 2));
    },
    getPathfinderCharges(hunterCount) {
        return hunterCount * 3 + 1;
    },
    COLORS: {
        // 2D & Global
        WALL: '#444',
        PATH_KNOWN: '#88ccff',   // also mirrored in style.css --clr-pathfinder
        PATH_VISITED: '#888',
        NEON_UP: '#00ffff',
        NEON_DOWN: '#ff00ff',
        START: '#ff0',
        EXIT: '#0f0',
        PLAYER: '#f00',
        PLAYER_OUTLINE: '#ffffff',          // outline stroke drawn around the player dot
        HUNTER: '#a0f',
        TELEPORT: '#ff8c00',
        TELEPORT_INACTIVE: '#555555',       // teleport node consumed / on cooldown
        REVEALED_PATH: '#ffffff',           // cell lit up by the Pathfinder ability
        ELEVATOR_BIDIRECTIONAL: '#ffffff',  // ↕ symbol when elevator goes both ways
        // 3D Specific (Hex codes for Three.js)
        THREE_PLAYER: 0xff0000,
        THREE_HUNTER: 0xaa00ff,
        THREE_START: 0xffff00,
        THREE_EXIT: 0x00ff00,
        THREE_VISITED: 0x888888,
        THREE_KNOWN: 0x88ccff,
        THREE_ELEVATOR_UP: 0x00ffff,
        THREE_ELEVATOR_DOWN: 0xff00ff,
        THREE_TELEPORT: 0xff8c00,
        // Vertical shaft rendered between floors the player connected via elevator.
        // Visually split: bottom half = DOWN color (magenta), top half = UP color (cyan).
        THREE_ELEVATOR_SHAFT: { bottom: 0xff00ff, top: 0x00ffff }
    }
};
