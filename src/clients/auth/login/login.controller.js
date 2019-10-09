'use strict';

angular.module('auth.login')
    .component('logIn', {
        templateUrl: 'auth/login/login.template.html',
        controller: ['$scope', '$location', 'LoginService', function SignupController($scope, $location, loginService) {
            $scope.loginLoad = false;

            this.email = null;
            this.password = null;

            $scope.loginSuccess = false;

            this.loginUser = function () {
                $scope.loginLoad = true;
                const user = {
                    email: this.email,
                    password: this.password
                }

                loginService.login(user)
                    .then(function (response) {
                        $scope.loginSuccess = true;
                        localStorage.user = JSON.stringify(response.data.data);
                        $location.url('/chat');
                    }, function (error) {
                        $scope.loginLoad = false;
                        console.log(error);
                    });
            };
        }]
    });