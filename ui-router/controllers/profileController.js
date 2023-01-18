///<reference path="../app.js" />




app.controller("profileController",['$scope','$location',function($scope,$location) {

   $scope.currentUser=JSON.parse(window.localStorage.getItem("currentUser"));

   console.log($scope.currentUser)

}]);
