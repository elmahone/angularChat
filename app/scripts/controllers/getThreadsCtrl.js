'use strict';

angular.module('chatApp')
    .controller('AllThreadsCtrl', function ($scope, $interval, AjaxFactory, ChatService) {
        $scope.loadThreads = function () {
            var request = AjaxFactory.getThreads();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.threads = response.data;
                //console.log($scope.threads.uID);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
        $scope.loadThreads();
        $interval($scope.loadThreads, 5000);

        ChatService.setFunc('loadThreads', $scope.loadThreads);
        console.log(ChatService.loadThreads);
    });