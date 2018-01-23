(function() {
    'use strict';

    angular
        .module('app')
        .controller('commentsCtrl', commentsCtrl);

        commentsCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher'];

    /* @ngInject */
    function commentsCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   