angular.module('shopularApp', ['ui.router', 'LocalStorageModule'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('shopularHome', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>',
  }).state('shopularHome.login', {
    url: 'login',
    templateUrl: 'src/templates/login.html'
    // controller: "LoginController as loginCtrl"
  }).state('shopularHome.view', {
    url: 'view',
    templateUrl: 'src/templates/view.html'
    // controller: "ProductsController as products"
  }).state('shopularHome.add', {
    url: 'add',
    templateUrl: 'src/templates/add.html'
  });
});
