'use strict';

angular.module('chatApp')
    .controller('AllThreadsCtrl', function ($scope, AjaxFactory) {
        $scope.getThreads = function () {
           
            var request = AjaxFactory.getThreads();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.threads = response.data;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });