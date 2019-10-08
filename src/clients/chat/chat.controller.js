'use strict';

angular.module('auth.login')
    .component('chat', {
        templateUrl: 'chat/chat.template.html',
        controller: ['$scope', 'ChatService', function ChatController($scope, chatService) {
            $scope.data = [];

            socket.on('user:join', function(data) {
                console.log(data);
                data.join = true;
                $scope.data.push(data);
                $scope.$apply();
            })

            chatService.getMessages()
                .then(function(response) {
                    $scope.data = response.data.data.slice().reverse();
                },
                function(error) {
                    console.log(error);
                });
        }]
    });