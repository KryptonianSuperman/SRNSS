'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:type/:subtype', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$routeParams','$http',function($scope,$routeParams, $http) {
  $scope.type =  $routeParams.type;
  $scope.subtype = $routeParams.subtype;
  $scope.response = null;
  $scope.responseSubtype = null;
  $scope.subtypeList = null;

  $http.get('mapping.json').then(function onSuccess(response) {
    console.log(response.data);
    $scope.response = response.data[$scope.type];
    $scope.responseSubtype = response.data[$scope.type].subtype[$scope.subtype];
    $scope.subtypeList = Object.keys($scope.response.subtype);
  }).
  catch(function onError(response) {
      console.log(response);
  });

}]);