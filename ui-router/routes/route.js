///<reference path="../app.js" />


app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'./templates/home.html',
        controller:"homeController"
    }).state('profile',{
        url:'/profile',
        templateUrl:'./templates/profile.html',
        controller:"profileController"
    }).state('cart',{
        url:'/cart',
        templateUrl:'./templates/cart.html',
        controller:"cartController"
    }).state('editUser',{
        url:'/editUser',
        templateUrl:'./templates/editUser.html',
        controller:"editUserController"
    }).state('signIn',{
        url:'/signIn',
        templateUrl:'./templates/signin.html',
        controller:"signInController"
    }).state('signUp',{
        url:'/signUp',
        templateUrl:'./templates/signup.html',
        controller:"signUpController"
    })

    $urlRouterProvider.otherwise('/home');
})
