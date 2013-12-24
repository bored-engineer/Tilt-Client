define([
	'THREE'
], function(THREE) {

	function fillEllipse(ctx, aX, aY, aWidth, aHeight) {
		ctx.beginPath();
		var hB = (aWidth / 2) * 0.5522848,
		vB = (aHeight / 2) * 0.5522848,
		eX = aX + aWidth,
		eY = aY + aHeight,
		mX = aX + aWidth / 2,
		mY = aY + aHeight / 2;
		ctx.moveTo(aX, mY);
		ctx.bezierCurveTo(aX, mY - vB, mX - hB, aY, mX, aY);
		ctx.bezierCurveTo(mX + hB, aY, eX, mY - vB, eX, mY);
		ctx.bezierCurveTo(eX, mY + vB, mX + hB, eY, mX, eY);
		ctx.bezierCurveTo(mX - hB, eY, aX, mY + vB, aX, mY);
		ctx.closePath();
		ctx.fill();
	}

	// Draw a 3d ball
	function draw(canvas, textData, stripped, fillStyle) {
		var ctx = canvas.getContext( '2d' );
		var w = canvas.width;
		var h = canvas.height;
		
		// base color is white
		ctx.save();
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0,0, w, h);
		ctx.restore();

		// do the strip/full
		ctx.save();
		ctx.translate(w/2, h/2);
		var rectH = stripped ? h/2 : h;
		ctx.fillStyle = fillStyle;
		ctx.fillRect(-w/2,-rectH/2, w, rectH);
		ctx.restore();
		
		if (textData) {
			
			// Build a circle around the text
			ctx.save();
			ctx.translate(w/4, h/2);
			ctx.fillStyle = "#FFFFFF";
			var radiusW = 0.7 * w/4;
			var radiusH = 1.2 * h/4;

			fillEllipse(ctx, -radiusW/2, -radiusH/2, radiusW, radiusH);
			ctx.restore();

			// draw text data
			ctx.save();
			ctx.translate(w/4, h/2);
			var textH        = w/4;
			ctx.font        = "bolder "+textH+"px Arial";
			ctx.fillStyle        = "#000000";
			var textW        = ctx.measureText(textData).width;
			ctx.fillText(textData, -textW/2, 0.8*textH/2);
			ctx.restore();

		}
	}

	// Create a texture for a ball
	function createBallTexture(textData, stripped, fillStyle, mapping) {
		// Create a canvas
		var canvas = document.createElement('canvas');
		canvas.width = canvas.height = 256;
		// Create a texture
		var texture = new THREE.Texture(canvas, mapping);
		texture.needsUpdate = true;
		// draw in the texture
		draw(canvas, textData, stripped, fillStyle);
		// return the texture
		return texture;
	}

	var colors = [
		'FDD017',
		'2B65EC',
		'F62817',
		'7A5DC7',
		'F87217',
		'348017',
		'A52A2A',
		'FFFFFF',
		'FDD017',
		'2B65EC',
		'F62817',
		'7A5DC7',
		'F87217',
		'348017',
		'A52A2A',
		'000000'
	];

	var textures = [];

	// Loop each color
	for (var i = 0; i < colors.length; i++) {
		var gr = i > 8;
		var num = (i + 1) - (gr ? 8:0);
		if (i == 7) { num = ''; }
		textures.push(createBallTexture(num + '', gr, colors[i]));
	}
	
	// Return a new mesh for the given index
	return function(index) {
		var geometry = new THREE.SphereGeometry(28.575, 256, 256);
		var material = new THREE.MeshPhongMaterial();
		material.map = textures[index];
		var mesh = new THREE.Mesh(geometry, material);
		mesh.position.y = 28.575;
		return mesh;
	};

});