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
            console.log(data);
            var request = AjaxFactory.reply(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                angular.element('#replyModal').modal('hide');
                ChatService.loadThreads();
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });