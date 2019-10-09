'use strict';

angular.module('chat.input')
    .component('chatInput', {
        templateUrl: 'chat/input/input.template.html',
        controller: ['$scope', function InputController($scope) {
            $scope.text = null;

            var session = JSON.parse(localStorage.user);

            this.send = function() {
                socket.emit('chat', {
                    message: $scope.text,
                    Name: session.Name,
                    email_id: session.email_id,
                    user_id: session.id,
                    time_stamp: Date.now()
                });
                $scope.text = null;
            }
        }]
    });