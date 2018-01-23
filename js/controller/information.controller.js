(function() {
    'use strict';

    angular
        .module('app')
        .controller('informationCtrl', informationCtrl);

        informationCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher'];

    /* @ngInject */
    function informationCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   