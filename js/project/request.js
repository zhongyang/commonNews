(function() {
    'use strict';

    angular
        .module('app')
        .factory('requestWebservice', requestWebservice);

    requestWebservice.$inject = ['httpRequest', '$q'];

    /* @ngInject */
    function requestWebservice(httpRequest, $q) {
        var service = {
            getNews: getNews,
            login: login, 
            register: register,
            get_nonce: get_nonce,
            findpassword: findpassword
        };
        return service;

        ////////////////

        function get_nonce(controller, method) {
            var headers = new Headers();
            headers.append('content-type','application/json');
            return httpRequest.Request("Get", "?json=get_nonce&controller=" + controller + "&method=" + method, {}, headers);
        }

        function getNews(pageID) {
            var headers = new Headers();
            headers.append('content-type','application/json');
            return httpRequest.Request("Get", "?json=get_posts&page_count=10&page=" + pageID, {}, headers)
        };

        function login(username, password) {
            var headers = new Headers();
            headers.append('content-type','application/json');
            return httpRequest.Request("Get", "?json=user/generate_auth_cookie&username=" + username + "&password=" + password, {}, headers)
        }

        function register(username, email, password, nonce) {
            var headers = new Headers();
            headers.append('content-type','application/json');
            return httpRequest.Request("Get", "?json=user/register&username=" + username + "&user_pass=" + password + "&display_name=" + username + "&email=" + email + "&nonce=" + nonce, {}, headers)                   
        }

        function findpassword(username) {
            var headers = new Headers();
            headers.append('content-type','application/json');
            return httpRequest.Request("Get", "?json=user/retrieve_password&user_login=" + username, {}, headers)                      
        }
    }
})();