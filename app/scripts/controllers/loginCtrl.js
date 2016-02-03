'use strict';

angular.module('chatApp')
    .controller('LoginCtrl', function ($scope, AjaxFactory, ChatService) {
        $scope.one = false;
        $scope.two = true;
        $scope.logToChat = function () {
            // data lomakkeesta
            var data = {
                name: $scope.user
                
            };
            // kutsu login-funktiota AjaxFactorystä
            var request = AjaxFactory.login(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);

                ChatService.setUser(response.data);
                $scope.one = true;
                $scope.two = false;
                $scope.name = ChatService.user.name;
                $scope.profileImage = ChatService.user.profileImage;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });

        };
        $scope.signUpToChat = function () {
            // data lomakkeesta
            var data = {
                name: $scope.username
            };
            // kutsu signUp-funktiota AjaxFactorystä
            var request = AjaxFactory.signUp(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
                ChatService.setUser(response.data);

                $scope.one = true;
                $scope.two = false;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });