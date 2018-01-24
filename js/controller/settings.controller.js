(function() {
    'use strict';

    angular
        .module('app')
        .controller('settingsCtrl', settingsCtrl);

        settingsCtrl.$inject = ['$scope', '$stateParams', '$ionicHistory', '$ionicViewSwitcher', '$ionicActionSheet', 'hudService', '$timeout'];

    /* @ngInject */
    function settingsCtrl($scope, $stateParams, $ionicHistory, $ionicViewSwitcher, $ionicActionSheet, hudService, $timeout) {
        $scope.goBack = function() {
            $ionicViewSwitcher.nextDirection('back'); 
            $ionicHistory.goBack();
        }

        $scope.logoutAction = function() {
            var hideSheet = $ionicActionSheet.show({
                buttons: {},
                destructiveText: '确定',
                titleText: "确定退出登录的账号？",
                cancelText: '取消',
                cancel: function() {
                    
                },
                destructiveButtonClicked: function() {

                },
                buttonClicked: function(index) {
                  return true;
                }
              });
        }

        $scope.clearAction = function() {
            hudService.showLoading("清理中...");
            $timeout(function () {
                hudService.hideLoading();
                hudService.showToast("清理完成");
            }, 3000);
        }

        $scope.feedbackAction = function() {
            
        }
    }
})();
   