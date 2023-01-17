
let app=angular.module("myModule",['ui.router']);

app.controller("mainController",function($scope,$location){

    $scope.currentUser1=JSON.parse(window.localStorage.getItem(("currentUser")));
    if($scope.currentUser1){
        $scope.isUserLogIn=true;
    }else{
        $scope.isUserLogIn=false;
        $location.path('/home');
    }

    
    
    $scope.logoutHandler=function(){

        window.localStorage.removeItem("currentUser");
        $location.path("/signIn");
    }
})