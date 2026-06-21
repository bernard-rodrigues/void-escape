/**
 * Configuration Constants for the Maze Engine
 */
export const CONFIG = {
    MAZE_DEGREE: 8,
    MOVE_SPEED: 0.1,
    ROT_SPEED: 0.05,
    HUNTER_SPEED: 800, // ms per move
    COLORS: {
        // 2D & Global
        WALL: '#444',
        PATH_KNOWN: '#5588aa',
        PATH_VISITED: '#888',
        NEON_UP: '#00ffff',
        NEON_DOWN: '#ff00ff',
        START: '#ff0',
        EXIT: '#0f0',
        PLAYER: '#f00',
        HUNTER: '#a0f',
        // 3D Specific (Hex codes for Three.js)
        THREE_PLAYER: 0xff0000,
        THREE_HUNTER: 0xaa00ff,
        THREE_START: 0xffff00,
        THREE_EXIT: 0x00ff00,
        THREE_VISITED: 0x888888,
        THREE_KNOWN: 0x88ccff,
        THREE_ELEVATOR_UP: 0x00ffff,
        THREE_ELEVATOR_DOWN: 0xff00ff,
        // Used for the vertical shaft rendered between two floors the player connected via elevator.
        // Visually split: bottom half = DOWN color (magenta), top half = UP color (cyan).
        THREE_ELEVATOR_SHAFT: { bottom: 0xff00ff, top: 0x00ffff }
    }
};
