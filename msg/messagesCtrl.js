app.controller("msgCtrl", function ($scope, $http) {
    $scope.messages = [];

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
        $scope.messages.push(new Message(p1,p2,p3,p4,p5));         
        //$scope.tdText="";
    }

    $http({method: "GET", url:"msg/messages.json"}).then(function (response) {
        // Success
        for (var i = 0; i < response.data.length; i++) {
            $scope.addMessage(
                response.data[i].msgId,
                response.data[i].msgName,
                response.data[i].msgBody,
                response.data[i].msgDate,
                response.data[i].msgAutor
            );
        }  
        
    }, function (error) { console.error(error); })    

});
 
//     var showCompleted = true;
//     var showActive = true;
//     var todoInner;

//     $scope.xxx = "#myModal";

//     $scope.todos = [];

//     $scope.chngValue = function(todo){
//         todo.iscompleted = !todo.iscompleted;
//     }
    
//     $scope.ifModal = function(todo){
//         todoInner = todo;
//         if (todo.iscompleted) $scope.deleteTodo(todoInner); 
        
//     }
// ////////////////////////////////////////////////////////////////
//     $scope.deleteTodo = function(td){
//         $scope.todos.splice($scope.todos.indexOf(todoInner),1);
//     }
// ////////////////////////////////////////////////////////////////
//     $scope.showAll = function(){
//      showCompleted = true; 
//      showActive = true
//     }

//     $scope.showCompleted = function(){
//         showActive = false; 
//         showCompleted = true;
//     }
//     $scope.showActive = function(){
//         showActive = true; 
//         showCompleted = false;
//     }

    

//     function Todo(newTodo, iscompleted) {
//         this.todo        = newTodo;
//         this.iscompleted = iscompleted;
//     }

//   
    
//     $http({ method: "GET",url: "todos.json"}).then(function (response) {
//         // Success
//         for (var i = 0; i < response.data.length; i++) {
//             $scope.addTodo(response.data[i].todo,response.data[i].iscompleted);
//         }  
//     }, function (error) { console.error(error); })

//     $scope.countCompleted = function(){
//         var count = 0;
//         for (var i=0; i<$scope.todos.length; i++) { if ($scope.todos[i].iscompleted) count++ ; }
//         return count;
//     }
    // $scope.countCompleted = function(){
    //     var count = 0;
    //     for (var i=0; i<$scope.todos.length; i++) { if ($scope.todos[i].iscompleted) count++ ; }
    //     return count;
    // }
//     $scope.sumTodos = 0;
//     $scope.showTodos = function (response) {
//         for (var i = 0; i < response.data.length; i++) {
//             $scope.sumTodos++;
//             return {
//                 name: response.data[i].todo,
//                 sumTodos: $scope.sumTodos
//             };
//         }
//     }    

