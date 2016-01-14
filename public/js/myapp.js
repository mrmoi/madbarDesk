var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
    .constant('FIREBASE_URL', 'https://madbardesk.firebaseio.com/');


myApp.run(['$rootScope','$location',
    function($rootScope, $location) {
      $rootScope.$on('$routeChangeError',
          function(event, next, previous, error) {
            if(error=='AUTH_REQUIRED') {
              $rootScope.message = 'Sorry, you must log in to access that page';
              $location.path('/control');
          }
      });
}]);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
          templateUrl: 'partials/home.html',
          //controller: 'RegistrationController'
        }).
        when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
        }).
        when('/players', {
          templateUrl: 'partials/players.html',
          //controller: 'RegistrationController'
        }).
        when('/fixtures', {
          templateUrl: 'partials/fixtures.html',
          //controller: 'RegistrationController'
        }).
        when('/standings', {
          templateUrl: 'partials/standings.html',
          //controller: 'RegistrationController'
        }).
        when('/tlocations', {
          templateUrl: 'partials/tlocations.html',
          //controller: 'RegistrationController'
        }).
        when('/glocations', {
          templateUrl: 'partials/glocations.html',
          //controller: 'RegistrationController'
        }).
        when('/news', {
          templateUrl: 'partials/news.html',
          //controller: 'RegistrationController'
        }).
        when('/gallery', {
          templateUrl: 'partials/gallery.html',
          //controller: 'RegistrationController'
        }).
        when('/history', {
          templateUrl: 'partials/history.html',
          //controller: 'RegistrationController'
        }).
        //when('/checkins/:uId/:mId', {
          //templateUrl: 'views/checkins.html',
          //controller: 'CheckInsController'
        //}).
        //when('/checkins/:uId/:mId/checkinsList', {
          //templateUrl: 'views/checkinslist.html',
          //controller: 'CheckInsController'
      //}).
        when('/control', {
          templateUrl: 'partials/control.html',
          controller: 'PlayersController',
          resolve: {
            currentAuth: function(Authentication) {
              return Authentication.requireAuth();
            } //current Auth
          } //resolve
        }).
        otherwise ({
          redirectTo: '/home'
        });
    }]);
