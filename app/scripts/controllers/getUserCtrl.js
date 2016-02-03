'use strict';

angular.module('chatApp')
    .controller('GetUserCtrl', function ($scope, AjaxFactory) {
        $scope.getUser = function () {
            // data lomakkeesta
            var data = $scope.id;
            
            var request = AjaxFactory.getUser(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.user = response.data;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });