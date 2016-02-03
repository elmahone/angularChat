'use strict';

angular
    .module('chatApp')
    .directive('sendMessage', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/sendMessage.html'
        };
    });