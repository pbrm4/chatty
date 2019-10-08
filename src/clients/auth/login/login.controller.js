'use strict';

angular.module('auth.login')
    .component('logIn', {
        templateUrl: 'auth/login/login.template.html',
        controller: ['$scope', '$location', 'LoginService', function SignupController($scope, $location, loginService) {
            this.email = null;
            this.password = null;

            $scope.loginSuccess = false;

            this.loginUser = function () {
                const user = {
                    email: this.email,
                    password: this.password
                }

                loginService.login(user)
                    .then(function (response) {
                        $scope.loginSuccess = true;
                        sessionStorage.user = JSON.stringify(response.data.data);
                        $location.url('/chat');
                    }, function (error) {
                        console.log(error);
                    });
            };
        }]
    });