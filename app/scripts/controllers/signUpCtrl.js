'use strict';

angular.module('chatApp')
    .controller('SignUpCtrl', function ($scope, AjaxFactory,ChatService) {
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