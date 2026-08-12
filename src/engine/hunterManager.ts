/**
 * HunterManager - Handles the spawn, wake, collision check, and respawn logic of Void Hunters.
 */
import { Hunter } from './hunter.js';
import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';
import type { Engine } from './engine.js';

export class HunterManager {
    engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    /**
     * Instantiates the hunters list based on maze degree.
     */
    initHunters(degree: number) {
        const count = this.engine.isSafeMode ? 0 : CONFIG.getHunterCount(degree);
        if (count === 0) return;
        
        for (let i = 1; i <= count; i++) {
            this.engine.hunters.push(new Hunter(this.engine.mazeGen, null, i));
        }
        this.engine.lastHunterMove = performance.now();
    }

    /**
     * Finds spawn positions for all sleeping hunters and wakes them up.
     */
    wakeHunters() {
        const size = this.engine.mazeGen.size;
        const candidates: { x: number; y: number; z: number }[] = [];
        const px = Math.floor(this.engine.player.x);
        const py = Math.floor(this.engine.player.y);
        const pz = this.engine.player.z;

        const startX = Math.floor(this.engine.mazeGen.startPos.x);
        const startY = Math.floor(this.engine.mazeGen.startPos.y);
        const startZ = this.engine.mazeGen.startPos.z;

        // Gather all unvisited path cells (TYPES.PATH) on playable floors (odd z indices), excluding starting safe point
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const isStartPos = (x === startX && y === startY && z === startZ);
                    if (this.engine.maze.get(x, y, z) === this.engine.mazeGen.TYPES.PATH && z % 2 !== 0 && !isStartPos) {
                        candidates.push({ x, y, z });
                    }
                }
            }
        }

        if (candidates.length === 0) {
            // Fallback: if no unvisited path cells exist, use visited ones that are not the player cell, starting cell, and are on playable floors
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    for (let z = 0; z < size; z++) {
                        const val = this.engine.maze.get(x, y, z);
                        const isStartPos = (x === startX && y === startY && z === startZ);
                        const isExit = (val === this.engine.mazeGen.TYPES.EXIT);
                        if (val !== this.engine.mazeGen.TYPES.WALL && !isExit && z % 2 !== 0 && (x !== px || y !== py || z !== pz) && !isStartPos) {
                            candidates.push({ x, y, z });
                        }
                    }
                }
            }
        }

        // Shuffle candidates using Math.random for runtime variance
        for (let i = candidates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = candidates[i];
            candidates[i] = candidates[j];
            candidates[j] = temp;
        }

        const getDist = (p1: { x: number; y: number; z: number }, p2: { x: number; y: number; z: number }) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);

        // Find a valid position for each sleeping hunter
        const spawnedPos: { x: number; y: number; z: number }[] = [];
        const sleepingHunters = this.engine.hunters.filter(h => h.state === 'SLEEP');

        let minPlayerDist = Math.max(3, Math.floor(size * 0.45));
        let minInterHunterDist = 4;

        while (spawnedPos.length < sleepingHunters.length && minPlayerDist > 0) {
            spawnedPos.length = 0;

            const filteredCandidates = candidates.filter(c => {
                const distToPlayer = getDist(c, { x: px, y: py, z: pz });
                return distToPlayer >= minPlayerDist;
            });

            for (let i = 0; i < sleepingHunters.length; i++) {
                let bestCand = null;
                for (const c of filteredCandidates) {
                    if (spawnedPos.some(s => s.x === c.x && s.y === c.y && s.z === c.z)) continue;

                    let validInterHunter = true;
                    for (const s of spawnedPos) {
                        if (getDist(c, s) < minInterHunterDist) {
                            validInterHunter = false;
                            break;
                        }
                    }

                    if (validInterHunter) {
                        bestCand = c;
                        break; // Since list is already shuffled, take the first valid one
                    }
                }

                if (bestCand) {
                    spawnedPos.push(bestCand);
                } else {
                    break;
                }
            }

            if (spawnedPos.length < sleepingHunters.length) {
                if (minInterHunterDist > 1) {
                    minInterHunterDist--;
                } else {
                    minPlayerDist--;
                }
            }
        }

        // If even then we don't have enough, assign whatever candidates we have
        if (spawnedPos.length < sleepingHunters.length) {
            for (const c of candidates) {
                if (spawnedPos.length >= sleepingHunters.length) break;
                if (!spawnedPos.some(s => s.x === c.x && s.y === c.y && s.z === c.z)) {
                    spawnedPos.push(c);
                }
            }
        }

        // Apply coordinates and change state to WANDERING
        for (let i = 0; i < sleepingHunters.length && i < spawnedPos.length; i++) {
            const hunter = sleepingHunters[i];
            const pos = spawnedPos[i];
            
            hunter.x = pos.x;
            hunter.y = pos.y;
            hunter.z = pos.z;
            hunter.visualX = pos.x;
            hunter.visualY = pos.y;
            hunter.visualZ = pos.z;
            hunter.lastPos = { x: pos.x, y: pos.y, z: pos.z };
            hunter.state = 'WANDERING';
            hunter.visitedNodes.clear();
            hunter.visitedNodes.add(`${pos.x},${pos.y},${pos.z}`);
            hunter.history = [];
        }

        if (!this.engine.suppressWakeHuntersBanner) {
            this.engine.ui.showInfoBanner(getTranslation('msgVoidHuntersDetected'));
        }
        this.engine.suppressWakeHuntersBanner = false;
        this.engine.staticMapCacheDirty = true;
        if (this.engine.isMap3DActive) {
            this.engine.build3DMap();
        }
    }

    /**
     * Respawns a single hunter away from the player.
     */
    respawnSingleHunter(hunter: Hunter) {
        const size = this.engine.mazeGen.size;
        const candidates = [];
        const px = Math.floor(this.engine.player.x);
        const py = Math.floor(this.engine.player.y);
        const pz = this.engine.player.z;

        const startX = Math.floor(this.engine.mazeGen.startPos.x);
        const startY = Math.floor(this.engine.mazeGen.startPos.y);
        const startZ = this.engine.mazeGen.startPos.z;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const isStartPos = (x === startX && y === startY && z === startZ);
                    const isExit = (this.engine.maze.get(x, y, z) === this.engine.mazeGen.TYPES.EXIT);
                    if (this.engine.maze.get(x, y, z) === this.engine.mazeGen.TYPES.PATH && z % 2 !== 0 && !isStartPos && !isExit) {
                        if (z === pz && Math.abs(x - px) + Math.abs(y - py) <= 5) continue;
                        candidates.push({ x, y, z });
                    }
                }
            }
        }

        if (candidates.length === 0) {
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    for (let z = 0; z < size; z++) {
                        const val = this.engine.maze.get(x, y, z);
                        const isStartPos = (x === startX && y === startY && z === startZ);
                        const isExit = (val === this.engine.mazeGen.TYPES.EXIT);
                        if (val !== this.engine.mazeGen.TYPES.WALL && !isExit && z % 2 !== 0 && !isStartPos && (x !== px || y !== py || z !== pz)) {
                            if (z === pz && Math.abs(x - px) + Math.abs(y - py) <= 5) continue;
                            candidates.push({ x, y, z });
                        }
                    }
                }
            }
        }

        if (candidates.length > 0) {
            const pos = candidates[Math.floor(Math.random() * candidates.length)];
            hunter.x = pos.x;
            hunter.y = pos.y;
            hunter.z = pos.z;
            hunter.visualX = pos.x;
            hunter.visualY = pos.y;
            hunter.visualZ = pos.z;
            hunter.lastPos = { x: pos.x, y: pos.y, z: pos.z };
            hunter.state = 'WANDERING';
            hunter.visitedNodes.clear();
            hunter.visitedNodes.add(`${pos.x},${pos.y},${pos.z}`);
            hunter.history = [];
            hunter.respawnThresholdPercentage = null;
            this.engine.staticMapCacheDirty = true;
            this.engine.triggerSave();
        }
    }

    /**
     * Respawns all dying hunters.
     */
    respawnDyingHunters() {
        const size = this.engine.mazeGen.size;
        const candidates = [];
        const px = Math.floor(this.engine.player.x);
        const py = Math.floor(this.engine.player.y);
        const pz = this.engine.player.z;

        const startX = Math.floor(this.engine.mazeGen.startPos.x);
        const startY = Math.floor(this.engine.mazeGen.startPos.y);
        const startZ = this.engine.mazeGen.startPos.z;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const isStartPos = (x === startX && y === startY && z === startZ);
                    const isExit = (this.engine.maze.get(x, y, z) === this.engine.mazeGen.TYPES.EXIT);
                    if (this.engine.maze.get(x, y, z) === this.engine.mazeGen.TYPES.PATH && z % 2 !== 0 && !isStartPos && !isExit) {
                        if (z === pz && Math.abs(x - px) + Math.abs(y - py) <= 5) continue;
                        candidates.push({ x, y, z });
                    }
                }
            }
        }

        if (candidates.length === 0) {
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    for (let z = 0; z < size; z++) {
                        const val = this.engine.maze.get(x, y, z);
                        const isStartPos = (x === startX && y === startY && z === startZ);
                        const isExit = (val === this.engine.mazeGen.TYPES.EXIT);
                        if (val !== this.engine.mazeGen.TYPES.WALL && !isExit && z % 2 !== 0 && !isStartPos && (x !== px || y !== py || z !== pz)) {
                            if (z === pz && Math.abs(x - px) + Math.abs(y - py) <= 5) continue;
                            candidates.push({ x, y, z });
                        }
                    }
                }
            }
        }

        for (let i = candidates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
        }

        let spawnIdx = 0;
        for (const hunter of this.engine.dyingHunters) {
            if (spawnIdx < candidates.length) {
                const pos = candidates[spawnIdx++];
                hunter.x = pos.x;
                hunter.y = pos.y;
                hunter.z = pos.z;
                hunter.visualX = pos.x;
                hunter.visualY = pos.y;
                hunter.visualZ = pos.z;
                hunter.lastPos = { x: pos.x, y: pos.y, z: pos.z };
                hunter.state = 'WANDERING';
                hunter.visitedNodes.clear();
                hunter.visitedNodes.add(`${pos.x},${pos.y},${pos.z}`);
                hunter.history = [];
                hunter.respawnThresholdPercentage = null;
            }
        }
    }

    /**
     * Checks if the player is in the same cell as a active hunter.
     */
    checkHunterCollision() {
        if (this.engine.deathAnimation && this.engine.deathAnimation.active) return;

        const px = Math.floor(this.engine.player.x);
        const py = Math.floor(this.engine.player.y);
        const pz = this.engine.player.z;

        // Ignora colisão se o jogador estiver no ponto seguro de partida (a menos que esteja inativo)
        const startGridX = Math.floor(this.engine.mazeGen.startPos.x);
        const startGridY = Math.floor(this.engine.mazeGen.startPos.y);
        const startGridZ = this.engine.mazeGen.startPos.z;
        const isStartInactive = this.engine.inactiveTeleportPos && 
                                this.engine.inactiveTeleportPos.x === startGridX && 
                                this.engine.inactiveTeleportPos.y === startGridY && 
                                this.engine.inactiveTeleportPos.z === startGridZ;
        if (px === startGridX && py === startGridY && pz === startGridZ && !isStartInactive) {
            return;
        }

        for (const hunter of this.engine.hunters) {
            if (hunter.state === 'SLEEP' || hunter.state === 'DEAD_BY_JELLY') continue;
            if (hunter.x === px && hunter.y === py && hunter.z === pz) {
                // Trava o caçador na posição atual
                hunter.visualX = hunter.x;
                hunter.visualY = hunter.y;
                hunter.visualZ = hunter.z;
                this.engine.isGameOver = true;
                this.engine.deathsCount++;
                this.engine.hideGameUI(); // Desativa o mapa 3D se ativo, controles etc.

                this.engine.ui.showInfoBanner(getTranslation('msgKeyDropped'));

                this.engine.deathAnimation = {
                    active: true,
                    hunter: hunter,
                    playerPos: { x: this.engine.player.x, y: this.engine.player.y, z: this.engine.player.z },
                    elapsed: 0,
                    duration: 1.8,
                    screenFilled: false,
                    reversing: false,
                    delayElapsed: 0,
                    delayDuration: 1.5,
                    glitchElapsed: 0,
                    glitchDuration: 1.5,
                    uiFade: 0,
                    uiTriggered: false
                };
                return;
            }
        }
    }
}
