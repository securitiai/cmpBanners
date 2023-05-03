const PUB = window.postMessage;
const SUB = window.addEventListener;

// Iframe Configuration to render preference center.
const CREDENTIALS = {
    tenantId: "app-eu~0f42fdb1-6107-4121-955b-8153f234d9b7",
    preferenceCenterId: "b36f6cf5-8878-4c40-bf7c-572033af8d03",
    primaryIdentifier: '',
    locationCode: 'fr',
    languageCode: 'es',
    implicitFlow: true,
    implicitRecordConsents: false,
    allMandatory: true
};

(function () {
    //? STEP 1: subscribe to window events
    SUB("message", handleWindowEvents);

    //? STEP 2: Get the iframe ref and add an onload event listener.
    // As and when iframe loaded(i.e, preference center) workday can send the information that iframe needs
    // in order to load the consents.
    const preferenceIframeRef = document.getElementById("preferenceIframe");

    preferenceIframeRef.addEventListener("load", (ev) => {
        //? STEP 3: Load the config into iframe/sdk.
        loadConfigIntoIframe()
    });

    //? STEP 4: Attach a listener to the primary identifier and let the iframe know about the change.
    const primaryIdentifierRef = document.getElementById('email');
    primaryIdentifierRef.addEventListener('input', handlePrimaryIdChange);

    // primary identifier already provided then update ui
    if (CREDENTIALS.primaryIdentifier) {
        primaryIdentifierRef.value = CREDENTIALS.primaryIdentifier;
    }

    // Load config into iframe.
    function loadConfigIntoIframe() {
        //? Step 2: Load Credentials into iframe.
        PUB(
            {
                type: "INIT_PREFERENCE_CENTER",
                config: CREDENTIALS
            },
            '*'
        );
    }

    // Subscribing iframe events.
    function handleWindowEvents(evt) {
        const evtType = getEventType(evt);

        // CONSENTS_PROVIDED EVENT 
        // fired when user clicks on submit.
        if (evtType.toUpperCase() === 'CONSENTS_PROVIDED') {
            PUB({
                type: "RECORD_CONSENTS",
                value: true
            }, '*');
        }
    }

    // Update primary identifer in sdk.
    function handlePrimaryIdChange(ev) {
        const value = ev.target.value;
        PUB({
            type: 'SET_PRIMARY_IDENTIFIER',
            value: value
        }, '*')
    }

    // To unsubscribe window events.
    function unsubscribeWindowEvents() {
        window.removeEventListener('message', handleWindowEvents);
    }
    /** END OF OPTIONAL STEPS */

    function getEventType(evt) {
        return evt.data.type || "UNKNOWN";
    }

})();