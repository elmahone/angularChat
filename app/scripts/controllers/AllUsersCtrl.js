'use strict';

angular.module('chatApp')
    .controller('AllUsersCtrl', function ($scope, AjaxFactory) {
        $scope.getAllUsers = function () {
           
            // kutsu login-funktiota AjaxFactorystä
            var request = AjaxFactory.getAllUsers();
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                $scope.users = response.data;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });