angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('tabsController.news', {
    url: '/news',
    views: {
      'tab1': {
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl'
      }
    }
  })

  .state('tabsController.finance', {
    url: '/finance',
    views: {
      'tab2': {
        templateUrl: 'templates/finance.html',
        controller: 'financeCtrl'
      }
    }
  })

  .state('tabsController.stock', {
    url: '/stock',
    views: {
      'tab3': {
        templateUrl: 'templates/stock.html',
        controller: 'stockCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.me', {
    url: '/me',
    views: {
      'tab4': {
        templateUrl: 'templates/me.html',
        controller: 'meCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('findPwd', {
    url: '/findpassword',
    templateUrl: 'templates/findPwd.html',
    controller: 'findPwdCtrl'
  })

  .state('newsDetail', {
    url: '/detail',
    params: { newsObject: null },
    templateUrl: 'templates/newsDetail.html',
    controller: 'newsDetailCtrl',
    cache: false
  })

  .state('comments', {
    url: '/comments',
    templateUrl: 'templates/comments.html',
    controller: 'commentsCtrl'
  })

  .state('information', {
    url: '/selfinfo',
    templateUrl: 'templates/information.html',
    controller: 'informationCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

$urlRouterProvider.otherwise('/tabs/news')

});