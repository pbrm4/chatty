'use strict';

angular.module('chat.input')
    .component('chatInput', {
        templateUrl: 'chat/input/input.template.html',
        controller: ['$scope', function InputController($scope) {
            $scope.text = null;

            var session = JSON.parse(localStorage.user);

            this.send = function() {
                $scope.text = null;
            }
        }]
    });