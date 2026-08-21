// Simulated first-party session/auth script - "Strictly Necessary" category
// This category should NEVER be blocked, consent or not, so it's the control
// case: if this cookie is missing too, autoblocking is over-blocking.
console.log("%c[Strictly Necessary] Session tracker script ran and set session_id cookie (always allowed)", "color: green; font-weight: bold;");

document.cookie = "session_id=sess_" + Math.floor(Math.random() * 1000000) + "; path=/";
