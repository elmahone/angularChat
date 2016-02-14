'use strict';

angular.module('chatApp')
    .controller('DelMessageCtrl', function ($scope, AjaxFactory,ChatService) {    
    $scope.deleteMessage = function () {
            // data lomakkeesta
            var data = $scope.thread.mID;
            
            var request = AjaxFactory.deleteMessage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                ChatService.loadThreads();
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });