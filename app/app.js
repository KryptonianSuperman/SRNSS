'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ui.bootstrap',
    'ngTouch',
    'ngAnimate',
    'myApp.contactus',
    'myApp.delivery',
    'myApp.introduction',
    'myApp.manufacturing',
    'myApp.packaging',
    'myApp.quality',
    'myApp.vision',
    'ngMap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('mainCtrl' , ['$scope',"$http",'$location','NgMap',function ($scope,$http,$location,NgMap) {

    $http.get('mapping.json').then(function onSuccess(response) {
        console.log("main",response.data);

    }).
    catch(function onError(response) {
        console.log(response);
    });

    $scope.subMenuProducts = false;
    $scope.subMenuAbout = false;
    $scope.subMenuFactory = false;

    $scope.goToPage = function (page) {
        console.log(page);
        $location.url("view2/"+page+"/null");
    };

    $scope.goToHome = function () {
        $location.url("view1");
    };

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDphAr_2-oo2rxlHD-EatFrDJgbN6VLtbc";

    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

}]);
