(function() {
    'use strict';

    angular
        .module('app')
        .controller('meCtrl', meCtrl);

        meCtrl.$inject = ['$scope', '$stateParams', '$state', '$ionicViewSwitcher'];

    /* @ngInject */
    function meCtrl($scope, $stateParams, $state, $ionicViewSwitcher) {
        $scope.myCommentsAction = function() { 
            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('comments');
        }
    
        $scope.informationAction = function() { 
            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('information');
        }
    
        $scope.settingsAction = function() { 
            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('settings');
        }
    }
})();
   