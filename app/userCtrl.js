app.controller("userCtrl", function ($scope, $http, msgSrv, $q, $location, userSrv) {
    
    $scope.logIn = function() {
        userSrv.login($scope.uEmail, $scope.uPassw);
    }

})