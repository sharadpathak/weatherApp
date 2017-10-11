angular.module('weatherApp').controller('page2Controller', function($scope,weatherService) {
		


			$scope.weatherList = {};
		function weatherHistory() {			
        weatherService.weatherHistory()
            .then(function (response) {
               $scope.weatherList = response.data;
            }, function (error) {
                alert(error);
            });
   		 }

   		 weatherHistory();
	});