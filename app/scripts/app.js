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

        $stateProvider
        .state('expired', {
          url: '/old',
          controller: 'ExpiredCtrl as expired',
          templateUrl: '/templates/old.html'
        });
    }

    angular
        .module('blocItOff', ['ui.router', 'firebase','ui.bootstrap'])
        .config(config);
})();
