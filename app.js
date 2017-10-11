	// create the module and name it scotchApp
	var weatherApp = angular.module('weatherApp', ['ngRoute']);

	// configure our routes
	weatherApp.config(function($routeProvider, $httpProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the about page
			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'page2Controller'
			})

			 .otherwise({ redirectTo: '/' });			   
	});

	 