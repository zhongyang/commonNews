(function() {
    'use strict';
angular.module("app.connector", [])
    .factory("connector", function() {
        // 外网环境
        var baseUrl = 'https://www.givememoney.top';
        var baseRoute = '';

        return {
            getBaseUrl: function() {
                return baseUrl;
            },
            getRestBaseUrl: function() {
                return baseUrl + "/";
            }
        };
    })


.factory('httpRequest', ['$http', '$q', '$log', "connector",
    function($http, $q, $log, connector) {
        return {
            Request: function request(requestType, api, requestData, header) {
                // 获取是否有网络连接
                var d = $q.defer();
                var url = connector.getRestBaseUrl() + api;
                console.log("rest request url=========================>>>" + url);
                console.log("rest request head params=========================>>>");
                console.log(header)
                console.log("rest request body params=========================>>>:");
                console.log(requestData)
                $http({
                    method: requestType,
                    headers: header,
                    url: url,
                    data: requestData
                }).success(function(data, status, headers, config) {
                    console.log("rest response success data=========================>>>:");
                    console.log(data);
                    d.resolve(data);
                }).error(function(data, status, headers, config) {
                    console.log("rest response error data<<<==============================:" + JSON.stringify(data));
                    $log.error("Error: ", headers);
                    d.reject({ displayedMessage: "与服务器连接失败！" });
                });
                return d.promise;
            }

        };
    }
]);
})();