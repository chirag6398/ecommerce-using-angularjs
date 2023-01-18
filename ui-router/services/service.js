///<reference path="../app.js"/>

// app.service('getProducts',function(){
//     $http.get('https://fakestoreapi.com/products').success(function(response){
//         console.log(response);
//         $scope.data=response;
//       });
// })

app.factory('DataTransfer', function () {
   
    var data = {};

    return {
        getUserDetails: function () {
            return data;
        },
        setUserDetails: function (UserDetails) {
            console.log(UserDetails)
            data = UserDetails;
        }   
    };
});