'use strict';

angular
    .module('chatApp')
    .directive('parents', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/parents.html'
        };
    });
    