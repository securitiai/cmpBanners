function captureConsoleLogs() {
    // Array to store captured logs
    let capturedLogs = [];

    // Save original console methods
    let originalConsoleLog = console.log;
    let originalConsoleError = console.error;
    let originalConsoleWarn = console.warn;

    // Override console.log
    console.log = function(message) {
        capturedLogs.push({
            level: 'log',
            message: message
        });
        // Call the original console.log method
        originalConsoleLog.apply(console, arguments);
    };

    // Override console.error
    console.error = function(message) {
        capturedLogs.push({
            level: 'error',
            message: message
        });
        // Call the original console.error method
        originalConsoleError.apply(console, arguments);
    };

    // Override console.warn
    console.warn = function(message) {
        capturedLogs.push({
            level: 'warn',
            message: message
        });
        // Call the original console.warn method
        originalConsoleWarn.apply(console, arguments);
    };

    // Return captured logs array
    return capturedLogs;
}

// Global variable to store captured logs
let logs = [];

// Capture console logs
logs = captureConsoleLogs();

// Function to display logs in the HTML page
function displayLogs() {
    let logList = document.getElementById('logList');
    logList.innerHTML = ''; // Clear previous logs

    logs.forEach(log => {
        if(log.message.includes('uuid=>')){
        let li = document.createElement('li');
        li.textContent = log.message;
        logList.appendChild(li);
        }
    });
}