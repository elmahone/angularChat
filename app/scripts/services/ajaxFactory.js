'use strict';

angular
    .module('chatApp')
    .factory('AjaxFactory', function ($http) {
        var urlBase = 'http://users.metropolia.fi/~ilkkamtk/chatApi';
        var ajaxFunctions = {};

        //    OK
        ajaxFunctions.login = function (args) {
            return $http.post(urlBase + '/login', args);
        };
        //    OK
        ajaxFunctions.signUp = function (args) {
            return $http.post(urlBase + '/users', args);
        };
        //    OK
        ajaxFunctions.sendMessage = function (args) {
            return $http.post(urlBase + '/messages', args);
        };
        //    OK
        ajaxFunctions.getAllMessages = function () {
            return $http.get(urlBase + '/messages');
        };
        //    OK
        ajaxFunctions.getMessage = function (args) {
            return $http.get(urlBase + '/messages/' + args);
        };
        //    OK
        ajaxFunctions.modifyMessage = function (args) {
            return $http.put(urlBase + '/messages', args);
        };
        //    OK
        ajaxFunctions.getThreads = function () {
            return $http.get(urlBase + '/threads');
        };
        //    OK
        ajaxFunctions.getParents = function () {
            return $http.get(urlBase + '/parents');
        };
        //    OK
        ajaxFunctions.getThread = function (args) {
            return $http.get(urlBase + '/threads/' + args);
        };
        //    OK
        ajaxFunctions.reply = function (args) {
            return $http.post(urlBase + '/threads', args);
        };
        //    OK
        ajaxFunctions.getAllUsers = function () {
            return $http.get(urlBase + '/users');
        };
        //    OK
        ajaxFunctions.getUser = function (args) {
            return $http.get(urlBase + '/users/' + args);
        };
        //    OK
        ajaxFunctions.deleteUser = function (args) {
            return $http.delete(urlBase + '/users/' + args);
        };
        //    OK
        ajaxFunctions.deleteMessage = function (args) {
            return $http.delete(urlBase + '/messages/' + args);
        };

        ajaxFunctions.saveImage = function (args, options) {
            return $http.post(urlBase + '/images', args, options);
        };

        //        ajaxFunctions.saveImage = function (args) {
        //            return $http.post(urlBase + '/images', args, {
        //                transformRequest: angular.identity
        //            });
        //        };


        return ajaxFunctions;
    });