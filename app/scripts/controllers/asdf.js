'use strict';

/**
 * @ngdoc function
 * @name acmtutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acmtutorialApp
 */
angular.module('acmtutorialApp')
  .controller('ASDFCtrl', function ($scope, Tasks) {
      
    $scope.abc = "123";
    
    $scope.tasks = Tasks.get();

    
  });
