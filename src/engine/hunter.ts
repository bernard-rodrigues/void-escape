/**
 * Enemy Hunter Logic
 */
import { aStarPath, bfsNearestUnvisited, Point3D } from './pathfinder.js';

export interface HunterState { id: number; x: number; y: number; z: number; }
export class Hunter {
    maze: any;
    id: number;
    history: Point3D[];
    visitedNodes: Set<string>;
    pathToTarget: Point3D[];
    x: number | null;
    y: number | null;
    z: number | null;
    visualX: number | null;
    visualY: number | null;
    visualZ: number | null;
    state: string;
    lastPos: Point3D | null;
    jellyTime: number;
    respawnThresholdPercentage: number | null;
    lowCanvas!: HTMLCanvasElement;
    lctx!: CanvasRenderingContext2D | null;

    constructor(maze: any, startPos: Point3D | null, id: number) {
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

        // Jelly Glitch Monster Animation State
        this.jellyTime = 0;
        this.respawnThresholdPercentage = null;
        if (typeof document !== 'undefined') {
            this.lowCanvas = document.createElement('canvas');
            this.lowCanvas.width = 64;
            this.lowCanvas.height = 64;
            this.lctx = this.lowCanvas.getContext('2d', { willReadFrequently: true });
        }
    }

    generateCloudTexture(dt: number = 0.016) {
        if (this.state === 'SLEEP') return;
        this.jellyTime += dt;

        if (typeof document === 'undefined' || !this.lctx) return;

        const size = 64;
        const lctx = this.lctx;

        // 1. FUNDO E Rastro transparentes (desbota o alpha do rastro anterior via destination-out)
        lctx.globalCompositeOperation = 'destination-out';
        lctx.fillStyle = 'rgba(0, 0, 0, 0.22)'; // Atenua a opacidade gradualmente a cada frame
        lctx.fillRect(0, 0, size, size);
        lctx.globalCompositeOperation = 'source-over';

        const time = this.jellyTime;

        // 2. NÚCLEO DA NUVEM ROXA (Ondas internas mais lentas)
        // Usamos ImageData para manipulação ultra-rápida de pixels em buffer
        try {
            const imgData = lctx.getImageData(0, 0, size, size);
            const data = imgData.data;

            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const dx = x - size / 2;
                    const dy = y - size / 2;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    // Pulsação de fumaça interna desacelerada
                    const distortion = Math.sin(time * 1.5 + x * 0.08) * 2.5;
                    const maxDist = (size * 0.35) + distortion;

                    if (dist < maxDist + (Math.random() * 1.5)) {
                        const r = 90 + Math.floor(Math.random() * 45);
                        const g = 10 + Math.floor(Math.random() * 20);
                        const b = 140 + Math.floor(Math.random() * 60);
                        
                        const idx = (y * size + x) * 4;
                        data[idx] = r;
                        data[idx + 1] = g;
                        data[idx + 2] = b;
                        data[idx + 3] = 255;
                    }
                }
            }
            lctx.putImageData(imgData, 0, 0);
        } catch (e) {}

        // 3. TROVÕES INTERNOS (Flashes raros, lentos e pontuais)
        if (Math.random() < 0.04) {
            lctx.fillStyle = Math.random() < 0.7 ? '#ffffff' : '#b3ffff';
            const bx = (size / 2 - 8) + Math.random() * 16;
            const by = (size / 2 - 8) + Math.random() * 16;
            lctx.fillRect(bx, by, 2 + Math.random() * 3, 4 + Math.random() * 10);
        }

        // 4. GLITCH DE CORES (Apenas na área roxa e menos frequentes)
        if (Math.random() < 0.12) {
            const blocks = Math.floor(Math.random() * 3) + 1;
            const colors = ['#00ff66', '#ff0055', '#00ccff', '#ffff00', '#ffffff'];

            for (let i = 0; i < blocks; i++) {
                const bx = Math.floor(Math.random() * size);
                const by = Math.floor(Math.random() * size);
                
                const dx = bx - size / 2;
                const dy = by - size / 2;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < size * 0.32) {
                    const bw = Math.floor(Math.random() * 4) + 2;
                    const bh = Math.floor(Math.random() * 2) + 1;
                    lctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    lctx.fillRect(bx, by, bw, bh);
                }
            }
        }

        // 5. DESLOCAMENTO DE LINHAS (Raros cortes horizontais rápidos)
        if (Math.random() < 0.08) {
            const sy = Math.floor(Math.random() * size);
            const sh = Math.floor(Math.random() * 6) + 2;
            const shift = Math.floor(Math.random() * 6) - 3;
            try {
                const imgData = lctx.getImageData(0, sy, size, sh);
                lctx.clearRect(0, sy, size, sh);
                lctx.putImageData(imgData, shift, sy);
            } catch (e) {}
        }
    }

    move(playerPos: Point3D, matrix: Int8Array, types: any) {
        if (this.state === 'SLEEP' || this.state === 'DEAD_BY_JELLY' || this.x === null || this.y === null || this.z === null) return;
        const neighbors = this.getValidNeighbors(matrix, types);
        if (neighbors.length === 0) return;

        // Transition to TRACKING if stepping on player's trail (VISITED, START, EXIT)
        const size = Math.round(Math.cbrt(matrix.length));
        const currentCellVal = (matrix as any).get ? (matrix as any).get(this.x, this.y, this.z) : (matrix[this.x * size * size + this.y * size + this.z] ?? 0);
        if ((currentCellVal === types.VISITED || currentCellVal === types.JELLY_PORTAL) && this.state !== 'TELEPORT_TRACKING') {
            if (this.state !== 'TRACKING') {
                this.state = 'TRACKING';
                this.pathToTarget = [];
                this.visitedNodes.clear();
                this.visitedNodes.add(`${this.x},${this.y},${this.z}`);
            }
        }

        let next: Point3D | undefined;
        
        if (this.pathToTarget.length > 0) {
            const checkNext = this.pathToTarget[0];
            const checkVal = matrix[checkNext.x * size * size + checkNext.y * size + checkNext.z];
            const stillValid = this.state === 'TRACKING' ? 
                (checkVal === types.VISITED || checkVal === types.START || checkVal === types.EXIT || checkVal === types.JELLY_PORTAL) :
                (checkVal !== types.WALL);
            
            if (stillValid) {
                next = this.pathToTarget.shift();
            } else {
                this.pathToTarget = [];
            }
        }

        if (!next) {
            if (this.state === 'TELEPORT_TRACKING') {
                next = undefined; // Wait at teleport destination
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
                    const last = this.lastPos || { x: this.x, y: this.y, z: this.z };
                    const forward = neighbors.filter(n => n.x !== last.x || n.y !== last.y || n.z !== last.z);
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

    findPathToTarget(targetPos: Point3D, matrix: Int8Array, types: any) {
        // Delegates to optimal A* in pathfinder.js using size
        const size = Math.round(Math.cbrt(matrix.length));
        const path = aStarPath(
            { x: this.x!, y: this.y!, z: this.z! },
            targetPos,
            matrix,
            size,
            types.WALL,
            this.maze.isChallengeMode ? null : this.maze.startPos
        );
        return path;
    }

    findPathToNearestUnvisited(matrix: Int8Array, types: any) {
        const size = Math.round(Math.cbrt(matrix.length));
        return bfsNearestUnvisited(
            { x: this.x!, y: this.y!, z: this.z! },
            this.visitedNodes,
            matrix,
            size,
            types,
            (cx: number, cy: number, cz: number, mat: Int8Array, t: any) => this.getValidNeighbors(mat, t, cx, cy, cz, this.state === 'TRACKING')
        );
    }

    getValidNeighbors(matrix: Int8Array, types: any, cx: number = this.x!, cy: number = this.y!, cz: number = this.z!, restrictToPlayerTrail: boolean = (this.state === 'TRACKING')) {
        const neighbors: Point3D[] = [];
        const dirs = [
            { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
            { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
            { dx: 0, dy: 0, dz: 2 }, { dx: 0, dy: 0, dz: -2 }
        ];
        const size = Math.round(Math.cbrt(matrix.length));
        
        for (const d of dirs) {
            const nx = cx + d.dx, ny = cy + d.dy, nz = cz + d.dz;
            if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size) {
                // Caçadores não podem entrar na célula de partida segura (a menos que esteja inativa)
                const startX = Math.floor(this.maze.startPos.x);
                const startY = Math.floor(this.maze.startPos.y);
                const startZ = this.maze.startPos.z;
                const isStartInactive = this.maze.inactiveTeleportPos && 
                                        this.maze.inactiveTeleportPos.x === startX && 
                                        this.maze.inactiveTeleportPos.y === startY && 
                                        this.maze.inactiveTeleportPos.z === startZ;
                if (!this.maze.isChallengeMode && nx === startX && ny === startY && nz === startZ && !isStartInactive) {
                    continue;
                }

                const cellVal = matrix[nx * size * size + ny * size + nz];
                if (cellVal === types.EXIT) {
                    continue;
                }

                if (cellVal !== types.WALL && cellVal !== 8) {
                    if (d.dz !== 0) {
                        const midZ = cz + d.dz / 2;
                        if (matrix[cx * size * size + cy * size + midZ] === types.WALL) {
                            continue; // No elevator connecting these floors on this cell
                        }
                    }
                    
                    if (restrictToPlayerTrail) {
                        const isVisited = cellVal === types.VISITED || 
                                          cellVal === types.START || 
                                          cellVal === types.EXIT ||
                                          cellVal === types.JELLY_PORTAL ||
                                          (this.maze.visitedCells && this.maze.visitedCells.has(`${nx},${ny},${nz}`));
                        if (isVisited) {
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
