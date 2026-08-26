/**
 * Configuration Constants for the Maze Engine
 */
export interface Config {
  SEED: string | number | null;
  MAZE_DEGREE: number;
  MIN_MAZE_DEGREE: number;
  MAX_MAZE_DEGREE: number;
  BRANCHING_FACTOR: number;
  BRAID_FACTOR: number;
  SHADOW_SIZE_FACTOR: number;
  TELEPORT_MAP_OPACITY: number;
  PLAYER_COLLISION_RADIUS: number;
  PLAYER_COLLISION_OFFSET_X: number;
  PLAYER_COLLISION_OFFSET_Y: number;
  PLAYER_START_X: number;
  PLAYER_START_Y: number;
  PLAYER_SHADOW_OFFSET_X: number;
  PLAYER_SHADOW_OFFSET_Y: number;
  PLAYER_SHADOW_WIDTH_FACTOR: number;
  PLAYER_SHADOW_HEIGHT_FACTOR: number;
  SHOW_COLLISION_DEBUG: boolean;
  MOVE_SPEED_FACTOR: number;
  HUNTER_SPEED: number;
  VORTEX_SPEED_NORMAL: number;
  VORTEX_SPEED_FAST: number;
  JELLY_PORTAL_COUNT: number;
  JELLY_STATUE_CHARGE_TIME: number;
  JELLY_STATUE_MAX_SHOTS: number;
  JELLY_PROJECTILE_SPEED: number;
  JELLY_CHALLENGE_MIN_FREE_CELLS: number;
  MAZE_VERTICAL_BIAS: number;
  getHunterCount: (degree: number) => number;
  getTeleportCount: (degree: number) => number;
  getPathfinderCount: (degree: number) => number;
  getKeyCount: (degree: number) => number;
  COLORS: Record<string, any>;
  PROXIMITY_VOLUME: number;
  DRONE_VOLUME: number;
  DRONE_MIN_MOD_FREQ: number;
  DRONE_MAX_MOD_FREQ: number;
}

export const CONFIG: Config = {
    SEED: null, // Define a number or string (e.g. "void-escape-1") to lock the map generator, or null for random
    
    MAZE_DEGREE: 4,
    MIN_MAZE_DEGREE: 4,
    MAX_MAZE_DEGREE: 16,
    BRANCHING_FACTOR: 0.10, // Controls Growing Tree branching behavior (0.0 to 1.0). Higher values produce frequent forks and short branches (Prim-like behavior), while lower values produce long, linear corridors (DFS-like behavior).
    BRAID_FACTOR: 0.10, // Fraction of eligible walls to turn into paths (0.0 to 1.0)
    SHADOW_SIZE_FACTOR: 0.075, // Proportional width/height of wall-projected shadows in 2D minimap
    TELEPORT_MAP_OPACITY: 0.25, // Opacity of non-teleport meshes when choosing teleport destination
    PLAYER_COLLISION_RADIUS: 0.275, // Physical collision radius for the player AABB box
    PLAYER_COLLISION_OFFSET_X: 0.0, // Offset X of the player collision box center in grid cells
    PLAYER_COLLISION_OFFSET_Y: -0.125, // Offset Y of the player collision box center in grid cells
    PLAYER_START_X: 0.5, // Default starting X coordinate of the player in the entry cell
    PLAYER_START_Y: 1.7, // Default starting Y coordinate of the player in the entry cell
    PLAYER_SHADOW_OFFSET_X: -0.28, // Offset X of the player shadow center relative to cell size
    PLAYER_SHADOW_OFFSET_Y: -0.15, // Offset Y of the player shadow center relative to cell size
    PLAYER_SHADOW_WIDTH_FACTOR: 0.45, // Width factor (horizontal radius multiplier) of the player shadow relative to cell size
    PLAYER_SHADOW_HEIGHT_FACTOR: 0.25, // Height factor (vertical radius multiplier) of the player shadow relative to cell size
    SHOW_COLLISION_DEBUG: false, // Set to true to draw the player's red collision boundary on the 2D map
    MOVE_SPEED_FACTOR: 2, // player is 2x faster than hunter speed
    HUNTER_SPEED: 500, // ms per move
    VORTEX_SPEED_NORMAL: 1.5, // Default slow rotation speed for the vortex (rad/s)
    VORTEX_SPEED_FAST: 6.0,   // Fast rotation speed when player is on the vortex tile (rad/s)
    JELLY_PORTAL_COUNT: 0,
    JELLY_STATUE_CHARGE_TIME: 1.5,
    JELLY_STATUE_MAX_SHOTS: 3,
    JELLY_PROJECTILE_SPEED: 5.0,
    JELLY_CHALLENGE_MIN_FREE_CELLS: 3,
    MAZE_VERTICAL_BIAS: 0.15, // Probability factor (0.0 to 1.0) of generating a vertical path (elevator) if horizontal neighbors are still available. Lower values force wider horizontal floor exploration before going up/down.
    PROXIMITY_VOLUME: 0.15,
    DRONE_VOLUME: 0.10,
    DRONE_MIN_MOD_FREQ: 30,
    DRONE_MAX_MOD_FREQ: 120,
    getHunterCount(degree: number) {
        if (degree >= 16) return 4;
        if (degree >= 12) return 3;
        if (degree >= 8) return 2;
        return 1;
    },
    getKeyCount(degree: number) {
        return this.getHunterCount(degree) * 2;
    },
    getTeleportCount(degree: number) {
        if (degree < 8) {
            return Math.ceil(degree / 2);
        }
        const diff = degree - 8;
        return Math.floor(0.125 * diff * diff + 1.5 * diff + 4);
    },
    getPathfinderCount(degree: number) {
        if (degree >= 11) {
            return Math.floor(9 + (degree - 11) * 1.4);
        }
        return this.getTeleportCount(degree);
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
        JELLY_PORTAL: '#a020f0',
        JELLY_MUTATION: '#ff5500',
        JELLY_EXIT: '#ff007f',
        // 3D Specific (Hex codes for Three.js)
        THREE_HUNTER: 0xaa00ff,
        THREE_START: 0xffff00,
        THREE_EXIT: 0x00ff00,
        THREE_VISITED: 0x444444,
        THREE_KNOWN: 0x1f3a52,
        THREE_ELEVATOR_UP: 0x00ffff,
        THREE_ELEVATOR_DOWN: 0xff00ff,
        THREE_ELEVATOR_UP_UNUSED: 0x006666,
        THREE_ELEVATOR_DOWN_UNUSED: 0x660066,
        THREE_TELEPORT: 0xff8c00,
        THREE_KEY: 0xffd700,
        THREE_JELLY_PORTAL: 0xa020f0,
        THREE_JELLY_PROJECTILE: 0xff3333,
        THREE_JELLY_EXIT: 0xff007f
    }
};
