/**
 * Configuration Constants for the Maze Engine
 */
export const CONFIG = {
    SEED: null, // Define a number or string (e.g. "void-escape-1") to lock the map generator, or null for random
    
    MAZE_DEGREE: 8,
    BRAID_FACTOR: 0.10, // Fraction of eligible walls to turn into paths (0.0 to 1.0)
    SHADOW_SIZE_FACTOR: 0.075, // Proportional width/height of wall-projected shadows in 2D minimap
    TELEPORT_MAP_OPACITY: 0.25, // Opacity of non-teleport meshes when choosing teleport destination
    MOVE_SPEED_FACTOR: 2, // player is 2x faster than hunter speed
    ROT_SPEED: 3.0, // radians per second
    HUNTER_SPEED: 800, // ms per move
    getHunterCount(degree) {
        if (degree >= 16) return 3;
        if (degree >= 8) return 2;
        return 1;
    },
    getTeleportCount(degree) {
        if (degree <= 8) {
            return Math.max(2, Math.floor(degree / 2));
        }
        const diff = degree - 8;
        return Math.floor(0.125 * diff * diff + 0.5 * diff + 4);
    },
    COLORS: {
        // 2D & Global
        WALL: '#444',
        PATH_KNOWN: '#88ccff',   // also mirrored in style.css --clr-pathfinder
        PATH_VISITED: '#888',
        NEON_UP: '#00ffff',
        NEON_DOWN: '#ff00ff',
        NEON_UP_UNUSED: '#006666',   // desaturated dark cyan for unvisited up elevator
        NEON_DOWN_UNUSED: '#660066', // desaturated dark magenta for unvisited down elevator
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
        THREE_KEY: 0xffd700,
        // Vertical shaft rendered between floors the player connected via elevator.
        // Visually split: bottom half = DOWN color (magenta), top half = UP color (cyan).
        THREE_ELEVATOR_SHAFT: { bottom: 0xff00ff, top: 0x00ffff }
    }
};
