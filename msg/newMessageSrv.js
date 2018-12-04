app.factory("newMessageSrv", function($http, convert, $q) {

  //   function message(fname, lname, birthday, imgURL, imdbURL) {
  //       this.fname    = fname;
  //       this.lname    = lname;
  //       this.birthday = new Date(birthday);
  //       this.imgURL   = imgURL;
  //       this.imdbURL  = imdbURL;
  //   }
    
  //   function getAll() {
  //     var async = $q.defer();
  //     var messages = [];
  //     //$scope.messages = [];
  //     $http.get("messages.json").then(function(response) {
  //       // Success
  //       for (var i = 0; i < response.data.length; ++i) {
  //         messages.push(new message ( response.data[i].fname,
  //                                 response.data[i].lname, 
  //                                 response.data[i].birthday,
  //                                 response.data[i].imgURL, 
  //                                 response.data[i].imdbURL
  //                               )
  //                     )
  //              //     alert(messages[i].fname);
  //         async.resolve(messages);
  //       }  

  //     }, function(error) {        // Error
  //       async.reject(error);//      alert(JSON.stringify(response.data));
  //       console.error(error);
  //     }) 
  // ////////new
  //     return async.promise;
  //   }
  //   return {  getAll: getAll    };
  });