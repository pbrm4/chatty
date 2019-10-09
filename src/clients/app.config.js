'use strict';

angular.module('chattyApp')
    .config(['$routeProvider', function config($routeProvider) {
        var $cookies;
        angular.injector(['ngCookies']).invoke(['$cookies', function (_$cookies_) {
            $cookies = _$cookies_;
        }]);

        $routeProvider
            .when('/signup', {
                template: '<sign-up></sign-up>',
                redirectTo: function() {
                    if ($cookies.get('jwt'))
                        return '/chat'
                }
            })
            .when('/login', {
                template: '<log-in></log-in>',
                redirectTo: function() {
                    if ($cookies.get('jwt'))
                        return '/chat'
                }
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