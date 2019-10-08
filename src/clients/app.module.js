'use strict';

// Define the `chattyApp` module
angular
    .module('chattyApp', [
        'ngRoute',
        'ngCookies',
        'auth',
        'chat'
    ]);