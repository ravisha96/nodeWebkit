nw.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	/**
	 * user is by default redirected to login page, in case of
	 * | Not signed in
	 * | Wrong url
	 * | Ideal state
	 * | Automatically logged out
	 */
	$urlRouterProvider.otherwise('/login');


	$stateProvider

		.state('login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})

		 // Once logged in user will be redirected to there
		 // respective dashboard page.

		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'partials/dashboard.html'
		})

		// User chat page.
		.state('chat', {
			url: '/chat',
			controller: 'ChatCtrl',
			templateUrl: 'partials/chat.html'
		})

		.state('chat.history', {
			url: '/chat',
		})

		.state('friends', {
			url: '/friends'
		})

		.state('friends.list', {
			url: '/friends'
		})

		.state('friends.status', {
			url: '/friends'
		})


}]);
