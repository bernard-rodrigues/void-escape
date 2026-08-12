/**
 * ThreeRenderer - Handles the WebGL Three.js map rendering, camera animations, and assets.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';
import { getTranslation } from './translations.js';
import { saveGame } from './save.js';
import type { Engine } from './engine.js';

function moveTowards(current: number, target: number, maxDelta: number): number {
    if (Math.abs(target - current) <= maxDelta) {
        return target;
    }
    return current + Math.sign(target - current) * maxDelta;
}

export class ThreeRenderer {
    engine: Engine;

    scene!: THREE.Scene;
    camera!: THREE.PerspectiveCamera;
    renderer!: THREE.WebGLRenderer;
    controls!: OrbitControls;

    pulsatingMaterials: THREE.MeshPhongMaterial[] = [];
    hunterMeshes: any[] = [];
    teleportMeshes: THREE.Mesh[] = [];
    knownMeshes: THREE.Mesh[] = [];
    keyMeshes: THREE.Mesh[] = [];
    manaMeshes: THREE.Mesh[] = [];
    exitMesh: THREE.Mesh | null = null;
    gridMeshes: (THREE.Mesh | null)[] = [];

    raycaster!: THREE.Raycaster;
    pointer!: THREE.Vector2;

    handleCanvasClick!: any;
    handlePointerDown!: any;
    handlePointerUp!: any;

    constructor(engine: Engine) {
        this.engine = engine;
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
    }

    /**
     * Initializes Three.js instance, lights, controls, and sets up mouse listeners.
     */
    initThree() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        if (this.engine.ui.uiMap3dContainer) {
            this.engine.ui.uiMap3dContainer.appendChild(this.renderer.domElement);
        }
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        
        this.handlePointerDown = (e: PointerEvent) => {
            isDragging = false;
            startX = e.clientX;
            startY = e.clientY;
        };
        this.handlePointerUp = (e: PointerEvent) => {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.sqrt(dx*dx + dy*dy) > 5) {
                isDragging = true;
            }
        };
        this.handleCanvasClick = (e: MouseEvent) => {
            if (isDragging) return;
            if (Date.now() - this.engine.lastTeleportCloseTime < 500) return;
            this.onCanvasClick(e);
        };

        this.renderer.domElement.addEventListener('pointerdown', this.handlePointerDown);
        this.renderer.domElement.addEventListener('pointerup', this.handlePointerUp);
        this.renderer.domElement.addEventListener('click', this.handleCanvasClick);
    }

    /**
     * Resizes WebGL renderer.
     */
    resize() {
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }
    }

    /**
     * Builds static 3D block meshes.
     */
    build3DMap(isIntro = false) {
        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(10, 20, 10);
        this.scene.add(dirLight);

        this.pulsatingMaterials = [];
        this.hunterMeshes = [];
        this.teleportMeshes = [];
        this.knownMeshes = [];
        this.keyMeshes = [];
        this.manaMeshes = [];
        this.exitMesh = null;
        
        const size = this.engine.mazeGen.size;
        const isFloorVisited = (fx: number, fy: number, fz: number) => {
            if (fz < 0 || fz >= size) return false;
            const fVal = this.engine.maze.get(fx, fy, fz);
            return fVal === 2 || fVal === 3 || fVal === 4 || 
                   (fVal === this.engine.mazeGen.TYPES.TELEPORT && this.engine.discoveredTeleports.has(`${fx},${fy},${fz}`)) || 
                   this.engine.visitedCells.has(`${fx},${fy},${fz}`);
        };

        this.gridMeshes = new Array(size * size * size).fill(null);
        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const opFactor = this.engine.isTeleportMode ? CONFIG.TELEPORT_MAP_OPACITY : 1.0;

        const shaftGeomBottom = new THREE.BoxGeometry(0.9, 0.425, 0.9);
        const shaftGeomTop = new THREE.BoxGeometry(0.9, 0.425, 0.9);
        const shaftGeom = new THREE.CylinderGeometry(0.35, 0.35, 2.0 * this.engine.vScale, 8);

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const val = this.engine.maze.get(x, y, z);
                    
                    if (val === this.engine.mazeGen.TYPES.WALL || val === this.engine.mazeGen.TYPES.STATUE) {
                        const isVisible = isIntro ||
                            (val === this.engine.mazeGen.TYPES.WALL && this.engine.isWallVisible(x, y, z)) ||
                            (val === this.engine.mazeGen.TYPES.STATUE && (this.engine.isNearVisited(x, y, z) || (this.engine.isTutorialMode && this.engine.currentTutorialStage && this.engine.currentTutorialStage.revealed)));

                        if (isVisible) {
                            const wallGeom = new THREE.BoxGeometry(0.35, 0.3 * this.engine.vScale, 0.35);
                            const wallMat = new THREE.MeshPhongMaterial({
                                color: 0x5a14a0,
                                emissive: 0x5a14a0,
                                emissiveIntensity: 0.35 * opFactor,
                                transparent: true,
                                opacity: 0.8 * opFactor
                            });

                            const offsets = [
                                { dx: -0.23, dy: -0.23 },
                                { dx: 0.23, dy: -0.23 },
                                { dx: -0.23, dy: 0.23 },
                                { dx: 0.23, dy: 0.23 }
                            ];

                            for (const offset of offsets) {
                                const subMesh = new THREE.Mesh(wallGeom, wallMat);
                                subMesh.position.set(
                                    (x + offset.dx) - size/2,
                                    (z - size/2) * this.engine.vScale - 0.3 * this.engine.vScale,
                                    (y + offset.dy) - size/2
                                );
                                this.scene.add(subMesh);
                            }

                            if (val === this.engine.mazeGen.TYPES.STATUE) {
                                const baseGeom = new THREE.BoxGeometry(0.5, 0.1 * this.engine.vScale, 0.5);
                                const baseMat = new THREE.MeshPhongMaterial({
                                    color: 0x333333,
                                    transparent: true,
                                    opacity: 0.9 * opFactor
                                });
                                const baseMesh = new THREE.Mesh(baseGeom, baseMat);
                                const base_Y = (z - size/2) * this.engine.vScale - 0.4 * this.engine.vScale;
                                baseMesh.position.set(x - size/2, base_Y, y - size/2);
                                this.scene.add(baseMesh);

                                const bodyGeom = new THREE.CylinderGeometry(0.18, 0.22, 0.5 * this.engine.vScale, 8);
                                const bodyMat = new THREE.MeshPhongMaterial({
                                    color: 0x777777,
                                    transparent: true,
                                    opacity: 0.9 * opFactor
                                });
                                const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
                                bodyMesh.position.set(x - size/2, base_Y + 0.3 * this.engine.vScale, y - size/2);
                                this.scene.add(bodyMesh);
                            }
                        }
                        continue;
                    }

                    const isShaft = z % 2 === 0 && val !== 0;
                    if (isShaft) {
                        const key = `${x},${y},${z}`;
                        const isRevealedPath = this.engine.revealedPathSet.has(key);
                        const isShaftVisited = val === this.engine.mazeGen.TYPES.ELEVATOR_VISITED;
                        const isShaftKnown = (val === 1) && (isFloorVisited(x, y, z - 1) || isFloorVisited(x, y, z + 1));

                        if (isShaftVisited || isShaftKnown || isRevealedPath || isIntro) {
                            let material;
                            if (isRevealedPath) {
                                material = new THREE.MeshPhongMaterial({
                                    color: 0xffffff,
                                    transparent: true,
                                    opacity: 0.95 * opFactor,
                                    emissive: 0xffffff,
                                    emissiveIntensity: 2.0 * opFactor
                                });
                            } else if (isShaftVisited) {
                                material = new THREE.MeshPhongMaterial({
                                    color: CONFIG.COLORS.THREE_VISITED,
                                    transparent: true,
                                    opacity: 0.8 * opFactor
                                });
                            } else {
                                const color = isIntro ? CONFIG.COLORS.THREE_VISITED : CONFIG.COLORS.THREE_KNOWN;
                                material = new THREE.MeshPhongMaterial({
                                    color: color,
                                    transparent: true,
                                    opacity: isIntro ? 0.72 : (0.6 * opFactor),
                                    emissive: color,
                                    emissiveIntensity: isIntro ? 0 : (0.5 * opFactor)
                                });
                                if (!isIntro) this.pulsatingMaterials.push(material);
                            }

                            const mesh = new THREE.Mesh(shaftGeom, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale, y - size/2);
                            this.scene.add(mesh);
                            this.gridMeshes[(x * size * size) + (y * size) + z] = mesh;

                            if (isShaftKnown && !isRevealedPath) {
                                mesh.userData = { gridX: x, gridY: y, gridZ: z };
                                this.knownMeshes.push(mesh);
                            }
                        }
                        continue;
                    }

                    const isJelly = val === this.engine.mazeGen.TYPES.JELLY_PORTAL;
                    const isTeleport = val === this.engine.mazeGen.TYPES.TELEPORT || isJelly;
                    const isTeleportDiscovered = isTeleport && this.engine.discoveredTeleports.has(`${x},${y},${z}`);
                    const isVisited = val === 2 || val === 3 || val === 4 || val === 5 || isTeleportDiscovered;
                    const isKnown = (val === 1 || (isTeleport && !isTeleportDiscovered)) && this.engine.isNearVisited(x, y, z);

                    if (isTeleportDiscovered) {
                        const isStartTeleport = x === Math.floor(this.engine.mazeGen.startPos.x) &&
                                                y === Math.floor(this.engine.mazeGen.startPos.y) &&
                                                z === this.engine.mazeGen.startPos.z;

                        const isInactive = this.engine.teleportCooldownTicks > 0;

                        if (isStartTeleport) {
                            const emissiveInt = isInactive ? 0.0 : (this.engine.isTeleportMode ? 2.5 : 0.5);
                            const color = isInactive ? 0x444444 : CONFIG.COLORS.THREE_START;
                            const opacity = isInactive ? 0.4 : (this.engine.isTeleportMode ? 0.95 : (0.8 * opFactor));
                            
                            const material = new THREE.MeshPhongMaterial({
                                color: color,
                                emissive: color,
                                emissiveIntensity: emissiveInt * opFactor,
                                transparent: true,
                                opacity: opacity
                            });
                            const mesh = new THREE.Mesh(geometry, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale, y - size/2);
                            
                            if (this.engine.isTeleportMode) {
                                mesh.scale.set(1.4, 1.4, 1.4);
                            }
                            
                            mesh.userData = { isTeleport: true, gridX: x, gridY: y, gridZ: z };
                            this.scene.add(mesh);
                            this.teleportMeshes.push(mesh);
                            continue;
                        }

                        const isPlayerHere = x === Math.floor(this.engine.player.x) && y === Math.floor(this.engine.player.y) && z === this.engine.player.z;
                        let radius = this.engine.isTeleportMode ? 0.9 : 0.45;
                        let emissiveInt = this.engine.isTeleportMode ? 2.5 : 0.8;
                        let color = isJelly ? CONFIG.COLORS.THREE_JELLY_PORTAL : CONFIG.COLORS.THREE_TELEPORT;
                        let opacity = 0.95;
                        
                        if (isInactive) {
                            color = 0x444444;
                            emissiveInt = 0.0;
                            opacity = 0.4;
                        } else if (this.engine.isTeleportMode && isPlayerHere) {
                            color = 0x00ffff;
                            opacity = 0.5;
                            emissiveInt = 3.0;
                        }

                        const teleportGeom = new THREE.SphereGeometry(radius, 16, 16);
                        const teleportMat = new THREE.MeshPhongMaterial({
                            color: color,
                            emissive: color,
                            emissiveIntensity: emissiveInt,
                            transparent: true,
                            opacity: opacity
                        });
                        const mesh = new THREE.Mesh(teleportGeom, teleportMat);
                        mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale, y - size/2);
                        mesh.userData = { isTeleport: true, gridX: x, gridY: y, gridZ: z };
                        this.scene.add(mesh);
                        this.teleportMeshes.push(mesh);
                        continue;
                    }

                    const isKey = val === this.engine.mazeGen.TYPES.KEY;
                    if (isKey) {
                        const keyGeom = new THREE.OctahedronGeometry(0.3, 0);
                        const keyMat = new THREE.MeshPhongMaterial({
                            color: CONFIG.COLORS.THREE_KEY,
                            emissive: CONFIG.COLORS.THREE_KEY,
                            emissiveIntensity: 0.6 * opFactor,
                            shininess: 100
                        });
                        const mesh = new THREE.Mesh(keyGeom, keyMat);
                        mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale, y - size/2);
                        mesh.userData = { isKey: true, gridX: x, gridY: y, gridZ: z };
                        this.scene.add(mesh);
                        this.keyMeshes.push(mesh);
                        this.pulsatingMaterials.push(keyMat);
                        
                        const isVisitedKey = this.engine.visitedCells.has(`${x},${y},${z}`);
                        if (!isVisitedKey) {
                            continue;
                        }
                    }

                    const isMana = val === this.engine.mazeGen.TYPES.MANA;
                    if (isMana) {
                        const manaGeom = new THREE.IcosahedronGeometry(0.22, 0);
                        const manaMat = new THREE.MeshPhongMaterial({
                            color: 0x00ffff,
                            emissive: 0x00ffff,
                            emissiveIntensity: 0.7 * opFactor,
                            shininess: 120
                        });
                        const mesh = new THREE.Mesh(manaGeom, manaMat);
                        mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale, y - size/2);
                        mesh.userData = { isMana: true, gridX: x, gridY: y, gridZ: z };
                        this.scene.add(mesh);
                        this.manaMeshes.push(mesh);
                        this.pulsatingMaterials.push(manaMat);

                        const isVisitedMana = this.engine.visitedCells.has(`${x},${y},${z}`);
                        if (!isVisitedMana) {
                            continue;
                        }
                    }

                    const key = `${x},${y},${z}`;
                    const isRevealedPath = this.engine.revealedPathSet.has(key);

                    const shouldRender = isIntro
                        ? val !== this.engine.mazeGen.TYPES.WALL
                        : (isVisited || isKnown || isRevealedPath);

                    if (shouldRender) {
                        let color = isIntro ? CONFIG.COLORS.THREE_VISITED : CONFIG.COLORS.THREE_KNOWN;
                        let material;

                        if (isRevealedPath) {
                            color = 0xffffff;
                            material = new THREE.MeshPhongMaterial({
                                color: color,
                                transparent: true,
                                opacity: 0.95 * opFactor,
                                emissive: color,
                                emissiveIntensity: 2.0 * opFactor
                            });
                        } else if (isVisited || isIntro) {
                            color = CONFIG.COLORS.THREE_VISITED;
                            if (val === 3) {
                                color = CONFIG.COLORS.THREE_START;
                            } else if (val === 4) {
                                const isUnlocked = this.engine.keysCollected === this.engine.totalKeys;
                                color = isUnlocked ? CONFIG.COLORS.THREE_EXIT : 0xff3300;
                            }
                            material = new THREE.MeshPhongMaterial({ color: color, transparent: true, opacity: isIntro ? 0.72 : (0.8 * opFactor) });
                        } else {
                            material = new THREE.MeshPhongMaterial({ 
                                color: color, 
                                transparent: true, 
                                opacity: 0.6 * opFactor, 
                                emissive: color, 
                                emissiveIntensity: 0.5 * opFactor 
                            });
                            this.pulsatingMaterials.push(material);
                        }

                        const hUp = z < size - 1 && this.engine.maze.get(x, y, z + 1) !== 0;
                        const hDown = z > 0 && this.engine.maze.get(x, y, z - 1) !== 0;
                        if (hUp || hDown) {
                            const index = this.pulsatingMaterials.indexOf(material);
                            if (index > -1) this.pulsatingMaterials.splice(index, 1);

                            if (hUp && hDown) {
                                let routeUsesUp = false;
                                let routeUsesDown = false;
                                if (isRevealedPath) {
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
                                }

                                const paintUpWhite = isRevealedPath && (routeUsesUp || (!routeUsesUp && !routeUsesDown));
                                const paintDownWhite = isRevealedPath && (routeUsesDown || (!routeUsesUp && !routeUsesDown));

                                const colorDown = paintDownWhite ? 0xffffff : (isVisited ? CONFIG.COLORS.THREE_ELEVATOR_DOWN : CONFIG.COLORS.THREE_ELEVATOR_DOWN_UNUSED);
                                const colorUp = paintUpWhite ? 0xffffff : (isVisited ? CONFIG.COLORS.THREE_ELEVATOR_UP : CONFIG.COLORS.THREE_ELEVATOR_UP_UNUSED);

                                const matBottom = new THREE.MeshPhongMaterial({
                                    color: colorDown,
                                    transparent: true,
                                    opacity: 0.9 * opFactor,
                                    emissive: colorDown,
                                    emissiveIntensity: (paintDownWhite ? 2.0 : 0.4) * opFactor
                                });
                                const matTop = new THREE.MeshPhongMaterial({
                                    color: colorUp,
                                    transparent: true,
                                    opacity: 0.9 * opFactor,
                                    emissive: colorUp,
                                    emissiveIntensity: (paintUpWhite ? 2.0 : 0.4) * opFactor
                                });

                                const meshBottom = new THREE.Mesh(shaftGeomBottom, matBottom);
                                const meshTop    = new THREE.Mesh(shaftGeomTop,    matTop);
                                meshBottom.position.set(x - size/2, (z - size/2) * this.engine.vScale - 0.2125, y - size/2);
                                meshTop.position.set(   x - size/2, (z - size/2) * this.engine.vScale + 0.2125, y - size/2);
                                this.scene.add(meshBottom);
                                this.scene.add(meshTop);
                                this.gridMeshes[(x * size * size) + (y * size) + z] = meshTop;
                                if (isKnown && !isRevealedPath) {
                                    meshBottom.userData = { gridX: x, gridY: y, gridZ: z };
                                    meshTop.userData = { gridX: x, gridY: y, gridZ: z };
                                    this.knownMeshes.push(meshBottom);
                                    this.knownMeshes.push(meshTop);
                                }
                                continue;
                            } else {
                                const baseColor = hUp ? CONFIG.COLORS.THREE_ELEVATOR_UP : CONFIG.COLORS.THREE_ELEVATOR_DOWN;
                                const unusedColor = hUp ? CONFIG.COLORS.THREE_ELEVATOR_UP_UNUSED : CONFIG.COLORS.THREE_ELEVATOR_DOWN_UNUSED;
                                const elevatorColor = isRevealedPath ? 0xffffff : (isVisited ? baseColor : unusedColor);
                                const intensity = isRevealedPath ? 2.0 : 0.4;
                                material = new THREE.MeshPhongMaterial({
                                    color: elevatorColor,
                                    transparent: true,
                                    opacity: 0.9 * opFactor,
                                    emissive: elevatorColor,
                                    emissiveIntensity: intensity * opFactor
                                });
                            }
                        }

                        const isPlayerHere = x === Math.floor(this.engine.player.x) && y === Math.floor(this.engine.player.y) && z === this.engine.player.z;
                        const isHunterHere = this.engine.hunters.some(h => h.x === x && h.y === y && h.z === z);
                        if (isPlayerHere || isHunterHere) {
                            const floorGeom = new THREE.BoxGeometry(0.9, 0.05, 0.9);
                            const mesh = new THREE.Mesh(floorGeom, material);
                            mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale - 0.425, y - size/2);
                            this.scene.add(mesh);
                            this.gridMeshes[(x * size * size) + (y * size) + z] = mesh;
                            continue;
                        }

                        const mesh = new THREE.Mesh(geometry, material);
                        mesh.position.set(x - size/2, (z - size/2) * this.engine.vScale, y - size/2);
                        
                        if (val === 4) {
                            this.exitMesh = mesh;
                            if (this.engine.keysCollected < this.engine.totalKeys) {
                                const cageGeom = new THREE.BoxGeometry(0.95, 0.95, 0.95);
                                const cageMat = new THREE.MeshBasicMaterial({
                                    color: 0xff0000,
                                    wireframe: true
                                });
                                const cageMesh = new THREE.Mesh(cageGeom, cageMat);
                                mesh.add(cageMesh);
                            }
                        }
                        
                        this.scene.add(mesh);
                        this.gridMeshes[(x * size * size) + (y * size) + z] = mesh;
                        if ((isKnown || val === this.engine.mazeGen.TYPES.EXIT) && !isRevealedPath) {
                            mesh.userData = { gridX: x, gridY: y, gridZ: z };
                            this.knownMeshes.push(mesh);
                        }
                    }
                }
            }
        }
        
        if (isIntro) return;

        const pGeom = new THREE.SphereGeometry(0.42, 16, 16);
        const pMarkerMat = new THREE.MeshPhongMaterial({
            color: 0xff0000,
            emissive: 0xff0000,
            emissiveIntensity: 0.8,
            depthWrite: false
        });
        const pMarker = new THREE.Mesh(pGeom, pMarkerMat);
        pMarker.position.set(
            Math.floor(this.engine.player.x) - size/2,
            (this.engine.player.z - size/2) * this.engine.vScale + 0.05,
            Math.floor(this.engine.player.y) - size/2
        );
        this.scene.add(pMarker);
        
        const hGeom = new THREE.SphereGeometry(0.4);
        const hMat = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.8, depthWrite: false });
        
        const trailMat1 = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, transparent: true, opacity: 0.40, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.3, depthWrite: false });
        const trailMat2 = new THREE.MeshPhongMaterial({ color: CONFIG.COLORS.THREE_HUNTER, transparent: true, opacity: 0.15, emissive: CONFIG.COLORS.THREE_HUNTER, emissiveIntensity: 0.1, depthWrite: false });
        const trailGeom = hGeom;

        for (let i = 0; i < this.engine.hunters.length; i++) {
            const h = this.engine.hunters[i];
            if (h.state === 'SLEEP') continue;
            
            const tMesh2 = new THREE.Mesh(trailGeom, trailMat2);
            const tMesh1 = new THREE.Mesh(trailGeom, trailMat1);
            
            tMesh2.visible = false;
            tMesh1.visible = false;
            tMesh2.renderOrder = 99;
            tMesh1.renderOrder = 99;
            
            this.scene.add(tMesh2);
            this.scene.add(tMesh1);

            const hGroup = new THREE.Group();
            hGroup.renderOrder = 99;
            
            const coreMesh = new THREE.Mesh(hGeom, hMat);
            hGroup.add(coreMesh);
            
            const numParticles = 4;
            const particles = [];
            const partGeom = new THREE.BoxGeometry(0.18, 0.18, 0.18);
            const partColors = [CONFIG.COLORS.THREE_HUNTER, 0xff00ff, 0x00ffff, 0xffff00];
            
            for (let p = 0; p < numParticles; p++) {
                const pMat = new THREE.MeshPhongMaterial({
                    color: partColors[p % partColors.length],
                    transparent: true,
                    opacity: 0.8,
                    emissive: partColors[p % partColors.length],
                    emissiveIntensity: 0.8,
                    depthWrite: false
                });
                const pMesh = new THREE.Mesh(partGeom, pMat);
                
                pMesh.userData = {
                    angle: (p / numParticles) * Math.PI * 2,
                    radius: 0.35 + Math.random() * 0.1,
                    speed: 1.0 + Math.random() * 1.5,
                    phaseY: Math.random() * Math.PI * 2
                };
                
                hGroup.add(pMesh);
                particles.push(pMesh);
            }
            
            hGroup.position.set(h.x! - size/2, (h.z! - size/2) * this.engine.vScale, h.y! - size/2);
            this.scene.add(hGroup);
            
            this.hunterMeshes.push({ 
                hunter: h, 
                mesh: hGroup,
                coreMesh: coreMesh,
                particles: particles,
                trail1: tMesh1,
                trail2: tMesh2
            });
        }
        
        this.camera.position.set(size, size * this.engine.vScale, size);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    }

    /**
     * Updates pulsating materials, rotates items, and repositions hunter meshes.
     */
    update(dt: number) {
        if (this.controls) {
            this.controls.update();
        }

        const size = this.engine.mazeGen.size;
        const opFactor = this.engine.isTeleportMode ? 0.25 : 1.0;

        for (const hm of this.hunterMeshes) {
            const h = hm.hunter;
            const mesh = hm.mesh;
            
            if (h.state === 'DEAD_BY_JELLY') {
                mesh.visible = false;
                continue;
            }
            mesh.visible = true;
            if (h.visualX === null || h.visualZ === null || h.visualY === null) continue;
            
            mesh.position.set(h.visualX - size/2, (h.visualZ - size/2) * this.engine.vScale, h.visualY - size/2);

            const time = h.jellyTime;
            let scaleX = 1 + Math.sin(time * 1.2) * 0.07;
            let scaleY = 1 + Math.cos(time * 0.8) * 0.07;
            let scaleZ = 1 + Math.sin(time * 1.5) * 0.07;
            
            if (h.state === 'DYING') {
                const progress = Math.min(1.0, this.engine.jellyPortalResetElapsed / this.engine.jellyPortalResetDuration);
                const shrink = 1.0 - progress;
                scaleX *= shrink;
                scaleY *= shrink;
                scaleZ *= shrink;
                
                const shakeX = (Math.random() - 0.5) * 0.15;
                const shakeY = (Math.random() - 0.5) * 0.15;
                const shakeZ = (Math.random() - 0.5) * 0.15;
                mesh.position.add(new THREE.Vector3(shakeX, shakeY, shakeZ));
            }

            if (hm.coreMesh) {
                hm.coreMesh.scale.set(scaleX, scaleY, scaleZ);
                if (hm.coreMesh.material) {
                    let finalIntensity = (0.8 + 0.2 * Math.sin(time * 3) + (Math.random() < 0.1 ? (Math.random() - 0.5) * 0.4 : 0)) * opFactor;
                    if (h.state === 'DYING') {
                        const progress = Math.min(1.0, this.engine.jellyPortalResetElapsed / this.engine.jellyPortalResetDuration);
                        finalIntensity *= (1.0 - progress);
                    }
                    hm.coreMesh.material.emissiveIntensity = finalIntensity;
                }
            }

            if (hm.particles) {
                hm.particles.forEach((p: any) => {
                    const ud = p.userData;
                    ud.angle += ud.speed * dt;
                    
                    const px = Math.cos(ud.angle) * ud.radius;
                    const pz = Math.sin(ud.angle) * ud.radius;
                    const py = Math.sin(ud.angle * 2 + ud.phaseY) * 0.25;
                    
                    let jitterX = 0, jitterY = 0, jitterZ = 0;
                    if (Math.random() < 0.15) {
                        jitterX = (Math.random() - 0.5) * 0.12;
                        jitterY = (Math.random() - 0.5) * 0.12;
                        jitterZ = (Math.random() - 0.5) * 0.12;
                        p.scale.set(1.4 + Math.random() * 0.4, 0.6 + Math.random() * 0.3, 1.4 + Math.random() * 0.4);
                    } else {
                        p.scale.set(1.0, 1.0, 1.0);
                    }
                    p.position.set(px + jitterX, py + jitterY, pz + jitterZ);
                });
            }

            const dx = h.x - h.visualX;
            const dy = h.y - h.visualY;
            const stepDist = Math.sqrt(dx * dx + dy * dy);
            const p = Math.max(0, Math.min(1, 1 - stepDist));

            if (h.lastPos && (h.lastPos.x !== h.x || h.lastPos.y !== h.y)) {
                hm.trail1.position.set(h.lastPos.x - size/2, (h.lastPos.z - size/2) * this.engine.vScale, h.lastPos.y - size/2);
                hm.trail1.visible = true;
                
                const time1 = h.jellyTime - 0.2;
                const scale1 = 0.95 - p * 0.47;
                const scaleX1 = scale1 * (1 + Math.sin(time1 * 1.2) * 0.07);
                const scaleY1 = scale1 * (1 + Math.cos(time1 * 0.8) * 0.07);
                const scaleZ1 = scale1 * (1 + Math.sin(time1 * 1.5) * 0.07);
                hm.trail1.scale.set(scaleX1, scaleY1, scaleZ1);
                
                if (hm.trail1.material) {
                    hm.trail1.material.opacity = (0.40 - p * 0.20) * opFactor;
                }
            } else {
                hm.trail1.visible = false;
            }

            if (h.history && h.history.length === 2) {
                const oldestPos = h.history[0];
                hm.trail2.position.set(oldestPos.x - size/2, (oldestPos.z - size/2) * this.engine.vScale, oldestPos.y - size/2);
                
                const scale2 = 0.48 * (1 - p);
                if (scale2 > 0.02) {
                    hm.trail2.visible = true;
                    
                    const time2 = h.jellyTime - 0.4;
                    const scaleX2 = scale2 * (1 + Math.sin(time2 * 1.2) * 0.07);
                    const scaleY2 = scale2 * (1 + Math.cos(time2 * 0.8) * 0.07);
                    const scaleZ2 = scale2 * (1 + Math.sin(time2 * 1.5) * 0.07);
                    hm.trail2.scale.set(scaleX2, scaleY2, scaleZ2);
                    
                    if (hm.trail2.material) {
                        hm.trail2.material.opacity = (0.20 * (1 - p)) * opFactor;
                    }
                } else {
                    hm.trail2.visible = false;
                }
            } else {
                hm.trail2.visible = false;
            }
        }

        if (this.keyMeshes) {
            for (const km of this.keyMeshes) {
                km.rotation.y += 1.5 * dt;
                km.rotation.x += 0.5 * dt;
            }
        }

        if (this.engine.isTeleportMode && this.teleportMeshes && this.engine.gamepadTeleportSelectedIndex !== undefined) {
            const candidates = this.engine.getTeleportCandidates();
            const selected = candidates[this.engine.gamepadTeleportSelectedIndex!];
            this.teleportMeshes.forEach(mesh => {
                const { gridX, gridY, gridZ } = mesh.userData;
                const isSelected = selected && gridX === selected.x && gridY === selected.y && gridZ === selected.z;
                if (isSelected) {
                    const scale = 1.3 + 0.25 * Math.sin(Date.now() / 100);
                    mesh.scale.set(scale, scale, scale);
                    if (mesh.material && (mesh.material as any).emissive) {
                        (mesh.material as any).emissive.setHex(0xffaa00);
                        (mesh.material as any).emissiveIntensity = 3.5;
                    }
                } else {
                    const isPlayerHere = gridX === Math.floor(this.engine.player.x) && gridY === Math.floor(this.engine.player.y) && gridZ === this.engine.player.z;
                    const isInactive = this.engine.teleportCooldownTicks > 0;
                    
                    let baseScale = 1.0;
                    if (isPlayerHere) {
                        baseScale = 1.4;
                    }
                    mesh.scale.set(baseScale, baseScale, baseScale);

                    if (mesh.material && (mesh.material as any).emissive) {
                        if (isInactive) {
                            (mesh.material as any).color.setHex(0x444444);
                            (mesh.material as any).emissive.setHex(0x444444);
                            (mesh.material as any).emissiveIntensity = 0.0;
                            (mesh.material as any).opacity = 0.4;
                        } else if (isPlayerHere) {
                            (mesh.material as any).color.setHex(0x00ffff);
                            (mesh.material as any).emissive.setHex(0x00ffff);
                            (mesh.material as any).emissiveIntensity = 3.0;
                            (mesh.material as any).opacity = 0.5;
                        } else {
                            const isStart = gridX === Math.floor(this.engine.mazeGen.startPos.x) && gridY === Math.floor(this.engine.mazeGen.startPos.y) && gridZ === this.engine.mazeGen.startPos.z;
                            if (isStart) {
                                (mesh.material as any).color.setHex(CONFIG.COLORS.THREE_START);
                                (mesh.material as any).emissive.setHex(CONFIG.COLORS.THREE_START);
                                (mesh.material as any).emissiveIntensity = this.engine.isTeleportMode ? 2.5 : 0.5;
                                (mesh.material as any).opacity = this.engine.isTeleportMode ? 0.95 : 0.8;
                            } else {
                                const isJelly = this.engine.maze.get(gridX, gridY, gridZ) === this.engine.mazeGen.TYPES.JELLY_PORTAL;
                                const col = isJelly ? CONFIG.COLORS.THREE_JELLY_PORTAL : CONFIG.COLORS.THREE_TELEPORT;
                                (mesh.material as any).color.setHex(col);
                                (mesh.material as any).emissive.setHex(col);
                                (mesh.material as any).emissiveIntensity = 2.5;
                                (mesh.material as any).opacity = 0.95;
                            }
                        }
                    }
                }
            });
        }

        this.updatePulse();
    }

    /**
     * Raycasts mouse coordinates on 3D meshes to detect portal map triggers.
     */
    onCanvasClick(event: MouseEvent) {
        if (!this.engine.isMap3DActive) return;
        
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        this.raycaster.setFromCamera(this.pointer, this.camera);
        
        if (this.engine.isTeleportMode) {
            const intersects = this.raycaster.intersectObjects(this.teleportMeshes);
            if (intersects.length > 0) {
                const hitMesh = intersects[0].object;
                const { gridX, gridY, gridZ } = hitMesh.userData;
                const isTargetInactive = this.engine.inactiveTeleportPos && 
                                         this.engine.inactiveTeleportPos.x === gridX && 
                                         this.engine.inactiveTeleportPos.y === gridY && 
                                         this.engine.inactiveTeleportPos.z === gridZ;
                
                const px = Math.floor(this.engine.player.x);
                const py = Math.floor(this.engine.player.y);
                const pz = this.engine.player.z;
                const isCurrentPos = gridX === px && gridY === py && gridZ === pz;

                if (isCurrentPos) {
                    this.engine.toggleTeleportMap(false);
                } else if (!isTargetInactive) {
                    this.engine.teleportTo(gridX, gridY, gridZ);
                }
            }
        } else {
            const intersects = this.raycaster.intersectObjects(this.knownMeshes);
            if (intersects.length > 0) {
                const hitMesh = intersects[0].object;
                const { gridX, gridY, gridZ } = hitMesh.userData;
                
                this.engine.triggerPathReveal(gridX, gridY, gridZ);
            }
        }
    }

    /**
     * Rotates pulsing known blocks glowing emissivity.
     */
    updatePulse() {
        if (!this.engine.isMap3DActive || this.pulsatingMaterials.length === 0) return;

        const pulseIntensity = 0.2 + 0.5 * Math.abs(Math.sin(Date.now() * 0.003));
        this.pulsatingMaterials.forEach(material => {
            material.emissiveIntensity = pulseIntensity;
        });
    }

    /**
     * Renders WebGL scene frame.
     */
    render() {
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    /**
     * Eases OrbitControls target and camera vectors towards player grid coordinates.
     */
    animateCameraToPlayer(onComplete?: () => void) {
        const size = this.engine.mazeGen.size;
        const playerX = this.engine.player.x - size / 2;
        const playerY = (this.engine.player.z - size / 2) * this.engine.vScale;
        const playerZ = this.engine.player.y - size / 2;

        const startTarget = this.controls.target.clone();
        const endTarget = new THREE.Vector3(playerX, playerY, playerZ);

        const startCam = this.camera.position.clone();
        const endCam = new THREE.Vector3(playerX + 4, playerY + 5, playerZ + 4);

        const duration = 1100;
        const startTime = performance.now();

        const animate = (now: number) => {
            if (this.engine.isDestroyed) return;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1.0);

            const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            this.controls.target.lerpVectors(startTarget, endTarget, ease);
            this.camera.position.lerpVectors(startCam, endCam, ease);
            this.controls.update();

            if (progress < 1.0) {
                requestAnimationFrame(animate);
            } else {
                if (onComplete) onComplete();
            }
        };

        requestAnimationFrame(animate);
    }

    /**
     * Spin animation for continue save.
     */
    playContinueAnimation() {
        const size = this.engine.mazeGen.size;

        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.style.display = 'block';
        }
        const instEl = document.getElementById('map3d-instructions');
        if (instEl) instEl.style.display = 'block';
        if (this.engine.isometricCanvas) {
            this.engine.isometricCanvas.style.display = 'none';
        }

        this.engine.ui.setMap3DVisible(true);
        this.engine.isMap3DActive = true;
        this.resize();

        this.build3DMap(false);

        this.camera.position.set(size * 0.9, size * this.engine.vScale * 0.6, size * 0.9);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        this.engine.hideCanvasInstant();

        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 2.0;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.enableRotate = false;

        const finishContinue = () => {
            if (this.engine.isDestroyed) return;
            this.controls.autoRotate = false;
            this.animateCameraToPlayer(() => {
                this.engine._transitionToGame();
            });
        };

        this.engine.activeContinueTimer = setTimeout(finishContinue, 2500);
    }

    /**
     * Reveals the maze sequentially from start and exit.
     */
    playIntroAnimation() {
        this.engine.isIntroPlaying = true;
        const size = this.engine.mazeGen.size;

        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.style.display = 'block';
        }
        const instEl = document.getElementById('map3d-instructions');
        if (instEl) instEl.style.display = 'block';
        if (this.engine.isometricCanvas) {
            this.engine.isometricCanvas.style.display = 'none';
        }

        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight.position.set(10, 20, 10);
        this.scene.add(dirLight);

        this.engine.ui.setMap3DVisible(true);
        this.engine.isMap3DActive = true;
        this.resize();
        this.camera.position.set(size * 0.9, size * this.engine.vScale * 0.6, size * 0.9);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        this.engine.hideCanvasInstant();

        const startPos = this.engine.mazeGen.startPos;
        const exitPos  = this.engine.getExitPos();
        const markerGeom = new THREE.BoxGeometry(0.92, 0.92, 0.92);

        const startMat = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_START, emissive: CONFIG.COLORS.THREE_START,
            emissiveIntensity: 0.6, transparent: true, opacity: 0.95
        });
        const startMesh = new THREE.Mesh(markerGeom, startMat);
        startMesh.position.set(
            Math.floor(startPos.x) - size / 2,
            (startPos.z - size / 2) * this.engine.vScale,
            Math.floor(startPos.y) - size / 2
        );
        this.scene.add(startMesh);

        const exitMat = new THREE.MeshPhongMaterial({
            color: 0xff3300, emissive: 0xff3300,
            emissiveIntensity: 0.6, transparent: true, opacity: 0.95
        });
        const exitMesh = new THREE.Mesh(markerGeom, exitMat);
        exitMesh.position.set(
            exitPos.x - size / 2,
            (exitPos.z - size / 2) * this.engine.vScale,
            exitPos.y - size / 2
        );
        const cageGeom = new THREE.BoxGeometry(0.95, 0.95, 0.95);
        const cageMat = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
        const cageMesh = new THREE.Mesh(cageGeom, cageMat);
        exitMesh.add(cageMesh);
        this.scene.add(exitMesh);

        const dirs3D = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
        const startKey = `${Math.floor(startPos.x)},${Math.floor(startPos.y)},${startPos.z}`;
        const exitKey  = `${exitPos.x},${exitPos.y},${exitPos.z}`;
        const visited  = new Set([startKey, exitKey]);

        const qA = [{ x: Math.floor(startPos.x), y: Math.floor(startPos.y), z: startPos.z }];
        const qB = [{ x: exitPos.x, y: exitPos.y, z: exitPos.z }];
        let iA = 0, iB = 0;

        const revealOrder: { x: number; y: number; z: number }[] = [];
        while (iA < qA.length || iB < qB.length) {
            if (iA < qA.length) {
                const { x, y, z } = qA[iA++];
                for (const [dx, dy, dz] of dirs3D) {
                    const nx = x + dx, ny = y + dy, nz = z + dz;
                    const key = `${nx},${ny},${nz}`;
                    if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size
                        && !visited.has(key)
                        && this.engine.maze.get(nx, ny, nz) !== this.engine.mazeGen.TYPES.WALL) {
                        visited.add(key);
                        qA.push({ x: nx, y: ny, z: nz });
                        revealOrder.push({ x: nx, y: ny, z: nz });
                    }
                }
            }
            if (iB < qB.length) {
                const { x, y, z } = qB[iB++];
                for (const [dx, dy, dz] of dirs3D) {
                    const nx = x + dx, ny = y + dy, nz = z + dz;
                    const key = `${nx},${ny},${nz}`;
                    if (nx >= 0 && nx < size && ny >= 0 && ny < size && nz >= 0 && nz < size
                        && !visited.has(key)
                        && this.engine.maze.get(nx, ny, nz) !== this.engine.mazeGen.TYPES.WALL) {
                        visited.add(key);
                        qB.push({ x: nx, y: ny, z: nz });
                        revealOrder.push({ x: nx, y: ny, z: nz });
                    }
                }
            }
        }

        const pathGeom = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const pathMat = new THREE.MeshPhongMaterial({
            color: CONFIG.COLORS.THREE_VISITED,
            transparent: true,
            opacity: 0.72
        });

        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 2.0;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.enableRotate = false;

        const TOTAL_DURATION_MS = 6200;
        const TICK_MS = Math.max(12, Math.floor(TOTAL_DURATION_MS / revealOrder.length));
        let stepIndex = 0;
        const revealedMeshes: THREE.Mesh[] = [];

        const revealNext = () => {
            if (this.engine.isDestroyed) return;
            const batchSize = Math.max(1, Math.floor(revealOrder.length / 500));
            for (let b = 0; b < batchSize; b++) {
                if (stepIndex >= revealOrder.length) break;
                const { x, y, z } = revealOrder[stepIndex++];
                
                const isShaft = z % 2 === 0;
                let geom;
                if (isShaft) {
                    geom = new THREE.CylinderGeometry(0.35, 0.35, 2.0 * this.engine.vScale, 8);
                } else {
                    geom = pathGeom;
                }
                const mesh = new THREE.Mesh(geom, pathMat);
                mesh.position.set(x - size / 2, (z - size / 2) * this.engine.vScale, y - size / 2);
                this.scene.add(mesh);
                revealedMeshes.push(mesh);
            }
            if (stepIndex < revealOrder.length) {
                this.engine.activeIntroTimer = setTimeout(revealNext, TICK_MS);
            } else {
                if (this.engine.activeSkipHandler) {
                    window.removeEventListener('keydown', this.engine.activeSkipHandler);
                    this.engine.activeSkipHandler = null;
                }
                playZoomPhase();
            }
        };

        const playZoomPhase = () => {
            if (this.engine.isDestroyed) return;
            this.controls.autoRotate = false;

            this.animateCameraToPlayer(() => {
                this.engine._transitionToGame();
            });
        };

        this.engine.activeSkipHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                skip();
            }
        };
        window.addEventListener('keydown', this.engine.activeSkipHandler);

        const skip = () => {
            if (this.engine.activeIntroTimer) {
                clearTimeout(this.engine.activeIntroTimer);
                this.engine.activeIntroTimer = null;
            }
            if (this.engine.activeSkipHandler) {
                window.removeEventListener('keydown', this.engine.activeSkipHandler);
                this.engine.activeSkipHandler = null;
            }

            revealedMeshes.forEach(mesh => this.scene.remove(mesh));
            playZoomPhase();
        };

        this.engine.activeIntroTimer = setTimeout(revealNext, 800);
    }

    /**
     * Cleans up all Three.js resources and event listeners.
     */
    destroy() {
        if (this.controls) {
            this.controls.dispose();
        }

        if (this.renderer && this.renderer.domElement) {
            this.renderer.domElement.removeEventListener('click', this.handleCanvasClick);
            this.renderer.domElement.removeEventListener('pointerdown', this.handlePointerDown);
            this.renderer.domElement.removeEventListener('pointerup', this.handlePointerUp);
        }

        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement.remove();
        }
    }
}
