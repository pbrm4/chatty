'use strict';

angular.module('auth.login')
    .component('chat', {
        templateUrl: 'chat/chat.template.html',
        controller: ['$scope', 'ChatService', function ChatController($scope, chatService) {
            $scope.data = [];

            chatService.getMessages()
                .then(function(response) {
                    $scope.data = [];
                },
                function(error) {
                    console.log(error);
                });
        }]
    });