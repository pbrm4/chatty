'use strict';

angular.module('chattyApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when('/signup', {
                template: '<sign-up></sign-up>'
            })
            .when('/login', {
                template: '<log-in></log-in>'
            })
            .otherwise('/login');
    }]);