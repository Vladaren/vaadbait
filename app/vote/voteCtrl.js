app.controller("voteCtrl", function ($scope, $http, voteSrv ) {
    $scope.myOption =[];
    $scope.getKeys = function(obj) {
        return Object.keys(obj);
    }

    $scope.getAllVotes = function() {
        voteSrv.getAllVotes().then(function(resp){
            $scope.votes = resp;    
        }, function(error) { })
    }  

    $scope.sendVoteChoise = function(option,value){
       alert( option +" "+ value);    
    }
    $scope.clicked = function(x,y){
            debugger;
            alert( x +" "+ y);
    }
})
