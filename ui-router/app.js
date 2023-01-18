///<reference path="./services/service.js"/>

let app=angular.module("myModule",['ui.router']);

app.controller("mainController",function($scope,$location,$rootScope){

    $scope.currentUser1=JSON.parse(window.localStorage.getItem(("currentUser")));
    // console.log(currentUser1.email)
    if($scope.currentUser1){
        $rootScope.isUserLogIn=true;
    }else{
        $rootScope.isUserLogIn=false;
        $location.path('/home');
    }
    
    $scope.logoutHandler=function(){

        window.localStorage.removeItem("currentUser");
        $scope.isUserLogIn=false;
        $location.path("/signIn");
    }
})