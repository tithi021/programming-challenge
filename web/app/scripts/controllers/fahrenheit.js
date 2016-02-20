'use strict';

/**
 * @ngdoc function
 * @name temperatureApp.controller:FahrenheitCtrl
 * @description
 * # FahrenheitCtrl
 * Controller of the temperatureApp
 */
angular.module('temperature')
  .controller('FahrenheitCtrl', function () {
    $scope.input = { fahrenheit : null };

    $scope.convertTemperature = function() {
      $http.post('http://localhost:3000/api/temperature/fahrenheit/to/celcius', { fahrenheit : $scope.input.fahrenheit })
        .success(function(data, status) {
          $scope.output = data;
        });
    }
  });
