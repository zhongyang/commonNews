(function() {
    'use strict';

    angular
        .module('app')
        .controller('meCtrl', meCtrl);

        meCtrl.$inject = ['$scope', '$stateParams', '$state', '$ionicViewSwitcher', 'userService', 'hudService'];

    /* @ngInject */
    function meCtrl($scope, $stateParams, $state, $ionicViewSwitcher, userService, hudService) {
        var vm = this;
        vm.username = "";

        activate();
        
        function activate() {
            $scope.$on("$ionicView.beforeEnter", willEnter);
        }

        function willEnter() {
            if(userService.isLogined()) {
                vm.username = userService.getUser().user.displayname;
            } else {
                vm.username = "未登录";
            }
        }

        function isLogin() {
            if(!userService.isLogined()) {
                $ionicViewSwitcher.nextDirection('forward'); 
                $state.go('login');
                return false;
            }
            return true;
        }

        $scope.myCommentsAction = function() { 
            if(!isLogin()) {
                return;
            }

            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('comments');
        }
    
        $scope.informationAction = function() { 
            if(!isLogin()) {
                return;
            }

            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('information');
        }
    
        $scope.settingsAction = function() { 
            if(!isLogin()) {
                return;
            }

            $ionicViewSwitcher.nextDirection('forward'); 
            $state.go('settings');
        }
    }
})();
   