'use strict';

angular
    .module('chatApp')
    .service('ChatService', function () {
        var chatData = {
            user: {},
            message: {}
        };
        chatData.setUser = function (data) {
            this.user = data;
            console.log(this.user);
        };

        chatData.setFunc = function (nimi, funk) {
            chatData[nimi] = funk;
        };

        return chatData;

    });