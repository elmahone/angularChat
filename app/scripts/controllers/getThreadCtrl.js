'use strict';

angular.module('chatApp')
    .controller('GetThreadCtrl', function ($scope, AjaxFactory) {
        $scope.getThread = function () {
            // data lomakkeesta
            var data = $scope.id;
            
            var request = AjaxFactory.getMessage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.thread = response.data;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });