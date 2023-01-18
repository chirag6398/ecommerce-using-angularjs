///<reference path="../app.js" />


function getProductDetails(id){
    let products=JSON.parse(window.localStorage.getItem("products"));
 
    let ind=products.findIndex((e)=>{return e.id===+id});
    
    return products[ind];
}

app.controller("productDetailController",['$scope','$stateParams',function($scope,$stateParams) {

    
    $scope.data=getProductDetails($stateParams.id);
    
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
