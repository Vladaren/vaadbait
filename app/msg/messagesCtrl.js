app.controller("msgCtrl", function ($scope, $http, msgSrv, userSrv) {
    var prefixUrlDb = "https://my-json-server.typicode.com/vladaren/vaadbait/";
    var countMessages = 4;

    //alert($scope.user);
    
    $scope.messages = [];
    $scope.msgName = "msg Name Temp";
    $scope.msgBody = "msg Body Temp";

    $scope.getActiveUser = function(){
        return userSrv.getActiveUser() ;
    };

    $scope.addMessage = function(p1,p2,p3,p4,p5){        
        $scope.messages.push(new Message(p1,p2,p3,p4,p5));        //$scope.tdText="";       
    }

    $scope.newMessage = function(){
        $scope.addMessage(  "msg"+ (countMessages++),
                            $scope.msgName,
                            $scope.msgBody,
                            "ComingSoon",
                            userSrv.getActiveUser().name
                        )
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
             console.error(error); 
        }
    );            
})