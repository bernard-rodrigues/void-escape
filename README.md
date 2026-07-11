# VOID ESCAPE

A 3D maze exploration simulator with a cyberpunk theme, vertical navigation challenges, and hostile entities.

## 🚀 About the Project

**Void Escape** is an interactive experience where the player must navigate a procedurally generated 3D maze. The game combines the simplicity of a tactical 2D view with the spatial depth of an interactive 3D holographic map to outsmart the "Void Hunters".

### Key Features

- **Procedural Generation:** Configure the maze size (`Maze Degree`) and complexity (`Branching Factor`).
- **Deterministic Maps (Seeds):** Define a custom seed value in the configuration file to generate the exact same maze structure across playthroughs.
- **Multiple Enemies:** Hunters that scale with difficulty and track your footsteps once they cross your heat trail.
- **Dual Map System:**
  - **2D Map:** Tactical navigation, floor by floor, featuring a real-time hunter status marquee and proximity detector.
  - **3D Hologram:** Complete orbital spatial view showing elevator connections and known teleports.
- **Movement Physics:** Support for both "Tank" (classic) and "Direct" (modern) controls with slide-along-wall physics.
- **Dynamic Warning Feeds:** Integrated visual alerts on the 2D canvas borders when being chased or when an enemy is nearby.

## 🎮 How to Play

1.  **Configuration:** In the main menu, set your preferred grid size, branching complexity, and movement style.
2.  **Objective:** Reach the **green block** (Exit) while avoiding the **purple dots** (Enemies).
3.  **Exploration:** Use elevators (▲/▼) to transit between floors or activate teleports to create restore checkpoints.

### Controls
- **WASD / Arrow Keys:** Move and Rotate.
- **Q / E or PgUp / PgDn:** Go Up or Down floors / Use Teleports.
- **M:** Toggle 3D Holographic Map.

## 🛠️ Technologies Used

- **JavaScript (ES6+):** Game loops, custom pathfinding algorithms (A* with MinHeap and 0-1 BFS), and hunter AI.
- **Three.js:** Render engine for the orbital 3D holographic overview.
- **HTML5 Canvas:** Tactical 2D navigation view rendering.
- **CSS3:** Futuristic interface styling with glassmorphism, responsive controls, and alert screens.
- **Node.js (v18+):** Native test runner for core game algorithms (zero external dependencies).

## 🧪 Automated Testing

To ensure the integrity of pathfinding algorithms, maze generation constraints, hunter behavior, and save data conversions, an automated test suite is provided.

### Running Tests
Execute the following command in the project root:
```bash
npm test
```

## 📐 Project Structure

- [index.html](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/index.html): UI layout, HUD overlays, and rendering containers.
- [style.css](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/style.css): Cyberpunk style sheet and keyframe border warning effects.
- [error_handler.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/error_handler.js): Global error monitoring and synchronous boot error overlay.
- [script.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/script.js): Game launcher, menu sliders setup, and instance orchestration.
- [config.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/config.js): Centralized configuration parameters (speeds, colors, seed parameter).
- [engine.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/engine.js): Core engine handling physics ticks, collisions, 2D render steps, and 3D map sync.
- [maze3d.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/maze3d.js): Procedural 3D maze generator incorporating a seeded Mulberry32 PRNG.
- [pathfinder.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/pathfinder.js): Custom pathfinding utility containing A* routing, MinHeap queue, and BFS algorithms.
- [hunter.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/hunter.js): Enemy AI state machine managing wandering, tracking, and teleport interception modes.
- [input.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/input.js): Input coordinator mapping keyboard listeners and mobile swipe gestures.
- [ui.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/ui.js): HUD manager updating labels, progress bars, and the threat marquee.
- [save.js](file:///C:/Users/bernard.rodrigues/Documents/Desenvolvimento/Pessoal/void-escape/save.js): LocalStorage coordinator encoding the maze matrix (in Base64) and runtime states.

---
Developed as a high-fidelity prototype for procedural exploration systems.
