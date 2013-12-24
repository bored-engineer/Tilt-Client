define([
	'THREE'
], function(THREE) {

	// Load the felt texture
	texture = THREE.ImageUtils.loadTexture('images/felt.jpg');
	texture.wrapT = texture.wrapS = THREE.RepeatWrapping;

	// Repeat a few times in each direction
	texture.repeat.set(32, 16);

	// Add a floor 2m by 2m
	var floor = new THREE.Mesh(
		new THREE.PlaneGeometry(2743.2, 1371.6, 50, 25),
		new THREE.MeshLambertMaterial({
			map: texture
		})
	);

	// Make it parallel with the ground (why isn't this default?)
	floor.rotation.x = -Math.PI/2;

	// Return the floor for other uses
	return floor;
	
});