'use strict';

/**
 * @ngdoc function
 * @name temperatureApp.controller:CelisusCtrl
 * @description
 * # CelisusCtrl
 * Controller of the temperatureApp
 */
angular.module('temperatureApp')
  .controller('CelsiusCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.input = { celsius : null };
    $scope.output = "";
    $scope.convertTemperature = function() {
      $http.post('http://localhost:3000/api/temperature/celsius/to/fahrenheit', { celsius : $scope.input.celsius })
        .success(function(data, status) {
          $scope.output = data;
        });
    }

  }]);
