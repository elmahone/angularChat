'use strict';

angular
    .module('chatApp')
    .directive('deleteMessage', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/deleteMessage.html',
            controller: 'DelMessageCtrl'
        };
    });
    