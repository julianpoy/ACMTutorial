'use strict';

/**
 * @ngdoc function
 * @name acmtutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acmtutorialApp
 */
angular.module('acmtutorialApp')
  .controller('MainCtrl', function ($scope) {
      
    $scope.newTask = {};
      
    $scope.tasks = [];

    $scope.createNewTask = function(){
        $scope.tasks.push($scope.newTask);
        
        $scope.newTask = {};
    }

    
  });
