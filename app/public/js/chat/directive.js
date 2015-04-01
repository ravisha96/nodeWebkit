nw.directive('chatDirective', ['ChatService',

	function (ChatService) {
		return {
			restrict: 'A',
			link: function (scope, $element, iAttrs) {

				// var $displayMsg = element.data('display-chat-msg'),
				// 	$sendMsg = element.data('send-chat-msg');

				ChatService.socket.on('message', function (data) {
					var msg = JSON.parse(msg);
					
					// $element.append(msg);

				});


			}
		};
	}

])