'use strict';

angular.module('chat')
    .factory('ChatService', function ($http) {
        return {
            getMessages: function () {
                return $http.get('/api/messages');
            }
        }
    });