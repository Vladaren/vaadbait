app.controller("voteCtrl", function ($location, $scope, voteSrv, userSrv) {

    $scope.addNewVote = function(name,text,options){
        var objoptions = {};        
        for (var i=0; i<options.length; i++){
            objoptions[options[i]] = 0;
        }
        voteSrv.newVote(name,text,objoptions);  
        $location.path("/votes");
    }
    
    $scope.options=[];

    $scope.addNewOption = function(opt) {
        $scope.options.push(opt);
        $scope.voteOption="";
    }

    $scope.getActiveUser = function() {
        //alert( userSrv.getActiveUser().name);
        return userSrv.getActiveUser()
    }
  
    $scope.getKeys = function(obj) {
        return Object.keys(obj);
    }

    $scope.getAllVotes = function() {
        voteSrv.getAllVotes().then(function(resp){
            $scope.votes = resp;    
        }, function(error) { })
    }  

    $scope.sendVoteChoice = function(vote){
    
       alert(vote.voteResult[$scope.option] + "/" + $scope.option);    
       vote.voteResult[$scope.option]++;
       $scope.getActiveUser().uVotesIds.push(vote.voteId);       
       alert(vote.voteResult[$scope.option]);    
    }

    $scope.clicked = function(x){
        $scope.option = x;
    }    
})
