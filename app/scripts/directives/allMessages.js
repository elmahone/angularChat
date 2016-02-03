'use strict';

angular
    .module('chatApp')
    .directive('allMessages', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/allMessages.html'
        };
    });
    