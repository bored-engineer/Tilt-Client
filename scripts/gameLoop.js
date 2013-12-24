define([
	'./keyboard',
	'./cueReference',
	'./cue'
], function(keyboard, cueRef, cue) {

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
		var cueAcceleration = 0;
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

	};

});