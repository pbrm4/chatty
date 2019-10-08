'use strict';


angular.module('chat.frame')
    .component('chatFrame', {
        templateUrl: 'chat/frame/frame.template.html',
        controller: ['$cookies', '$location', function FrameController($cookies, $location) {
            this.name = JSON.parse(sessionStorage.user).Name;

            this.logoutService = function () {
                $cookies.remove('jwt');
                socket.emit('user:logout', { name: this.name });
                sessionStorage.removeItem('user')
                $location.url('/login');
            };

        }]
    });