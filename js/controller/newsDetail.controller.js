(function() {
    'use strict';

    angular
        .module('app')
        .controller('newsDetailCtrl', newsDetailCtrl);

        newsDetailCtrl.$inject = ['$scope', '$stateParams', '$state', '$ionicHistory'];

    /* @ngInject */
    function newsDetailCtrl($scope, $stateParams, $state, $ionicHistory) {
        $scope.newsObject = $stateParams.newsObject;

        activate();
        
        function activate() {
            $scope.$on("$ionicView.loaded", beforeEnter);
        }

        function beforeEnter() {
        }

        $scope.goBack = function() {
            $ionicHistory.goBack();
        }
    }
})();
   