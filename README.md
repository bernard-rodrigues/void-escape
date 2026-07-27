# VOID ESCAPE

A 3D maze exploration simulator with a cyberpunk theme, vertical navigation challenges, and hostile entities. Now fully migrated to Svelte, Vite, and TypeScript.

---

## 🚀 About the Project

**Void Escape** is an interactive experience where the player must navigate a procedurally generated 3D maze. The game combines the simplicity of a tactical 2D view with the spatial depth of an interactive 3D holographic map to outsmart the "Void Hunters".

### Key Features

- **Procedural Generation:** Configure the maze size (`Maze Degree`) and complexity (`Branching Factor`).
- **Deterministic Maps (Seeds):** Define a custom seed value in the configuration file to generate the exact same maze structure across playthroughs.
- **Multiple Enemies:** Hunters that scale with difficulty and track your footsteps once they cross your heat trail.
- **Safe Mode:** A practice mode configuration that disables hostile entities, lets you explore the labyrinth peacefully, and keeps teleports active forever.
- **Gamepad Support:** Full input integration allowing player movement, camera rotations, zoom controls, and menu navigation using standard Gamepads.
- **Localization System:** Seamless translation (English, Portuguese, Spanish, and Japanese) of all system text, dialogue boxes, and contextual warnings.
- **Dual Map System:**
  - **2D Map:** Tactical navigation, floor by floor, featuring a real-time hunter status marquee and proximity detector.
  - **3D Hologram:** Complete orbital spatial view showing elevator connections and known teleports.
- **Movement Physics:** Support for both "Tank" (classic) and "Direct" (modern) controls with slide-along-wall physics.
- **Dynamic Warning Feeds:** Integrated visual alerts on the 2D canvas borders when being chased or when an enemy is nearby.

---

## 🎮 How to Play

1.  **Configuration:** In the main menu, set your preferred grid size, branching complexity, and movement style.
2.  **Objective:** Reach the **green block** (Exit) while avoiding the **purple dots** (Enemies).
3.  **Exploration:** Use elevators (▲/▼) to transit between floors or activate teleports to create restore checkpoints.

### Keyboard Controls
- **WASD / Arrow Keys:** Move and Rotate.
- **Q / E or PgUp / PgDn:** Go Up or Down floors / Use Teleports.
- **M:** Toggle 3D Holographic Map.

### Gamepad Controls
- **Left Analog / D-Pad:** Move and Rotate.
- **Right Analog:** Rotate and Zoom 3D camera.
- **LB / RB:** Cycle active teleports in Map.
- **A / Y:** Confirm selection / Trigger action.
- **Start:** Toggle Pause menu.

---

## 🛠️ Technologies Used

- **Svelte:** Component UI engine orchestrating overlay HUDs, menus, and localization.
- **Vite:** High-speed dev server and static assets bundler.
- **TypeScript:** Strict type checks for A* pathfinders, physics colliders, and generator modules.
- **Three.js:** WebGL render engine for the orbital 3D holographic overview.
- **HTML5 Canvas:** Tactical 2D navigation view rendering.
- **CSS3:** Futuristic interface styling with glassmorphism, responsive controls, and alert screens.
- **Vitest:** Blazing fast unit testing framework replacing native node runners.

---

## ⚡ Getting Started (Local Development)

### Prerequisites
* Node.js v18 or later.

### Installation
Clone the repository, navigate to the folder, and install dependencies:
```bash
npm install
```

### Local Dev Server
Launch the Vite development server locally:
```bash
npm run dev
```

### Compile Production Build
Compile and bundle static files into the `dist/` folder:
```bash
npm run build
```

### Run Unit Tests
Run Vitest to verify core game algorithms:
```bash
npm test
```

---

## 📁 Project Structure

* [index.html](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/index.html): Vite HTML index mount point.
* [vite.config.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/vite.config.ts): Vite and Vitest configurations.
* [svelte.config.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/svelte.config.js): Svelte compilation parameters.
* [tsconfig.json](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/tsconfig.json): TypeScript rules.
* **`src/`**: Primary source directory.
  * [src/main.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/main.ts): Svelte bootloader file.
  * [src/App.svelte](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/App.svelte): Main Svelte application housing HUDs and game canvas mounting.
  * **`src/engine/`**: Core TypeScript codebases.
    * [config.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/config.ts): Configurable game parameters (speeds, colors, limits).
    * [engine.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/engine.ts): Core game loop, input routing, 3D syncing, and physics rules.
    * [ui.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/ui.ts): HUD manager updating threat alerts and proximity readings directly in DOM.
    * [maze3d.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/maze3d.ts): Procedural 3D maze generator with Mulberry32 PRNG.
    * [pathfinder.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/pathfinder.ts): Strongly typed A* routing, MinHeap queue, and 0-1 BFS routines.
    * [hunter.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/hunter.ts): Trailing AI routing cycles (SLEEP, tracking, intercepting).
    * [save.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/save.ts): LocalStorage Matrix encoder in Base64.
    * [translations.ts](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/src/engine/translations.ts): Multi-language dictionary files.
  * **`src/tests/`**: Vitest unit test suites.
* **`public/assets/`**: Static image files, icons, and typewriter cutscenes.

---

## 🤖 Automated CI/CD Pipelines

A GitHub Actions pipeline is set up in `.github/workflows/test.yml`. Whenever a change is pushed to the `main` branch, the server automatically:
1. Installs project dependencies.
2. Runs all 62 automated Vitest tests.
3. Builds the production static assets (`npm run build`).
4. Deploys the built static code in the `dist/` directory directly to the **`gh-pages`** branch for free web hosting.

---
Developed as a high-fidelity prototype for procedural exploration systems.
