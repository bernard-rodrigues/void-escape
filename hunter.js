/**
 * Enemy Hunter Logic
 */
import { aStarPath, bfsNearestUnvisited } from './pathfinder.js';

export class Hunter {
    constructor(maze, startPos, id) {
        this.maze = maze;
        this.id = id;
        this.history = [];
        this.visitedNodes = new Set();
        this.pathToTarget = [];

        if (startPos) {
            this.x = startPos.x;
            this.y = startPos.y;
            this.z = startPos.z;
            this.visualX = startPos.x;
            this.visualY = startPos.y;
            this.visualZ = startPos.z;
            this.state = 'WANDERING';
            this.lastPos = { x: this.x, y: this.y, z: this.z };
            this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
        } else {
            this.x = null;
            this.y = null;
            this.z = null;
            this.visualX = null;
            this.visualY = null;
            this.visualZ = null;
            this.state = 'SLEEP';
            this.lastPos = null;
        }
    }

    move(playerPos, matrix, types) {
        if (this.state === 'SLEEP') return;
        const neighbors = this.getValidNeighbors(matrix, types);
        if (neighbors.length === 0) return;

        // Transition to TRACKING if stepping on player's trail (VISITED, START, EXIT)
        const currentCellVal = matrix.get(this.x, this.y, this.z);
        if (currentCellVal === types.VISITED && this.state !== 'TELEPORT_TRACKING') {
            if (this.state !== 'TRACKING') {
                this.state = 'TRACKING';
                this.pathToTarget = [];
                this.visitedNodes.clear();
                this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
            }
        }

        let next;
        
        if (this.pathToTarget.length > 0) {
            const checkNext = this.pathToTarget[0];
            const checkVal = matrix.get(checkNext.x, checkNext.y, checkNext.z);
            const stillValid = this.state === 'TRACKING' ? 
                (checkVal === types.VISITED || checkVal === types.START || checkVal === types.EXIT) :
                (checkVal !== types.WALL);
            
            if (stillValid) {
                next = this.pathToTarget.shift();
            } else {
                this.pathToTarget = [];
            }
        }

        if (!next) {
            if (this.state === 'TELEPORT_TRACKING') {
                next = null; // Wait at teleport destination
            } else {
                let path = this.findPathToNearestUnvisited(matrix, types);
                if (!path || path.length === 0) {
                    this.visitedNodes.clear();
                    this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
                    path = this.findPathToNearestUnvisited(matrix, types);
                }

                if (path && path.length > 0) {
                    this.pathToTarget = path;
                    next = this.pathToTarget.shift();
                } else {
                    const forward = neighbors.filter(n => n.x !== this.lastPos.x || n.y !== this.lastPos.y || n.z !== this.lastPos.z);
                    next = forward.length > 0 ? forward[Math.floor(Math.random() * forward.length)] : neighbors[0];
                }
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

    findPathToTarget(targetPos, matrix, types) {
        // Delegates to optimal A* in pathfinder.js using size
        const path = aStarPath(
            { x: this.x, y: this.y, z: this.z },
            targetPos,
            matrix,
            matrix.size,
            types.WALL,
            this.maze.startPos
        );
        return path;
    }

    findPathToNearestUnvisited(matrix, types) {
        return bfsNearestUnvisited(
            { x: this.x, y: this.y, z: this.z },
            this.visitedNodes,
            matrix,
            matrix.size,
            types,
            (cx, cy, cz, mat, t) => this.getValidNeighbors(mat, t, cx, cy, cz, this.state === 'TRACKING')
        );
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
            if (nx >= 0 && nx < matrix.size && ny >= 0 && ny < matrix.size && nz >= 0 && nz < matrix.size) {
                // Caçadores não podem entrar na célula de partida segura
                const startX = Math.floor(this.maze.startPos.x);
                const startY = Math.floor(this.maze.startPos.y);
                const startZ = this.maze.startPos.z;
                if (nx === startX && ny === startY && nz === startZ) {
                    continue;
                }

                const cellVal = matrix.get(nx, ny, nz);
                if (cellVal !== types.WALL) {
                    if (d.dz !== 0) {
                        const midZ = cz + d.dz / 2;
                        if (matrix.get(cx, cy, midZ) === types.WALL) {
                            continue; // No elevator connecting these floors on this cell
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
