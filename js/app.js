console.log('loaded');


var mumsnetApp = angular.module('mumsnetApp', ['ngRoute']);

mumsnetApp.controller('mainController', function($scope) {
  $scope.message = 'testing';


// DUMMY CMS / CONTENT DATA
  $scope.talklinks = [
      {title: 'August vs September birth (schools)', count: '856'},
      {title: 'Scared', count: '6'},
      {title: 'First Time Pregnancy (2)', count: '300'},
      {title: 'Please help!!!!', count: '25'},
      {title: 'First Time Pregnancy (2)', count: '300'}
  ];


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
