'use strict';

/**
 * @ngdoc function
 * @name temperatureApp.controller:KelvinCtrl
 * @description
 * # KelvinCtrl
 * Controller of the temperatureApp
 */
angular.module('temperatureApp')
  .controller('KelvinCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.input = { kelvin : null };
    $scope.output = ""; 
    $scope.convertTemperature = function() {
      $http.post('http://localhost:3000/api/temperature/kelvin/to/celsiusfahrenheit', { kelvin : $scope.input.kelvin })
        .success(function(data, status) {
          $scope.output = data;
        });
    }

  }]);
