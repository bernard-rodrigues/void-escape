/**
 * Enemy Hunter Logic
 */
export class Hunter {
    constructor(maze, startPos, id) {
        this.maze = maze;
        this.x = startPos.x;
        this.y = startPos.y;
        this.z = startPos.z;
        this.id = id;
        this.state = 'WANDERING'; // WANDERING or TRACKING
        this.lastPos = { x: this.x, y: this.y, z: this.z };
        this.history = []; // Keep track of the last 2 positions for the trail
        this.visitedNodes = new Set();
        this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
        this.pathToTarget = [];
    }

    move(playerPos, matrix, types) {
        const neighbors = this.getValidNeighbors(matrix, types);
        if (neighbors.length === 0) return;

        // Transition to TRACKING if stepping on player's trail (VISITED, START, EXIT)
        const currentCellVal = matrix[this.x][this.y][this.z];
        if (currentCellVal === types.VISITED) {
            if (this.state !== 'TRACKING') {
                this.state = 'TRACKING';
                this.pathToTarget = []; // Reset exploration path
                this.visitedNodes.clear();
                this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
            }
        }

        let next;
        
        // If we have a planned path, check if it's still valid
        if (this.pathToTarget.length > 0) {
            const checkNext = this.pathToTarget[0];
            const checkVal = matrix[checkNext.x][checkNext.y][checkNext.z];
            const stillValid = this.state === 'TRACKING' ? 
                (checkVal === types.VISITED || checkVal === types.START || checkVal === types.EXIT) :
                (checkVal !== types.WALL);
            
            if (stillValid) {
                next = this.pathToTarget.shift();
            } else {
                this.pathToTarget = [];
            }
        }

        // If no next step is planned, find path to nearest unvisited cell
        if (!next) {
            let path = this.findPathToNearestUnvisited(matrix, types);
            if (!path || path.length === 0) {
                // Reset visited log since all accessible target nodes are visited
                this.visitedNodes.clear();
                this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
                path = this.findPathToNearestUnvisited(matrix, types);
            }

            if (path && path.length > 0) {
                this.pathToTarget = path;
                next = this.pathToTarget.shift();
            } else {
                // Fallback to local valid neighbors
                const forward = neighbors.filter(n => n.x !== this.lastPos.x || n.y !== this.lastPos.y || n.z !== this.lastPos.z);
                next = forward.length > 0 ? forward[Math.floor(Math.random() * forward.length)] : neighbors[0];
            }
        }

        if (next) {
            this.history.push({ x: this.x, y: this.y, z: this.z });
            if (this.history.length > 2) {
                this.history.shift();
            }
            this.lastPos = { x: this.x, y: this.y, z: this.z };
            this.x = next.x;
            this.y = next.y;
            this.z = next.z;
            this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
        }
    }

    findPathToNearestUnvisited(matrix, types) {
        const size = matrix.length;
        const queue = [{ x: this.x, y: this.y, z: this.z, path: [] }];
        const visited = Array.from({ length: size }, () => 
            Array.from({ length: size }, () => new Uint8Array(size))
        );
        visited[this.x][this.y][this.z] = 1;

        while (queue.length > 0) {
            const current = queue.shift();
            const key = `${current.x},${current.y},${current.z}`;
            
            if (!this.visitedNodes.has(key)) {
                return current.path;
            }

            const neighbors = this.getValidNeighbors(matrix, types, current.x, current.y, current.z);
            for (const n of neighbors) {
                if (!visited[n.x][n.y][n.z]) {
                    visited[n.x][n.y][n.z] = 1;
                    queue.push({
                        x: n.x,
                        y: n.y,
                        z: n.z,
                        path: [...current.path, n]
                    });
                }
            }
        }
        return null;
    }

    getValidNeighbors(matrix, types, cx = this.x, cy = this.y, cz = this.z, restrictToPlayerTrail = (this.state === 'TRACKING')) {
        const neighbors = [];
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 2 }, { dx: 0, dy: 0, dz: -2 }
        ];
        for (const d of dirs) {
            const nx = cx + d.dx, ny = cy + d.dy, nz = cz + d.dz;
            if (nx >= 0 && nx < matrix.length && ny >= 0 && ny < matrix.length && nz >= 0 && nz < matrix.length) {
                const cellVal = matrix[nx][ny][nz];
                if (cellVal !== types.WALL) {
                    if (d.dz !== 0) {
                        const midZ = cz + d.dz / 2;
                        if (matrix[cx][cy][midZ] === types.WALL) {
                            continue; // Sem elevador conectando esses andares nesta célula
                        }
                    }
                    
                    if (restrictToPlayerTrail) {
                        if (cellVal === types.VISITED || cellVal === types.START || cellVal === types.EXIT) {
                            neighbors.push({ x: nx, y: ny, z: nz });
                        }
                    } else {
                        neighbors.push({ x: nx, y: ny, z: nz });
                    }
                }
            }
        }
        return neighbors;
    }
}
