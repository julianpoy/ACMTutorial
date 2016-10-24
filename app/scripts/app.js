'use strict';

/**
 * @ngdoc overview
 * @name acmtutorialApp
 * @description
 * # acmtutorialApp
 *
 * Main module of the application.
 */
angular
  .module('acmtutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/asdf', {
        templateUrl: 'views/anotherview.html',
        controller: 'AnotherViewCtrl'
      })
      .when('/tasks', {
        templateUrl: 'views/asdf.html',
        controller: 'ASDFCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
