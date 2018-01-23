(function() {
    'use strict';

    angular
        .module('app')
        .controller('settingsCtrl', settingsCtrl);

        settingsCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher'];

    /* @ngInject */
    function settingsCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   