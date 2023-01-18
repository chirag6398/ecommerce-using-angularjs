///<reference path="../app.js" />

function updateUsers(nUser,email){
    // alert("hi")

    let users=JSON.parse(window.localStorage.getItem("users"));
    // console.log(nUser.email,email)
    let ind=users.findIndex((e)=>{return e.email===email});
  
    users[ind]=nUser;
    
    window.localStorage.setItem("users",JSON.stringify(users));

}



app.controller("editUserController",['$scope','$location',function($scope,$location) {

    $scope.email=JSON.parse(window.localStorage.getItem("currentUser")).email;
    // console.log($scope.email)
    $scope.editUser=JSON.parse(window.localStorage.getItem("currentUser"));

    
    $scope.submitHandler=function($event){
        $event.preventDefault();
        // console.log($scope.editUser)
        
        updateUsers($scope.editUser,$scope.email);

        window.localStorage.setItem("currentUser",JSON.stringify($scope.editUser));

        alert("user updated successfully");

        $location.path('/profile')
        
    }
 
 }]);
 