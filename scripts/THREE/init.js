define([
	'jquery',
	'./renderer',
	'./scene',
	'./camera',
	'./stats',
	'./gameLoop'
], function($, renderer, scene, camera, stats, gameLoop) {

	// On init on run
	return function() {
		
		// On window resize, recalculate camera and force render
		$(window).resize(function() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		});

		// Function to call as often as possible
		function render() {

			// If we are supposed to loop, do so once next
			requestAnimationFrame(render);

			// Actaully render the scene
			renderer.render(scene, camera);

			// Update the stats
			stats.update();

		}

		// Launch the renderer
		render();

		// Add the renderer to the dom
		$('#container').append(renderer.domElement);

		// Run the game loop 10x per second
		setInterval(gameLoop, 100);

	};

});