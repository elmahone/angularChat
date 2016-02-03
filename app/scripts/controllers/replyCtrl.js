'use strict';

angular.module('chatApp')
    .controller('replyCtrl', function ($scope, AjaxFactory, ChatService) {
        $scope.replyMessage = function () {
            // data lomakkeesta
            var data = {
                parent: ChatService.message.mID,
                message: $scope.reply,
                uID: ChatService.user.uID
            };
            // kutsu signUp-funktiota AjaxFactorystä
            var request = AjaxFactory.reply(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });