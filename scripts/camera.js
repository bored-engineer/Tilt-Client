define([
	'THREE',
	'./light'
], function(THREE, light) {

	// Create a scene to operate in
	var camera = new THREE.PerspectiveCamera(
		60,
		window.innerWidth / window.innerHeight,
		1,
		10000
	);

	// Move camera up 13 cm 
	camera.position.y = 130;

	// Back up 23 cm
	camera.position.z = 230;

	// Point down a slight bit toward the cue ball
	camera.rotation.x = -0.25;

	// Track with camera
	camera.add(light);

	// Return the camera for other uses
	return camera;
	
});