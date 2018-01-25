(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);

        loginCtrl.$inject = ['$scope', '$stateParams', '$ionicViewSwitcher', '$ionicHistory', '$state', 'hudService', 'requestWebservice', 'userService'];

    /* @ngInject */
    function loginCtrl($scope, $stateParams, $ionicViewSwitcher, $ionicHistory, $state, hudService, requestWebservice, userService) {
        var vm=this;
        vm.username = "zhongyang";
        vm.password = "helloworld123";

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

        $scope.login = function() {
            if(vm.username.length == 0 || vm.password.length == 0) {
                hudService.showToast("请输入用户名和密码");
                return;
            } 

            hudService.showLoading("正在登陆...");
            requestWebservice.login(vm.username, vm.password)
            .then(function(data) {
                hudService.hideLoading();
                if(data.status == "ok") {
                    hudService.showToast("登录成功");
                    userService.userLogin(data);
                    $scope.goBack();
                } else {
                    hudService.showToast("登录失败.用户名或者密码错误");
                }
            })
        }
    }
})();
   