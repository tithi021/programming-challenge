'use strict';

/**
 * @ngdoc overview
 * @name temperatureAppApp
 * @description
 * # temperatureAppApp
 *
 * Main module of the application.
 */
angular
  .module('temperatureApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/celsius/to/fahrenheit', {
        templateUrl: 'views/celsius.html',
        controller: 'CelsiusCtrl',
        controllerAs: 'celsius'
      })
      .when('/fahrenheit/to/celsius', {
        templateUrl: 'views/fahrenheit.html',
        controller: 'FahrenheitCtrl',
        controllerAs: 'fahrenheit'
      })
      .otherwise({
        redirectTo: '/celsius/to/fahrenheit'
      });
  });
