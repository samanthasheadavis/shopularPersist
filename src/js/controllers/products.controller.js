angular.module('shopularApp').controller('ProductsController', function(inventory, $q) {
var self = this;
  this.allProducts = {};

  $q.when(inventory.get()).then(function(response) {
    self.allProducts = response.data;

    self.updatePrice(self.allProducts);
  });

// $scope.orderByField = 'totalPrice';
// $scope.reverseSort = false;


this.updatePrice = function(products) {
    for (var count = 0; count<products.length; count++) {
      var newPrice = ((products[count].price - products[count].discount) * 1.0575);
      products[count].totalPrice = newPrice;
    }
};


this.onSale = function(discount) {
    if (discount > 0) {
        return true;
    }
};

});
