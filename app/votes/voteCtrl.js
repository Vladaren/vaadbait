app.controller("voteCtrl", function ($location, $scope, voteSrv, userSrv) {
    
    $scope.options     = [];
    $scope.twooptions  = "";
    $scope.duplicate   = "";
    $scope.emptyOption = "";
    $scope.voteName    = "Tempory Name"; 
    $scope.voteText    = "Tempory Text"; 
    $scope.voteOption  = "option1";
    $scope.data        = [];
//////////////////////////////////////////////////
    $scope.selOption = [];    

    $scope.sendVoteChoice = function(i){
        if ($scope.selOption[i] == '') return;
        $scope.votes[i].voteResult[$scope.selOption[i]]++;
        $scope.getActiveUser().uVotesIds.push($scope.votes[i].voteId);       
        //option = '';
    }

    $scope.clicked = function(i,key){
        $scope.selOption[i] = key;
    }    

///////////////////////////////////////////////////
    $scope.deleteOption = function(i) {
        $scope.options.splice(i, 1); 
    }

    $scope.addNewOption = function(opt) {

        if (opt == "") { 
            $scope.emptyOption = "Vote option is empty!";
            return;
        }
        $scope.emptyOption = "";
        if ( $scope.options.includes(opt)) { 
            $scope.duplicate = "Dublicate vote option!";
            return;
        }
        $scope.duplicate = "";
        $scope.emptyOption = "";
        $scope.options.push(opt);
        $scope.voteOption="";
        $scope.twooptions = "";        
    }
    
    $scope.addNewVote = function(name,text,options){
     
        if ($scope.options.length < 2) {
             $scope.twooptions = "At least 2 options!";
             return;
        }
        $scope.twooptions = "";
        $scope.duplicate  = "";
        $scope.emptyOption = "";
        var objoptions = {};        
        for (var i=0; i< options.length; i++){
            objoptions[options[i]] = 0;
        }

        voteSrv.newVote(name,text,objoptions);

        $scope.options=[];
        $scope.voteName   = "Tempory Name"; 
        $scope.voteText   = "Tempory Text"; 
        $scope.voteOption = "option1";
//        $scope.selOption = [];  
        $location.path("/votes");
    }
///////////////////////////////////////////////////////////
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
})