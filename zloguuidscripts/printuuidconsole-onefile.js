(function() {
  var originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
    this.addEventListener('readystatechange', function() {
      if (((this.readyState  === 1) || (this.readyState  === 2) || (this.readyState  === 3) || (this.readyState  === 4)) && this.responseURL.includes('singleupload')) { // Request is done
            var jsonString = this._body;
            var jsonObject = JSON.parse(jsonString);
            var uuid = jsonObject.uuid;
            console.warn("uuid=>"+uuid);
            var domain_id = jsonObject.domain_id;
            console.log("domain_id=>"+domain_id);
            var policy_version = jsonObject.policy_version;
            console.log("policy_version=>"+policy_version);
            displayLogs();
        }
    }, false);
  
    originalOpen.apply(this, arguments);
};
  
  var originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function(body) {
    this._body = body;
    originalSend.apply(this, arguments);
  };
  })();

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


// Function to display logs in the HTML page
function displayLogs() {
    let logList = document.getElementById('logList');
    logList.innerHTML = ''; // Clear previous logs
    logs = captureConsoleLogs();
    logs.forEach(log => {
        if(log.message.includes('uuid=>')){
        let li = document.createElement('li');
        li.textContent = log.message;
        logList.appendChild(li);
        }
    });
}