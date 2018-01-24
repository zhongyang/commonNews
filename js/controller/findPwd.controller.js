(function() {
    'use strict';

    angular
        .module('app')
        .controller('findPwdCtrl', findPwdCtrl);

        findPwdCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicViewSwitcher'];

    /* @ngInject */
    function findPwdCtrl($scope, $stateParams, $ionicHistory, $state, $ionicViewSwitcher) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   