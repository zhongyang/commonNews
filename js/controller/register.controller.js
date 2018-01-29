(function() {
    'use strict';

    angular
        .module('app')
        .controller('registerCtrl', registerCtrl);

        registerCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher', 'hudService', 'requestWebservice', '$q', 'userService'];

    /* @ngInject */
    function registerCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher, hudService, requestWebservice, $q, userService) {
        var vm = this;
        vm.username = "";
        vm.email = "";
        vm.password = "";
        vm.nonce = "";

        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }

        $scope.register = function() {
            if(vm.username.length == 0) {
                hudService.showToast("请输入用户名");
                return;
            } 

            if(vm.email.length == 0) {
                hudService.showToast("请输入邮箱");
                return;
            } 

            if(vm.password.length == 0) {
                hudService.showToast("请输入密码");
                return;
            } 

            requestWebservice.get_nonce("user", "register")
            .then(function(data) {
                if(data.status == "ok") {
                    vm.nonce = data.nonce;
                }else {
                    hudService.showToast("注册失败");
                    return $q.reject("注册失败");
                }
            })
            .then(function() {
                hudService.showLoading("正在注册...");
                return requestWebservice.register(vm.username, vm.email, vm.password, vm.nonce)
                .then(function(data) {
                    if(data.status == "ok") {
                        hudService.showToast("注册成功");
                    }else {
                        hudService.showToast("注册失败");
                        return $q.reject("注册失败");
                    }
                })
            })
            .then(function() {
                hudService.showLoading("正在登录...");
                return requestWebservice.login(vm.username, vm.password)
                .then(function(data) {
                    hudService.hideLoading();
                    if(data.status == "ok") {
                        hudService.showToast("登录成功");
                        userService.userLogin(data);

                        $ionicViewSwitcher.nextDirection('back'); 
                        $state.go("tabsController.me");
                    } else {
                        return $q.reject("登录失败.用户名或者密码错误");
                    }
                })
            })
            .catch(function(error){
                hudService.hideLoading();
                hudService.showToast("注册失败,可能用户名或者邮箱已被占用");
            })
        }
    }
})();
   