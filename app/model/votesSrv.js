app.factory("voteSrv", function($http, $q, $location) {

    var prefixUrlDb = "https://my-json-server.typicode.com/vladaren/vaadbait/";
   
    var votes=[];
    var dbIsReaded = false;
    //if (getUsersFromDB()).then    
    //alert ("srv:" + users);   

    function Vote(voteName, voteText, voteResult){
        this.voteName   = voteName;
        this.voteText   = voteText;
        this.voteResult = voteResult;
    }

    //getUsersFromDB().then(function(resp){   users = resp;  });
    
    function getAllVotes(){
//.then(function(usrs){           users = usrs;       });
       return getVotesFromDB();
    }

    function getVotesFromDB(){
        
        var async = $q.defer();

        if(dbIsReaded){ async.resolve(votes); }
        else {   
            var dbvotesURL = prefixUrlDb + "votes";
//          users=[];
            $http.get(dbvotesURL).then(
                function(response) {
                    if (response.data.length > 0) {// success login
                        for (var i = 0; i < response.data.length; i++){
                            users.push(new User (
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
        //getUsersFromDB().then(    //).
        getVotesFromDB(); 
        users.push(new Vote(p1,p2,p3));               
        return votes[votes.length - 1];
    }


    return { 
        newVote:newVote, 
        getAllVotes:getAllVotes
    }
})