///<reference path="../app.js" />

function checkUserExist(db,user){
    
    const check=db.find((e)=>{
       
        return e.email=== user.email || e.name===user.name
    });

    return check;
}

app.controller("signUpController",['$scope','$location', function($scope,$location) {
    $scope.cpasswordFalse=false;
    $scope.p1=true;
    $scope.p2=true;
    $scope.p3=true;
    $scope.p4=true;
     $scope.submitHandler=function($event){
   
        $event.preventDefault();
        console.log($scope.signin);
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
           
            if(exist){
                alert("user already exist");
                // return;
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
            $scope.c1={
                color: "green",
                opacity: "0.9"
            }

            $scope.p1=false;
           
        }else{
           $scope.c1={
            color: "gray",
            opacity: "0.7"
           }
           $scope.p1=true;
        }
    
        let regExUpperCase=/[A-Z]/g;
    
        if(regExUpperCase.test(val)){
            $scope.c2={
                color: "green",
                opacity: "0.9"
            }
            $scope.p2=false;
           
        }else{
           $scope.c2={
            color: "gray",
            opacity: "0.7"
           }
           $scope.p2=true;
        }
    
        let regExNumber=/[0-9]/g;
    
        if(regExNumber.test(val)){
            $scope.c3={
                color: "green",
                opacity: "0.9"
            }
            $scope.p3=false;
           
        }else{
           $scope.c3={
            color: "gray",
            opacity: "0.7"
           }
           $scope.p3=true;
        }

        if(val.length>=5 && val.length<=8){

            $scope.c4={
                color: "green",
                opacity: "0.9"
            }
            $scope.p4=false;
           
        }else{
           $scope.c4={
            color: "gray",
            opacity: "0.7"
           }
           $scope.p4=true;
        }
    }
}]);

