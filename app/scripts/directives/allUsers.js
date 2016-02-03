'use strict';

angular
    .module('chatApp')
    .directive('allUsers', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/allUsers.html'
        };
    });
    