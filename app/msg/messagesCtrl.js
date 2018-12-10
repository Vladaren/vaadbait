app.controller("msgCtrl", function ($scope, $http, msgSrv) {
    var prefixUrlDb = "http://my-json-server.typicode.com/vladaren/vaadbait/";
    var countMessages = 0;

    //alert($scope.user);
    
    $scope.messages = [];
    $scope.msgName = "msg Name Temp";
    $scope.msgBody = "msg Body Temp";
    
    // actorSrv.getAll().then(function(actors) {
    //     $scope.actors = actors;      
    //   }, function(error) {      
    //     $log.error(error);
    // });

    var getUserName = function(){
        //alert(msgSrv.user());
        return msgSrv.user() ;
    };

    $scope.newMessage = function(){
        $scope.addMessage(
            "$scope.msgId",
            $scope.msgName,
            $scope.msgBody,
            "$scope.msgDate",
            getUserName());
            //alert('new msg.autor = ' + $scope.messages[$scope.messages.length-1].msgAutor);
    }

    $scope.filtermessages = function(){
        return true
    }

    function Message(msgId, msgName, msgBody, msgDate, msgAutor) {
        this.msgId      = msgId     ;
        this.msgName    = msgName   ;
        this.msgBody    = msgBody   ;
        this.msgDate    = msgDate   ;
        this.msgAutor   = msgAutor  ;          
    }

    $scope.addMessage = function(p1,p2,p3,p4,p5){        
        $scope.messages.push(new Message(p1,p2,p3,p4,p5));        //$scope.tdText="";       
    }
        
    $http({method: "GET", url:prefixUrlDb + "messages"}).then(function (response) {
    // Success    
            for (var i = 0; i < response.data.length; i++){
                $scope.addMessage(
                    response.data[i].msgId,
                    response.data[i].msgName,
                    response.data[i].msgBody,
                    response.data[i].msgDate,
                    response.data[i].msgAutor);
            }          
        },
        
        function (error) {
//             console.error(error); 
        }
    );            
})
////////////////////////////////////////////////
    // function login(email, pwd) {
    //     var async = $q.defer();

    //     var loginURL = "http://my-json-server.typicode.com/nirch/recipe-book-v3/users?email=" +
    //         email + "&pwd=" + pwd;
    //     $http.get(loginURL).then(function(response) {
    //         if (response.data.length > 0) {
    //             // success login
    //             activeUser = new User(response.data[0]);
    //             async.resolve(activeUser);
    //         } else {
    //             // invalid email or password
    //             async.reject("invalid email or password")
    //         }
    //     }, function(error) {
    //         async.reject(error);
    //     });

    //     return async.promise;
    // }



// 

