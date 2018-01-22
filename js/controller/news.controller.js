(function() {
    'use strict';

    angular
        .module('app')
        .controller('newsCtrl', newsCtrl);

        newsCtrl.$inject = ['$scope', '$stateParams', 'requestWebservice', '$state'];

    /* @ngInject */
    function newsCtrl($scope, $stateParams, requestWebservice, $state) {
        $scope.canLoadMoreData = false;
        $scope.totolPage = 0;
        $scope.curPage = 0;
        $scope.newsData = {};
        
        activate();

        function activate() {
            $scope.$on("$ionicView.loaded", beforeEnter);
        }

        function beforeEnter() {
            $scope.doRefresh();
        }

        $scope.doRefresh = function() {    
            $scope.curPage = 1; 
            requestWebservice.getNews($scope.curPage)
            .then(function(data) {
                if (data.status == 'ok') {
                    $scope.totolPage = data.pages;
                    $scope.newsData = [];
                    $scope.newsData = $scope.newsData.concat(data.posts);
                }
                $scope.$broadcast('scroll.refreshComplete');
            })
        }

        $scope.loadMore = function() { 
            if ($scope.curPage +1 == $scope.totolPage) {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }
            $scope.curPage = $scope.curPage + 1;
            requestWebservice.getNews($scope.curPage)
            .then(function(data) {
                if (data.status == 'ok') {
                    $scope.totolPage = data.pages;
                    $scope.newsData = $scope.newsData.concat(data.posts);
                }
                $scope.$broadcast('scroll.infiniteScrollComplete');
            })
        }

        $scope.hasMoreData = function() {
            return $scope.curPage < $scope.totolPage && $scope.newsData.length != 0;
        }

        $scope.browserItem = function(item) {
            $state.go('newsDetail', { newsObject: item });
        }
    }
})();
   