(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
        .state('active', {
          url: '/',
          controller: 'ActiveCtrl as active',
          templateUrl: '/templates/active.html'
        });

        // $stateProvider
        // .state('completed', {
        //   url: '/completed',
        //   controller: 'CompletedCtrl as completed',
        //   templateUrl: '/templates/completed.html'
        // });

        $stateProvider
        .state('expired', {
          url: '/expired',
          controller: 'ExpiredCtrl as expired',
          templateUrl: '/templates/expired.html'
        });
    }

    angular
        .module('blocItOff', ['ui.router', 'firebase','ui.bootstrap'])
        .config(config);
})();
