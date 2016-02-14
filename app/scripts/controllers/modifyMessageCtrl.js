'use strict';

angular.module('chatApp')
    .controller('ModifyMessageCtrl', function ($scope, AjaxFactory, ChatService) {
        $scope.modifyMessage = function () {
            // data lomakkeesta
            var data = {
                message: $scope.message,
                mID: ChatService.message.mID
            };
            
            var request = AjaxFactory.modifyMessage(data);
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