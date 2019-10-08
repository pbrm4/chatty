'use strict';

angular.module('auth.signup')
    .component('signUp', {
        templateUrl: 'auth/signup/signup.template.html',
        controller: ['$scope', 'SignupService', function SignupController($scope, signupService) {
            this.name = null;
            this.email = null;
            this.password = null;

            $scope.signupSuccess = false;

            this.signupUser = function() {
                const user = {
                    name : this.name,
                    email : this.email,
                    password : this.password
                }

                signupService.signup(user)
                    .then(function(response) {
                        $scope.signupSuccess = true;
                    }, function(error) {
                        console.log(error);
                    });
            };
        }]
    });