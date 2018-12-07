var app = angular.module("houseApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/"         , {templateUrl: "home.html"})
    .when("/messages" , {templateUrl: "app/msg/messagesDir.html", controller: "msgCtrl"})  
    .when("/login"    , {templateUrl: "app/user/login.html"     , controller: "userCtrl"})
    .otherwise(         {templateUrl: "404.html"})
})