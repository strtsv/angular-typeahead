// scripts/airplanesCtrl.js

'use strict';

angular
  .module('airplanesApp')
  .controller('AirplanesCtrl', function($scope, $http) {
    $http.get('data/airplanes.json').then(function(data) {
      $scope.airplanes = data;
      //console.log(element.attr('ng-model'));
    });
  });
