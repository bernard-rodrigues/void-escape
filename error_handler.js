/**
 * Global Error Handler - Catches uncaught runtime exceptions and 
 * unhandled promise rejections, rendering a visible debug overlay.
 * Must be loaded synchronously in the head before any other script.
 */

window.onerror = function(message, source, lineno, colno, error) {
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '0';
    errorDiv.style.left = '0';
    errorDiv.style.width = '100vw';
    errorDiv.style.height = '100vh';
    errorDiv.style.background = 'rgba(255, 0, 0, 0.95)';
    errorDiv.style.color = '#fff';
    errorDiv.style.padding = '30px';
    errorDiv.style.zIndex = '999999';
    errorDiv.style.fontFamily = 'monospace';
    errorDiv.style.fontSize = '16px';
    errorDiv.style.whiteSpace = 'pre-wrap';
    errorDiv.style.boxSizing = 'border-box';
    
    errorDiv.innerText = 'JS ERROR DETECTED:\n\n' + message + 
                         '\n\nAt: ' + source + ' (line ' + lineno + ', col ' + colno + ')' +
                         '\n\nStack Trace:\n' + (error ? error.stack : 'N/A');
    
    document.body.appendChild(errorDiv);
    return false;
};

window.addEventListener('unhandledrejection', function(event) {
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '0';
    errorDiv.style.left = '0';
    errorDiv.style.width = '100vw';
    errorDiv.style.height = '100vh';
    errorDiv.style.background = 'rgba(255, 0, 0, 0.95)';
    errorDiv.style.color = '#fff';
    errorDiv.style.padding = '30px';
    errorDiv.style.zIndex = '999999';
    errorDiv.style.fontFamily = 'monospace';
    errorDiv.style.fontSize = '16px';
    errorDiv.style.whiteSpace = 'pre-wrap';
    errorDiv.style.boxSizing = 'border-box';
    
    errorDiv.innerText = 'UNHANDLED PROMISE REJECTION:\n\n' + event.reason;
    
    document.body.appendChild(errorDiv);
});
