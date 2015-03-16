'use strict';

var nw = angular.module('nw', ['ui.router']);
	
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
				templateUrl: 'partials/login.html'
			})

			/**
			 * Once logged in user will be redirected to there
			 * respective dashboard page.
			 */
			
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'partials/dashboard.html'
			})


	}])