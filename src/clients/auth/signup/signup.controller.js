'use strict';

angular.module('auth.signup')
    .component('signUp', {
        templateUrl: 'auth/signup/signup.template.html',
        controller: ['SignupService', function SignupController(singupService) {
            this.name = null;
            this.email = null;
            this.password = null;

            this.signupUser = function() {
                const user = {
                    name : this.name,
                    email : this.email,
                    password : this.password
                }

                singupService.signup(user)
                    .then(function(response) {
                        console.log(response);
                    }, function(error) {
                        console.log(error);
                    });
            };
        }]
    });