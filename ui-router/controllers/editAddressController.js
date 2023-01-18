///<reference path="../app.js" />

function updateUsers(nUser){
    

    let users=JSON.parse(window.localStorage.getItem("users"));
    
    let ind=users.findIndex((e)=>{return e.email===nUser.email});
  
    users[ind]=nUser;
    
    window.localStorage.setItem("users",JSON.stringify(users));

}

app.controller("editAddressController",['$scope','$location',function($scope,$location) {
//  alert("hi")
    if(JSON.parse(window.localStorage.getItem("currentUser")).address!=null){
        $location.path("/payment");
    }

    console.log(JSON.parse(window.localStorage.getItem("currentUser")).address!=null)

    $scope.submitHandler=function($event){
        $event.preventDefault();
        $scope.currentUser=JSON.parse(window.localStorage.getItem("currentUser"));
        let address=[];
        address.push($scope.address);
        if($scope.currentUser.address!=null){
            
            address=address.concat($scope.currentUser.address);
            

        }
        $scope.newUser={
            address,
            ...$scope.currentUser
        }

        console.log($scope.newUser);


        updateUsers($scope.newUser);
        window.localStorage.setItem("currentUser",JSON.stringify($scope.newUser));
        alert("address added successfully");
        $location.path("/payment");
    }
 
 }]);
 