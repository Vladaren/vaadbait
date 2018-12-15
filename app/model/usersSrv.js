app.factory("userSrv", function($http, $q, $location) {

    var prefixUrlDb = "https://my-json-server.typicode.com/vladaren/vaadbait/";

    var activeUser = null;  
   
    var users=[];
    var dbIsReaded = false;
    //if (getUsersFromDB()).then    
    //alert ("srv:" + users);   

    function User(u)//Id,uName,uMail,uPassw,uVotesIds)
    {
        this.uId       = u.uId;
        this.name      = u.uName;
        this.email     = u.uMail;
        this.password  = u.uPassw;
        this.uVotesIds = u.uVotesIds
    }

    //getUsersFromDB().then(function(resp){   users = resp;  });
    
    function getAllUsers(){
//.then(function(usrs){           users = usrs;       });
       return getUsersFromDB();
    }

    function getUsersFromDB(){
        var async = $q.defer();
        if(dbIsReaded){ async.resolve(users); }
        else {   
            var dbUsersURL = prefixUrlDb + "users";
            $http.get(dbUsersURL).then(
                function(response) {
                    if (response.data.length > 0) {// success login
                        for (var i = 0; i < response.data.length; i++){
                            users.push(new User (response.data[i]));
                                // .uId,
                                //                  response.data[i].uName,
                                //                  response.data[i].uMail,
                                //                  response.data[i].uPassw,
                                //                  response.data[i].uVotesIds
                        }                      
                        async.resolve(users);
                        dbIsReaded = true;
                    } else { async.reject("Data users error")}
                }, 
                function(error) { async.reject(error); }
            );                            
        }
        return async.promise;
    }     

    function newUser(p1,p2,p3){     
        //getUsersFromDB().then(    //).
        getUsersFromDB(); 
        var u = {"uId":"xxx","uMame":p1,"uMail":p2,"uPassw":p3,"uVotesIds":"xxx"};
        users.push(new User(u));               
        return users[users.length - 1];
    }

    function login(email,password){        
        var async = $q.defer();
        var loginURL = prefixUrlDb + "users?" + "uMail=" + email + "&uPassw=" + password; //+ "&qq=oo";

            $http.get(loginURL).then(function(response) {
            if (response.data.length > 0) {// success login
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
                //alert(activeUser.name);
//                $location.path("/users");
            } else {    // invalid email or password
                async.reject("invalid email or password")
            }
        }, function(error) {
            async.reject(error);
        });
        return async.promise;
    }
            
    function getActiveUser() {
        return activeUser;
    }

    return { 
        login: login, 
        signup:newUser, 
        getAllUsers:getAllUsers,
        getActiveUser:getActiveUser   
        // getUsersFromDB:getUsersFromDB
    }
})