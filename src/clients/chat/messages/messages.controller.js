'use strict';

angular.module('chat.messages')
    .component('chatMessages', {
        bindings: {
            data: `<`
        },
        templateUrl: 'chat/messages/messages.template.html',
        controller: [function MessagesController() {
            this.messages = this.data;
        }]
    });