'use strict';

angular.module('auth.signup')
    .factory('SignupService', function($http) {
        return {
            signup : function(user) {
                return $http.post('/auth/signup', user);
            }
        }
    });