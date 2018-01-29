(function() {
    'use strict';

    angular
        .module('app')
        .controller('aboutCtrl', aboutCtrl);

        aboutCtrl.$inject = ['$scope', '$stateParams', '$ionicViewSwitcher', '$ionicHistory'];

    /* @ngInject */
    function aboutCtrl($scope, $stateParams, $ionicViewSwitcher, $ionicHistory) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();