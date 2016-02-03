'use strict';

angular.module('chatApp')
    .controller('AllParentsCtrl', function ($scope, AjaxFactory) {
        $scope.getParents = function () {
           
            var request = AjaxFactory.getParents();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.parents = response.data;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });