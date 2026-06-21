/**
 * 3D Maze Logic Handler
 */
export class Maze3D {
    constructor(degree, branchingFactor) {
        this.n = Math.max(3, Math.min(24, degree));
        this.branchingFactor = Math.max(0, Math.min(1, branchingFactor));
        this.size = 2 * this.n + 1;
        this.matrix = this.initMatrix();
        
        this.TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, ELEVATOR_VISITED: 5, TELEPORT: 6 };
        this.startPos = { x: 0.5, y: 1.5, z: 0 };
    }

    initMatrix() {
        return Array.from({ length: this.size }, () => 
            Array.from({ length: this.size }, () => new Int8Array(this.size).fill(0))
        );
    }

    generate() {
        const cells = [];
        const startX = 1 + 2 * Math.floor(Math.random() * this.n);
        const startY = 1 + 2 * Math.floor(Math.random() * this.n);
        const startZ = 1 + 2 * Math.floor(Math.random() * this.n);

        this.matrix[startX][startY][startZ] = this.TYPES.PATH;
        cells.push({ x: startX, y: startY, z: startZ });

        while (cells.length > 0) {
            let index = Math.random() > this.branchingFactor ? cells.length - 1 : Math.floor(Math.random() * cells.length);
            const cell = cells[index];
            const neighbors = this.getUnvisitedNeighbors(cell.x, cell.y, cell.z);

            if (neighbors.length > 0) {
                const neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.matrix[neighbor.x][neighbor.y][neighbor.z] = this.TYPES.PATH;
                this.matrix[(cell.x + neighbor.x) / 2][(cell.y + neighbor.y) / 2][(cell.z + neighbor.z) / 2] = this.TYPES.PATH;
                cells.push(neighbor);
            } else {
                cells.splice(index, 1);
            }
        }

        this.setEntryAndExit();
        this.placeTeleports();
        return this.matrix;
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
            if (this.isValid(nx, ny, nz) && this.matrix[nx][ny][nz] === this.TYPES.WALL) {
                neighbors.push({ x: nx, y: ny, z: nz });
            }
        }
        return neighbors;
    }

    isValid(x, y, z) {
        return x > 0 && x < this.size - 1 && y > 0 && y < this.size - 1 && z > 0 && z < this.size - 1;
    }

    setEntryAndExit() {
        const entryZ = 1 + 2 * Math.floor(Math.random() * this.n);
        this.matrix[1][1][entryZ] = this.TYPES.PATH;
        this.matrix[0][1][entryZ] = this.TYPES.START;
        this.startPos = { x: 0.5, y: 1.5, z: entryZ };

        const exitZ = 1 + 2 * Math.floor(Math.random() * this.n);
        const lastCell = 2 * this.n - 1;
        this.matrix[lastCell][lastCell][exitZ] = this.TYPES.PATH;
        this.matrix[2 * this.n][lastCell][exitZ] = this.TYPES.EXIT;
    }

    placeTeleports() {
        const degree = this.n;
        const count = Math.max(2, Math.floor(degree / 2));
        
        // Find all walkable paths, excluding start and exit, prioritizing dead-ends
        const deadEnds = [];
        const normalPaths = [];
        for (let x = 1; x < this.size - 1; x++) {
            for (let y = 1; y < this.size - 1; y++) {
                for (let z = 1; z < this.size - 1; z++) {
                    if (this.matrix[x][y][z] === this.TYPES.PATH) {
                        // Exclude cells that connect floors vertically (elevators)
                        const hUp = z + 1 < this.size && this.matrix[x][y][z + 1] !== this.TYPES.WALL;
                        const hDown = z - 1 >= 0 && this.matrix[x][y][z - 1] !== this.TYPES.WALL;
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
                                    if (this.matrix[nx][ny][nz] !== this.TYPES.WALL) {
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
        const paths = deadEnds.length >= count ? deadEnds : [...deadEnds, ...normalPaths];

        // Keep track of start and exit positions
        const start = { x: 0, y: 1, z: this.startPos.z };
        let exit = { x: 2 * this.n, y: 2 * this.n - 1, z: this.startPos.z };
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                for (let z = 0; z < this.size; z++) {
                    if (this.matrix[x][y][z] === this.TYPES.EXIT) {
                        exit = { x, y, z };
                    }
                }
            }
        }

        const getDist = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);

        const teleports = [];
        let minDistanceToStartExit = 4;
        let minDistanceToOthers = 4;

        // Try placing teleports with relaxation
        while (teleports.length < count && minDistanceToStartExit > 0) {
            teleports.length = 0; // reset
            const candidates = paths.filter(p => {
                const ds = getDist(p, start);
                const de = getDist(p, exit);
                return ds >= minDistanceToStartExit && de >= minDistanceToStartExit;
            });

            // Greedy placement
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

        // Apply selected teleports to matrix
        for (const t of teleports) {
            this.matrix[t.x][t.y][t.z] = this.TYPES.TELEPORT;
        }
    }
}
