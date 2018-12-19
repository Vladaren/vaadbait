var app = angular.module("houseApp", ["ngRoute", "chart.js"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/"         , {templateUrl: "home.html"               , controller: "userCtrl"})
    .when("/messages" , {templateUrl: "app/msg/messagesDir.html", controller: "msgCtrl" })  
    .when("/votes"    , {templateUrl: "app/votes/votes.html"    , controller: "voteCtrl"})
    .when("/login"    , {templateUrl: "app/user/login.html"     , controller: "userCtrl"})
    .when("/signup"   , {templateUrl: "app/user/signup.html"    , controller: "userCtrl"})
    .when("/users"    , {templateUrl: "app/user/usersDir.html"  , controller: "userCtrl"})
    .otherwise(         {templateUrl: "404.html" })
})