///<reference path="../app.js" />



app.controller("homeController",['$scope','$location','$http','$rootScope', function($scope,$location,$http,$rootScope) {
    

    $scope.currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
    $scope.trimString=function(str){
        if(str.length>50){
            return str.substring(0,50)+"..."
        }
    }

    if($scope.currentUser){
        $rootScope.isUserLogIn=true;
        $http.get('https://fakestoreapi.com/products').success(function(response){
                // console.log(response);
                $scope.data=response;

                if(JSON.parse(window.localStorage.getItem("products"))==null){
                    window.localStorage.setItem("products",JSON.stringify(response));
                }
          });
    }else{
        $location.path("/signIn");
    }


    $scope.addItemHandler=function(item){
        
        let exist=$scope.currentUser.cart.findIndex((order)=>{ return order.id===item.id; })
        
        if(exist!==-1){
            $scope.currentUser.cart[exist].quantity+=1;

        }else{
            let newOrder={
                quantity:1,
                name:$scope.currentUser.name,
                email:$scope.currentUser.email,
                ...item
            }

            $scope.currentUser.cart.push(newOrder);
            
            
        }
        
        window.localStorage.setItem("currentUser",JSON.stringify($scope.currentUser))

        let users=JSON.parse(window.localStorage.getItem("users"));
        let indx=users.findIndex(el=>{
            return el.email===$scope.currentUser.email;
        });

        users[indx].cart=$scope.currentUser.cart;
        alert(JSON.stringify(users));
        window.localStorage.setItem("users",JSON.stringify(users))
    }   
}]);
