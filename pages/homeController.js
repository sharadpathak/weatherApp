 
	angular.module('weatherApp').controller('homeController', function($scope,weatherService) {

		$scope.weatherInfo = {};
		function weatherReport() {			
        weatherService.weatherReport()
            .then(function (response) {
               $scope.weatherInfo = response.data;
            }, function (error) {
                alert(error);
            });
   		 }

   		 weatherReport();
	});