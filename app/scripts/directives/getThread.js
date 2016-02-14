'use strict';

angular
    .module('chatApp')
    .directive('thread', function ($compile, ChatService) {
        return {
            restrict: 'E',
            scope: {
                thread: '='
            },
            templateUrl: 'views/getThread.html',
            link: function (scope, element) {
                scope.userID = ChatService.user.uID;
                var collectionSt = '<threads collection="thread.children"></threads>';
                if (angular.isArray(scope.thread.children)) {
                    $compile(collectionSt)(scope, function (cloned) {
                        element.find('.media-body').append(cloned);
                    });
                }
            }
        };
    });