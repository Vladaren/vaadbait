app.controller("userCtrl", function ($scope,userSrv) {
    $scope.test="test2";
    userSrv.getAllUsers().then(function(response){
        debugger;
        $scope.users = response;
        alert ( "users.length  =" + $scope.users.length);
    });
    
    // alert ( "users.length  =" + users.length);// + "last user"" $scope.users);

    $scope.signUp = function() {       //alert ($scope.users) // $scope.users = userSrv.signup($scope.uName, $scope.uEmail, $scope.uPassw);
        $location.path("/users");
        alert ($scope.users)
    }

    $scope.logIn = function() {
        userSrv.login($scope.uEmail, $scope.uPassw);
    }

})