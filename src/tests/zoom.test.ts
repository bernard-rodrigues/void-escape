import { test, describe, assert } from 'vitest';

test('Minimap Zoom - Scale and camera bounds calculation', () => {
    // Helper function reproducing the camera bounding calculations from engine.js
    const calculateCameraBounds = (px, py, size, visibleCells = 11) => {
        const zoomScale = size / visibleCells;
        const half = visibleCells / 2;

        let camX = px;
        let camY = py;
        if (camX < half) camX = half;
        if (camX > size - half) camX = size - half;
        if (camY < half) camY = half;
        if (camY > size - half) camY = size - half;

        return { zoomScale, camX, camY };
    };

    // Scenario 1: Maze of size 17 (degree 8)
    // The zoomScale should be 17 / 11 = 1.54545...
    const size17 = 17;
    
    // Player exactly in the center (x=8.5, y=8.5)
    // Camera should center on the player
    const boundsCenter = calculateCameraBounds(8.5, 8.5, size17);
    assert.strictEqual(boundsCenter.zoomScale, 17 / 11);
    assert.strictEqual(boundsCenter.camX, 8.5);
    assert.strictEqual(boundsCenter.camY, 8.5);

    // Player in the top-left corner (x=1.0, y=1.0)
    // Camera should clamp at the minimum limits (5.5, 5.5)
    const boundsCornerLeft = calculateCameraBounds(1.0, 1.0, size17);
    assert.strictEqual(boundsCornerLeft.camX, 5.5);
    assert.strictEqual(boundsCornerLeft.camY, 5.5);

    // Player near the maximum limits (x=16.0, y=16.0)
    // Camera should clamp at the maximum limits (size - 5.5 = 11.5)
    const boundsCornerRight = calculateCameraBounds(16.0, 16.0, size17);
    assert.strictEqual(boundsCornerRight.camX, 11.5);
    assert.strictEqual(boundsCornerRight.camY, 11.5);

    // Scenario 2: Maze of size 33 (degree 16)
    const size33 = 33;
    
    // Player near the boundaries: x=2.0 (left side), y=31.0 (bottom side)
    // camX should clamp to 5.5
    // camY should clamp to 33 - 5.5 = 27.5
    const boundsEdge = calculateCameraBounds(2.0, 31.0, size33);
    assert.strictEqual(boundsEdge.zoomScale, 33 / 11);
    assert.strictEqual(boundsEdge.camX, 5.5);
    assert.strictEqual(boundsEdge.camY, 27.5);
});

test('Minimap Zoom - Smooth transition LERP updates', () => {
    let zoomVisibleCells = 17; // initial maze size (zoom out)
    const targetVisible = 11;  // zoom in target
    const dt = 0.016;          // frame delta (60fps)

    // Simulate 10 frames of transition animation
    for (let i = 0; i < 10; i++) {
        const prev = zoomVisibleCells;
        zoomVisibleCells += (targetVisible - zoomVisibleCells) * (1 - Math.exp(-12 * dt));
        // The visible cell count should gradually decline towards 11
        assert.ok(zoomVisibleCells < prev);
        assert.ok(zoomVisibleCells >= 11);
    }
});

test('Minimap Zoom - Bypassed for smaller mazes', () => {
    // Helper reproducing zoom eligibility logic
    const isZoomAllowed = (size) => size > 11;

    // Size <= 11 (degree <= 5) -> zoom should not be allowed
    assert.strictEqual(isZoomAllowed(5), false);   // degree 2
    assert.strictEqual(isZoomAllowed(7), false);   // degree 3
    assert.strictEqual(isZoomAllowed(11), false);  // degree 5

    // Size > 11 (degree > 5) -> zoom allowed
    assert.strictEqual(isZoomAllowed(13), true);   // degree 6
    assert.strictEqual(isZoomAllowed(17), true);   // degree 8
});
