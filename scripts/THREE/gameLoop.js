define([
	'./keyboard',
	'./cueReference',
	'./cue'
], function(keyboard, cueRef, cue) {
	
	// The acceleration to apply to the cue ball
	var cueAcceleration = 0;
	var cueVelocity = 0;

	// Run periodically
	return function() {
		
		// Adjust direction where needed
		if (keyboard.pressed('left')) {
			cueRef.rotation.y -= 0.1;
		}
		if (keyboard.pressed('right')) {
			cueRef.rotation.y += 0.1;
		}

		// Adjust acceleration where needed
		if (keyboard.pressed('up')) {
			if (keyboard.pressed('down')) {
				cueAcceleration = 0;
			} else {
				cueAcceleration = 4;
			}
		} else {
			if (keyboard.pressed('down')) {
				cueAcceleration = -4;
			} else {
				cueAcceleration = 0;
			}
		}


		// Calculate the next position given the acceleration
		cueVelocity = cueVelocity + cueAcceleration;

		// Friction
		var friction = 1;

		// If friction will bring us to a stop, do it, else calc
		if (Math.abs(cueVelocity) - friction < 0) {
			cueVelocity = 0;
		} else {
			cueVelocity += ((cueVelocity > 0) ? -friction : friction);
		}

		// Rotate a amount
		cue.rotation.x += -(cueVelocity/50);

		// Move by velocity specified
		cueRef.position.z -= cueVelocity;

	};

});