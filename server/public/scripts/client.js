const colorApp = angular.module('ColorApp', ['ngRoute']);

colorApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>Home</h1>'
    }).when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController as vm'
    }).when('/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController as vm'
    }).when('/green', {
        templateUrl: 'views/green.html',
        controller: 'GreenController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    })
}]);

colorApp.controller('RedController', ['$http', function ($http) {
    console.log('running RedController');
    self = this;
    self.message = ('I am the red page');
}]);
colorApp.controller('BlueController', ['$http', function ($http) {
    console.log('running blueController');
    self = this;
    self.message = ('I am the blue page.');
}]);
colorApp.controller('GreenController', ['$http', function ($http) {
    console.log('running GreenController');
    self = this;
    self.message = ('I am the green page.');
}]);
