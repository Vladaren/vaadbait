app.controller("voteCtrl", function ($scope, voteSrv) {
  
    $scope.getKeys = function(obj) {
        return Object.keys(obj);
    }

    $scope.getAllVotes = function() {
        voteSrv.getAllVotes().then(function(resp){
            $scope.votes = resp;    
        }, function(error) { })
    }  

    $scope.sendVoteChoise = function(vote){
    
       alert(vote.voteResult[$scope.option] + "/" + $scope.option);    
       vote.voteResult[$scope.option]++;
       alert(vote.voteResult[$scope.option]);    
    }

    $scope.clicked = function(x){
        $scope.option = x;
    }

    
})
