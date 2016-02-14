'use strict';

angular.module('chatApp')
    .controller('AllMessagesCtrl', function ($scope, AjaxFactory, ChatService) {
        $scope.getAllMessages = function () {
           
            
            var request = AjaxFactory.getAllMessages();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.allMessages = response.data;
                ChatService.setMessage(response.data);
                console.log(ChatService.chatData.messages);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });