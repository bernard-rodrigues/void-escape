/**
 * 3D Maze Logic Handler
 */
export class Maze3D {
    constructor(degree, branchingFactor) {
        this.n = Math.max(3, Math.min(24, degree));
        this.branchingFactor = Math.max(0, Math.min(1, branchingFactor));
        this.size = 2 * this.n + 1;
        this.matrix = this.initMatrix();
        
        this.TYPES = { WALL: 0, PATH: 1, VISITED: 2, START: 3, EXIT: 4, ELEVATOR_VISITED: 5 };
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
}
