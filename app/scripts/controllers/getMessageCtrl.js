'use strict';

angular.module('chatApp')
    .controller('GetMessageCtrl', function ($scope, AjaxFactory) {
        $scope.getMessage = function () {
            // data lomakkeesta
            var data = $scope.id;
            
            var request = AjaxFactory.getMessage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.message = response.data;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });