'use strict';

angular.module('chatApp')
    .controller('GetMessageCtrl', function ($scope, ChatService) {
        $scope.prepare = function (msg) {
            ChatService.message = msg;
        };
    });