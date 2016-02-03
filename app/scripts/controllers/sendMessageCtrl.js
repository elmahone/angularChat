'use strict';

angular.module('chatApp')
    .controller('SendMessageCtrl', function ($scope, AjaxFactory, ChatService) {
        $scope.sendMessage = function () {
            // data lomakkeesta
            var data = {
                uID:ChatService.user.uID,
                message: $scope.message
            };
            // kutsu signUp-funktiota AjaxFactorystä
            var request = AjaxFactory.sendMessage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });