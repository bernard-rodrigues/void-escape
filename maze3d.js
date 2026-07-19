import { CONFIG } from './config.js';

/**
 * 3D Maze Logic Handler - Represents the maze using a 1D contiguously allocated Int8Array
 */
export class Maze3D {
    constructor(degree, branchingFactor, seed = null) {
        const d = degree !== undefined ? degree : (CONFIG.MAZE_DEGREE !== undefined ? CONFIG.MAZE_DEGREE : 8);
        const bf = branchingFactor !== undefined ? branchingFactor : (CONFIG.BRANCHING_FACTOR !== undefined ? CONFIG.BRANCHING_FACTOR : 0.2);
        this.n = Math.max(3, Math.min(16, d));
        this.branchingFactor = Math.max(0, Math.min(1, bf));
        this.size = 2 * this.n + 1;

        if (seed !== null && seed !== undefined) {
            this.seed = seed;
            this.random = this.createSeededRandom(seed);
        } else {
            this.seed = null;
            this.random = Math.random;
        }

        this.matrix = this.initMatrix();
        
        this.TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, ELEVATOR_VISITED: 5, TELEPORT: 6, KEY: 7, STATUE: 8 };
        this.startPos = { x: 0.5, y: 1.5, z: 0 };
    }

    createSeededRandom(seed) {
        let h = 0;
        if (typeof seed === 'string') {
            for (let i = 0; i < seed.length; i++) {
                h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
            }
        } else {
            h = seed | 0;
        }
        return function() {
            let t = h += 0x6D2B79F5;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    initMatrix() {
        return new Int8Array(this.size * this.size * this.size);
    }

    _idx(x, y, z) {
        return (x * this.size * this.size) + (y * this.size) + z;
    }

    generate() {
        const cells = [];
        const startX = 1 + 2 * Math.floor(this.random() * this.n);
        const startY = 1 + 2 * Math.floor(this.random() * this.n);
        const startZ = 1 + 2 * Math.floor(this.random() * this.n);

        this.matrix[this._idx(startX, startY, startZ)] = this.TYPES.PATH;
        cells.push({ x: startX, y: startY, z: startZ });

        while (cells.length > 0) {
            let index = this.random() > this.branchingFactor ? cells.length - 1 : Math.floor(this.random() * cells.length);
            const cell = cells[index];
            const neighbors = this.getUnvisitedNeighbors(cell.x, cell.y, cell.z);

            if (neighbors.length > 0) {
                const neighbor = neighbors[Math.floor(this.random() * neighbors.length)];
                this.matrix[this._idx(neighbor.x, neighbor.y, neighbor.z)] = this.TYPES.PATH;
                this.matrix[this._idx((cell.x + neighbor.x) / 2, (cell.y + neighbor.y) / 2, (cell.z + neighbor.z) / 2)] = this.TYPES.PATH;
                cells.push(neighbor);
            } else {
                cells.splice(index, 1);
            }
        }

        this.setEntryAndExit();
        this.placeTeleports();
        this.placeKeys();
        this.applyBraid();
        this.placeStatues();

        // Enrich the TypedArray with convenience O(1) coordinate mapping methods
        const size = this.size;
        const matrix = this.matrix;
        matrix.size = size;
        matrix.get = (x, y, z) => matrix[(x * size * size) + (y * size) + z];
        matrix.set = (x, y, z, val) => { matrix[(x * size * size) + (y * size) + z] = val; };

        return matrix;
    }

    getUnvisitedNeighbors(x, y, z) {
        const neighbors = [];
        const dirs = [
            { dx: 2, dy: 0, dz: 0 }, { dx: -2, dy: 0, dz: 0 },
            { dx: 0, dy: 2, dz: 0 }, { dx: 0, dy: -2, dz: 0 },
            { dx: 0, dy: 0, dz: 2 }, { dx: 0, dy: 0, dz: -2 }
        ];
        for (const dir of dirs) {
            const nx = x + dir.dx, ny = y + dir.dy, nz = z + dir.dz;
            if (this.isValid(nx, ny, nz) && this.matrix[this._idx(nx, ny, nz)] === this.TYPES.WALL) {
                neighbors.push({ x: nx, y: ny, z: nz });
            }
        }
        return neighbors;
    }

    isValid(x, y, z) {
        return x > 0 && x < this.size - 1 && y > 0 && y < this.size - 1 && z > 0 && z < this.size - 1;
    }

    setEntryAndExit() {
        const entryZ = 1 + 2 * Math.floor(this.random() * this.n);
        this.matrix[this._idx(1, 1, entryZ)] = this.TYPES.PATH;
        this.matrix[this._idx(0, 1, entryZ)] = this.TYPES.TELEPORT;
        this.startPos = { x: 0.5, y: 1.5, z: entryZ };

        const exitZ = 1 + 2 * Math.floor(this.random() * this.n);
        const lastCell = 2 * this.n - 1;
        this.matrix[this._idx(lastCell, lastCell, exitZ)] = this.TYPES.PATH;
        this.matrix[this._idx(2 * this.n, lastCell, exitZ)] = this.TYPES.EXIT;
    }

    placeTeleports() {
        const count = CONFIG.getTeleportCount(this.n);
        
        const deadEnds = [];
        const normalPaths = [];
        for (let x = 1; x < this.size - 1; x++) {
            for (let y = 1; y < this.size - 1; y++) {
                for (let z = 1; z < this.size - 1; z++) {
                    if (this.matrix[this._idx(x, y, z)] === this.TYPES.PATH) {
                        const hUp = z + 1 < this.size && this.matrix[this._idx(x, y, z + 1)] !== this.TYPES.WALL;
                        const hDown = z - 1 >= 0 && this.matrix[this._idx(x, y, z - 1)] !== this.TYPES.WALL;
                        if (!hUp && !hDown) {
                            let openCount = 0;
                            const dirs = [
                                { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
                                { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
                                { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
                            ];
                            for (const d of dirs) {
                                const nx = x + d.dx, ny = y + d.dy, nz = z + d.dz;
                                if (nx >= 0 && nx < this.size && ny >= 0 && ny < this.size && nz >= 0 && nz < this.size) {
                                    if (this.matrix[this._idx(nx, ny, nz)] !== this.TYPES.WALL) {
                                        openCount++;
                                    }
                                }
                            }
                            if (openCount === 1) {
                                deadEnds.push({ x, y, z });
                            } else {
                                normalPaths.push({ x, y, z });
                            }
                        }
                    }
                }
            }
        }
        const paths = deadEnds;

        const start = { x: 0, y: 1, z: this.startPos.z };
        let exit = { x: 2 * this.n, y: 2 * this.n - 1, z: this.startPos.z };
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                for (let z = 0; z < this.size; z++) {
                    if (this.matrix[this._idx(x, y, z)] === this.TYPES.EXIT) {
                        exit = { x, y, z };
                    }
                }
            }
        }

        const getDist = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);

        const teleports = [];
        let minDistanceToStartExit = 4;
        let minDistanceToOthers = 4;

        while (teleports.length < count && minDistanceToStartExit > 0) {
            teleports.length = 0;
            const candidates = paths.filter(p => {
                const ds = getDist(p, start);
                const de = getDist(p, exit);
                return ds >= minDistanceToStartExit && de >= minDistanceToStartExit;
            });

            for (let i = 0; i < count; i++) {
                let bestCand = null;
                let maxMinDist = -1;

                for (const c of candidates) {
                    if (teleports.some(t => t.x === c.x && t.y === c.y && t.z === c.z)) continue;

                    let minDistToOthers = Infinity;
                    for (const t of teleports) {
                        const d = getDist(c, t);
                        if (d < minDistToOthers) minDistToOthers = d;
                    }

                    if (minDistToOthers >= minDistanceToOthers) {
                        const minD = Math.min(getDist(c, start), getDist(c, exit), minDistToOthers);
                        if (minD > maxMinDist) {
                            maxMinDist = minD;
                            bestCand = c;
                        }
                    }
                }

                if (bestCand) {
                    teleports.push(bestCand);
                } else {
                    break;
                }
            }

            if (teleports.length < count) {
                if (minDistanceToOthers > 1) {
                    minDistanceToOthers--;
                } else {
                    minDistanceToStartExit--;
                }
            }
        }

        if (teleports.length < count) {
            let minDistanceToStartExit = 4;
            let minDistanceToOthers = 4;
            while (teleports.length < count && minDistanceToStartExit > 0) {
                const candidates = normalPaths.filter(p => {
                    const ds = getDist(p, start);
                    const de = getDist(p, exit);
                    return ds >= minDistanceToStartExit && de >= minDistanceToStartExit;
                });

                for (let i = teleports.length; i < count; i++) {
                    let bestCand = null;
                    let maxMinDist = -1;

                    for (const c of candidates) {
                        if (teleports.some(t => t.x === c.x && t.y === c.y && t.z === c.z)) continue;

                        let minDistToOthers = Infinity;
                        for (const t of teleports) {
                            const d = getDist(c, t);
                            if (d < minDistToOthers) minDistToOthers = d;
                        }

                        if (minDistToOthers >= minDistanceToOthers) {
                            const minD = Math.min(getDist(c, start), getDist(c, exit), minDistToOthers);
                            if (minD > maxMinDist) {
                                maxMinDist = minD;
                                bestCand = c;
                            }
                        }
                    }

                    if (bestCand) {
                        teleports.push(bestCand);
                    } else {
                        break;
                    }
                }

                if (teleports.length < count) {
                    if (minDistanceToOthers > 1) {
                        minDistanceToOthers--;
                    } else {
                        minDistanceToStartExit--;
                    }
                }
            }
        }

        for (const t of teleports) {
            this.matrix[this._idx(t.x, t.y, t.z)] = this.TYPES.TELEPORT;
        }
    }

    placeKeys() {
        const count = CONFIG.getHunterCount(this.n) * 2;
        
        const deadEnds = [];
        const normalPaths = [];
        for (let x = 1; x < this.size - 1; x++) {
            for (let y = 1; y < this.size - 1; y++) {
                for (let z = 1; z < this.size - 1; z++) {
                    if (this.matrix[this._idx(x, y, z)] === this.TYPES.PATH) {
                        const hUp = z + 1 < this.size && this.matrix[this._idx(x, y, z + 1)] !== this.TYPES.WALL;
                        const hDown = z - 1 >= 0 && this.matrix[this._idx(x, y, z - 1)] !== this.TYPES.WALL;
                        if (!hUp && !hDown) {
                            let openCount = 0;
                            const dirs = [
                                { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
                                { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
                                { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 }
                            ];
                            for (const d of dirs) {
                                const nx = x + d.dx, ny = y + d.dy, nz = z + d.dz;
                                if (nx >= 0 && nx < this.size && ny >= 0 && ny < this.size && nz >= 0 && nz < this.size) {
                                    if (this.matrix[this._idx(nx, ny, nz)] !== this.TYPES.WALL) {
                                        openCount++;
                                    }
                                }
                            }
                            if (openCount === 1) {
                                deadEnds.push({ x, y, z });
                            } else {
                                normalPaths.push({ x, y, z });
                            }
                        }
                    }
                }
            }
        }
        
        const paths = deadEnds;
        
        const start = { x: 0, y: 1, z: this.startPos.z };
        let exit = { x: 2 * this.n, y: 2 * this.n - 1, z: this.startPos.z };
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                for (let z = 0; z < this.size; z++) {
                    if (this.matrix[this._idx(x, y, z)] === this.TYPES.EXIT) {
                        exit = { x, y, z };
                    }
                }
            }
        }
        
        const getDist = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);
        
        const keys = [];
        let minDistanceToStartExit = 4;
        let minDistanceToOthers = 4;
        
        while (keys.length < count && minDistanceToStartExit > 0) {
            keys.length = 0;
            const candidates = paths.filter(p => {
                const ds = getDist(p, start);
                const de = getDist(p, exit);
                const currentVal = this.matrix[this._idx(p.x, p.y, p.z)];
                return ds >= minDistanceToStartExit && de >= minDistanceToStartExit && currentVal !== this.TYPES.TELEPORT;
            });
            
            for (let i = 0; i < count; i++) {
                let bestCand = null;
                let maxMinDist = -1;
                
                for (const c of candidates) {
                    if (keys.some(k => k.x === c.x && k.y === c.y && k.z === c.z)) continue;
                    
                    let minDistToOthers = Infinity;
                    for (const k of keys) {
                        const d = getDist(c, k);
                        if (d < minDistToOthers) minDistToOthers = d;
                    }
                    
                    if (minDistToOthers >= minDistanceToOthers) {
                        const minD = Math.min(getDist(c, start), getDist(c, exit), minDistToOthers);
                        if (minD > maxMinDist) {
                            maxMinDist = minD;
                            bestCand = c;
                        }
                    }
                }
                
                if (bestCand) {
                    keys.push(bestCand);
                } else {
                    break;
                }
            }
            
            if (keys.length < count) {
                if (minDistanceToOthers > 1) {
                    minDistanceToOthers--;
                } else {
                    minDistanceToStartExit--;
                }
            }
        }

        if (keys.length < count) {
            let minDistanceToStartExit = 4;
            let minDistanceToOthers = 4;
            while (keys.length < count && minDistanceToStartExit > 0) {
                const candidates = normalPaths.filter(p => {
                    const ds = getDist(p, start);
                    const de = getDist(p, exit);
                    const currentVal = this.matrix[this._idx(p.x, p.y, p.z)];
                    return ds >= minDistanceToStartExit && de >= minDistanceToStartExit && currentVal !== this.TYPES.TELEPORT;
                });

                for (let i = keys.length; i < count; i++) {
                    let bestCand = null;
                    let maxMinDist = -1;

                    for (const c of candidates) {
                        if (keys.some(k => k.x === c.x && k.y === c.y && k.z === c.z)) continue;

                        let minDistToOthers = Infinity;
                        for (const k of keys) {
                            const d = getDist(c, k);
                            if (d < minDistToOthers) minDistToOthers = d;
                        }

                        if (minDistToOthers >= minDistanceToOthers) {
                            const minD = Math.min(getDist(c, start), getDist(c, exit), minDistToOthers);
                            if (minD > maxMinDist) {
                                maxMinDist = minD;
                                bestCand = c;
                            }
                        }
                    }

                    if (bestCand) {
                        keys.push(bestCand);
                    } else {
                        break;
                    }
                }

                if (keys.length < count) {
                    if (minDistanceToOthers > 1) {
                        minDistanceToOthers--;
                    } else {
                        minDistanceToStartExit--;
                    }
                }
            }
        }

        for (const k of keys) {
            this.matrix[this._idx(k.x, k.y, k.z)] = this.TYPES.KEY;
        }
    }

    /**
     * Converts a fraction (CONFIG.BRAID_FACTOR) of eligible walls into paths.
     * Respects spatial constraints: preventing wide corridors (> 1 cell wide)
     * and preventing parallel elevator shafts adjacent to each other.
     */
    applyBraid() {
        const size = this.size;
        const candidates = [];

        // 1. Gather all walls that divide exactly two path corridors
        for (let x = 1; x < size - 1; x++) {
            for (let y = 1; y < size - 1; y++) {
                for (let z = 1; z < size - 1; z++) {
                    if (this.matrix[this._idx(x, y, z)] === this.TYPES.WALL) {
                        const isWallX = (x % 2 === 0) && (y % 2 !== 0) && (z % 2 !== 0);
                        const isWallY = (y % 2 === 0) && (x % 2 !== 0) && (z % 2 !== 0);
                        const isWallZ = (z % 2 === 0) && (x % 2 !== 0) && (y % 2 !== 0);

                        if (isWallX) {
                            const c1 = this.matrix[this._idx(x - 1, y, z)];
                            const c2 = this.matrix[this._idx(x + 1, y, z)];
                            if (c1 !== this.TYPES.WALL && c2 !== this.TYPES.WALL) {
                                if (c1 !== this.TYPES.TELEPORT && c2 !== this.TYPES.TELEPORT &&
                                    c1 !== this.TYPES.EXIT && c2 !== this.TYPES.EXIT &&
                                    c1 !== this.TYPES.KEY && c2 !== this.TYPES.KEY) {
                                    candidates.push({ x, y, z, type: 'X' });
                                }
                            }
                        } else if (isWallY) {
                            const c1 = this.matrix[this._idx(x, y - 1, z)];
                            const c2 = this.matrix[this._idx(x, y + 1, z)];
                            if (c1 !== this.TYPES.WALL && c2 !== this.TYPES.WALL) {
                                if (c1 !== this.TYPES.TELEPORT && c2 !== this.TYPES.TELEPORT &&
                                    c1 !== this.TYPES.EXIT && c2 !== this.TYPES.EXIT &&
                                    c1 !== this.TYPES.KEY && c2 !== this.TYPES.KEY) {
                                    candidates.push({ x, y, z, type: 'Y' });
                                }
                            }
                        } else if (isWallZ) {
                            const c1 = this.matrix[this._idx(x, y, z - 1)];
                            const c2 = this.matrix[this._idx(x, y, z + 1)];
                            if (c1 !== this.TYPES.WALL && c2 !== this.TYPES.WALL) {
                                if (c1 !== this.TYPES.TELEPORT && c2 !== this.TYPES.TELEPORT &&
                                    c1 !== this.TYPES.EXIT && c2 !== this.TYPES.EXIT &&
                                    c1 !== this.TYPES.KEY && c2 !== this.TYPES.KEY) {
                                    candidates.push({ x, y, z, type: 'Z' });
                                }
                            }
                        }
                    }
                }
            }
        }

        // 2. Shuffle candidates uniformly (Fisher-Yates)
        for (let i = candidates.length - 1; i > 0; i--) {
            const j = Math.floor(this.random() * (i + 1));
            const temp = candidates[i];
            candidates[i] = candidates[j];
            candidates[j] = temp;
        }

        // 3. Open walls until target braid limit is met, validating constraints
        const braidFactor = CONFIG.BRAID_FACTOR || 0.10;
        const targetOpenings = Math.floor(candidates.length * braidFactor);
        let openedCount = 0;

        for (const cand of candidates) {
            if (openedCount >= targetOpenings) break;

            // Constraint 1: Prevent wide corridors (2x2 path clusters)
            if (this.isWideConnection(cand.x, cand.y, cand.z)) {
                continue;
            }

            // Constraint 2: Prevent adjacent or diagonal elevators
            if (cand.type === 'Z' && this.isAdjacentElevator(cand.x, cand.y, cand.z)) {
                continue;
            }

            this.matrix[this._idx(cand.x, cand.y, cand.z)] = this.TYPES.PATH;
            openedCount++;
        }
    }

    /**
     * Checks if turning (x, y, z) into a path would form a 2x2 cluster of path cells
     * in any of the XY, XZ, or YZ planes.
     */
    isWideConnection(x, y, z) {
        const size = this.size;
        const isOpened = (nx, ny, nz) => {
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) return false;
            if (nx === x && ny === y && nz === z) return true;
            return this.matrix[this._idx(nx, ny, nz)] !== this.TYPES.WALL;
        };

        // Check XY plane
        const checkXY = (
            (isOpened(x, y + 1, z) && isOpened(x + 1, y, z) && isOpened(x + 1, y + 1, z)) ||
            (isOpened(x - 1, y, z) && isOpened(x - 1, y + 1, z) && isOpened(x, y + 1, z)) ||
            (isOpened(x, y - 1, z) && isOpened(x + 1, y - 1, z) && isOpened(x + 1, y, z)) ||
            (isOpened(x - 1, y - 1, z) && isOpened(x, y - 1, z) && isOpened(x - 1, y, z))
        );
        if (checkXY) return true;

        // Check XZ plane
        const checkXZ = (
            (isOpened(x, y, z + 1) && isOpened(x + 1, y, z) && isOpened(x + 1, y, z + 1)) ||
            (isOpened(x - 1, y, z) && isOpened(x - 1, y, z + 1) && isOpened(x, y, z + 1)) ||
            (isOpened(x, y, z - 1) && isOpened(x + 1, y, z - 1) && isOpened(x + 1, y, z)) ||
            (isOpened(x - 1, y, z - 1) && isOpened(x, y, z - 1) && isOpened(x - 1, y, z))
        );
        if (checkXZ) return true;

        // Check YZ plane
        const checkYZ = (
            (isOpened(x, y, z + 1) && isOpened(x, y + 1, z) && isOpened(x, y + 1, z + 1)) ||
            (isOpened(x, y - 1, z) && isOpened(x, y - 1, z + 1) && isOpened(x, y, z + 1)) ||
            (isOpened(x, y, z - 1) && isOpened(x, y + 1, z - 1) && isOpened(x, y + 1, z)) ||
            (isOpened(x, y - 1, z - 1) && isOpened(x, y, z - 1) && isOpened(x, y - 1, z))
        );
        if (checkYZ) return true;

        return false;
    }

    /**
     * Checks if there are any active vertical connections (shafts) in the 8 neighboring
     * positions in the XY plane, checking current level transition Z, and adjacent ones (Z-2, Z+2).
     */
    isAdjacentElevator(x, y, z) {
        const size = this.size;
        const dirs = [
            { dx: -1, dy: -1 }, { dx: -1, dy: 0 }, { dx: -1, dy: 1 },
            { dx: 0, dy: -1 },                     { dx: 0, dy: 1 },
            { dx: 1, dy: -1 },  { dx: 1, dy: 0 },  { dx: 1, dy: 1 }
        ];

        for (const dir of dirs) {
            const nx = x + dir.dx;
            const ny = y + dir.dy;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size) continue;

            // Check current Z transition
            if (this.matrix[this._idx(nx, ny, z)] !== this.TYPES.WALL) {
                return true;
            }
            // Check lower Z transition
            if (z - 2 >= 0 && this.matrix[this._idx(nx, ny, z - 2)] !== this.TYPES.WALL) {
                return true;
            }
            // Check upper Z transition
            if (z + 2 < size && this.matrix[this._idx(nx, ny, z + 2)] !== this.TYPES.WALL) {
                return true;
            }
        }
        return false;
    }

    isDeadEndZ(x, y, z) {
        // Only playable odd z floors, excluding start, exit, teleport, keys
        if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) return false;
        
        const val = this.matrix[this._idx(x, y, z)];
        if (val === this.TYPES.WALL || val === this.TYPES.START || val === this.TYPES.EXIT || val === this.TYPES.TELEPORT || val === this.TYPES.KEY) {
            return false;
        }
        
        // Surrounded by walls horizontally: all 4 horizontal neighbors must be walls
        const size = this.size;
        const horizontalDirs = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 }
        ];
        for (const d of horizontalDirs) {
            const nx = x + d.dx;
            const ny = y + d.dy;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size) continue;
            if (this.matrix[this._idx(nx, ny, z)] !== this.TYPES.WALL) {
                return false;
            }
        }
        
        // Has an elevator in the center (vertical path below or above)
        let hasElevator = false;
        if (z - 1 >= 0 && this.matrix[this._idx(x, y, z - 1)] !== this.TYPES.WALL) {
            hasElevator = true;
        }
        if (z + 1 < size && this.matrix[this._idx(x, y, z + 1)] !== this.TYPES.WALL) {
            hasElevator = true;
        }
        
        return hasElevator;
    }

    isSolvable() {
        const size = this.size;
        const start = {
            x: Math.floor(this.startPos.x),
            y: Math.floor(this.startPos.y),
            z: this.startPos.z
        };
        
        const keyCoords = [];
        let exitCoord = null;
        
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.matrix[this._idx(x, y, z)];
                    if (val === this.TYPES.KEY) {
                        keyCoords.push(`${x},${y},${z}`);
                    } else if (val === this.TYPES.EXIT) {
                        exitCoord = `${x},${y},${z}`;
                    }
                }
            }
        }
        
        const queue = [start];
        const visited = new Set([`${start.x},${start.y},${start.z}`]);
        const reachedKeys = new Set();
        let reachedExit = false;
        
        while (queue.length > 0) {
            const curr = queue.shift();
            const currStr = `${curr.x},${curr.y},${curr.z}`;
            
            if (keyCoords.includes(currStr)) {
                reachedKeys.add(currStr);
            }
            if (currStr === exitCoord) {
                reachedExit = true;
            }
            
            // 1. Horizontal neighbors
            const dirs = [
                { dx: 1, dy: 0 },
                { dx: -1, dy: 0 },
                { dx: 0, dy: 1 },
                { dx: 0, dy: -1 }
            ];
            for (const d of dirs) {
                const nx = curr.x + d.dx;
                const ny = curr.y + d.dy;
                const nz = curr.z;
                if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                    const nStr = `${nx},${ny},${nz}`;
                    const val = this.matrix[this._idx(nx, ny, nz)];
                    if (val !== this.TYPES.WALL && val !== this.TYPES.STATUE && !visited.has(nStr)) {
                        visited.add(nStr);
                        queue.push({ x: nx, y: ny, z: nz });
                    }
                }
            }
            
            // 2. Vertical neighbors (Elevators)
            for (const dz of [-2, 2]) {
                const nz = curr.z + dz;
                if (nz >= 0 && nz < size) {
                    const midZ = curr.z + dz / 2;
                    const shaftVal = this.matrix[this._idx(curr.x, curr.y, midZ)];
                    const destVal = this.matrix[this._idx(curr.x, curr.y, nz)];
                    
                    if (shaftVal !== this.TYPES.WALL && shaftVal !== this.TYPES.STATUE &&
                        destVal !== this.TYPES.WALL && destVal !== this.TYPES.STATUE) {
                        const nStr = `${curr.x},${curr.y},${nz}`;
                        if (!visited.has(nStr)) {
                            visited.add(nStr);
                            queue.push({ x: curr.x, y: curr.y, z: nz });
                        }
                    }
                }
            }
        }
        
        return reachedExit && (reachedKeys.size === keyCoords.length);
    }

    placeStatues() {
        const size = this.size;
        const candidates = [];
        
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    if (this.isDeadEndZ(x, y, z)) {
                        candidates.push({ x, y, z });
                    }
                }
            }
        }
        
        let placedCount = 0;
        for (const cand of candidates) {
            const originalVal = this.matrix[this._idx(cand.x, cand.y, cand.z)];
            
            // Save shafts states
            const belowShaftZ = cand.z - 1;
            const aboveShaftZ = cand.z + 1;
            const originalBelowVal = belowShaftZ >= 0 ? this.matrix[this._idx(cand.x, cand.y, belowShaftZ)] : null;
            const originalAboveVal = aboveShaftZ < size ? this.matrix[this._idx(cand.x, cand.y, aboveShaftZ)] : null;
            
            // Place statue and turn its vertical shafts into walls
            this.matrix[this._idx(cand.x, cand.y, cand.z)] = this.TYPES.STATUE;
            if (belowShaftZ >= 0) {
                this.matrix[this._idx(cand.x, cand.y, belowShaftZ)] = this.TYPES.WALL;
            }
            if (aboveShaftZ < size) {
                this.matrix[this._idx(cand.x, cand.y, aboveShaftZ)] = this.TYPES.WALL;
            }
            
            // Validate solvability
            if (this.isSolvable()) {
                placedCount++;
            } else {
                // Revert all
                this.matrix[this._idx(cand.x, cand.y, cand.z)] = originalVal;
                if (belowShaftZ >= 0) {
                    this.matrix[this._idx(cand.x, cand.y, belowShaftZ)] = originalBelowVal;
                }
                if (aboveShaftZ < size) {
                    this.matrix[this._idx(cand.x, cand.y, aboveShaftZ)] = originalAboveVal;
                }
            }
        }
        return placedCount;
    }
}
