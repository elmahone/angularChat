'use strict';

angular
    .module('chatApp')
    .service('ChatService', function () {
        var chatData = {
            user: {},
            messages: {}
        };
        chatData.setUser = function (data) {
            this.user = data;
            console.log(this.user);
        };
        chatData.setMessage = function (data) {
            this.message = data;
            console.log(this.message);
        };
        return chatData;

    });