/**
 * Created by zousheng on 16/5/19.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('hudService', hudService);

        hudService.$inject = ['$ionicPopup','$q','$ionicLoading','$timeout'];

    /* @ngInject */
    function hudService($ionicPopup,$q,$ionicLoading,$timeout) {
        var hintDuration=1500;
        var service = {
            showHint: showHint,
            showToast:showToast,
            showLoading:showLoading,
            hideLoading:hideLoading,
            showCommentHint:showCommentHint
        };
        return service;

        ////////////////

        function showHint(e,duration) {
            if(!e) return;
            var message=(e["code"]!=="000000" && e["message"]) || e["displayedMessage"] || JSON.stringify(e);
            var d = $q.defer();
            $ionicLoading.hide();
            $ionicLoading.show({
                template: message,
                duration: duration?duration:hintDuration,
                noBackdrop:true,
            });
            $timeout(function () {
                d.resolve();
            }, hintDuration);
            return d.promise;
        }

        function showCommentHint(e,duration) {
            if(!e) return;
            var message="发布失败";
            var d = $q.defer();
            $ionicLoading.hide();
            $ionicLoading.show({
                template: message,
                duration: duration?duration:hintDuration,
                noBackdrop:true,
            });
            $timeout(function () {
                d.resolve();
            }, hintDuration);
            return d.promise;
        }

        function showToast(e,duration) {
            if(!e) return;
            var d = $q.defer();
            $ionicLoading.hide();
            $ionicLoading.show({
                template: e,
                duration: duration?duration:hintDuration,
                noBackdrop:true,
            });
            $timeout(function () {
                d.resolve();
            }, hintDuration);
            return d.promise;
        }

        function showLoading(text) {
            if(!text) {
                text = "加载中...";
            }
            var tipText = '<p class="item-myicon"><ion-spinner icon="circles" class="spinner-balanced"></ion-spinner><span>'+text+'</span></p>';
            $ionicLoading.show({
                noBackdrop: true,
                template: tipText
                });
        }

        function hideLoading() {
            $ionicLoading.hide();
        }
    }

})();

