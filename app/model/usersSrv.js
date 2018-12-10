app.factory("userSrv", function($http, $q, $location) {

    var prefixUrlDb = "http://my-json-server.typicode.com/vladaren/vaadbait/";

    var activeUser = "";  
   
    var users=[];

    //if (getUsersFromDB()).then
    
    //alert ("srv:" + users);   

    function User(uName, uMail,uPassw){
        this.name       = uName;
        this.email      = uMail;
        this.password   = uPassw;
    }

    function getAllUsers(){
        return getUsersFromDB();
    }

    function getUsersFromDB(){
        if(users.length<1){
            var async = $q.defer();
            var dbUsersURL = prefixUrlDb + "users";

            $http.get(dbUsersURL).then(function(response) {
                if (response.data.length > 0) {// success login
                    for (var i = 0; i < response.data.length; i++){
                        users.push(new User (
                            response.data[i].uName,
                            response.data[i].uMail,
                            response.data[i].uPassw ));
                    }       
                    //alert (p1+p2+p3);   
                    async.resolve(users);
                } else {
                // alert("Data users error");
                    async.reject("Data users error")
                }
            }, function(error) {
            //    alert("async.reject(error)");
                async.reject(error);
            });       
            return async.promise;
        }
    }     

    function newUser(p1,p2,p3){     
        //getUsersFromDB().then(    //).
        getUsersFromDB(); 
        users.push(new User(p1,p2,p3));               
        return users[users.length - 1];
    }

    function login(email,password){        
        var async = $q.defer();
        var loginURL = prefixUrlDb + "users?" + "uEmail=" + email + "&uPassw=" + password; //+ "&qq=oo";

            $http.get(loginURL).then(function(response) {
            if (response.data.length > 0) {// success login
                activeUser = new User(response.data[0]);
                $location.path("/users");
                async.resolve(activeUser);
            } else {    // invalid email or password
                async.reject("invalid email or password")
            }
        }, function(error) {
            async.reject(error);
        });
        return async.promise;
    }
    return { 
        login: login, 
        signup:newUser, 
        getAllUsers:getAllUsers
    }
})