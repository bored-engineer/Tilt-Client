// Configure dependancies and their locations
require.config({
	baseUrl: 'lib',
	shim: {
		'jquery.bootstrap': {
			deps: ['jquery'],
			exports: '$'
		},
		'THREE': {
			exports: 'THREE'
		},
		'THREEx.KeyboardState': {
			deps: ['THREE'],
			exports: 'THREEx.KeyboardState'
		},
		'CANNON': {
			exports: ['CANNON']
		},
		'THREEx.CannonWorld': {
			deps: ['THREE', 'CANNON'],
			exports: 'THREEx.CannonWorld'
		},
		'THREEx.CannonBody': {
			deps: ['THREE', 'CANNON'],
			exports: 'THREEx.CannonBody'
		},
		'Stats': {
			exports: 'Stats'
		}
	},
	paths: {
		'jquery': 'jquery/jquery.min',
		'jquery.bootstrap': 'bootstrap/dist/js/bootstrap.min',
		'THREE': 'threejs/build/three.min',
		'THREEx.KeyboardState': 'threex.keyboardstate/threex.keyboardstate',
		'THREEx.CannonBody': 'threex.cannonjs/threex.cannonbody',
		'THREEx.CannonWorld': 'threex.cannonjs/threex.cannonworld',
		'CANNON': 'cannon.js/build/cannon.min',
		'Stats': 'stats.js/build/stats.min'
	}
});

// Actually load deps
require([
	'jquery.bootstrap',
	'../scripts/THREE/init'
], function(
	$,
	init
) {

	// On document ready, init the stuff
	$(function() {
		init();
	});	

});