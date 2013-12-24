define([
	'THREE',
	'./cue',
	'./camera'
], function(THREE, cue, camera) {
	
	// Create a reference point to move the camera, cue, lights, etc
	var ref = new THREE.Object3D();

	// Add the cue directly on the reference
	ref.add(cue);

	// Add the camera
	ref.add(camera);

	// Return the reference for use
	return ref;

});