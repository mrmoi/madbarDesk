myApp.controller('PlayersController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_URL',
function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authUser) {
       if(authUser) {
           var playersRef = new Firebase(FIREBASE_URL + '/players');
           var playersInfo = $firebaseArray(playersRef);
           $scope.players = playersInfo;

           playersInfo.$loaded().then(function(data) {
               $rootScope.howManyPlayers = playersInfo.length;
           }); //

           playersInfo.$watch(function(data) {
               $rootScope.howManyPlayers = playersInfo.length;
           }); //
/*$rootScope.currentUser.$id */
           $scope.addPlayer = function() {
               playersInfo.$add({
                   name: $scope.playername,
                   position: $scope.playerposition,
                   nationality: $scope.playernationality,
                   number: $scope.playernumber,
                   status: $scope.playerstatus,
                   date: Firebase.ServerValue.TIMESTAMP
               }).then(function() {
                   $scope.playername='';
                   $scope.playerposition='';
                   $scope.playernationality='';
                   $scope.playernumber='';
                   $scope.playerstatus='';
               }); //promise
           }; // addMeeting

           $scope.deletePlayer = function(key) {
               playersInfo.$remove(key);
           }; // deleteMeeting

       } // User Authenticated
    }); // on Auth
}]); // Controller
