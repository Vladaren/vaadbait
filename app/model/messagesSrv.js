app.factory("msgSrv", function($http, $q) {
   var user="uTemp";

    function letUser(u){
        user = u;
    }

    function getUser(){
        return user;
    }
    
    return { user: getUser, letUser:letUser }
})