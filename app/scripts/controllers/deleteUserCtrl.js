'use strict';

angular.module('chatApp')
    .controller('DelUserCtrl', function ($scope, AjaxFactory,ChatService) {
        $scope.deleteUser = function () {
            // data lomakkeesta
            var data = ChatService.user.uID;
            
            var request = AjaxFactory.deleteUser(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });