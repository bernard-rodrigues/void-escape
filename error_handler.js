/**
 * Global Error Handler - Catches uncaught runtime exceptions and 
 * unhandled promise rejections, rendering a visible debug overlay.
 * Must be loaded synchronously in the head before any other script.
 */

function createErrorOverlay(text) {
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(255,0,0,0.95);color:#fff;padding:30px;z-index:999999;font-family:monospace;font-size:16px;white-space:pre-wrap;box-sizing:border-box';
    div.innerText = text;
    document.body.appendChild(div);
}

window.onerror = function(message, source, lineno, colno, error) {
    createErrorOverlay(
        'JS ERROR DETECTED:\n\n' + message +
        '\n\nAt: ' + source + ' (line ' + lineno + ', col ' + colno + ')' +
        '\n\nStack Trace:\n' + (error ? error.stack : 'N/A')
    );
    return false;
};

window.addEventListener('unhandledrejection', function(event) {
    createErrorOverlay('UNHANDLED PROMISE REJECTION:\n\n' + event.reason);
});
