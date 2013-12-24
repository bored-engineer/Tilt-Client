define([
	'THREE'
], function(THREE) {

	// Create a light
	var light = new THREE.PointLight(0xFFF0C8);

	// Lift up the 10 cm and back 5 cm
	light.position.y = 50;
	light.position.z = 50;

	// Be slightly brighter than normal
	light.intensity = 1.2;

	// Return the light for other uses
	return light;
	
});