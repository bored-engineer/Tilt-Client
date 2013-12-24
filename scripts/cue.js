define([
	'./createPoolBall'
], function(createPoolBall) {

	// Create a cue ball to be us for now
	var sphere = createPoolBall(1);

	// Return it for other uses
	return sphere;
	
});