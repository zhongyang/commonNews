(function () {
    'use strict';

    angular
        .module('app')
        .factory('userService', userService);

        userService.$inject = ['localStorageService'];

    /* @ngInject */
    function userService(localStorageService) {
        var key_user = "user_information";

        var service = {
            isLogined: isLogined,
            getUser:getUser,
            userLogin:userLogin,
            userLogout:userLogout
        };
        return service;

        ////////////////

        function isLogined() {
            if(!localStorageService.isSupported) {
                return false;
            }

            if(!localStorageService.get(key_user)) {
                return false;
            }
            return true;
        }

        function getUser() {
            if(!localStorageService.isSupported) {
                return null;
            }

            var user_json = localStorageService.get(key_user);
            if(!user_json) {
                return null;
            }
            return JSON.parse(user_json);
        }

        function userLogin(user) {
            if(!localStorageService.isSupported) {
                return false;
            }

            var user_json = JSON.stringify(user);
            return localStorageService.set(key_user, user_json);
        }

        function userLogout() {
            if(!localStorageService.isSupported) {
                return false;
            }
            return localStorageService.remove(key_user);
        }
    }

})();

