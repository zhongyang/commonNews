(function() {
    'use strict';

    angular
        .module('app')
        .controller('informationCtrl', informationCtrl);

        informationCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher', 'userService'];

    /* @ngInject */
    function informationCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher, userService) {
        $scope.userInformation = userService.getUser();

        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }
    }
})();
   