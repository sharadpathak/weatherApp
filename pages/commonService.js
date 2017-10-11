 
	angular.module('weatherApp').service('weatherService', function($http){
			 
		   	 this.weatherReport = function () {
		            return $http.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517");
		        };



		   	 this.weatherHistory = function () {
		            return $http.get("http://samples.openweathermap.org/storage/history_bulk.json?appid=b1b15e88fa797225412429c1c50c122a1");
		        };



});

	