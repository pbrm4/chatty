'use strict';

angular.module('chattyApp')
    .config(['$routeProvider', function config($routeProvider) {
        var $cookies;
        angular.injector(['ngCookies']).invoke(['$cookies', function (_$cookies_) {
            $cookies = _$cookies_;
        }]);

        $routeProvider
            .when('/signup', {
                template: '<sign-up></sign-up>'
            })
            .when('/login', {
                template: '<log-in></log-in>'
            })
            .when('/chat', {
                template: '<chat></chat>',
                redirectTo: function() {
                    if (!$cookies.get('jwt'))
                        return '/login'
                }
            })
            .otherwise('/login');
    }]);