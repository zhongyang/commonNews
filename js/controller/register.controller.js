(function() {
    'use strict';

    angular
        .module('app')
        .controller('registerCtrl', registerCtrl);

        registerCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher'];

    /* @ngInject */
    function registerCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   