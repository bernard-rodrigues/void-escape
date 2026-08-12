/**
 * CanvasRenderer - Handles the 2D canvas map rendering, isometric rendering, shadows, and cache.
 */
import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';
import { Hunter } from './hunter.js';
import { saveGame } from './save.js';
import type { Engine } from './engine.js';

export class CanvasRenderer {
    engine: Engine;

    staticMapCacheCanvas: HTMLCanvasElement;
    staticMapCacheCtx: CanvasRenderingContext2D | null = null;
    staticMapCacheDirty: boolean = true;
    fullyRevealedCells = new Set<string>();
    revealedCellsAnimation = new Map<string, number>();

    constructor(engine: Engine) {
        this.engine = engine;
        this.staticMapCacheCanvas = document.createElement('canvas');
        this.staticMapCacheCtx = this.staticMapCacheCanvas.getContext('2d');
    }

    /**
     * Draws the 2D map overlay, including notifications, zoom transitions, and vignette/retro filters.
     */
    draw2DMap(dt = 0.016) {
        if (this.engine.deathAnimation && this.engine.deathAnimation.active) {
            if (this.engine.deathAnimation.delayElapsed < this.engine.deathAnimation.delayDuration) {
                // Phase 0: Pre-death delay (key jumping, sprite flashing, message showing, time frozen)
                this.engine.deathAnimation.delayElapsed += dt;
                this.engine.updateNotification(dt);
            } else if (!this.engine.deathAnimation.screenFilled) {
                // Phase 1: Corruption overlay expands
                this.engine.deathAnimation.elapsed += dt;
                this.engine.updateNotification(dt);
                if (this.engine.deathAnimation.elapsed >= this.engine.deathAnimation.duration) {
                    this.engine.deathAnimation.screenFilled = true;
                    
                    // Clear the death/key drop notification so it doesn't linger after respawn!
                    this.engine.activeNotification = null;
                    this.engine.notificationQueue = [];
                    
                    // --- TRANSITION RUNNING BEHIND BLACKOUT ---
                    
                    // 1. Drop a key at the player's death position (or relocate it if on a Jelly Portal)
                    const deathX = Math.floor(this.engine.deathAnimation.playerPos.x);
                    const deathY = Math.floor(this.engine.deathAnimation.playerPos.y);
                    const deathZ = this.engine.deathAnimation.playerPos.z;
                    const deathVal = this.engine.maze.get(deathX, deathY, deathZ);
                    
                    if (deathVal === this.engine.mazeGen.TYPES.JELLY_PORTAL) {
                        const size = this.engine.mazeGen.size;
                        const candidates = [];
                        const startX = Math.floor(this.engine.mazeGen.startPos.x);
                        const startY = Math.floor(this.engine.mazeGen.startPos.y);
                        const startZ = this.engine.mazeGen.startPos.z;

                        for (let x = 0; x < size; x++) {
                            for (let y = 0; y < size; y++) {
                                for (let z = 0; z < size; z++) {
                                    const val = this.engine.maze.get(x, y, z);
                                    const isStart = (x === startX && y === startY && z === startZ);
                                    const isDeathPos = (x === deathX && y === deathY && z === deathZ);
                                    if ((val === this.engine.mazeGen.TYPES.PATH || val === this.engine.mazeGen.TYPES.VISITED) && z % 2 !== 0 && !isStart && !isDeathPos) {
                                        candidates.push({ x, y, z });
                                    }
                                }
                            }
                        }

                        if (candidates.length > 0) {
                            const chosen = candidates[Math.floor(Math.random() * candidates.length)];
                            this.engine.maze.set(chosen.x, chosen.y, chosen.z, this.engine.mazeGen.TYPES.KEY);
                        } else {
                            this.engine.maze.set(deathX, deathY, deathZ, this.engine.mazeGen.TYPES.KEY);
                        }
                    } else {
                        this.engine.maze.set(deathX, deathY, deathZ, this.engine.mazeGen.TYPES.KEY);
                    }
                    
                    this.engine.totalKeys++;
                    this.engine.ui.updateKeysHUD(this.engine.keysCollected, this.engine.totalKeys);
                    this.engine.staticMapCacheDirty = true;
                    
                    // 2. Teleport player to the last visited save point (or startPos)
                    let targetX = this.engine.mazeGen.startPos.x;
                    let targetY = this.engine.mazeGen.startPos.y;
                    let targetZ = this.engine.mazeGen.startPos.z;
                    
                    if (this.engine.lastSavePos) {
                        targetX = this.engine.lastSavePos.x;
                        targetY = this.engine.lastSavePos.y;
                        targetZ = this.engine.lastSavePos.z;
                    }
                    
                    this.engine.player.x = targetX;
                    this.engine.player.y = targetY;
                    this.engine.player.z = targetZ;
                    this.engine.activeMapFloor = targetZ;
                    this.engine.visualActiveFloor = targetZ;
                    this.engine.lastPlayerCell = { x: Math.floor(targetX), y: Math.floor(targetY), z: targetZ };
                    
                    // 3. Re-initialize / Reset Hunters
                    this.engine.hunters = [];
                    if (this.engine.isTutorialMode) {
                        const useFixed = this.engine.currentTutorialStage &&
                                         this.engine.currentTutorialStage.hunterBehavior &&
                                         this.engine.currentTutorialStage.hunterBehavior.fixed;
                        
                        if (this.engine.mazeGen.tutorialHunterSpawns && !this.engine.isSafeMode) {
                            let hunterId = 1;
                            for (const hPos of this.engine.mazeGen.tutorialHunterSpawns) {
                                const hunter = new Hunter(this.engine.mazeGen, { x: hPos.x, y: hPos.y, z: hPos.z }, hunterId++);
                                if (!useFixed) {
                                    // Relocate to a random valid path cell since fixed is false
                                    const candidates = [];
                                    const size = this.engine.mazeGen.size;
                                    const startX = Math.floor(this.engine.mazeGen.startPos.x);
                                    const startY = Math.floor(this.engine.mazeGen.startPos.y);
                                    const startZ = this.engine.mazeGen.startPos.z;
                                    
                                    for (let x = 0; x < size; x++) {
                                        for (let y = 0; y < size; y++) {
                                            for (let z = 0; z < size; z++) {
                                                const val = this.engine.maze.get(x, y, z);
                                                const isStart = (x === startX && y === startY && z === startZ);
                                                const isExit = (val === this.engine.mazeGen.TYPES.EXIT);
                                                if (val !== this.engine.mazeGen.TYPES.WALL && !isExit && !isStart && (x !== Math.floor(targetX) || y !== Math.floor(targetY) || z !== targetZ)) {
                                                    candidates.push({ x, y, z });
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
                                        hunter.visitedNodes.clear();
                                        hunter.visitedNodes.add(`${pos.x},${pos.y},${pos.z}`);
                                    }
                                }
                                this.engine.hunters.push(hunter);
                            }
                        }
                    } else {
                        this.engine.hunterManager.initHunters(this.engine.degree);
                    }
                    this.engine.suppressWakeHuntersBanner = true;
                    
                    // 4. Update the saved state in localStorage automatically
                    if (!this.engine.isTutorialMode) {
                        saveGame(this.engine);
                    }
                    
                    // 5. Start reversing the animation
                    this.engine.deathAnimation.reversing = true;
                }
            } else if (this.engine.deathAnimation.reversing) {
                // Phase 3: Corruption shrinking
                this.engine.deathAnimation.elapsed -= dt;
                if (this.engine.deathAnimation.elapsed <= 0) {
                    // --- END TRANSITION ---
                    this.engine.deathAnimation = null;
                    this.engine.isGameOver = false;
                    this.engine.ui.initGameUI(this.engine.isSafeMode);
                    if (this.engine.ui.uiMobileMap) {
                        (this.engine.ui.uiMobileMap as HTMLButtonElement).disabled = false;
                    }
                    this.engine.ui.showInfoBanner(getTranslation('msgPlayerRespawn'));
                }
            }
        } else {
            this.engine.updateNotification(dt);
        }

        const canvas = this.engine.canvas;
        const ctx = this.engine.ctx;
        if (!canvas || !ctx) return;

        // Process floor transition progress
        if (this.engine.floorTransition) {
            this.engine.floorTransition.progress += dt / this.engine.floorTransition.duration;
            if (this.engine.floorTransition.progress >= 1.0) {
                this.engine.floorTransition = null;
            }
        }

        // Process zoomVisibleCells interpolation
        const size = this.engine.mazeGen.size;
        const targetVisible = this.engine.isZoomActive ? 11 : size;
        if (this.engine.zoomVisibleCells === undefined) {
            this.engine.zoomVisibleCells = targetVisible;
        } else {
            this.engine.zoomVisibleCells += (targetVisible - this.engine.zoomVisibleCells) * (1 - Math.exp(-12 * dt));
            if (Math.abs(this.engine.zoomVisibleCells - targetVisible) < 0.01) {
                this.engine.zoomVisibleCells = targetVisible;
            }
        }

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (this.engine.floorTransition) {
            const t = this.engine.floorTransition.progress;
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const isUp = this.engine.floorTransition.delta > 0;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let scaleOld, scaleNew;
            if (isUp) {
                scaleOld = 1.0 - 0.2 * t;
                scaleNew = 1.2 - 0.2 * t;
            } else {
                scaleOld = 1.0 + 0.2 * t;
                scaleNew = 0.8 + 0.2 * t;
            }

            // Draw old floor
            ctx.save();
            ctx.globalAlpha = 1 - t;
            ctx.translate(cx, cy);
            ctx.scale(scaleOld, scaleOld);
            ctx.drawImage(this.engine.floorTransition.canvasOld, -cx, -cy);
            ctx.restore();

            // Draw new floor
            ctx.save();
            ctx.globalAlpha = t;
            ctx.translate(cx, cy);
            ctx.scale(scaleNew, scaleNew);
            ctx.drawImage(this.engine.floorTransition.canvasNew, -cx, -cy);
            ctx.restore();
        } else {
            this.renderMapToContext(ctx, this.engine.activeMapFloor);
        }

        // Draw vignette gradient mask
        const grad = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, canvas.width * 0.4,
            canvas.width / 2, canvas.height / 2, canvas.width * 0.72
        );
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, 'rgba(0,0,0,0.88)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw retro scanning line grid
        ctx.fillStyle = 'rgba(255,255,255,0.015)';
        for (let y = 0; y < canvas.height; y += 4) {
            ctx.fillRect(0, y, canvas.width, 2);
        }
    }

    /**
     * Renders elements (floors, shadow layers, players, portals) onto Canvas Context.
     */
    renderMapToContext(ctx: CanvasRenderingContext2D, z: number) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const size = this.engine.mazeGen.size;
        const useZoom = size > 11;
        const cellSize = useZoom ? ctx.canvas.width / 11 : ctx.canvas.width / size;
        let px = this.engine.player.x;
        let py = this.engine.player.y;
        
        let tScaleX = 1.0;
        let tScaleY = 1.0;
        let tOpacity = 1.0;

        if (this.engine.teleportAnim && this.engine.teleportAnim.active) {
            const anim = this.engine.teleportAnim;
            const progress = Math.min(1.0, anim.elapsed / anim.duration);
            if (anim.stage === 'OUT') {
                px = anim.startX;
                py = anim.startY;
                tScaleX = 1.0 - progress * 0.9;
                tScaleY = 1.0 + progress * 2.0;
                tOpacity = 1.0 - progress;
            } else {
                px = anim.targetX;
                py = anim.targetY;
                tScaleX = progress;
                tScaleY = 3.0 - progress * 2.0;
                tOpacity = progress;
            }
        }
        const pCellX = Math.floor(px);
        const pCellY = Math.floor(py);

        let isZooming = useZoom || this.engine.isZoomTransitionActive;
        let visibleCells = useZoom ? this.engine.zoomVisibleCells : size;
        
        if (this.engine.isZoomTransitionActive) {
            const duration = 2.0;
            const progress = Math.min(1.0, (duration - this.engine.zoomTransitionTimer) / duration);
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
            const easeProgress = easeOutCubic(progress);
            
            const startVisible = 3.0;
            const targetVisible = useZoom ? 11.0 : size;
            visibleCells = startVisible + (targetVisible - startVisible) * easeProgress;
        }

        if (isZooming) {
            ctx.save();
            const scaleFactor = (useZoom ? 11 : size) / visibleCells;
            const half = visibleCells / 2;

            let camX = px;
            let camY = py;
            if (camX < half) camX = half;
            if (camX > size - half) camX = size - half;
            if (camY < half) camY = half;
            if (camY > size - half) camY = size - half;

            const centerX = ctx.canvas.width / 2;
            const centerY = ctx.canvas.height / 2;
            
            ctx.translate(centerX, centerY);
            ctx.scale(scaleFactor, scaleFactor);
            ctx.translate(-camX * cellSize, -camY * cellSize);
        }

        const expectedCacheWidth = useZoom ? size * cellSize : this.engine.canvas.width;
        const expectedCacheHeight = useZoom ? size * cellSize : this.engine.canvas.height;
        if (this.staticMapCacheDirty || 
            this.staticMapCacheCanvas.width !== expectedCacheWidth || 
            this.staticMapCacheCanvas.height !== expectedCacheHeight ||
            this.engine.jellyPortalFreezeTimer > 0) {
            this.updateStaticMapCache(z);
        }
        ctx.drawImage(this.staticMapCacheCanvas, 0, 0);

        // Draw Hunters
        for (const h of this.engine.hunters) {
            if (h.state === 'SLEEP') continue;
            
            const hz = h.visualZ !== null ? h.visualZ : h.z;
            const hx = h.visualX !== null ? h.visualX : h.x;
            const hy = h.visualY !== null ? h.visualY : h.y;
            if (hz === null || hx === null || hy === null) continue;

            const distZ = Math.abs(hz - z);
            const scaleFactor = Math.max(0, 1 - distZ);
            if (scaleFactor <= 0) continue;

            const origX = h.x !== null ? h.x : hx;
            const origY = h.y !== null ? h.y : hy;
            const dx = origX - hx;
            const dy = origY - hy;
            const stepDist = Math.sqrt(dx * dx + dy * dy);
            const p = Math.max(0, Math.min(1, 1 - stepDist));

            const trails = [];

            if (h.lastPos && (h.lastPos.x !== origX || h.lastPos.y !== origY)) {
                if (h.lastPos.z === z) {
                    const sizeFactor = 0.95 - p * 0.47;
                    const opacityFactor = 0.40 - p * 0.20;
                    trails.push({
                        pos: h.lastPos,
                        sizeFactor,
                        opacityFactor,
                        age: 1
                    });
                }
            }

            if (h.history && h.history.length === 2) {
                const oldestPos = h.history[0];
                if (oldestPos.z === z) {
                    const sizeFactor = 0.48 * (1 - p);
                    const opacityFactor = 0.20 * (1 - p);
                    if (sizeFactor > 0.01) {
                        trails.push({
                            pos: oldestPos,
                            sizeFactor,
                            opacityFactor,
                            age: 2
                        });
                    }
                }
            }

            trails.forEach((trail) => {
                if (h.lowCanvas) {
                    const cx = trail.pos.x * cellSize + cellSize / 2;
                    const cy = trail.pos.y * cellSize + cellSize / 2;
                    const drawSize = cellSize * trail.sizeFactor * scaleFactor;

                    const time = h.jellyTime - trail.age * 0.2;
                    const skewX = Math.sin(time) * 6; 
                    const skewY = Math.cos(time * 0.7) * 4;
                    const scaleX = 1 + Math.sin(time * 1.2) * 0.06;
                    const scaleY = 1 + Math.cos(time * 0.8) * 0.06;
                    
                    const radX = skewX * Math.PI / 180;
                    const radY = skewY * Math.PI / 180;
                    ctx.save();
                    ctx.globalAlpha = trail.opacityFactor;
                    ctx.translate(cx, cy);
                    ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                    
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(h.lowCanvas, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
                    ctx.restore();
                }
            });

            if (h.lowCanvas) {
                const cx = hx * cellSize + cellSize / 2;
                const cy = hy * cellSize + cellSize / 2;
                const drawSize = cellSize * 0.95 * scaleFactor;

                const time = h.jellyTime;
                const skewX = Math.sin(time) * 6; 
                const skewY = Math.cos(time * 0.7) * 4;
                const scaleX = 1 + Math.sin(time * 1.2) * 0.06;
                const scaleY = 1 + Math.cos(time * 0.8) * 0.06;
                
                const radX = skewX * Math.PI / 180;
                const radY = skewY * Math.PI / 180;

                ctx.save();
                let shadowOpacity = 0.35;
                let currentDrawSize = drawSize;
                if (h.state === 'DYING') {
                    const progress = Math.min(1.0, this.engine.jellyPortalResetElapsed / this.engine.jellyPortalResetDuration);
                    currentDrawSize = drawSize * (1.0 - progress);
                    shadowOpacity = 0.35 * (1.0 - progress);
                }
                const shadowOffsetX = -cellSize * 0.12 * scaleFactor;
                const shadowOffsetY = -cellSize * 0.12 * scaleFactor;
                ctx.translate(cx + shadowOffsetX, cy + shadowOffsetY);
                ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                
                ctx.filter = `brightness(0) blur(1px) opacity(${shadowOpacity})`;
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(h.lowCanvas, -currentDrawSize / 2, -currentDrawSize / 2, currentDrawSize, currentDrawSize);
                ctx.restore();

                ctx.save();
                let currentOpacity = 1.0;
                if (h.state === 'DYING') {
                    const progress = Math.min(1.0, this.engine.jellyPortalResetElapsed / this.engine.jellyPortalResetDuration);
                    currentDrawSize = drawSize * (1.0 - progress);
                    currentOpacity = 1.0 - progress;
                    const glitchX = (Math.random() - 0.5) * cellSize * 0.15;
                    const glitchY = (Math.random() - 0.5) * cellSize * 0.15;
                    ctx.translate(glitchX, glitchY);
                }
                ctx.globalAlpha = currentOpacity;
                ctx.translate(cx, cy);
                ctx.transform(scaleX, Math.tan(radY), Math.tan(radX), scaleY, 0, 0);
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(h.lowCanvas, -currentDrawSize / 2, -currentDrawSize / 2, currentDrawSize, currentDrawSize);
                ctx.restore();
            }
        }

        // Draw Player
        if (!this.engine.deathAnimation || !this.engine.deathAnimation.screenFilled) {
            const stateKey = `${this.engine.playerVertical}_${this.engine.playerSide}`;
            const img = this.engine.mageImages[stateKey];
            
            const cx = px * cellSize;
            const cy = py * cellSize;

            let playerOpacity = 1.0;
            if (this.engine.deathAnimation && this.engine.deathAnimation.active) {
                const flashInterval = 120;
                const show = Math.floor(Date.now() / flashInterval) % 2 === 0;
                if (!show) {
                    playerOpacity = 0.2;
                }
            }

            const ox = CONFIG.PLAYER_SHADOW_OFFSET_X !== undefined ? CONFIG.PLAYER_SHADOW_OFFSET_X : -0.28;
            const oy = CONFIG.PLAYER_SHADOW_OFFSET_Y !== undefined ? CONFIG.PLAYER_SHADOW_OFFSET_Y : -0.28;
            const shadowX = cx + cellSize * ox;
            const shadowY = cy + cellSize * oy;

            ctx.save();
            ctx.beginPath();
            const swFactor = CONFIG.PLAYER_SHADOW_WIDTH_FACTOR !== undefined ? CONFIG.PLAYER_SHADOW_WIDTH_FACTOR : 0.45;
            const shFactor = CONFIG.PLAYER_SHADOW_HEIGHT_FACTOR !== undefined ? CONFIG.PLAYER_SHADOW_HEIGHT_FACTOR : 0.30;
            const shadowW = cellSize * swFactor;
            const shadowH = cellSize * shFactor;
            ctx.ellipse(shadowX, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fill();
            ctx.restore();

            const drawFlatAura = (acx: number, acy: number, progress: number, aOpacity: number, layer: 'BACK' | 'FRONT') => {
                const maxH = cellSize * 1.2;
                const h = maxH * progress;
                if (h <= 0) return;

                const time = this.engine.auraTime || 0;
                const r = cellSize * 0.45;

                ctx.save();
                ctx.globalAlpha = aOpacity * 0.7;

                const colorAura = 'rgba(0, 220, 255, 0.4)';
                const colorAuraBright = 'rgba(0, 255, 255, 0.8)';

                const wallGrad = ctx.createLinearGradient(acx, acy, acx, acy - h);
                wallGrad.addColorStop(0, `rgba(0, 220, 255, ${aOpacity * 0.35})`);
                wallGrad.addColorStop(0.3, `rgba(0, 200, 255, ${aOpacity * 0.25})`);
                wallGrad.addColorStop(1, `rgba(0, 150, 255, 0.0)`);

                if (layer === 'BACK') {
                    ctx.beginPath();
                    ctx.arc(acx, acy, r, Math.PI, 0, false);
                    ctx.strokeStyle = colorAura;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    ctx.fillStyle = wallGrad;
                    ctx.beginPath();
                    ctx.rect(acx - r, acy - h, r * 2, h);
                    ctx.fill();

                    for (let i = 0; i < 3; i++) {
                        const ringProgress = ((time * 0.8 + i / 3) % 1.0) * progress;
                        const ringY = acy - maxH * ringProgress;
                        if (ringY > acy - h) {
                            const ringOpacity = (1.0 - ringProgress) * aOpacity * 0.5;
                            ctx.beginPath();
                            ctx.arc(acx, ringY, r, Math.PI, 0, false);
                            ctx.strokeStyle = `rgba(0, 255, 255, ${ringOpacity})`;
                            ctx.lineWidth = 1.0;
                            ctx.stroke();
                        }
                    }

                    const topOpacity = (1.0 - progress * 0.3) * aOpacity * 0.8;
                    ctx.beginPath();
                    ctx.arc(acx, acy - h, r, Math.PI, 0, false);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${topOpacity})`;
                    ctx.stroke();
                } else {
                    ctx.beginPath();
                    ctx.arc(acx, acy, r, 0, Math.PI, false);
                    ctx.strokeStyle = colorAuraBright;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    const frontWallGrad = ctx.createLinearGradient(acx, acy, acx, acy - h);
                    frontWallGrad.addColorStop(0, `rgba(0, 255, 255, ${aOpacity * 0.2})`);
                    frontWallGrad.addColorStop(1, `rgba(0, 255, 255, 0.0)`);
                    ctx.fillStyle = frontWallGrad;
                    ctx.beginPath();
                    ctx.rect(acx - r, acy - h, r * 2, h);
                    ctx.fill();

                    const sideGrad = ctx.createLinearGradient(acx, acy, acx, acy - h);
                    sideGrad.addColorStop(0, `rgba(0, 255, 255, ${aOpacity * 0.7})`);
                    sideGrad.addColorStop(1, `rgba(0, 255, 255, 0.0)`);
                    ctx.strokeStyle = sideGrad;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(acx - r, acy);
                    ctx.lineTo(acx - r, acy - h);
                    ctx.moveTo(acx + r, acy);
                    ctx.lineTo(acx + r, acy - h);
                    ctx.stroke();

                    for (let i = 0; i < 3; i++) {
                        const ringProgress = ((time * 0.8 + i / 3) % 1.0) * progress;
                        const ringY = acy - maxH * ringProgress;
                        if (ringY > acy - h) {
                            const ringOpacity = (1.0 - ringProgress) * aOpacity * 0.7;
                            ctx.beginPath();
                            ctx.arc(acx, ringY, r, 0, Math.PI, false);
                            ctx.strokeStyle = `rgba(0, 255, 255, ${ringOpacity})`;
                            ctx.lineWidth = 1.5;
                            ctx.stroke();
                        }
                    }

                    const topOpacity = (1.0 - progress * 0.3) * aOpacity * 0.8;
                    ctx.beginPath();
                    ctx.arc(acx, acy - h, r, 0, Math.PI, false);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${topOpacity})`;
                    ctx.stroke();
                }

                ctx.restore();
            };

            const auraHeight = this.engine.getAuraHeightAt(pCellX, pCellY, z);
            if (auraHeight > 0) {
                drawFlatAura(cx, cy, auraHeight, playerOpacity * tOpacity, 'BACK');
            }

            const minX = Math.max(0, Math.floor((shadowX - shadowW) / cellSize));
            const maxX = Math.min(size - 1, Math.floor((shadowX + shadowW) / cellSize));
            const minY = Math.max(0, Math.floor((shadowY - shadowH) / cellSize));
            const maxY = Math.min(size - 1, Math.floor((shadowY + shadowH) / cellSize));

            for (let wx = minX; wx <= maxX; wx++) {
                for (let wy = minY; wy <= maxY; wy++) {
                    if (this.engine.isWallVisible(wx, wy, z)) {
                        ctx.save();
                        if (this.engine.wallImage.complete && this.engine.wallImage.naturalWidth !== 0) {
                            ctx.drawImage(this.engine.wallImage, wx * cellSize, wy * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.WALL;
                            ctx.fillRect(wx * cellSize, wy * cellSize, cellSize, cellSize);
                        }
                        ctx.restore();
                    }
                }
            }

            if (img && img.complete) {
                ctx.save();
                ctx.globalAlpha = playerOpacity * tOpacity;
                
                const drawSize = cellSize * 0.90; 
                const imgW = drawSize;
                const imgH = drawSize * (img.height / img.width);
                
                ctx.translate(cx, cy);
                ctx.scale((this.engine.playerSquashX || 1) * tScaleX, (this.engine.playerSquashY || 1) * tScaleY);
                
                const offsetY = -imgH * 0.85;
                ctx.drawImage(img, -imgW / 2, offsetY, imgW, imgH);
                ctx.restore();
            } else {
                ctx.save();
                ctx.globalAlpha = playerOpacity * tOpacity;
                ctx.translate(cx, cy);
                ctx.scale(tScaleX, tScaleY);
                
                ctx.strokeStyle = CONFIG.COLORS.PLAYER_OUTLINE;
                ctx.lineWidth = 1;
                ctx.strokeRect(-cellSize/2 + 2, -cellSize/2 + 2, cellSize - 4, cellSize - 4);
                
                ctx.fillStyle = CONFIG.COLORS.PLAYER;
                ctx.beginPath();
                ctx.arc(0, 0, cellSize * 0.4, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.strokeStyle = CONFIG.COLORS.PLAYER;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(this.engine.player.dir) * cellSize * 1, Math.sin(this.engine.player.dir) * cellSize * 1);
                ctx.stroke();
                
                ctx.restore();
            }

            if (auraHeight > 0) {
                drawFlatAura(cx, cy, auraHeight, playerOpacity * tOpacity, 'FRONT');
            }

            if (CONFIG.SHOW_COLLISION_DEBUG) {
                ctx.save();
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 1.5;
                const boxSize = CONFIG.PLAYER_COLLISION_RADIUS * 2 * cellSize;
                const drawOffsetX = (CONFIG.PLAYER_COLLISION_OFFSET_X || 0) * cellSize;
                const drawOffsetY = (CONFIG.PLAYER_COLLISION_OFFSET_Y || 0) * cellSize;
                ctx.strokeRect(cx + drawOffsetX - boxSize / 2, cy + drawOffsetY - boxSize / 2, boxSize, boxSize);
                ctx.restore();
            }

            if (this.engine.deathAnimation && this.engine.deathAnimation.active) {
                const progress = Math.min(1.0, this.engine.deathAnimation.delayElapsed / this.engine.deathAnimation.delayDuration);
                const startH = -(img && img.complete ? (cellSize * 0.90 * (img.height / img.width) * 0.85) : (cellSize * 0.5));
                const peakHeight = cellSize * 0.7;
                const keyYOffset = (1.0 - progress) * startH - 4 * peakHeight * progress * (1.0 - progress);
                
                if (this.engine.keyImage.complete && this.engine.keyImage.naturalWidth !== 0) {
                    ctx.save();
                    const kImg = this.engine.keyImage;
                    const aspect = kImg.naturalWidth / kImg.naturalHeight;
                    const maxDim = cellSize * 0.55;
                    let dw = maxDim;
                    let dh = maxDim;
                    if (aspect > 1) {
                        dh = maxDim / aspect;
                    } else {
                        dw = maxDim * aspect;
                    }
                    ctx.drawImage(kImg, cx - dw / 2, cy + keyYOffset - dh / 2, dw, dh);
                    ctx.restore();
                } else {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(cx, cy + keyYOffset, cellSize * 0.15, 0, 2*Math.PI);
                    ctx.fillStyle = '#ffd700';
                    ctx.fill();
                    ctx.restore();
                }
            }
        }

        // Draw floating micro-notification box above the player
        if (this.engine.activeNotification) {
            const n = this.engine.activeNotification;
            ctx.save();
            
            ctx.font = `bold ${cellSize * 0.22}px monospace`;
            const textWidth = ctx.measureText(n.text).width;
            const padding = cellSize * 0.4;
            const totalWidth = textWidth + padding;
            const H = cellSize * 0.48;
            
            const X = px * cellSize;
            const Y = py * cellSize - cellSize * 1.5;
            
            let W = totalWidth;
            if (n.state === "OPENING") {
                W = totalWidth * n.widthProgress;
            } else if (n.state === "CLOSING") {
                W = totalWidth * n.closeProgress;
            }
            
            const mazeWidth = this.engine.mazeGen.size * cellSize;
            const mazeHeight = this.engine.mazeGen.size * cellSize;
            
            let renderX = X;
            if (renderX - W/2 < 0) {
                renderX = W/2;
            } else if (renderX + W/2 > mazeWidth) {
                renderX = mazeWidth - W/2;
            }
            
            let renderY = Y;
            if (renderY - H/2 < 0) {
                renderY = H/2;
            } else if (renderY + H/2 > mazeHeight) {
                renderY = mazeHeight - H/2;
            }
            
            ctx.fillStyle = '#000000';
            ctx.fillRect(renderX - W/2, renderY - H/2, W, H);
            
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = Math.max(1.5, cellSize * 0.04);
            ctx.strokeRect(renderX - W/2, renderY - H/2, W, H);
            
            if (n.state === "TYPING" || n.state === "WAITING") {
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(n.displayText, renderX, renderY);
            }
            
            ctx.restore();
        }

        if (isZooming) {
            ctx.restore();
        }

        if (this.engine.isZoomTransitionActive) {
            const duration = 2.0;
            const progress = Math.min(1.0, (duration - this.engine.zoomTransitionTimer) / duration);
            const alpha = 1.0 - progress;
            
            ctx.save();
            ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.restore();
        }

        // Draw death animation corruption glitch overlay
        if (this.engine.deathAnimation && this.engine.deathAnimation.active) {
            const h = this.engine.deathAnimation.hunter;
            let centerGridX = h.visualX + 0.5;
            let centerGridY = h.visualY + 0.5;
            if (this.engine.deathAnimation.reversing) {
                centerGridX = this.engine.player.x;
                centerGridY = this.engine.player.y;
            }
            
            let screenX, screenY;
            if (useZoom) {
                const scaleTransition = 11 / this.engine.zoomVisibleCells;
                const half = this.engine.zoomVisibleCells / 2;
                let camX = px;
                let camY = py;
                if (camX < half) camX = half;
                if (camX > size - half) camX = size - half;
                if (camY < half) camY = half;
                if (camY > size - half) camY = size - half;
                
                const cx = ctx.canvas.width / 2;
                const cy = ctx.canvas.height / 2;
                screenX = cx + (centerGridX - camX) * cellSize * scaleTransition;
                screenY = cy + (centerGridY - camY) * cellSize * scaleTransition;
            } else {
                screenX = centerGridX * cellSize;
                screenY = centerGridY * cellSize;
            }

            if (!this.engine.deathAnimation.screenFilled || this.engine.deathAnimation.reversing) {
                const maxRadius = Math.hypot(ctx.canvas.width, ctx.canvas.height) * 1.1;
                const progress = this.engine.deathAnimation.elapsed / this.engine.deathAnimation.duration;
                const t = progress * progress * (3 - 2 * progress);
                const currentRadius = t * maxRadius;

                ctx.save();
                ctx.beginPath();
                ctx.arc(screenX, screenY, currentRadius, 0, Math.PI * 2);
                ctx.clip();

                ctx.fillStyle = 'rgba(15, 0, 25, 0.96)';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                const numGlitches = 45;
                const baseScale = useZoom ? (11 / this.engine.zoomVisibleCells) : 1;
                for (let i = 0; i < numGlitches; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const dist = Math.pow(Math.random(), 0.7) * currentRadius;
                    const gx = screenX + Math.cos(angle) * dist;
                    const gy = screenY + Math.sin(angle) * dist;
                    const gw = (15 + Math.random() * 70) * baseScale;
                    const gh = (3 + Math.random() * 12) * baseScale;

                    const r = 80 + Math.floor(Math.random() * 50);
                    const g = Math.floor(Math.random() * 25);
                    const b = 130 + Math.floor(Math.random() * 70);
                    ctx.fillStyle = Math.random() < 0.12 ? '#00ff66' : 
                                    Math.random() < 0.12 ? '#00ccff' : 
                                    Math.random() < 0.08 ? '#ffffff' : `rgb(${r},${g},${b})`;
                    ctx.fillRect(gx - gw/2, gy - gh/2, gw, gh);
                }

                if (Math.random() < 0.3) {
                    ctx.fillStyle = Math.random() < 0.7 ? '#ffffff' : '#b3ffff';
                    const tx = screenX + (Math.random() - 0.5) * currentRadius * 0.8;
                    const ty = screenY + (Math.random() - 0.5) * currentRadius * 0.8;
                    const tw = (2 + Math.random() * 5) * baseScale;
                    const th = (10 + Math.random() * 30) * baseScale;
                    ctx.fillRect(tx - tw/2, ty - th/2, tw, th);
                }

                ctx.restore();
            } else {
                ctx.fillStyle = 'rgba(10, 0, 15, 1.0)';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                ctx.fillStyle = 'rgba(138, 3, 196, 0.08)';
                for (let y = 0; y < ctx.canvas.height; y += 6) {
                    if (Math.random() < 0.6) {
                        ctx.fillRect(0, y + Math.sin(Date.now() * 0.01 + y) * 2, ctx.canvas.width, 2);
                    }
                }

                const numBlocks = Math.floor(Math.random() * 5) + 3;
                const colors = ['#00ff66', '#ff0055', '#00ccff', '#ffff00', '#8a03c4', '#ffffff'];
                for (let i = 0; i < numBlocks; i++) {
                    const bx = Math.random() * ctx.canvas.width;
                    const by = Math.random() * ctx.canvas.height;
                    const bw = 80 + Math.random() * 250;
                    const bh = 8 + Math.random() * 30;
                    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    ctx.globalAlpha = 0.12 + Math.random() * 0.18;
                    ctx.fillRect(bx, by, bw, bh);
                }
                ctx.globalAlpha = 1.0;

                if (Math.random() < 0.35) {
                    const sy = Math.floor(Math.random() * ctx.canvas.height);
                    const sh = 15 + Math.floor(Math.random() * 80);
                    const shift = Math.floor(Math.random() * 40) - 20;
                    ctx.drawImage(ctx.canvas, 0, sy, ctx.canvas.width, sh, shift, sy, ctx.canvas.width, sh);
                }

                if (Math.random() < 0.15) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                    ctx.fillRect(0, Math.random() * ctx.canvas.height, ctx.canvas.width, 5 + Math.random() * 20);
                }
            }
        }
    }

    /**
     * Re-renders the static elements of the 2D map into a dedicated backbuffer canvas.
     */
    updateStaticMapCache(z: number) {
        const size = this.engine.mazeGen.size;
        const useZoom = size > 11;
        const cellSize = useZoom ? this.engine.canvas.width / 11 : this.engine.canvas.width / size;
        
        const cacheWidth = useZoom ? size * cellSize : this.engine.canvas.width;
        const cacheHeight = useZoom ? size * cellSize : this.engine.canvas.height;
        
        if (this.staticMapCacheCanvas.width !== cacheWidth || 
            this.staticMapCacheCanvas.height !== cacheHeight) {
            this.staticMapCacheCanvas.width = cacheWidth;
            this.staticMapCacheCanvas.height = cacheHeight;
        }
        
        const ctx = this.staticMapCacheCtx!;
        ctx.clearRect(0, 0, cacheWidth, cacheHeight);
        
        const px = this.engine.player.x;
        const py = this.engine.player.y;
        
        const startGridX = Math.floor(this.engine.mazeGen.startPos.x);
        const startGridY = Math.floor(this.engine.mazeGen.startPos.y);
        const startGridZ = this.engine.mazeGen.startPos.z;
        
        const now = Date.now();
        let hasActiveAnimations = false;

        const drawCellWithFade = (x: number, y: number, drawFn: () => void) => {
            const key = `${x},${y},${z}`;

            if (this.engine.skipCellAnimations || this.fullyRevealedCells.has(key)) {
                drawFn();
                if (this.engine.skipCellAnimations) {
                    this.fullyRevealedCells.add(key);
                }
            } else {
                let startTime = this.revealedCellsAnimation.get(key);
                if (startTime === undefined) {
                    this.revealedCellsAnimation.set(key, now);
                    startTime = now;
                }
                const elapsed = now - startTime;
                const duration = 400;
                const opacity = Math.min(1.0, elapsed / duration);
                
                if (opacity < 1.0) {
                    ctx.save();
                    ctx.globalAlpha = opacity;
                    drawFn();
                    ctx.restore();
                    hasActiveAnimations = true;
                } else {
                    drawFn();
                    this.revealedCellsAnimation.delete(key);
                    this.fullyRevealedCells.add(key);
                }
            }
        };

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const val = this.engine.maze.get(x, y, z);
                
                if (this.engine.jellyPortalFreezeTimer > 0 && this.engine.jellyPortalResetCells.has(`${x},${y}`)) {
                    const elapsed = 1.5 - this.engine.jellyPortalFreezeTimer;
                    const holdTime = 0.6;
                    let animProgress = 0;
                    if (elapsed > holdTime) {
                        animProgress = Math.min(1.0, (elapsed - holdTime) / 0.9);
                    }
                    
                    ctx.save();
                    const invertPercent = Math.round(100 * (1.0 - animProgress));
                    ctx.filter = `invert(${invertPercent}%)`;
                    
                    const isCenter = x === Math.floor(px) && y === Math.floor(py);
                    const isStatue = val === this.engine.mazeGen.TYPES.STATUE;
                    const shouldFadeOut = !isCenter && !isStatue;
                    
                    if (shouldFadeOut) {
                        ctx.globalAlpha = 1.0 - animProgress;
                    }
                    
                    if (val === this.engine.mazeGen.TYPES.WALL) {
                        if (this.engine.wallImage.complete && this.engine.wallImage.naturalWidth !== 0) {
                            ctx.drawImage(this.engine.wallImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.WALL;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                    } else if (isStatue) {
                        if (this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                            ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                        ctx.beginPath();
                        ctx.ellipse(x * cellSize + cellSize / 2, (y + 1) * cellSize - cellSize * 0.15, cellSize * 0.35, cellSize * 0.12, 0, 0, Math.PI * 2);
                        ctx.fill();
                        if (this.engine.statueImage.complete && this.engine.statueImage.naturalWidth !== 0) {
                            const aspect = this.engine.statueImage.width / this.engine.statueImage.height;
                            const targetWidth = cellSize * 0.85;
                            const targetHeight = targetWidth / aspect;
                            const bottomY = (y + 1) * cellSize - cellSize * 0.05;
                            ctx.drawImage(this.engine.statueImage, x * cellSize + cellSize / 2 - targetWidth / 2, bottomY - targetHeight, targetWidth, targetHeight);
                        } else {
                            ctx.fillStyle = '#555555';
                            ctx.fillRect(x * cellSize + cellSize * 0.3, y * cellSize + cellSize * 0.1, cellSize * 0.4, cellSize * 0.8);
                        }
                    } else {
                        if (this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                            ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                        
                        if (isCenter) {
                            this.drawVortex2D(ctx, x, y, cellSize, CONFIG.COLORS.JELLY_PORTAL, false, `${x},${y},${z}`);
                        } else if (val === this.engine.mazeGen.TYPES.TELEPORT) {
                            this.drawVortex2D(ctx, x, y, cellSize, CONFIG.COLORS.TELEPORT_INACTIVE, false, `${x},${y},${z}`);
                        } else if (val === this.engine.mazeGen.TYPES.EXIT) {
                            this.drawVortex2D(ctx, x, y, cellSize, CONFIG.COLORS.EXIT, false, `${x},${y},${z}`);
                        } else if (val === this.engine.mazeGen.TYPES.KEY) {
                            const bobbingOffset = cellSize * 0.05 * Math.sin(Date.now() / 300);
                            if (this.engine.keyImage.complete && this.engine.keyImage.naturalWidth !== 0) {
                                const img = this.engine.keyImage;
                                const aspect = img.naturalWidth / img.naturalHeight;
                                const maxDim = cellSize * 0.7;
                                let dw = maxDim;
                                let dh = maxDim;
                                if (aspect > 1) {
                                    dh = maxDim / aspect;
                                } else {
                                    dw = maxDim * aspect;
                                }
                                ctx.drawImage(img, x * cellSize + (cellSize - dw) / 2, y * cellSize + (cellSize - dh) / 2 + bobbingOffset, dw, dh);
                            }
                        } else if (val === this.engine.mazeGen.TYPES.MANA) {
                            const bobbingOffset = cellSize * 0.05 * Math.sin(Date.now() / 250);
                            if (this.engine.manaImage.complete && this.engine.manaImage.naturalWidth !== 0) {
                                const img = this.engine.manaImage;
                                const aspect = img.naturalWidth / img.naturalHeight;
                                const maxDim = cellSize * 0.7;
                                let dw = maxDim;
                                let dh = maxDim;
                                if (aspect > 1) {
                                    dh = maxDim / aspect;
                                } else {
                                    dw = maxDim * aspect;
                                }
                                ctx.drawImage(img, x * cellSize + (cellSize - dw) / 2, y * cellSize + (cellSize - dh) / 2 + bobbingOffset, dw, dh);
                            }
                        }
                    }
                    
                    ctx.restore();
                    hasActiveAnimations = true;
                    continue;
                }

                if (val === this.engine.mazeGen.TYPES.STATUE) {
                    drawCellWithFade(x, y, () => {
                        if (this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                            ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                        
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
                        ctx.beginPath();
                        ctx.ellipse(
                            x * cellSize + cellSize / 2,
                            (y + 1) * cellSize - cellSize * 0.15,
                            cellSize * 0.35,
                            cellSize * 0.12,
                            0, 0, Math.PI * 2
                        );
                        ctx.fill();

                        if (this.engine.statueImage.complete && this.engine.statueImage.naturalWidth !== 0) {
                            const aspect = this.engine.statueImage.width / this.engine.statueImage.height;
                            const targetWidth = cellSize * 0.85;
                            const targetHeight = targetWidth / aspect;
                            const cx = x * cellSize + cellSize / 2;
                            const bottomY = (y + 1) * cellSize - cellSize * 0.05;
                            ctx.drawImage(
                                this.engine.statueImage,
                                cx - targetWidth / 2,
                                bottomY - targetHeight,
                                targetWidth,
                                targetHeight
                            );
                        } else {
                            ctx.fillStyle = '#555555';
                            ctx.fillRect(x * cellSize + cellSize * 0.3, y * cellSize + cellSize * 0.1, cellSize * 0.4, cellSize * 0.8);
                        }
                    });
                    continue;
                }

                const isTeleport = this.engine.allTeleports.some(t => t.x === x && t.y === y && t.z === z);
                const isTeleportDiscovered = isTeleport && this.engine.discoveredTeleports.has(`${x},${y},${z}`);
                const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                const isKey = val === this.engine.mazeGen.TYPES.KEY;
                const isMana = val === this.engine.mazeGen.TYPES.MANA;
                const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.engine.isNearVisited(x, y, z);
                const isRevealedPath = this.engine.revealedPathSet.has(`${x},${y},${z}`);

                const hUp = z < size - 1 && this.engine.maze.get(x, y, z + 1) !== 0;
                const hDown = z > 0 && this.engine.maze.get(x, y, z - 1) !== 0;
                const isElevator = hUp || hDown;

                if (isRevealedPath) {
                    drawCellWithFade(x, y, () => {
                        if (isElevator) {
                            this.drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, true, z);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.REVEALED_PATH;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                    });
                } else if (isVisited) {
                    drawCellWithFade(x, y, () => {
                        if (isTeleportDiscovered) {
                            const isStartTeleport = x === startGridX && y === startGridY && z === startGridZ;
                            const key = `${x},${y},${z}`;
                            const isInactive = this.engine.teleportCooldownTicks > 0;
                            if (isStartTeleport) {
                                const isPlayerHere = Math.floor(px) === x && Math.floor(py) === y && z === this.engine.player.z;
                                const baseColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : (isPlayerHere ? CONFIG.COLORS.TELEPORT : CONFIG.COLORS.START);
                                this.drawVortex2D(ctx, x, y, cellSize, baseColor, isPlayerHere && !isInactive, key);
                            } else {
                                const isJelly = val === this.engine.mazeGen.TYPES.JELLY_PORTAL;
                                const baseColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : (isJelly ? CONFIG.COLORS.JELLY_PORTAL : CONFIG.COLORS.TELEPORT);
                                const isPlayerHere = Math.floor(px) === x && Math.floor(py) === y && z === this.engine.player.z;
                                this.drawVortex2D(ctx, x, y, cellSize, baseColor, isPlayerHere && !isInactive, key);
                            }
                            hasActiveAnimations = true;
                        } else if (isElevator) {
                            this.drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, false, z);
                        } else {
                            if (val === 2 && this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                                ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                            } else {
                                if (val === this.engine.mazeGen.TYPES.EXIT) {
                                    const key = `${x},${y},${z}`;
                                    this.drawVortex2D(ctx, x, y, cellSize, CONFIG.COLORS.EXIT, false, key);
                                    hasActiveAnimations = true;
                                    
                                    if (this.engine.keysCollected < this.engine.totalKeys) {
                                        const cx = x * cellSize + cellSize / 2;
                                        const cy = y * cellSize + cellSize / 2;
                                        
                                        const w = cellSize * 0.45;
                                        const h = cellSize * 0.38;
                                        const arcWidth = w * 0.75;
                                        const bodyX = cx - w / 2;
                                        const bodyY = cy - h / 4;
                                        const borderRadius = Math.max(3, cellSize * 0.06);

                                        ctx.beginPath();
                                        ctx.arc(cx, bodyY, arcWidth / 2, Math.PI, 0);
                                        ctx.strokeStyle = '#ff3300';
                                        ctx.lineWidth = Math.max(2.5, cellSize * 0.07);
                                        ctx.lineCap = 'round';
                                        ctx.stroke();

                                        const grad = ctx.createLinearGradient(bodyX, bodyY, bodyX, bodyY + h);
                                        grad.addColorStop(0, '#2e0808');
                                        grad.addColorStop(1, '#140303');
                                        
                                        ctx.fillStyle = grad;
                                        ctx.beginPath();
                                        if (ctx.roundRect) {
                                             ctx.roundRect(bodyX, bodyY, w, h, borderRadius);
                                         } else if (ctx.rect) {
                                             ctx.rect(bodyX, bodyY, w, h);
                                         }
                                        ctx.fill();

                                        ctx.strokeStyle = '#ff3300';
                                        ctx.lineWidth = Math.max(1.5, cellSize * 0.04);
                                        ctx.stroke();

                                        const text = String(this.engine.totalKeys - this.engine.keysCollected);
                                        const fontSize = text.length > 1 ? Math.max(8, cellSize * 0.22) : Math.max(10, cellSize * 0.28);
                                        
                                        ctx.save();
                                        ctx.fillStyle = '#ff8888';
                                        ctx.font = `bold ${fontSize}px "Outfit", "Inter", sans-serif`;
                                        ctx.textAlign = 'center';
                                        ctx.textBaseline = 'middle';
                                        
                                        ctx.shadowColor = '#ff3300';
                                        ctx.shadowBlur = Math.max(2, cellSize * 0.08);
                                        ctx.fillText(text, cx, cy + h / 4);
                                        ctx.restore();
                                    }
                                } else {
                                    if (val === 2) {
                                        ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                                        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                                    } else {
                                        const key = `${x},${y},${z}`;
                                        const isPlayerHere = Math.floor(px) === x && Math.floor(py) === y && z === this.engine.player.z;
                                        const baseColor = isPlayerHere ? CONFIG.COLORS.TELEPORT : CONFIG.COLORS.START;
                                        this.drawVortex2D(ctx, x, y, cellSize, baseColor, isPlayerHere, key);
                                        hasActiveAnimations = true;
                                    }
                                }
                            }
                        }

                        this.drawCellShadow2D(ctx, x, y, cellSize, size, val, z);
                    });
                } else if (isKey) {
                    drawCellWithFade(x, y, () => {
                        const isVisitedKey = this.engine.visitedCells.has(`${x},${y},${z}`);
                        if (isVisitedKey) {
                            if (isTeleportDiscovered) {
                                const isStartTeleport = x === startGridX && y === startGridY && z === startGridZ;
                                const key = `${x},${y},${z}`;
                                const isInactive = this.engine.teleportCooldownTicks > 0;
                                if (isStartTeleport) {
                                    const isPlayerHere = Math.floor(px) === x && Math.floor(py) === y && z === this.engine.player.z;
                                    const baseColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : (isPlayerHere ? CONFIG.COLORS.TELEPORT : CONFIG.COLORS.START);
                                    this.drawVortex2D(ctx, x, y, cellSize, baseColor, isPlayerHere && !isInactive, key);
                                } else {
                                    const baseColor = isInactive ? CONFIG.COLORS.TELEPORT_INACTIVE : CONFIG.COLORS.TELEPORT;
                                    const isPlayerHere = Math.floor(px) === x && Math.floor(py) === y && z === this.engine.player.z;
                                    this.drawVortex2D(ctx, x, y, cellSize, baseColor, isPlayerHere && !isInactive, key);
                                }
                                hasActiveAnimations = true;
                            } else if (isElevator) {
                                this.drawElevator2D(ctx, x, y, cellSize, hUp, hDown, px, py, false, z);
                            } else {
                                if (this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                                    ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                                } else {
                                    ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                                }
                            }
                        }

                        const bobbingOffset = cellSize * 0.05 * Math.sin(Date.now() / 300);
                        if (this.engine.keyImage.complete && this.engine.keyImage.naturalWidth !== 0) {
                            const img = this.engine.keyImage;
                            const aspect = img.naturalWidth / img.naturalHeight;
                            const maxDim = cellSize * 0.7;
                            let dw = maxDim;
                            let dh = maxDim;
                            if (aspect > 1) {
                                dh = maxDim / aspect;
                            } else {
                                dw = maxDim * aspect;
                            }
                            const dx = x * cellSize + (cellSize - dw) / 2;
                            const dy = y * cellSize + (cellSize - dh) / 2 + bobbingOffset;
                            ctx.drawImage(img, dx, dy, dw, dh);
                        } else {
                            ctx.beginPath();
                            ctx.arc(x * cellSize + cellSize/2, y * cellSize + cellSize/2 + bobbingOffset, cellSize * 0.25, 0, 2*Math.PI);
                            ctx.fillStyle = '#ffd700';
                            ctx.fill();
                        }
                        this.drawCellShadow2D(ctx, x, y, cellSize, size, val, z);
                    });
                    hasActiveAnimations = true;
                } else if (isMana) {
                    drawCellWithFade(x, y, () => {
                        const isVisitedMana = this.engine.visitedCells.has(`${x},${y},${z}`);
                        if (isVisitedMana) {
                            if (this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                                ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                            } else {
                                ctx.fillStyle = CONFIG.COLORS.PATH_VISITED;
                                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                            }
                        }

                        const bobbingOffset = cellSize * 0.05 * Math.sin(Date.now() / 250);
                        if (this.engine.manaImage.complete && this.engine.manaImage.naturalWidth !== 0) {
                            const img = this.engine.manaImage;
                            const aspect = img.naturalWidth / img.naturalHeight;
                            const maxDim = cellSize * 0.7;
                            let dw = maxDim;
                            let dh = maxDim;
                            if (aspect > 1) {
                                dh = maxDim / aspect;
                            } else {
                                dw = maxDim * aspect;
                            }
                            const dx = x * cellSize + (cellSize - dw) / 2;
                            const dy = y * cellSize + (cellSize - dh) / 2 + bobbingOffset;
                            
                            ctx.save();
                            ctx.shadowColor = 'rgba(0, 255, 255, 0.85)';
                            ctx.shadowBlur = cellSize * 0.35;
                            ctx.shadowOffsetX = 0;
                            ctx.shadowOffsetY = 0;
                            ctx.drawImage(img, dx, dy, dw, dh);
                            ctx.restore();
                        } else {
                            ctx.beginPath();
                            ctx.arc(x * cellSize + cellSize/2, y * cellSize + cellSize/2 + bobbingOffset, cellSize * 0.2, 0, 2*Math.PI);
                            ctx.fillStyle = '#00ffff';
                            ctx.fill();
                        }
                        this.drawCellShadow2D(ctx, x, y, cellSize, size, val, z);
                    });
                    hasActiveAnimations = true;
                } else if (isKnown) { 
                    drawCellWithFade(x, y, () => {
                        if (this.engine.floorImage.complete && this.engine.floorImage.naturalWidth !== 0) {
                            ctx.save();
                            ctx.globalAlpha = 0.35;
                            ctx.drawImage(this.engine.floorImage, x * cellSize, y * cellSize, cellSize, cellSize);
                            ctx.restore();
                            
                            const pulseOpacity = 0.22 + 0.12 * Math.sin(Date.now() / 250);
                            ctx.fillStyle = `rgba(136, 204, 255, ${pulseOpacity})`;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.PATH_KNOWN; 
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize); 
                        }
                    });
                    hasActiveAnimations = true;
                }
                else if (this.engine.isWallVisible(x, y, z)) {
                    drawCellWithFade(x, y, () => {
                        if (this.engine.wallImage.complete && this.engine.wallImage.naturalWidth !== 0) {
                            ctx.drawImage(this.engine.wallImage, x * cellSize, y * cellSize, cellSize, cellSize);
                        } else {
                            ctx.fillStyle = CONFIG.COLORS.WALL;
                            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                        }
                    });
                }
            }
        }
        
        if (hasActiveAnimations) {
            this.staticMapCacheDirty = true;
        } else {
            this.staticMapCacheDirty = false;
        }
    }

    /**
     * Draws elevator shafts layout arrow indicators on 2D map.
     */
    drawElevator2D(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number, hUp: boolean, hDown: boolean, px: number, py: number, isRevealed: boolean = false, z: number = 0) {
        const isPlayerHere = x === Math.floor(px) && y === Math.floor(py);
        if (isPlayerHere) {
            const pulse = 0.85 + 0.15 * Math.sin(Date.now() / 150);
            ctx.save();
            ctx.globalAlpha = pulse;
        }

        const upVisited = hUp && (this.engine.maze.get(x, y, z + 1) === this.engine.mazeGen.TYPES.ELEVATOR_VISITED);
        const downVisited = hDown && (this.engine.maze.get(x, y, z - 1) === this.engine.mazeGen.TYPES.ELEVATOR_VISITED);

        if (isRevealed) {
            if (hUp && hDown) {
                let routeUsesUp = false;
                let routeUsesDown = false;
                if (this.engine.activePathReveal) {
                    const idx = this.engine.activePathReveal.findIndex(node => node.x === x && node.y === y && node.z === z);
                    if (idx !== -1 && idx < this.engine.activePathReveal.length - 1) {
                        const nextNode = this.engine.activePathReveal[idx + 1];
                        if (nextNode.z > z) routeUsesUp = true;
                        if (nextNode.z < z) routeUsesDown = true;
                    }
                }
                if (!routeUsesUp && !routeUsesDown) {
                    routeUsesUp = this.engine.revealedPathSet.has(`${x},${y},${z + 1}`) || this.engine.revealedPathSet.has(`${x},${y},${z + 2}`);
                    routeUsesDown = this.engine.revealedPathSet.has(`${x},${y},${z - 1}`) || this.engine.revealedPathSet.has(`${x},${y},${z - 2}`);
                }

                const paintUpWhite = routeUsesUp || (!routeUsesUp && !routeUsesDown);
                const paintDownWhite = routeUsesDown || (!routeUsesUp && !routeUsesDown);

                ctx.fillStyle = paintUpWhite ? CONFIG.COLORS.REVEALED_PATH : (upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED);
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize / 2);
                
                ctx.fillStyle = paintDownWhite ? CONFIG.COLORS.REVEALED_PATH : (downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED);
                ctx.fillRect(x * cellSize, y * cellSize + cellSize / 2, cellSize, cellSize / 2);
            } else {
                ctx.fillStyle = CONFIG.COLORS.REVEALED_PATH;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        } else {
            if (hUp && hDown) {
                ctx.fillStyle = upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize / 2);
                ctx.fillStyle = downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize + cellSize / 2, cellSize, cellSize / 2);
            } else if (hUp) {
                ctx.fillStyle = upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            } else {
                ctx.fillStyle = downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }

        const cx = x * cellSize + cellSize / 2;
        const cy = y * cellSize + cellSize / 2;
        ctx.fillStyle = '#000000';

        if (hUp && hDown) {
            const arrowSize = cellSize * 0.28;
            const cyTop = cy - cellSize / 5;
            const cyBottom = cy + cellSize / 5;

            ctx.beginPath();
            ctx.moveTo(cx, cyTop - arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cyTop + arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cyTop + arrowSize / 2);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(cx, cyBottom + arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cyBottom - arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cyBottom - arrowSize / 2);
            ctx.closePath();
            ctx.fill();
        } else if (hUp) {
            const arrowSize = cellSize * 0.45;
            ctx.beginPath();
            ctx.moveTo(cx, cy - arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cy + arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cy + arrowSize / 2);
            ctx.closePath();
            ctx.fill();
        } else {
            const arrowSize = cellSize * 0.45;
            ctx.beginPath();
            ctx.moveTo(cx, cy + arrowSize / 2);
            ctx.lineTo(cx - arrowSize * 0.6, cy - arrowSize / 2);
            ctx.lineTo(cx + arrowSize * 0.6, cy - arrowSize / 2);
            ctx.closePath();
            ctx.fill();
        }

        if (isPlayerHere) {
            ctx.restore();
        }
    }

    /**
     * Draws shadows projected from adjacent wall structures on 2D map.
     */
    drawCellShadow2D(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number, size: number, val: number, z: number) {
        if (val === 4) return;

        const isWallVisible = (wx: number, wy: number) => {
            if (wx < 0 || wx >= size || wy < 0 || wy >= size) return false;
            return this.engine.isWallVisible(wx, wy, z);
        };

        const hasWallBelow = isWallVisible(x, y + 1);
        const hasWallRight = isWallVisible(x + 1, y);
        const hasWallDiagonal = isWallVisible(x + 1, y + 1);

        if (hasWallBelow || hasWallRight || hasWallDiagonal) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            const shadowSize = cellSize * CONFIG.SHADOW_SIZE_FACTOR;
            
            if (hasWallBelow) {
                ctx.fillRect(x * cellSize, (y + 1) * cellSize - shadowSize, cellSize, shadowSize);
            }
            if (hasWallRight) {
                const rightShadowHeight = hasWallBelow ? (cellSize - shadowSize) : cellSize;
                ctx.fillRect((x + 1) * cellSize - shadowSize, y * cellSize, shadowSize, rightShadowHeight);
            }
            
            if (!hasWallBelow && !hasWallRight && hasWallDiagonal) {
                ctx.fillRect((x + 1) * cellSize - shadowSize, (y + 1) * cellSize - shadowSize, shadowSize, shadowSize);
            }
        }
    }

    /**
     * Draws rotating vortex portals on 2D map.
     */
    drawVortex2D(ctx: CanvasRenderingContext2D, x: number, y: number, cellSize: number, baseColor: string, isPlayerOnCell: boolean, cellKey: string) {
        const cx = x * cellSize + cellSize / 2;
        const cy = y * cellSize + cellSize / 2;
        
        ctx.save();
        ctx.translate(cx, cy);
        
        const angle = this.engine.vortexAngles.get(cellKey) || 0;
        ctx.rotate(angle);
        
        const numArms = 5;
        const maxRadius = cellSize * 0.45;
        
        ctx.strokeStyle = baseColor;
        ctx.lineWidth = Math.max(1.5, cellSize * 0.04);
        ctx.lineCap = 'round';
        
        const baseOffset = isPlayerOnCell ? (CONFIG.VORTEX_SPEED_FAST * 0.1) : 0;
        
        for (let i = 0; i < numArms; i++) {
            ctx.beginPath();
            const startAngle = (i / numArms) * Math.PI * 2;
            
            for (let step = 0; step <= 10; step++) {
                const t = step / 10;
                const r = t * maxRadius;
                const theta = startAngle + t * Math.PI * 1.3 + baseOffset;
                
                const lx = Math.cos(theta) * r;
                const ly = Math.sin(theta) * r;
                
                if (step === 0) ctx.moveTo(lx, ly);
                else ctx.lineTo(lx, ly);
            }
            ctx.stroke();
        }
        
        ctx.restore();
    }

    /**
     * Draws the Isometric 3D floor layout map.
     */
    drawIsometricMap() {
        if (!this.engine.isMap3DActive || this.engine.isIntroPlaying) return;

        const canvas = this.engine.isometricCanvas;
        const ctx = this.engine.isometricCtx;
        if (!canvas || !ctx) return;
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        const size = this.engine.mazeGen.size;
        const visualZ = this.engine.visualActiveFloor;

        let baseTileWidth = (width * 0.7) / size;
        baseTileWidth = Math.max(20, Math.min(48, baseTileWidth));
        const tileWidth = baseTileWidth * this.engine.mapZoom;
        const tileWidthHalf = tileWidth / 2;
        const tileHeightHalf = tileWidth / 4;
        const floorOffset = tileWidthHalf * 5;

        const centerX = width / 2 + this.engine.mapPanOffsetX;
        const centerY = height / 2 + this.engine.mapPanOffsetY;

        const getIsoCoords = (x: number, y: number, z: number) => {
            const rx = x;
            const ry = y;
            const px = (rx - ry) * tileWidthHalf + centerX;
            const py = (rx + ry) * tileHeightHalf - (z - visualZ) * floorOffset + centerY;
            return { x: px, y: py };
        };

        const renderQueue: any[] = [];
        
        const isFloorVisited = (fx: number, fy: number, fz: number) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.engine.maze.get(fx, fy, fz);
            return fVal === 2 || fVal === 3 || fVal === 4 || 
                   (fVal === this.engine.mazeGen.TYPES.TELEPORT && this.engine.discoveredTeleports.has(`${fx},${fy},${fz}`)) || 
                   this.engine.visitedCells.has(`${fx},${fy},${fz}`);
        };

        const isPlayerOnTeleport = (tx: number, ty: number, tz: number) => {
            const px = Math.floor(this.engine.player.x);
            const py = Math.floor(this.engine.player.y);
            const pz = this.engine.player.z;
            return tx === px && ty === py && tz === pz;
        };

        for (let z = 0; z < size; z++) {
            const distZ = Math.abs(z - visualZ);
            if (distZ > 1.8) continue;
            
            const floorOpacity = Math.max(0, 1 - distZ / 1.8);
            
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    const val = this.engine.maze.get(x, y, z);
                    if (val === this.engine.mazeGen.TYPES.WALL) continue;
                    
                    const isTeleport = this.engine.allTeleports.some(t => t.x === x && t.y === y && t.z === z);
                    const isTeleportDiscovered = isTeleport && this.engine.discoveredTeleports.has(`${x},${y},${z}`);
                    const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                    const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.engine.isNearVisited(x, y, z);
                    const isRevealedPath = this.engine.revealedPathSet.has(`${x},${y},${z}`);
                    
                    if (isVisited || isKnown || isRevealedPath) {
                        const coords = getIsoCoords(x, y, z);
                        
                        let color = CONFIG.COLORS.PATH_KNOWN;
                        if (isRevealedPath) color = CONFIG.COLORS.REVEALED_PATH;
                        else if (isVisited) {
                            if (val === 3) color = CONFIG.COLORS.START;
                            else if (val === 4) {
                                const isUnlocked = this.engine.keysCollected === this.engine.totalKeys;
                                color = isUnlocked ? CONFIG.COLORS.EXIT : '#ff3300';
                            }
                            else color = CONFIG.COLORS.PATH_VISITED;
                        }
                        
                        let order = z * 1000 + (x + y);
                        
                        const hUp = z < size - 1 && this.engine.maze.get(x, y, z + 1) !== 0;
                        const hDown = z > 0 && this.engine.maze.get(x, y, z - 1) !== 0;
                        const isElevator = hUp || hDown;
                        
                        renderQueue.push({
                            x, y, z, coords, color, opacity: floorOpacity, order,
                            isElevator, hUp, hDown, isTeleport: isTeleportDiscovered, val
                        });
                    }
                }
            }
        }

        renderQueue.sort((a, b) => a.order - b.order);

        renderQueue.forEach(tile => {
            ctx.save();
            ctx.globalAlpha = tile.opacity;
            
            const renderIsoTile = (c: { x: number, y: number }, fillStyle: string, scale = 1.0) => {
                ctx.beginPath();
                ctx.moveTo(c.x, c.y - tileHeightHalf * scale);
                ctx.lineTo(c.x + tileWidthHalf * scale, c.y);
                ctx.lineTo(c.x, c.y + tileHeightHalf * scale);
                ctx.lineTo(c.x - tileWidthHalf * scale, c.y);
                ctx.closePath();
                ctx.fillStyle = fillStyle;
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.06)';
                ctx.lineWidth = 1;
                ctx.stroke();
            };

            const isCurrentPlayerPos = Math.floor(this.engine.player.x) === tile.x && Math.floor(this.engine.player.y) === tile.y && this.engine.player.z === tile.z;
            
            if (tile.isTeleport) {
                const isInactive = this.engine.teleportCooldownTicks > 0;
                let colorV = CONFIG.COLORS.TELEPORT;
                if (tile.val === this.engine.mazeGen.TYPES.JELLY_PORTAL) colorV = CONFIG.COLORS.JELLY_PORTAL;
                else if (tile.x === Math.floor(this.engine.mazeGen.startPos.x) && tile.y === Math.floor(this.engine.mazeGen.startPos.y)) colorV = CONFIG.COLORS.START;
                
                if (isInactive) colorV = CONFIG.COLORS.TELEPORT_INACTIVE;
                else if (isCurrentPlayerPos && this.engine.isTeleportMode) colorV = '#00ffff';
                
                renderIsoTile(tile.coords, '#151525');
                
                ctx.save();
                const vPulse = 0.85 + 0.15 * Math.sin(Date.now() / 200);
                ctx.globalAlpha = tile.opacity * vPulse;
                renderIsoTile(tile.coords, colorV, 0.8);
                ctx.restore();
            } else if (tile.isElevator) {
                const upVisited = tile.hUp && (this.engine.maze.get(tile.x, tile.y, tile.z + 1) === this.engine.mazeGen.TYPES.ELEVATOR_VISITED);
                const downVisited = tile.hDown && (this.engine.maze.get(tile.x, tile.y, tile.z - 1) === this.engine.mazeGen.TYPES.ELEVATOR_VISITED);
                
                if (tile.hUp && tile.hDown) {
                    renderIsoTile(tile.coords, '#111111');
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(tile.coords.x, tile.coords.y - tileHeightHalf);
                    ctx.lineTo(tile.coords.x + tileWidthHalf, tile.coords.y);
                    ctx.lineTo(tile.coords.x - tileWidthHalf, tile.coords.y);
                    ctx.closePath();
                    ctx.fillStyle = upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED;
                    ctx.fill();
                    
                    ctx.beginPath();
                    ctx.moveTo(tile.coords.x, tile.coords.y + tileHeightHalf);
                    ctx.lineTo(tile.coords.x + tileWidthHalf, tile.coords.y);
                    ctx.lineTo(tile.coords.x - tileWidthHalf, tile.coords.y);
                    ctx.closePath();
                    ctx.fillStyle = downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED;
                    ctx.fill();
                    ctx.restore();
                } else if (tile.hUp) {
                    renderIsoTile(tile.coords, upVisited ? CONFIG.COLORS.NEON_UP : CONFIG.COLORS.NEON_UP_UNUSED);
                } else {
                    renderIsoTile(tile.coords, downVisited ? CONFIG.COLORS.NEON_DOWN : CONFIG.COLORS.NEON_DOWN_UNUSED);
                }
            } else {
                renderIsoTile(tile.coords, tile.color);
            }

            if (isCurrentPlayerPos) {
                const rad = Math.min(6, tileWidth * 0.15);
                ctx.save();
                ctx.beginPath();
                ctx.arc(tile.coords.x, tile.coords.y, rad, 0, Math.PI * 2);
                ctx.fillStyle = '#ff0000';
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }

            ctx.restore();
        });
    }
}
