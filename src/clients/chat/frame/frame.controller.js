'use strict';


angular.module('chat.frame')
    .component('chatFrame', {
        templateUrl: 'chat/frame/frame.template.html',
        controller: ['$cookies', '$location', function FrameController($cookies, $location) {
            this.session = JSON.parse(localStorage.user);
            this.name = this.session.Name;

            this.logoutService = function () {
                $cookies.remove('jwt');
                localStorage.removeItem('user')
                $location.url('/login');
            };

        }]
    });