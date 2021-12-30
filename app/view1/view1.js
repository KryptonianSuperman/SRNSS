'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$parse','$location',function($scope,$http,$parse,$location) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        // slides.push({
        //     image: '//unsplash.it/' + newWidth + '/300',
        //     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        //     id: currIndex++
        // });
        $scope.slides =[
            {
                image: 'item/mainslider/1.jpg',
                id: 1
            },
            {
                image: 'item/mainslider/2.jpg',
                id: 2
            },
            {
                image: 'item/mainslider/3.jpg',
                id: 3
            },
            {
                image: 'item/mainslider/4.jpg',
                id: 4
            }
        ];

    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };


    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }

    $scope.selectedStone = null;
    $scope.response = null;
    $scope.idsandstone = "menuItem2";
    $scope.idcobble = "menuItem2";
    $scope.idgranite = "menuItem2";
    $scope.idledger = "menuItem2";
    $scope.idlimestone = "menuItem2";
    $scope.idmarble = "menuItem2";
    $scope.idslates = "menuItem2";
    $scope.idsteps = "menuItem2";

    $scope.selectedStoneData = null;
        $http.get('mapping.json').then(function onSuccess(response) {
        console.log(response.data);
        $scope.response = response.data;
    }).
    catch(function onError(response) {
        console.log(response);
    });

    $scope.stoneSelect = function (stone) {
        $scope.selectedStone = stone;
        $scope.selectedStoneData = $scope.response[stone];
        $scope.subtypeDetails = Object.keys($scope.selectedStoneData.subtype);
        $scope.idsandstone = "menuItem2";
        $scope.idcobble = "menuItem2";
        $scope.idgranite = "menuItem2";
        $scope.idledger = "menuItem2";
        $scope.idlimestone = "menuItem2";
        $scope.idmarble = "menuItem2";
        $scope.idslates = "menuItem2";
        $scope.idsteps = "menuItem2";
        var idstring = "id"+stone;
        var parsed = $parse(idstring);
        parsed.assign($scope,"menuItem2Selected");
    };

    $scope.goToquality = function(){
        $location.url("quality");
    };
    $scope.goTomanufacturing = function(){
        $location.url("manufacturing");
    };
    $scope.goTodelivery = function(){
        $location.url("delivery");
    };
    $scope.goTopackaging = function(){
        $location.url("packaging");
    };
}]);