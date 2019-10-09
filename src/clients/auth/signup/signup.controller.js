'use strict';

angular.module('auth.signup')
    .component('signUp', {
        templateUrl: 'auth/signup/signup.template.html',
        controller: ['$scope', 'SignupService', function SignupController($scope, signupService) {
            this.name = null;
            this.email = null;
            this.password = null;

            $scope.loginLoad = false;
            $scope.signupSuccess = false;

            this.togglePass = function () {
                var x = document.getElementById("password");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            }

            this.signupUser = function () {
                $scope.loginLoad = true;
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                signupService.signup(user)
                    .then(function (response) {
                        $scope.signupSuccess = true;
                    }, function (error) {
                        $scope.loginLoad = false;
                        console.log(error);
                    });
            };
        }]
    });