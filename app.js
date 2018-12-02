
var app = angular.module("houseApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/",         {templateUrl: "main.html"})
    .when("/messages", {templateUrl: "msg/messages.html"})  //, controller: "messageCtrl"})
    .otherwise({templateUrl: "404.html"})
})