app.controller("userCtrl", function ($scope, userSrv, $location) {
   //$scope.test="test2";
   $scope.activeUser = null;

   $scope.signOut = function() {
    $scope.activeUser = null;
   }


   $scope.getActiveUser = function() {
       return userSrv.getActiveUser()
   }

   $scope.getAllUsers = function() {
        //$scope.users = userSrv.getAllUsers();
        userSrv.getAllUsers().then(function(resp){
        //   debugger;
            $scope.users = resp;       // alert ( "resp.length  =" + resp.length);
        }, function(error) { })
    }  
  
    $scope.signUp = function() {       
        userSrv.signup($scope.uName, $scope.uEmail, $scope.uPassw);
        $location.path("/users");       
    }

    $scope.logIn = function() {
        userSrv.login($scope.uEmail, $scope.uPassw).then(function(activeUser){
            //$scope.activeUser = activeUser;//userSrv.activeUser;           
            $location.path("/users");
        }, function(error) { })
        
    }
})