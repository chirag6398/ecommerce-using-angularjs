///<reference path="../app.js" />


app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'./templates/home.html',
        controller:"homeController"
    }).state('cart',{
        url:'/cart',
        templateUrl:'./templates/cart.html',
        controller:"cartController"
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
