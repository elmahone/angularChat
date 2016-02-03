'use strict';

angular
    .module('chatApp')
    .directive('getMessage', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/getMessage.html'
        };
    });
    