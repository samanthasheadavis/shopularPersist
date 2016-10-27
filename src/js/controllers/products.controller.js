angular.module('shopularApp').controller('ProductsController', function(inventory, $q) {
  var self = this;
  this.allProducts = {};
// console.log(inventory);
  $q.when(inventory.get()).then(function(response) {
    self.allProducts = response.data;
    console.log(self.allProducts);
  });
});
