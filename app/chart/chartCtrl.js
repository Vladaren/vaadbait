app.controller("chartCtrl", function ($location, $scope, userSrv) {
    // Chart
    $scope.chartOptions = { legend: {display: true} };

    console.log("Hello! chart");
    
    $scope.chartLabels = function(i) {   
        console.log("Hello! chart labels");
        return Object.keys($scope.votes[i].voteResult);
    }
  
    var countloop = 0;
        
    $scope.chartValues = function(i) {
        countloop++;
        return Object.values($scope.votes[i].voteResult);      //'[1,2,3]'; //
    }

    $scope.getActiveUser = function() {
        //alert(userSrv.getActiveUser().name);
        return userSrv.getActiveUser()
    }
  
})
