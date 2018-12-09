app.controller("userCtrl", function ($scope,userSrv) {
    
    $scope.signUp = function() {
        userSrv.signup($scope.users, $scope.uName, $scope.uEmail, $scope.uPassw);
    }

    $scope.logIn = function() {
        userSrv.login($scope.uEmail, $scope.uPassw);
    }

})