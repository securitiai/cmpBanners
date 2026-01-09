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
    // logs = captureConsoleLogs();
    logs.forEach(log => {
        let myVar=((typeof log.message==='object') && (log.message !== null))? JSON.stringify(log.message) : log.message;
        if(myVar.includes('uuid=>')){
        let li = document.createElement('li');
        li.textContent = log.message;
        logList.appendChild(li);
        }
    });
}

// Intercept fetch API to capture banner configuration
(function() {
    const originalFetch = window.fetch;

    window.fetch = function(...args) {
        const url = args[0];

        // Check if this is the banner configuration API call
        if (typeof url === 'string' && url.includes('cdn-qa.securiti.xyz/consent/cookie_banner') && url.endsWith('.json')) {
            console.log('Intercepted API call:', url);

            return originalFetch.apply(this, args)
                .then(response => {
                    // Clone the response so we can read it multiple times
                    const clonedResponse = response.clone();

                    // Parse and log the response
                    clonedResponse.json().then(data => {
                        console.log('===== BANNER CONFIGURATION DATA =====');

                        // Extract required fields
                        const extractedData = {
                            domain_id: data.domain_id,
                            domain_url: data.domain_url,
                            domain_uuid: data.domain_uuid,
                            enable_implicit_consent_bop_flag: data.enable_implicit_consent_bop_flag,
                            gcm_enabled: data.gcm_enabled,
                            iabeu_gdpr_enabled: data.iabeu_gdpr_enabled,
                            is_category_ordering_enabled: data.is_category_ordering_enabled,
                            is_language_enabled: data.is_language_enabled,
                            is_location_enabled: data.is_location_enabled,
                            latest_published_version: data.latest_published_version,
                            publish_status: data.publish_status,
                            strict_csp_enabled: data.strict_csp_enabled
                        };

                        // Extract compliance type and preferenceCenterStyle from banner_config
                        try {
                            const bannerConfig = JSON.parse(data.banner_config);
                            if (bannerConfig && bannerConfig.categories && bannerConfig.categories.Default && bannerConfig.categories.Default.banner) {
                                const banner = bannerConfig.categories.Default.banner;
                                extractedData.compliance_type = banner.compliance;
                                extractedData.preferenceCenterStyle = banner.preferenceCenterStyle;
                            }
                        } catch (e) {
                            console.error('Error parsing banner_config:', e);
                        }

                        // Log extracted data
                        console.log('domain_id:', extractedData.domain_id);
                        console.log('domain_url:', extractedData.domain_url);
                        console.log('domain_uuid:', extractedData.domain_uuid);
                        console.log('enable_implicit_consent_bop_flag:', extractedData.enable_implicit_consent_bop_flag);
                        console.log('gcm_enabled:', extractedData.gcm_enabled);
                        console.log('iabeu_gdpr_enabled:', extractedData.iabeu_gdpr_enabled);
                        console.log('is_category_ordering_enabled:', extractedData.is_category_ordering_enabled);
                        console.log('is_language_enabled:', extractedData.is_language_enabled);
                        console.log('is_location_enabled:', extractedData.is_location_enabled);
                        console.log('latest_published_version:', extractedData.latest_published_version);
                        console.log('publish_status:', extractedData.publish_status);
                        console.log('strict_csp_enabled:', extractedData.strict_csp_enabled);
                        console.log('compliance_type:', extractedData.compliance_type);
                        console.log('preferenceCenterStyle:', extractedData.preferenceCenterStyle);
                        console.log('=====================================');

                        // Store in global variable for later use
                        window.bannerConfigData = extractedData;

                        // Display on page if there's a display element
                        displayBannerConfig(extractedData);
                    }).catch(err => {
                        console.error('Error parsing response:', err);
                    });

                    // Return the original response
                    return response;
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                    throw error;
                });
        }

        // For other URLs, just call the original fetch
        return originalFetch.apply(this, args);
    };
})();

// Function to display banner configuration data on the page
function displayBannerConfig(data) {
    // Try to find or create a display element
    let displayElement = document.getElementById('bannerConfigDisplay');

    if (!displayElement) {
        displayElement = document.createElement('div');
        displayElement.id = 'bannerConfigDisplay';
        displayElement.style.cssText = `
            margin: 20px;
            padding: 15px;
            background-color: #f5f5f5;
            border: 2px solid #333;
            border-radius: 5px;
            font-family: monospace;
            font-size: 12px;
        `;

        // Try to append to body when DOM is ready
        if (document.body) {
            document.body.appendChild(displayElement);
        } else {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.appendChild(displayElement);
            });
        }
    }

    // Create HTML content
    let html = '<h3 style="margin-top: 0;">Banner Configuration Data</h3>';
    html += '<table style="border-collapse: collapse; width: 100%;">';

    for (let key in data) {
        html += `<tr>
            <td style="padding: 5px; border: 1px solid #ddd; font-weight: bold;">${key}</td>
            <td style="padding: 5px; border: 1px solid #ddd;">${data[key]}</td>
        </tr>`;
    }

    html += '</table>';
    displayElement.innerHTML = html;
}