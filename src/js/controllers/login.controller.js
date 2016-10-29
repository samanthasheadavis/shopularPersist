angular.module('shopularApp').controller("LoginController", function($state, localStorageService) {

  this.setInfo = function(userInfo) {
    localStorageService.set('localStorageUserInfo', userInfo);
  };

  this.getInfo = function() {
    return localStorageService.get('localStorageUserInfo') || [];
  };

this.userInfo = [];

this.inputInfo = {
  firstName: '',
  lastName: ''
};

this.submit = function() {
  this.userInfo.push(this.inputInfo);
  console.log(this.userInfo.firstName);
};

});
