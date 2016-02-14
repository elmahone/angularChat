'use strict';

angular
    .module('chatApp')
    .directive('saveImage', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/saveImage.html'
        };
    });