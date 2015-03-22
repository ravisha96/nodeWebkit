nw.factory('CustomWindowFactory', [function () {
	
	var CustomWindow = function () {

		this.GUI = require('nw.gui');
		this.WINDOW = this.GUI.window.get();
		
	}

	CustomWindow.prototype.GUI = function () {

	};

	CustomWindow.prototype.WINDOW = function () {

	};

}]);