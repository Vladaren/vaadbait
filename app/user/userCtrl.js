app.controller("userCtrl", function ($scope,userSrv, $location) {
   //$scope.test="test2";
   
   $scope.getAllUsers = function() {
        //$scope.users = userSrv.getAllUsers();
        userSrv.getAllUsers().then(function(resp){
        //   debugger;
            $scope.users = resp;       // alert ( "resp.length  =" + resp.length);
        }, function(error) { })
    }  
  
    // alert ( "users.length  =" + users.length);// + "last user"" $scope.users);

    $scope.signUp = function() {       //alert ($scope.users) // 
        userSrv.signup($scope.uName, $scope.uEmail, $scope.uPassw);
        $location.path("/users");
        alert ($scope.users)
    }

    $scope.logIn = function() {
        userSrv.login($scope.uEmail, $scope.uPassw);
    }

})