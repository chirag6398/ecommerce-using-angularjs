///<reference path="../app.js" />




app.controller("cartController",['$scope','$location',function($scope,$location) {

    $scope.totalAmount=0;
    $scope.trimString=function(str){
        if(str.length>50){
            return str.substring(0,50)+"..."
        }
    }


    $scope.currentUser2 = JSON.parse(window.localStorage.getItem("currentUser"));
    console.log($scope.currentUser2)
    if($scope.currentUser2!=null){
        
        $scope.quantity=0;
        $scope.calculateAmount=function(){
    
            $scope.currentUser2.cart.forEach((item)=>{
                $scope.totalAmount+=item.quantity*Math.ceil(item.price);
                $scope.quantity+=item.quantity;
            })
    
            
            
        }
        $scope.calculateAmount();
    }else{
        
        $location.path("/signIn")

    }

    $scope.removeItem=function(item){
        
        let newCart=$scope.currentUser2.cart.filter((e)=>e.id!==item.id);
        $scope.currentUser2.cart=newCart;
        let users=JSON.parse(window.localStorage.getItem("users"));
        let ind=users.findIndex((e)=>e.email==$scope.currentUser2.email);
        users[ind].cart=newCart;
        window.localStorage.setItem("users",JSON.stringify(users))

        window.localStorage.setItem("currentUser",JSON.stringify($scope.currentUser2))

    }

   

    

    

    
}])
