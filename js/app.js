// TODO: controllers / routes / in seperate files

var mumsnetApp = angular.module('mumsnetApp', ['ngRoute']);

mumsnetApp.controller('mainController', function($scope, $http) {
  $scope.message = 'testing';

  // DUMMY CONTENT DATA
    $scope.talklinks = [
        {title: 'August vs September birth (schools)', count: '856'},
        {title: 'Scared', count: '6'},
        {title: 'First Time Pregnancy (2)', count: '300'},
        {title: 'Please help!!!!', count: '25'},
        {title: 'First Time Pregnancy (2)', count: '300'}
    ];

// FOOTER DATA COMING IN FROM JSON FILE
  $http.get('/cms-dummy-data.json')
            .success(function (data) {
              $scope.data = data.array;
              $scope.title = data.title;
              $scope.subtitles = data.subtitles;
            })
            .error(function (data) {
              console.log('err');
            });
});


// routes
mumsnetApp.config(function($routeProvider) {
  $routeProvider

      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
      })

      .when('/otherpages', {
        templateUrl: 'pages/otherpages.html',
        controller: 'otherPagesController'
      });

});





mumsnetApp.controller('otherPagesController', function($scope) {
  $scope.message = 'testing other pages...';
});
