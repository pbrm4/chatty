'use strict';

angular.module('auth.login')
    .component('chat', {
        templateUrl: 'chat/chat.template.html',
        controller: ['$scope', '$location', '$cookies', 'ChatService', function ChatController($scope, $location, $cookies, chatService) {
            var session = JSON.parse(localStorage.user);
            $scope.data = null;

            socket.on('user:join', function (data) {
                data.join = true;
                $scope.data.push(data);
                $scope.$apply();
            });

            socket.on('user:logout', function (data) {
                data.logout = true;
                $scope.data.push(data);
                $scope.$apply();
            });

            socket.on('chat', function (data) {
                $scope.data.push(data);
                $scope.$apply();
            });

            chatService.getMessages()
                .then(function (response) {
                    $scope.data = response.data.data.slice().reverse();
                },
                    function (error) {
                        console.log(error);
                        $cookies.remove('jwt');
                        socket.emit('user:logout', { name: this.session.Name, email: this.session.email_id, user_id: this.session.id });
                        localStorage.removeItem('user')
                        $location.url('/login');
                    });
        }]
    });