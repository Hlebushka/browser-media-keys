/**
 * MediaKeys namespace.
 */
/**
 * MediaKeys namespace.
 */
if (typeof MediaKeys == "undefined") var MediaKeys = {};

console.log("koel loaded");

MediaKeys.playButton = "//span[contains(@class, 'play control') and not(contains(@style,'display: none'))]";
MediaKeys.pauseButton = "//span[contains(@class, 'pause control') and not(contains(@style,'display: none'))]";
MediaKeys.skipButton = "//i[contains(@class, 'next fa fa-step-forward control')]";
MediaKeys.previousButton = "//i[contains(@class, 'prev fa fa-step-backward control')]";
