'use strict';


angular.module('chat.frame')
    .component('chatFrame', {
        templateUrl: 'chat/frame/frame.template.html',
        controller: ['$cookies', '$location', function FrameController($cookies, $location) {
            this.session = JSON.parse(sessionStorage.user);

            this.logoutService = function () {
                $cookies.remove('jwt');
                socket.emit('user:logout', { name: this.session.name, email: this.session.email_id });
                sessionStorage.removeItem('user')
                $location.url('/login');
            };

        }]
    });