app.controller("newMessageCtrl", function ($scope, $http, messageSrv) {  
    //alert();

    $scope.messages = [];
    
    messageSrv.getAll().then(function(messages) {
      $scope.messages = messages;      
    }, function(error) {      
      $log.error(error);
    });

    $scope.searchResults = [];// ["Brad Pitt", "bla bla", "Barbara"];
    $scope.searchChange = function() {
      if ($scope.searchText === "") {
          $scope.searchResults = [];
      } else {   // Calling TMDB API for getting the results;          alert();
        var tmdbSearchUrl = 
          "https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" +
          $scope.searchText;
          
        $http.get(tmdbSearchUrl).then( function(response) {            // success - update the searchResuls array
              $scope.searchResults = response.data.results;            //$scope.searchResults = ["Brad Pitt", "bla bla", "Barbara"];  
          }, function(error) { console.error(error); }
        )
      }
    }
////////new

    $scope.searchText = "";
    $scope.filtermessages = function (message) {
      if (message.fname.toLowerCase().includes($scope.searchText.toLowerCase()) ||
          message.lname.toLowerCase().includes($scope.searchText.toLowerCase())) {
            return true;
      } else { return false; }
    }
    
    $scope.newsort="";
    $scope.propName ="";
    $scope.direction = false;

    $scope.sortBy = function () {
      if ($scope.newsort !== $scope.propName) {
        // This is the first time the user clicks on this header
        $scope.propName = $scope.newsort;
        $scope.direction = false;
      } else {
        $scope.direction = !$scope.direction;
      }
    }
    
    $scope.classCard = [];
    $scope.selectedIndex=-1;
    
    $scope.getBorderClass = function(index) { // $scope.selected=!$scope.selected;
    //  $scope.selectedIndex==index ? $scope.selectedIndex=-1:$scope.selectedIndex = index;  
        $scope.selectedIndex==index ? ($scope.selectedIndex=-1      , $scope.classCard[index]=""         ) 
                                    : ($scope.classCard[$scope.selectedIndex]="",$scope.selectedIndex = index , $scope.classCard[index]="redBorder")
    }
  })