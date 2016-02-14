'use strict';

angular
    .module('chatApp')
    .directive('threads', function () {
        return {
            restrict: 'E',
            scope: {
                collection: '='
            }, 
            templateUrl: 'views/threads.html'
        };
    });
    