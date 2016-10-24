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
    $scope.example = "ABC123";
    
    $scope.myFunction = function(){
        return $scope.example.length > 9;
    }
    
    $scope.addTwo = function(){
        $scope.example += "2";
    }
  });
