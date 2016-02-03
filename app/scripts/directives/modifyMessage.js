'use strict';

angular
    .module('chatApp')
    .directive('modifyMessage', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/modifyMessage.html'
        };
    });
    