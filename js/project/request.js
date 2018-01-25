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
            login: login
        };
        return service;

        ////////////////

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
    }
})();