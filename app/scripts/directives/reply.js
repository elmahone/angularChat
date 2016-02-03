'use strict';

angular
    .module('chatApp')
    .directive('reply', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/reply.html'
        };
    });