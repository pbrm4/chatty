'use strict';

angular.module('chattyApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo : () => {
                }
            })
    }])