'use strict';

/**
 * @ngdoc function
 * @name acmtutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acmtutorialApp
 */
angular.module('acmtutorialApp')
  .controller('MainCtrl', function ($scope, Tasks) {
      
    $scope.newTask = {};
      
    $scope.tasks = Tasks.get();

    $scope.createNewTask = function(){
        $scope.newTask.created = moment().subtract(5, "minutes").format("MM/DD/YYYY hh:mm:ss");
        
        Tasks.add($scope.newTask);
        
        $scope.newTask = {};
    }
    
    $scope.deleteTask = function(taskIndex){
        $scope.tasks.splice(taskIndex, 1);
    }

    
  });
