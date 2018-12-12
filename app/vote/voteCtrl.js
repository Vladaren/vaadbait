app.controller("voteCtrl", function ($scope, $http, voteSrv ) {
    
    $scope.getAllVotes = function() {
        voteSrv.getAllVotes().then(function(resp){
            $scope.votes = resp;       // alert ( "resp.length  =" + resp.length);
        }, function(error) { })
    }  

    $scope.sendVoteChoise = function(vote,option){
        //alert($scope.value);
        //alert($scope.votes.voteName);
        //alert(vote.voteResult[value]);
        alert(vote+option);
        //alert(vote.voteName);
    }
})
