'use strict';

angular.module('chat.frame')
    .component('chatFrame', {
        templateUrl: 'chat/frame/frame.template.html',
        controller: [function FrameController() {
            this.name = JSON.parse(sessionStorage.user).Name;
        }]
    });