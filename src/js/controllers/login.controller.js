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
  this.setInfo(this.userInfo);
  this.userinfo = this.getInfo();
  console.log(this.getInfo()[0].firstName);
};

});
