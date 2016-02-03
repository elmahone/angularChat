'use strict';

angular
    .module('chatApp')
    .directive('getUser', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/getUser.html'
        };
    });
    