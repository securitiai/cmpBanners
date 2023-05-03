const PUB = window.postMessage;
const SUB = window.addEventListener;

// Iframe Configuration to render preference center.
const CREDENTIALS = {
    tenantId: "app~e5c5c587-b9c3-4b75-9d34-7411c7da7e9b",
    preferenceCenterId: "4d6d4053-eaf8-4c5d-831e-9eb9d3ee43b3",
    primaryIdentifier: '',
    locationCode: 'default',
    languageCode: 'en',
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