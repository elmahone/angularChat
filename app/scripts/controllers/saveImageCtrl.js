'use strict';

angular.module('chatApp')
    .controller('SaveImageCtrl', function ($scope, AjaxFactory) {
        $scope.saveImage = function () {
            // data lomakkeesta
            var data = {
                uID:'80',
                file: $scope.file
            };
            // kutsu signUp-funktiota AjaxFactorystä
            var request = AjaxFactory.saveImage(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });
