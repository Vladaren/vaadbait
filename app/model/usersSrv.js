app.factory("userSrv", function($http, $q, $location) {

var prefixUrlDb = "http://my-json-server.typicode.com/vladaren/vaadbait/";
//  alert("prefixUrlDb");
  var activeUser = "";    
//  msgSrv.letUser(user);
//    alert("userCtrl:" +  $scope.user);

//  function logIn(){
//     //"if (array of users-passwords).includes(uEmail-uPassword)"  
//     msgSrv.letUser(user);
//     return true;
//  }

    function User(user){
        this.name = user.uName;
        this.email = user.uMail;
        this.password = user.uPassw;
    }

    function login(email,password){
        
        var async = $q.defer();

        var loginURL = prefixUrlDb + "users?" + "uEmail=" + email + "&uPassw=" + password; //+ "&qq=oo";

            $http.get(loginURL).then(function(response) {
            if (response.data.length > 0) {// success login
                activeUser = new User(response.data[0]);
                $location.path("/messages")
                async.resolve(activeUser);

            } else {// invalid email or password
                async.reject("invalid email or password")
            }
        }, function(error) {
            async.reject(error);
        });
        return async.promise;
    }
    return { login: login }
})