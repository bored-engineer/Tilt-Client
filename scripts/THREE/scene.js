define([
	'THREE',
	'./cueReference',
	'./floor'
], function(THREE, cueRef, floor) {

	// Create a scene to operate in
	var scene = new THREE.Scene();

	// Add the cue ball
	scene.add(cueRef);

	// Add the floor
	scene.add(floor);

	// Return the scene for other uses
	return scene;
	
});