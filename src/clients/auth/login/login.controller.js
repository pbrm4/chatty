'use strict';

angular.module('auth.login')
    .component('logIn', {
        templateUrl: 'auth/login/login.template.html',
        controller: ['$scope', 'LoginService', function SignupController($scope, loginService) {
            this.email = null;
            this.password = null;

            $scope.loginSuccess = false;

            this.loginUser = function() {
                const user = {
                    email : this.email,
                    password : this.password
                }

                loginService.login(user)
                    .then(function(response) {
                        $scope.loginSuccess = true;
                        console.log($scope.loginSuccess);
                    }, function(error) {
                        console.log(error);
                    });
            };
        }]
    });