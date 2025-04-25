'use strict';

angular.module('myApp.manufacturing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/manufacturing', {
        templateUrl: 'manufacturing/manufacturing.html',
        controller: 'manufacturingCtrl'
    });
}])

.controller('manufacturingCtrl', ['$scope','$http','$parse',function($scope,$http,$parse) {

}]);