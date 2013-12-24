$(function() {

	// Set the color
	$("#btnWebSocket").addClass(window.WebSocket ? "btn-success" : "btn-danger");

	// If peer connection
	if (webkitRTCPeerConnection) {

		// Create the connection
		var pc = new webkitRTCPeerConnection(null);

		// If peer and channel create exists
		if (pc && pc.createDataChannel) {

			// Try to create one
			var dc = pc.createDataChannel("test", {
				reliable: false
			});

			// If created successfully
			if (dc) {
				$("#btnWebRTC").addClass("btn-success");
			} else { $("#btnWebRTC").addClass("btn-danger"); }

		} else { $("#btnWebRTC").addClass("btn-danger"); }

	} else { $("#btnWebRTC").addClass("btn-danger"); }
	
	// If WebGL supported
	if (window.WebGLRenderingContext) {
		$("#btnWebGL").addClass("btn-success");
	} else if (window.HTMLCanvasElement) {
		$("#btnWebGL").addClass("btn-warning");
	} else  {
		$("#btnWebGL").addClass("btn-danger");
	}

});