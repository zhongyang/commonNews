(function() {
    'use strict';

    angular
        .module('app')
        .controller('newsDetailCtrl', newsDetailCtrl);

        newsDetailCtrl.$inject = ['$scope', '$stateParams', '$state', '$ionicHistory', '$ionicViewSwitcher'];

    /* @ngInject */
    function newsDetailCtrl($scope, $stateParams, $state, $ionicHistory, $ionicViewSwitcher) {
        $scope.newsObject = $stateParams.newsObject;

        activate();
        
        function activate() {
            $scope.$on("$ionicView.loaded", beforeEnter);
        }

        function beforeEnter() {
        }

        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   