app.controller("userCtrl", function ($scope, $http, msgSrv) {
    var user = "UserForTesting";    
//  msgSrv.letUser(user);
//    alert("userCtrl:" +  $scope.user);

 function logIn(){
    //"if (array of users-passwords).includes(uEmail-uPassword)"  
    msgSrv.letUser(user);
    return true;
 }

 function login(email, password) {
    var async = $q.defer();

    var loginURL = "http://my-json-server.typicode.com/vladaren/vaadbait/app/user?email=" +
        email + "&pwd=" + password;
//http://my-json-server.typicode.com/vladaren/vaadbait/users?email=a@gmail.com&pwd=123;
        $http.get(loginURL).then(function(response) {
        if (response.data.length > 0) {
            // success login
            activeUser = new User(response.data[0]);
            async.resolve(activeUser);
        } else {
            // invalid email or password
            async.reject("invalid email or password")
        }
    }, function(error) {
        async.reject(error);
    });

    return async.promise;
}


})