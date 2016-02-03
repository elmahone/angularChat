'use strict';

angular.module('chatApp')
    .controller('DelMessageCtrl', function ($scope, AjaxFactory) {
        $scope.deleteMessage = function () {
            // data lomakkeesta
            var data = $scope.id;
            
            var request = AjaxFactory.deleteMessage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });