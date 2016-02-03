'use strict';

angular
    .module('chatApp')
    .directive('threads', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/threads.html'
        };
    });
    