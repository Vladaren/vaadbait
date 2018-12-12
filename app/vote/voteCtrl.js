app.controller("voteCtrl", function ($scope, $http, voteSrv ) {
    
    $scope.getAllVotes = function() {
        //$scope.users = userSrv.getAllUsers();
        voteSrv.getAllVotes().then(function(resp){
        //   debugger;
            $scope.votes = resp;       // alert ( "resp.length  =" + resp.length);
        }, function(error) { })
    }  

    $scope.sendVoteChoise = function(){
        alert($scope.option);
    }
})
