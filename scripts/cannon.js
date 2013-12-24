define([
	'CANNON',
	'./cue',
	'./floor'
], function(CannonWorld, CannonBody, cue, floor) {

	// Store all the cannon objects here
	var cannons = {};

	// Cretaea a world
	cannons.worldx = new CannonWorld().start();

	// Add some default friction (yay!)
	cannons.worldx.world.defaultContactMaterial.friction = 0.005;

	// Create the cue ball and add to the world
	cannons.cuex = new THREEx.CannonBody({
		mesh: cue
	}).addTo(cannons.worldx);

	// Create the floor and add to the world
	cannons.floorx = new THREEx.CannonBody({
		mesh: floor,
		mass: 0
	}).addTo(cannons.worldx);

	// Return the objects for future use
	return cannons;

});