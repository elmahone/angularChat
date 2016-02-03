'use strict';

angular
    .module('chatApp')
    .directive('thread', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/getThread.html'
        };
    });
    