'use strict';

angular.module('myApp.packaging', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/packaging', {
            templateUrl: 'packaging/packaging.html',
            controller: 'packagingCtrl'
        });
    }])

    .controller('packagingCtrl', ['$scope','$http','$parse',function($scope,$http,$parse) {

    }]);