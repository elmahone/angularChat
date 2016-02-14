'use strict';

angular.module('chatApp')
    .controller('LoginCtrl', function ($scope, AjaxFactory, ChatService) {

        $scope.one = false;
        $scope.two = true;

        var data = null;

        $scope.logToChat = function () {
            if (data === null) {
                data = {
                    name: $scope.user
                };
            }
            // data lomakkeesta

            console.log(data);
            // kutsu login-funktiota AjaxFactorystä
            var request = AjaxFactory.login(data);
            request.then(function (response) {
                // tee vastauksella jotain



                ChatService.setUser(response.data);
                window.localStorage.setItem("userName", response.data.name);
                console.log(window.localStorage.getItem("userName"));
                $scope.one = true;
                $scope.two = false;
                $scope.name = ChatService.user.name;
                $scope.profileImage = ChatService.user.profileImage;
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });

        };

        if (window.localStorage.getItem("userName") !== null) {
            data = {
                name: window.localStorage.getItem('userName')
            };
            $scope.logToChat();
        }


        $scope.logOut = function () {
            window.localStorage.removeItem("userName");
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
                $scope.name = ChatService.user.name;
                $scope.profileImage = ChatService.user.profileImage;

            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });