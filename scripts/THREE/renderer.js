define([
	'THREE'
], function(THREE) {

	// If WebGL support exists in the browser, use it, else fallback to shitty canvas (iOS, ChromeCast, etc)
	var renderer;
	if (window.WebGLRenderingContext) {
		renderer = new THREE.WebGLRenderer();
	} else {
		renderer = new THREE.CanvasRenderer();
	}

	// Fill the screen
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Return the renderer for other uses
	return renderer;
	
});