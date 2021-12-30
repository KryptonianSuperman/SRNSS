'use strict';

angular.module('myApp.quality', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/quality', {
            templateUrl: 'quality/quality.html',
            controller: 'qualityCtrl'
        });
    }])

    .controller('qualityCtrl', ['$scope','$http','$parse',function($scope,$http,$parse) {

    }]);