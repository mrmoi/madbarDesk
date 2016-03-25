myApp.controller('PlayersController',['$scope','$rootScope','$firebaseAuth','$firebaseArray','FIREBASE_URL','$http',
function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL, $http) {

var ref = new Firebase(FIREBASE_URL);
var auth = $firebaseAuth(ref);

/* ONLY IF USER IS LOGGED IN */
auth.$onAuth(function(authUser) {
if(authUser) {
/* create a reference point to the database */
var playersRef = new Firebase(FIREBASE_URL + '/players');
var headlineRef = new Firebase(FIREBASE_URL + '/headlines');
var imagesRef = new Firebase(FIREBASE_URL + '/images');
var powRef = new Firebase(FIREBASE_URL + '/pow');
var staffRef = new Firebase(FIREBASE_URL + '/staff');

/* create a variable for the firebase array */
var playersInfo = $firebaseArray(playersRef);
var headlineInfo = $firebaseArray(headlineRef);
var imagesInfo = $firebaseArray(imagesRef);
var powInfo = $firebaseArray(powRef);
var staffInfo = $firebaseArray(staffRef);

/* link scope to the array variable */
$scope.players = playersInfo;
$scope.headlines = headlineInfo;
$scope.images = imagesInfo;
$scope.pows = powInfo;
$scope.staff = staffInfo;
           
           
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
                 
// ADD HEADLINE FUNCTION           
$scope.addHeadline = function() {
headlineInfo.$add({
     name: $scope.headlineName,
     content: $scope.headlineContent,
     date: Firebase.ServerValue.TIMESTAMP
}).then(function() {
     $scope.headlineName='';
     $scope.headlineContent='';    
});
};

// ADD PLAYER OF THE WEEK FUNCTION
$scope.addPow = function() {
powInfo.$add({
   name: $scope.powName,
   position: $scope.powPosition,
   comment: $scope.powComment
}).then(function(){
    $scope.powName='';
    $scope.powPosition='';
    $scope.powComment='';
});  
};
          

$scope.addImage = function() {
imagesInfo.$add({
     name: $scope.imageName
     /*content: $scope.headlineContent*/
}).then(function() {
     $scope.imageName='';
     /*$scope.headlineContent='';*/
});
};
    
$scope.addStaff = function() {
    staffInfo.$add({
        name: $scope.staffName,
        role: $scope.staffRole,
        tenure: $scope.staffTenure
    }).then(function(){
        $scope.staffName='';
        $scope.staffRole='';
        $scope.staffTenure='';
    });
};
        

} // User Authenticated
}); // on Auth
    
/* display data in non logged in areas */
    
var playersRef = new Firebase(FIREBASE_URL + '/players');
var headlineRef = new Firebase(FIREBASE_URL + '/headlines');
var powRef = new Firebase(FIREBASE_URL + '/pow');


var playersInfo = $firebaseArray(playersRef);
var headlineInfo = $firebaseArray(headlineRef);
var powInfo = $firebaseArray(powRef);

$scope.players = playersInfo;
$scope.headlines = headlineInfo;
$scope.pows = powInfo;

    
/*    
playersInfo.$loaded().then(function(data) {
$rootScope.howManyPlayers = playersInfo.length;

playersInfo.$watch(function(data) {
    $rootScope.howManyPlayers = playersInfo.length;
}); //
*/           

/*$rootScope.currentUser.$id */
/*
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
*/
/*    
$scope.deletePlayer = function(key) {
    playersInfo.$remove(key);
}; // deleteMeeting
*/   
/* $scope.addHeadline = function() {
 headlineInfo.$add({
      name: $scope.headlineName
      /*content: $scope.headlineContent*/
 /*}).then(function() {
      $scope.headlineName='';
      /*$scope.headlineContent='';*/
 /*});
 };*/
    
/* ADDED JSON FILE TO HOLD IMAGE ADDRESSES */
/*
$http.get('team.json').success(function(data) {
$scope.playerImages = data;
});
*/   
}]); // Controller
