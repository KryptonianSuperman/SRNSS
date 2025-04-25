'use strict';

angular.module('myApp.vision', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/vision', {
            templateUrl: 'vision/vision.html',
            controller: 'visionCtrl'
        });
    }])

    .controller('visionCtrl', ['$scope','$http','$parse',function($scope,$http,$parse) {

    }]);