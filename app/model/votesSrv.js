app.factory("voteSrv", function($http, $q, $location) {

    var prefixUrlDb = "https://my-json-server.typicode.com/vladaren/vaadbait/";
    var votesId = 3; 
    var votes=[];
    var dbIsReaded = false;

    function Vote(voteId, voteName, voteText, voteResult){
        this.voteId     = voteId;
        this.voteName   = voteName;
        this.voteText   = voteText;
        this.voteResult = voteResult;
    }
    
    function getAllVotes(){
       return getVotesFromDB();
    }

    function getVotesFromDB(){
        
        var async = $q.defer();

        if(dbIsReaded){ async.resolve(votes); }
        else {   
            var dbvotesURL = prefixUrlDb + "votes";
            $http.get(dbvotesURL).then(
                function(response) {
                    if (response.data.length > 0) {// success login
                        for (var i = 0; i < response.data.length; i++){
                            votes.push(new Vote(
                                response.data[i].voteId,
                                response.data[i].voteName,
                                response.data[i].voteText,
                                response.data[i].voteResult ));
                        }                      
                        async.resolve(votes);
                        dbIsReaded = true;
                    } else { async.reject("Data votes error")}
                }, 
                function(error) { async.reject(error); }
            );                            
        }
        return async.promise;
    }     

    function newVote(p1,p2,p3){             
        getVotesFromDB(); 
        votes.unshift(new Vote(("v"+(votesId++)),p1,p2,p3));               
        //return votes[votes.length - 1];
    }

    return { 
        newVote:newVote, 
        getAllVotes:getAllVotes
    }
})