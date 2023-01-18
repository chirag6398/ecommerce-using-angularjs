///<reference path="../app.js" />

function checkUserExist(db,user){
    const check=db.find((e)=>{  
        return e.email=== user.email || e.name===user.name
    });
    return check;
}

let invalid={
    color: "gray",
    opacity: "0.7"
   }
let valid={
    color: "green",
    opacity: "0.9"
   }

app.controller("signUpController",['$scope','$location', function($scope,$location) {
    if(window.localStorage.getItem("currentUser")){
        $location.path('/home')
    }
    $scope.cpasswordFalse=false;
    $scope.p1=true;
    $scope.p2=true;
    $scope.p3=true;
    $scope.p4=true;
     $scope.submitHandler=function($event){
   
        $event.preventDefault();
        let newUser={
            name:$scope.signin.name,
            email:$scope.signin.email,
            password:$scope.signin.password,
            number:$scope.signin.number,
            cart:[]
        }          
        if (window.localStorage.getItem("users") != null) {
            const users = JSON.parse(window.localStorage.getItem("users"));
            const exist=checkUserExist(users,newUser);
           console.log(exist)
            if(exist){
                alert("user already exist");
            
            }else{
                users.push(newUser);
                window.localStorage.setItem("users", JSON.stringify(users));
                alert("signup successfully");
                $location.path('/signIn');
            } 
          } else {
            window.localStorage.setItem("users", JSON.stringify([newUser]));
            alert("signup successfully");
            $location.path('/signIn');
          } 
       
     }

     $scope.matchPassword=function(val,val1){
       
        console.log(val,val1);
        $scope.cpasswordFalse=(val===val1);
     }

     $scope.passwordHandler=function(val){
   
        let regExLowerCase=/[a-z]/g;
        
        if(regExLowerCase.test(val)){
            $scope.c1=valid

            $scope.p1=false;
           
        }else{
           $scope.c1=invalid
           $scope.p1=true;
        }
    
        let regExUpperCase=/[A-Z]/g;
    
        if(regExUpperCase.test(val)){
            $scope.c2=valid
            $scope.p2=false;
           
        }else{
           $scope.c2=invalid
           $scope.p2=true;
        }
    
        let regExNumber=/[0-9]/g;
    
        if(regExNumber.test(val)){
            $scope.c3=valid
            $scope.p3=false;
           
        }else{
           $scope.c3=invalid
           $scope.p3=true;
        }

        if(val.length>=5 && val.length<=8){

            $scope.c4=valid
            $scope.p4=false;
           
        }else{
           $scope.c4=invalid
           $scope.p4=true;
        }
    }
}]);

