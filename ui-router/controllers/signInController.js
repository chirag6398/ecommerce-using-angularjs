///<reference path="../app.js" />
///<reference path="../services/service.js"/>

const users = JSON.parse(window.localStorage.getItem("users"));

app.controller("signInController",['$scope','$location', function($scope,$location) {
    if(window.localStorage.getItem("currentUser")){
        $location.path('/home')
    }
    $scope.submitHandler=function($event){
        $event.preventDefault();
        console.log($scope.signIn,users);
        const ind = users.findIndex((user) =>{
            return  (($scope.signIn.name == user.email || $scope.signIn.name==user.name) && user.password == $scope.signIn.password)
        });

                
        if(ind!=-1){
            window.localStorage.setItem("currentUser",JSON.stringify(users[ind]));
            // DataTransfer.setUserDetails(users[ind]);
            $location.path("/home");
        }else{

            alert("Enter Correct email and password");
            
        }

    }
}])
