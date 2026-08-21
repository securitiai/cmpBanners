// Simulated Meta (Facebook) Pixel tag - "Marketing/Advertising" cookie category
console.assert(false, "Meta Pixel script executed - Marketing/Advertising category cookie was dropped (should be blocked pre-consent)");
console.log("%c[Marketing/Advertising] Meta Pixel script ran and set _fbp cookie", "color: crimson; font-weight: bold;");

document.cookie = "_fbp=fb.1." + Date.now() + "." + Math.floor(Math.random() * 1000000000) + "; path=/";
