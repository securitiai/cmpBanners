const PUB = window.postMessage;
const SUB = window.addEventListener;

// Fallback ISO 3166-1 alpha-2 code used only if live geolocation cannot be resolved.
// (The backend rejects the literal string 'default', so we can never fall back to that.)
const FALLBACK_LOCATION_CODE = 'us';

// Iframe Configuration to render preference center.
const CREDENTIALS = {
    tenantId: "qa~125068f6-fcaa-4514-aeef-a3ec9f0a870d",
    preferenceCenterId: "395fb968-72ab-408f-a88f-e5b3a7a99a75",
    primaryIdentifier: '',
    locationCode: FALLBACK_LOCATION_CODE,
    languageCode: 'en',
    implicitFlow: true,
    implicitRecordConsents: false,
    allMandatory: true
};

(function () {
    // Kick off geolocation detection immediately so it resolves (or times out) before the
    // iframe finishes loading, without delaying iframe load itself.
    const locationCodeReady = detectLocationCode();

    //? STEP 1: subscribe to window events
    SUB("message", handleWindowEvents);

    //? STEP 2: Get the iframe ref and add an onload event listener.
    // As and when iframe loaded(i.e, preference center) client/parent window can send the information that iframe needs
    // in order to load the consents.
    const preferenceIframeRef = document.getElementById("preferenceIframe");

    preferenceIframeRef.addEventListener("load", (ev) => {
        //? STEP 3: Load the config into iframe/sdk, once the real location code is known.
        locationCodeReady.then(loadConfigIntoIframe);
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
        }else if(evtType.toUpperCase() === 'USER_CONSENTS_SNAPSHOT') {
            // This will be fired when `GET_USER_CONSENTS_SNAPSHOT` event
            // is fired fromm parent window.

            // Consents snapshot
            // client/tenant can save this and pass it again to prepopulate the form.
            const consents = evt.data
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
    
    // We will get all the consents user has given
    // in `USER_CONSENTS_SNAPSHOT` when this event is fired.
    function getUserConsentsSnapshot() {
        PUB({
            type: 'GET_USER_CONSENTS_SNAPSHOT'
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

    // Resolve the caller's real ISO 3166-1 alpha-2 location code on the fly via IP geolocation,
    // and set it on CREDENTIALS before the config is sent into the iframe. The backend's
    // singleupload consent endpoint rejects the literal string 'default', so CREDENTIALS keeps
    // FALLBACK_LOCATION_CODE until (unless) a lookup below succeeds.
    function detectLocationCode() {
        const withTimeout = (promise, ms) => Promise.race([
            promise,
            new Promise((_, reject) => setTimeout(() => reject(new Error('geo lookup timed out')), ms))
        ]);

        const applyIfValid = (code) => {
            if (typeof code === 'string' && /^[A-Za-z]{2}$/.test(code)) {
                CREDENTIALS.locationCode = code.toLowerCase();
                return true;
            }
            return false;
        };

        // Primary provider, with a secondary fallback provider if it fails/times out.
        return withTimeout(fetch('https://get.geojs.io/v1/ip/country.json').then((res) => res.json()), 4000)
            .then((data) => {
                if (!applyIfValid(data && data.country)) {
                    throw new Error('primary geo lookup returned no usable country code');
                }
            })
            .catch(() => withTimeout(fetch('https://api.country.is/').then((res) => res.json()), 4000)
                .then((data) => {
                    if (!applyIfValid(data && data.country)) {
                        throw new Error('fallback geo lookup returned no usable country code');
                    }
                })
            )
            .catch(() => {
                // Both geo lookups failed - CREDENTIALS.locationCode stays at FALLBACK_LOCATION_CODE.
            });
    }

})();