'use strict';

/**
 * @ngdoc function
 * @name temperatureApp.controller:FahrenheitCtrl
 * @description
 * # FahrenheitCtrl
 * Controller of the temperatureApp
 */
angular.module('temperatureApp')
  .controller('FahrenheitCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.input = { fahrenheit : null };
    $scope.output = "";
    $scope.convertTemperature = function() {
      $http.post('http://localhost:3000/api/temperature/fahrenheit/to/celcius', { fahrenheit : $scope.input.fahrenheit })
        .success(function(data, status) {
          $scope.output = data;
        });
    }
  }]);
