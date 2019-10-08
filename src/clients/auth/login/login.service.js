'use strict';

angular.module('auth.login')
    .factory('LoginService', function ($http) {
        return {
            login: function (user) {
                return $http.post('/auth/login', user);
            }
        }
    });