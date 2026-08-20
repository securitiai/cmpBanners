// Simulated Google Analytics (GA4) tag - "Analytics" cookie category
// Real GA scripts drop a "_ga" cookie as soon as they execute, so this is a
// good stand-in to prove whether autoblocking actually stopped the script.
console.assert(false, "Google Analytics script executed - Analytics category cookie was dropped (should be blocked pre-consent)");
console.log("%c[Analytics] Google Analytics script ran and set _ga cookie", "color: orange; font-weight: bold;");

document.cookie = "_ga=GA1.2." + Math.floor(Math.random() * 1000000000) + "." + Math.floor(Date.now() / 1000) + "; path=/";
document.cookie = "_gid=GA1.2." + Math.floor(Math.random() * 1000000000) + "; path=/";
