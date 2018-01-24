(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);

        loginCtrl.$inject = ['$scope', '$stateParams', '$ionicViewSwitcher', '$ionicHistory', '$state'];

    /* @ngInject */
    function loginCtrl($scope, $stateParams, $ionicViewSwitcher, $ionicHistory, $state) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }

        $scope.register = function() {
            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('register');
        }

        $scope.forgetPassword = function() {
            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('findPwd');
        }
    }
})();
   