'use strict';

angular
    .module('chatApp')
    .directive('deleteUser', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/deleteUser.html',
            controller:'DelUserCtrl'
        };
    });
    