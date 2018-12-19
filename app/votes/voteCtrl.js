app.controller("voteCtrl", function ($location, $scope, voteSrv, userSrv) {
    $scope.options=[];
    $scope.twooptions  = "";
    $scope.duplicate   = "";
    $scope.emptyOption = "";
    $scope.voteName   = "Tempory Name"; 
    $scope.voteText   = "Tempory Text"; 
    $scope.voteOption = "option1";
    $scope.data = [];
//////////////////////////////////////////////////
    // Chart
    $scope.chartOptions = { legend: {display: true} };
       
    $scope.updateChart = function(vote) {
        $scope.labels = Object.keys(vote.voteResult) ;
        return Object.values(vote.voteResult);
    }
////////////////////////////////////////////////////
    
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
            $scope.duplicate = "Duplicate vote option!";
            return;
        }
        $scope.duplicate = "";
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

        var objoptions = {};        
        for (var i=0; i< options.length; i++){
            objoptions[options[i]] = 0;
        }
        voteSrv.newVote(name,text,objoptions);

        $scope.options=[];
        $scope.voteName   = "Tempory Name"; 
        $scope.voteText   = "Tempory Text"; 
        $scope.voteOption = "option1";

        $location.path("/votes");
    }
//////////////////////////////////////////////////    

    $scope.option = '';
    
    $scope.sendVoteChoice = function(vote){
//      alert(vote.voteResult[$scope.option] + "/" + $scope.option);  
        if ($scope.option == '') return;
        vote.voteResult[$scope.option]++;
        $scope.getActiveUser().uVotesIds.push(vote.voteId);       
        $scope.option = '';
    //   alert(vote.voteResult[$scope.option]);    
    }
///////////////////////////////////////////////////
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

    $scope.clicked = function(x){
        $scope.option = x;
    }    
})
