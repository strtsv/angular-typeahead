// scripts/airplanesCtrl.js

'use strict';

angular
  .module('airplanesApp')
  .controller('AirplanesCtrl', function($scope, $http) {
    $http.get('data/airplanes.json').success(function(data) {
      $scope.airplanes = data;
      //return data.data;
      //console.log(element.attr('ng-model'));
    });
  });
