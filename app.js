var app = angular.module("houseApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/"         , {templateUrl: "home.html"})
    .when("/messages" , {templateUrl: "msg/messagesDir.html"})  //, controller: "messageCtrl"})
    .otherwise(         {templateUrl: "404.html"})
})