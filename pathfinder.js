/**
 * pathfinder.js — Pathfinding heuristics for Void Escape (optimized with flat arrays)
 */

// ─── Min-heap (priority queue) ────────────────────────────────────────────────

class MinHeap {
    constructor() {
        /** @type {{ f: number, node: {x:number,y:number,z:number} }[]} */
        this._data = [];
    }

    get size() { return this._data.length; }

    push(item) {
        this._data.push(item);
        this._bubbleUp(this._data.length - 1);
    }

    pop() {
        const top = this._data[0];
        const last = this._data.pop();
        if (this._data.length > 0) {
            this._data[0] = last;
            this._siftDown(0);
        }
        return top;
    }

    _bubbleUp(i) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (this._data[parent].f <= this._data[i].f) break;
            [this._data[parent], this._data[i]] = [this._data[i], this._data[parent]];
            i = parent;
        }
    }

    _siftDown(i) {
        const n = this._data.length;
        while (true) {
            let smallest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && this._data[l].f < this._data[smallest].f) smallest = l;
            if (r < n && this._data[r].f < this._data[smallest].f) smallest = r;
            if (smallest === i) break;
            [this._data[smallest], this._data[i]] = [this._data[i], this._data[smallest]];
            i = smallest;
        }
    }
}

// ─── Shared direction vectors ──────────────────────────────────────────────────

const DIRS6 = [
    { dx: 1, dy: 0, dz: 0 }, { dx: -1, dy: 0, dz: 0 },
    { dx: 0, dy: 1, dz: 0 }, { dx: 0, dy: -1, dz: 0 },
    { dx: 0, dy: 0, dz: 1 }, { dx: 0, dy: 0, dz: -1 },
];

/** 3D Manhattan distance — admissible heuristic for unit-cost grids. */
function heuristic(ax, ay, az, bx, by, bz) {
    return Math.abs(ax - bx) + Math.abs(ay - by) + Math.abs(az - bz);
}

// ─── A* — full path ────────────────────────────────────────────────────────────

/**
 * Finds the shortest path between two points in a 3D maze using A*.
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {{x:number,y:number,z:number}} end
 * @param {Int8Array}    maze   - 1D flat grid where wallType is impassable
 * @param {number}       size   - grid side length
 * @param {number}       [wallType=0] - cell value considered a wall
 * @returns {{x:number,y:number,z:number}[]|null} path from start (exclusive) to end (inclusive), or null
 */
export function aStarPath(start, end, maze, size, wallType = 0) {
    if (start.x === end.x && start.y === end.y && start.z === end.z) return [];

    const cameFrom = new Map();
    const gCost = new Map();

    const startKey = `${start.x},${start.y},${start.z}`;
    gCost.set(startKey, 0);

    const heap = new MinHeap();
    heap.push({
        f: heuristic(start.x, start.y, start.z, end.x, end.y, end.z),
        node: start
    });

    while (heap.size > 0) {
        const { node: cur } = heap.pop();
        const curKey = `${cur.x},${cur.y},${cur.z}`;

        if (cur.x === end.x && cur.y === end.y && cur.z === end.z) {
            return _reconstructPath(cameFrom, curKey);
        }

        const curG = gCost.get(curKey);

        for (const { dx, dy, dz } of DIRS6) {
            const nx = cur.x + dx, ny = cur.y + dy, nz = cur.z + dz;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) continue;
            
            // 1D Array Access
            if (maze[nx * size * size + ny * size + nz] === wallType) continue;

            const neighborKey = `${nx},${ny},${nz}`;
            const tentativeG = curG + 1;

            if (tentativeG < (gCost.get(neighborKey) ?? Infinity)) {
                cameFrom.set(neighborKey, cur);
                gCost.set(neighborKey, tentativeG);
                heap.push({
                    f: tentativeG + heuristic(nx, ny, nz, end.x, end.y, end.z),
                    node: { x: nx, y: ny, z: nz }
                });
            }
        }
    }

    return null;
}

/**
 * Reconstructs the path from the cameFrom map.
 * @private
 */
function _reconstructPath(cameFrom, endKey) {
    const path = [];
    let k = endKey;
    while (cameFrom.has(k)) {
        const n = cameFrom.get(k);
        const [nx, ny, nz] = k.split(',').map(Number);
        path.push({ x: nx, y: ny, z: nz });
        k = `${n.x},${n.y},${n.z}`;
    }
    path.reverse();
    return path;
}

// ─── A* — distance only ─────────────────────────────

/**
 * Returns the shortest path distance between two points in a 3D maze using A*.
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {{x:number,y:number,z:number}} end
 * @param {Int8Array}    maze
 * @param {number}       size
 * @param {number}       [wallType=0]
 * @param {number}       [maxDist=Infinity]
 * @returns {number} distance, or Infinity if unreachable / beyond maxDist
 */
