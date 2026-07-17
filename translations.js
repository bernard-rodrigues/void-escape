export const TRANSLATIONS = {
    en: {
        // Main Menu / Start Menu
        gameTitle: "VOID ESCAPE",
        gameCredits: "a game by Bernard Rodrigues",
        activeHunters: "Active Hunters",
        activeTeleports: "Active Teleports",
        activeKeys: "Active Keys",
        availablePathfinders: "Available Pathfinders",
        mazeDegree: "Maze Degree",
        safeMode: "Safe Mode",
        generateMaze: "GENERATE MAZE",
        continue: "CONTINUE",
        degreeHint: "Controls the grid size. Higher values create larger, more complex mazes.",
        safeModeHint: "When active, no hunters will spawn in the maze.",

        // HUD / Game Stats (Grid 2x2)
        hudKeys: "KEYS",
        hudPathfinders: "PATHFINDERS",
        hudFloor: "Floor",
        hudVisited: "Visited",
        proximityDetector: "PROXIMITY DETECTOR",

        // Map Legend
        mapLegendTitle: "MAP LEGEND",
        legendVisited: "Visited Path",
        legendKnown: "Known Path",
        legendStart: "Starting Point",
        legendExit: "Maze Exit",
        legendHunter: "Void Hunter",
        legendTeleport: "Teleport",
        legendElevator: "Elevator",

        // Controls Hint
        controlsHintTitle: "CONTROLS HINT",
        actionMove: "Move / Rotate",
        actionElevator: "Elevator Up / Down",
        actionMap: "3D Holographic Map",
        actionZoom: "Zoom Minimap",

        // Banner Warnings & Messages
        msgVoidHuntersDetected: "Void Hunters Detected",
        msgKeySecured: "Key secured ({collected}/{total})",
        msgExitUnlocked: "Exit unlocked",
        msgKeysRemaining: "{count} key(s) remaining",
        msgNoOtherActiveTeleport: "No other active teleports",
        msgExitFound: "Exit found",
        msgNoPathfindersRemaining: "No pathfinders remaining",
        msgExitNotFoundYet: "Exit not found yet",
        msgSafePointTeleport: "Safe point... Teleport?",
        msgOopsNoisyShit: "Oops... noisy sh*t!",

        // Hunter Status Panel Marquee
        statusLabel: "HUNTER STATUS:",
        statusScanning: "SCANNING",
        statusActive: "ACTIVE",
        statusSleeping: "SLEEPING",
        statusTracking: "TRACKING MODE",
        statusConverging: "HUNTERS CONVERGING ({ticks} Ticks)",

        // Pause Menu
        pauseTitle: "PAUSED",
        resume: "RESUME",

        // Victory Screen
        victoryTitle: "Mission Accomplished",
        victoryText: "You have successfully navigated the 3D void.",
        victoryCompletion: "MAP COMPLETION: {percent}%",
        mapCompletion: "MAP COMPLETION",
        playAgain: "PLAY AGAIN",
        mainMenu: "MAIN MENU",

        // Death Screen / Game Over
        gameOverTitle: "Terminated",
        gameOverText: "You were caught by the void hunters.",

        // Loading / Saving indicators
        saving: "SAVING...",
        teleportAnomaly: "TELEPORT ANOMALY",
        ticks: "TICKS",

        // 3D Map Interface Instructions
        map3dInstructions: "Drag to rotate | Scroll to zoom | M to return",
        teleportWarning: "TELEPORT",

        // Mobile Buttons
        map: "MAP",
        teleport: "TELEPORT",

        // Teleport Modal Translation Keys
        teleportationLink: "TELEPORTATION LINK",
        teleportJumpSector: "Jump to Sector {floor}F?",
        teleportTargetGrid: "Target Grid: ({x}, {y})",
        teleportGo: "GO",
        teleportCancel: "CANCEL"
    }
};

export function getTranslation(key, params = {}, lang = 'en') {
    let text = TRANSLATIONS[lang]?.[key] || key;
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    return text;
}
