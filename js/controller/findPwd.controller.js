(function() {
    'use strict';

    angular
        .module('app')
        .controller('findPwdCtrl', findPwdCtrl);

        findPwdCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$state', '$ionicViewSwitcher', 'hudService', 'requestWebservice'];

    /* @ngInject */
    function findPwdCtrl($scope, $stateParams, $ionicHistory, $state, $ionicViewSwitcher, hudService, requestWebservice) {
        var vm = this;
        vm.username = "";

        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }

        $scope.findPassword = function() {
            if(vm.username.length == 0) {
                hudService.showToast("请输入用户名");
                return;
            } 

            hudService.showLoading("正在提交请求...");
            requestWebservice.findpassword(vm.username)
            .then(function(data) {
                hudService.hideLoading();
                if(data.status == "ok") {
                    hudService.showToast("邮件已发送，请登陆邮箱重置密码");

                    $ionicViewSwitcher.nextDirection('back'); 
                    $state.go("tabsController.me");
                } else {
                    hudService.showToast("邮件发送失败, 请输入正确的用户名");
                }
            })
        }
    }
})();
   