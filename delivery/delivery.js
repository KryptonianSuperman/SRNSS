'use strict';

angular.module('myApp.delivery', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/delivery', {
            templateUrl: 'delivery/delivery.html',
            controller: 'deliveryCtrl'
        });
    }])

    .controller('deliveryCtrl', ['$scope','$http','$parse',function($scope,$http,$parse) {

    }]);