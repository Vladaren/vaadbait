app.controller("userCtrl", function ($scope, $http, msgSrv) {
    var user = "UserForTesting";    
//  msgSrv.letUser(user);
//    alert("userCtrl:" +  $scope.user);

 function logIn(){
    //"if (array of users-passwords).includes(uEmail-uPassword)"  
    msgSrv.letUser(user);
    return true;
 }

})