export function aStarDistance(start, end, maze, size, wallType = 0, maxDist = Infinity) {
    if (start.x === end.x && start.y === end.y && start.z === end.z) return 0;

    const gCost = new Map();
    const startKey = `${start.x},${start.y},${start.z}`;
    gCost.set(startKey, 0);

    const heap = new MinHeap();
    heap.push({
        f: heuristic(start.x, start.y, start.z, end.x, end.y, end.z),
        node: start
    });

    while (heap.size > 0) {
        const { node: cur } = heap.pop();
        const curKey = `${cur.x},${cur.y},${cur.z}`;
        const curG = gCost.get(curKey);

        if (curG > maxDist) return Infinity;

        if (cur.x === end.x && cur.y === end.y && cur.z === end.z) {
            return curG;
        }

        for (const { dx, dy, dz } of DIRS6) {
            const nx = cur.x + dx, ny = cur.y + dy, nz = cur.z + dz;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) continue;
            
            // 1D Array Access
            if (maze[nx * size * size + ny * size + nz] === wallType) continue;

            const neighborKey = `${nx},${ny},${nz}`;
            const tentativeG = curG + 1;

            if (tentativeG < (gCost.get(neighborKey) ?? Infinity)) {
                gCost.set(neighborKey, tentativeG);
                heap.push({
                    f: tentativeG + heuristic(nx, ny, nz, end.x, end.y, end.z),
                    node: { x: nx, y: ny, z: nz }
                });
            }
        }
    }

    return Infinity;
}

// ─── A* — proximeter variant (0-1 cost: shafts are free) ─────────────────────

/**
 * Proximeter-aware distance: elevator shaft cells (even z-index) have cost 0,
 * all other passable cells have cost 1. Uses a 0-1 BFS (deque).
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {{x:number,y:number,z:number}} end
 * @param {Int8Array}    maze
 * @param {number}       size
 * @param {number}       [wallType=0]
 * @param {number}       [maxDist=10]
 * @returns {number}
 */
export function proximeterDistance(start, end, maze, size, wallType = 0, maxDist = 10) {
    if (start.x === end.x && start.y === end.y && start.z === end.z) return 0;

    const deque = [{ x: start.x, y: start.y, z: start.z, dist: 0 }];
    let head = 0;
    const dist = new Map();
    dist.set(`${start.x},${start.y},${start.z}`, 0);

    while (head < deque.length) {
        const cur = deque[head++];

        if (cur.dist > maxDist) continue;

        for (const { dx, dy, dz } of DIRS6) {
            const nx = cur.x + dx, ny = cur.y + dy, nz = cur.z + dz;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) continue;
            
            // 1D Array Access
            if (maze[nx * size * size + ny * size + nz] === wallType) continue;

            const neighborKey = `${nx},${ny},${nz}`;
            const isShaft = nz % 2 === 0;
            const cost = isShaft ? 0 : 1;
            const nextDist = cur.dist + cost;

            if (nextDist < (dist.get(neighborKey) ?? Infinity)) {
                dist.set(neighborKey, nextDist);

                if (nx === end.x && ny === end.y && nz === end.z) return nextDist;

                if (cost === 0) {
                    deque.splice(head, 0, { x: nx, y: ny, z: nz, dist: nextDist });
                } else {
                    deque.push({ x: nx, y: ny, z: nz, dist: nextDist });
                }
            }
        }
    }

    return Infinity;
}

// ─── BFS — nearest unvisited (explorer) ───────────────────────────────────────

/**
 * BFS to find the shortest path to the nearest cell not present in `visitedNodes`.
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {Set<string>}  visitedNodes
 * @param {Int8Array}    maze
 * @param {number}       size
 * @param {{ WALL: number }} types
 * @param {(cx:number,cy:number,cz:number,matrix:Int8Array,types:object,restrict:boolean) => {x:number,y:number,z:number}[]} getNeighborsFn
 * @returns {{x:number,y:number,z:number}[]|null}
 */
export function bfsNearestUnvisited(start, visitedNodes, maze, size, types, getNeighborsFn) {
    const queue = [{ x: start.x, y: start.y, z: start.z, path: [] }];
    let head = 0;

    // Optimized: contiguous 1D array for tracking visited cells in current search
    const seen = new Uint8Array(size * size * size);
    seen[start.x * size * size + start.y * size + start.z] = 1;

    while (head < queue.length) {
        const cur = queue[head++];
        const key = `${cur.x},${cur.y},${cur.z}`;

        if (!visitedNodes.has(key)) {
            return cur.path;
        }

        const neighbors = getNeighborsFn(cur.x, cur.y, cur.z, maze, types, false);
        for (const n of neighbors) {
            const nIdx = n.x * size * size + n.y * size + n.z;
            if (!seen[nIdx]) {
                seen[nIdx] = 1;
                queue.push({ x: n.x, y: n.y, z: n.z, path: [...cur.path, n] });
            }
        }
    }

    return null;
}
