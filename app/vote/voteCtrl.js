app.controller("voteCtrl", function ($scope, $http, voteSrv ) {
  
    $scope.getKeys = function(obj) {
        return Object.keys(obj);
    }

    $scope.getAllVotes = function() {
        voteSrv.getAllVotes().then(function(resp){
            $scope.votes = resp;    
        }, function(error) { })
    }  

    $scope.sendVoteChoise = function(vote){
       alert(vote.voteId + "/" +$scope.option);    
    }

    $scope.clicked = function(x){
        $scope.option = x;
    }
})
