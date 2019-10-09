'use strict';

angular.module('auth.login')
    .component('chat', {
        templateUrl: 'chat/chat.template.html',
        controller: ['$scope', '$location', '$cookies', 'ChatService', function ChatController($scope, $location, $cookies, chatService) {
            var session = JSON.parse(localStorage.user);
            $scope.data = null;


            chatService.getMessages()
                .then(function (response) {
                    $scope.data = response.data.data.slice().reverse();
                },
                    function (error) {
                        console.log(error);
                        $cookies.remove('jwt');
                        localStorage.removeItem('user')
                        $location.url('/login');
                    });
        }]
    });