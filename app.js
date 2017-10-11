 
	var weatherApp = angular.module('weatherApp', ['ngRoute']);

	// configure our routes
	weatherApp.config(function($routeProvider, $httpProvider) {
		$routeProvider

			 
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			 
			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'page2Controller'
			})

			 .otherwise({ redirectTo: '/' });	//Handle Default route when route not Found		   
	});

	 