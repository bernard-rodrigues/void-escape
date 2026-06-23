/**
 * pathfinder.js — Pathfinding heuristics for Void Escape
 *
 * Exports:
 *   - aStarPath(start, end, maze, size)      → {x,y,z}[] | null
 *   - aStarDistance(start, end, maze, size)  → number
 *   - bfsNearestUnvisited(start, visited, maze, size, types) → {x,y,z}[] | null
 *   - bfsProximeterDistance(start, end, maze, size)          → number
 *
 * Design notes
 * ────────────
 * A* uses a binary min-heap priority queue to avoid O(n) Array.shift().
 * The heuristic is the 3D Manhattan distance, which is admissible for a
 * unit-cost grid and therefore guarantees optimal paths.
 *
 * getProximeterDistance / getPathDistance3D used to allocate a fresh Uint8Array
 * cube on every call. The new aStarDistance reuses a single flat Int32Array
 * (gCost table) initialised to -1, and a separate Uint8Array for visited
 * tracking, both allocated once and reset only for the cells that were touched.
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
 * @param {number[][][]} maze   - 3D grid where 0 (WALL) is impassable
 * @param {number}       size   - grid side length
 * @param {number}       [wallType=0] - cell value considered a wall
 * @returns {{x:number,y:number,z:number}[]|null} path from start (exclusive) to end (inclusive), or null
 */
export function aStarPath(start, end, maze, size, wallType = 0) {
    if (start.x === end.x && start.y === end.y && start.z === end.z) return [];

    // parent map: key → {x,y,z} of the node we came from
    const cameFrom = new Map();
    // gCost map: key → best cost so far
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
            // Reconstruct path
            const path = [];
            let k = curKey;
            while (cameFrom.has(k)) {
                const n = cameFrom.get(k);
                path.push(cur.x === end.x && cur.y === end.y && cur.z === end.z && path.length === 0
                    ? { x: cur.x, y: cur.y, z: cur.z }
                    : n);
                k = `${n.x},${n.y},${n.z}`;
            }
            // Rebuild properly
            return _reconstructPath(cameFrom, curKey, start);
        }

        const curG = gCost.get(curKey);

        for (const { dx, dy, dz } of DIRS6) {
            const nx = cur.x + dx, ny = cur.y + dy, nz = cur.z + dz;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) continue;
            if (maze[nx][ny][nz] === wallType) continue;

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

    return null; // no path
}

/**
 * Reconstructs the path from the cameFrom map.
 * Returns nodes from start (exclusive) to end (inclusive).
 * @private
 */
function _reconstructPath(cameFrom, endKey, start) {
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

// ─── A* — distance only (no path reconstruction) ─────────────────────────────

/**
 * Returns the shortest path distance between two points in a 3D maze using A*.
 * More efficient than aStarPath when only the distance is needed.
 *
 * Supports an optional `maxDist` early-exit to avoid exploring the full maze
 * when only proximity checks are needed (e.g. proximeter).
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {{x:number,y:number,z:number}} end
 * @param {number[][][]} maze
 * @param {number}       size
 * @param {number}       [wallType=0]
 * @param {number}       [maxDist=Infinity] - stop and return Infinity if this threshold is exceeded
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

        // Early exit: if current best g already exceeds cap, no need to explore further
        if (curG > maxDist) return Infinity;

        if (cur.x === end.x && cur.y === end.y && cur.z === end.z) {
            return curG;
        }

        for (const { dx, dy, dz } of DIRS6) {
            const nx = cur.x + dx, ny = cur.y + dy, nz = cur.z + dz;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) continue;
            if (maze[nx][ny][nz] === wallType) continue;

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
 * all other passable cells have cost 1. Uses a 0-1 BFS (deque) which is
 * optimal for this edge-weight distribution and simpler than a full A* here.
 *
 * Replaces the previous `getProximeterDistance` BFS with early-exit support
 * built in, and avoids per-call 3D array allocation by using a Map for visited.
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {{x:number,y:number,z:number}} end
 * @param {number[][][]} maze
 * @param {number}       size
 * @param {number}       [wallType=0]
 * @param {number}       [maxDist=10]
 * @returns {number}
 */
export function proximeterDistance(start, end, maze, size, wallType = 0, maxDist = 10) {
    if (start.x === end.x && start.y === end.y && start.z === end.z) return 0;

    // Deque simulation: front pointer + array (avoid O(n) shift)
    const deque = [{ x: start.x, y: start.y, z: start.z, dist: 0 }];
    let head = 0;
    const dist = new Map();
    dist.set(`${start.x},${start.y},${start.z}`, 0);

    while (head < deque.length) {
        const cur = deque[head++];

        if (cur.dist > maxDist) continue; // early exit

        for (const { dx, dy, dz } of DIRS6) {
            const nx = cur.x + dx, ny = cur.y + dy, nz = cur.z + dz;
            if (nx < 0 || nx >= size || ny < 0 || ny >= size || nz < 0 || nz >= size) continue;
            if (maze[nx][ny][nz] === wallType) continue;

            const neighborKey = `${nx},${ny},${nz}`;
            const isShaft = nz % 2 === 0;
            const cost = isShaft ? 0 : 1;
            const nextDist = cur.dist + cost;

            if (nextDist < (dist.get(neighborKey) ?? Infinity)) {
                dist.set(neighborKey, nextDist);

                if (nx === end.x && ny === end.y && nz === end.z) return nextDist;

                if (cost === 0) {
                    // zero-cost edge: push to front (deque behaviour)
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
 * A* is not applicable here because the target is unknown in advance.
 *
 * @param {{x:number,y:number,z:number}} start
 * @param {Set<string>}  visitedNodes  - set of "x,y,z" keys already visited
 * @param {number[][][]} maze
 * @param {number}       size
 * @param {{ WALL: number }} types
 * @param {(cx:number,cy:number,cz:number,matrix:number[][][],types:object,restrict:boolean) => {x:number,y:number,z:number}[]} getNeighborsFn
 *   - caller-supplied function to get valid neighbours (respects elevator/trail rules)
 * @returns {{x:number,y:number,z:number}[]|null}
 */
export function bfsNearestUnvisited(start, visitedNodes, maze, size, types, getNeighborsFn) {
    // Use index-based queue to avoid O(n) shift
    const queue = [{ x: start.x, y: start.y, z: start.z, path: [] }];
    let head = 0;

    const seen = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => new Uint8Array(size))
    );
    seen[start.x][start.y][start.z] = 1;

    while (head < queue.length) {
        const cur = queue[head++];
        const key = `${cur.x},${cur.y},${cur.z}`;

        if (!visitedNodes.has(key)) {
            return cur.path;
        }

        const neighbors = getNeighborsFn(cur.x, cur.y, cur.z, maze, types, false);
        for (const n of neighbors) {
            if (!seen[n.x][n.y][n.z]) {
                seen[n.x][n.y][n.z] = 1;
                queue.push({ x: n.x, y: n.y, z: n.z, path: [...cur.path, n] });
            }
        }
    }

    return null;
}
