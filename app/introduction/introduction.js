'use strict';

angular.module('myApp.introduction', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/introduction', {
        templateUrl: 'introduction/introduction.html',
        controller: 'introductionCtrl'
    });
}])

.controller('introductionCtrl', ['$scope','$http','$parse',function($scope,$http,$parse) {

}]);