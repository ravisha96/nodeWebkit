nw.service('ChatService', [
	
	function () {
		
		this.init = function () {

			// First step, this will connect to the socket.io server, 
			// by sending a request. It negotiate with your Transport Protocal (TCP).
			// It trigger connection() method on server.
			this.socket = io.connect();

		};


		this.init();

	}
])