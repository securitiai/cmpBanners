// Simulated Live Chat widget (e.g. Intercom/Drift style) - "Functional" cookie category
console.assert(false, "Live Chat widget script executed - Functional category cookie was dropped (should be blocked pre-consent)");
console.log("%c[Functional] Live Chat widget script ran and set chat_session cookie", "color: dodgerblue; font-weight: bold;");

document.cookie = "chat_session=lc_" + Math.floor(Math.random() * 1000000) + "; path=/";
