/**
 * InputHandler - Handles keyboard controls and touch/gesture swipes for mobile devices.
 */
export class InputHandler {
    constructor() {
        this.keys = {};
        this.touchStart = null;
        this.touchMoveVector = null;
        this.preventScrollKeys = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'pageup', 'pagedown'];
        
        this.handleKeyDown = null;
        this.handleKeyUp = null;
        this.handleTouchStart = null;
        this.handleTouchMove = null;
        this.handleTouchEnd = null;

        this.init();
    }

    /**
     * Set up window keyboard listeners.
     */
    init() {
        this.handleKeyDown = (e) => {
            const key = e.key.toLowerCase();
            this.keys[key] = true;
            if (this.preventScrollKeys.includes(key)) {
                e.preventDefault();
            }
        };

        this.handleKeyUp = (e) => {
            this.keys[e.key.toLowerCase()] = false;
        };

        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    /**
     * Set up touch/swipe support on mobile devices.
     * Takes checking functions as arguments to prevent input handling when not applicable.
     */
    setupTouch(isMapActiveFn, isGameOverFn) {
        this.handleTouchStart = (e) => {
            if (isMapActiveFn() || isGameOverFn() || e.target.closest('button')) {
                return;
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            this.touchStart = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        };

        this.handleTouchMove = (e) => {
            if (!this.touchStart || isMapActiveFn() || isGameOverFn()) {
                return;
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            const dx = e.touches[0].clientX - this.touchStart.x;
            const dy = e.touches[0].clientY - this.touchStart.y;
            const mag = Math.sqrt(dx * dx + dy * dy);
            
            // Register movement if it exceeds threshold
            if (mag > 10) {
                this.touchMoveVector = { x: dx / mag, y: dy / mag };
            }
        };

        this.handleTouchEnd = () => {
            this.touchStart = null;
            this.touchMoveVector = null;
        };

        window.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        window.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Clear all registered event listeners.
     */
    destroy() {
        if (this.handleKeyDown) {
            window.removeEventListener('keydown', this.handleKeyDown);
        }
        if (this.handleKeyUp) {
            window.removeEventListener('keyup', this.handleKeyUp);
        }
        if (this.handleTouchStart) {
            window.removeEventListener('touchstart', this.handleTouchStart);
        }
        if (this.handleTouchMove) {
            window.removeEventListener('touchmove', this.handleTouchMove);
        }
        if (this.handleTouchEnd) {
            window.removeEventListener('touchend', this.handleTouchEnd);
        }
    }
}
