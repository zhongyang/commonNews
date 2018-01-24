(function() {
    'use strict';

    angular
        .module('app')
        .factory('requestWebservice', requestWebservice);

    requestWebservice.$inject = ['httpRequest', '$q'];

    /* @ngInject */
    function requestWebservice(httpRequest, $q) {
        var service = {
            getNews: getNews
        };
        return service;

        ////////////////

        function getNews(pageID) {
            var headers = new Headers();
            headers.append('content-type','application/json');
            return httpRequest.Request("Get", "?json=get_posts&page_count=10&page=" + pageID, {}, headers)
        };
    }
})();