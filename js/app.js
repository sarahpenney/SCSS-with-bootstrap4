console.log('loaded');


var mumsnetApp = angular.module('mumsnetApp', ['ngRoute']);
mumsnetApp.controller('mainController', function($scope) {
  $scope.message = 'test angular message';
  console.log('angular werk');
});


// configure our routes
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


    // created the controller and test Angular's $scope
mumsnetApp.controller('mainController', function($scope) {
  $scope.message = 'testing home page...';
});

mumsnetApp.controller('otherPagesController', function($scope) {
  $scope.message = 'testing other pages...';
});
