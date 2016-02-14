'use strict';

angular.module('chatApp')
    .controller('SaveImageCtrl', function ($scope, AjaxFactory) {

        $scope.sendImage = function () {
            var data = new FormData(document.getElementById("image"));
            
            var request = AjaxFactory.saveImage(data);

            request.then(function (response) {
                console.log(response.data);
            }, function (error) {
                console.log(error.data);
            });
        };
    });
