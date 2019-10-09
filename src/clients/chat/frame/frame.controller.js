'use strict';


angular.module('chat.frame')
    .component('chatFrame', {
        templateUrl: 'chat/frame/frame.template.html',
        controller: ['$cookies', '$location', function FrameController($cookies, $location) {
            this.session = JSON.parse(localStorage.user);
            this.name = this.session.Name;

            this.logoutService = function () {
                $cookies.remove('jwt');
                socket.emit('user:logout', { name: this.session.Name, email: this.session.email_id, user_id: this.session.id });
                localStorage.removeItem('user')
                $location.url('/login');
            };

        }]
    });