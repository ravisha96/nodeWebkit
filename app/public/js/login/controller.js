nw.controller('LoginCtrl', ['$scope', 'LoginService', '$http',

	 function ($scope, LoginService, $http) {
		
		$scope.username = "ravisha96@gmail.com";
		$scope.password = "1234546";

		$scope.loginUser = function () {
			$http.post('/login', {
				username: $scope.username,
				password: $scope.password
			});
		};

	}

]);