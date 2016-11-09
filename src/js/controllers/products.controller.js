angular.module('shopularApp').controller('ProductsController', function($state, inventory, $q, localStorageService) {

    var self = this;

    this.orderByField = 'totalPrice';
    this.reverseSort = false;

    this.allProducts = '';


    $q.when(inventory.get()).then(function(response) {
      // self.setProducts(response.data);
      self.allProducts = self.getProducts();
      self.updatePrice(self.allProducts);
    });

    this.updatePrice = function(products) {
        for (var count = 0; count < products.length; count++) {
            var newPrice = ((products[count].price - products[count].discount) * 1.0575);
            products[count].totalPrice = newPrice;
        }
    };

    this.onSale = function(discount) {
        if (discount > 0) {
            return true;
        }
    };

    this.addItems = function() {
        self.allProducts.push(this.newItem);
        this.setProducts(self.allProducts);
        self.allProducts = this.getProducts();
        $state.go('shopularHome.view');
    };


    this.newItem = {
        "id": '',
        "name": '',
        "price": '',
        "quantity": '',
        "color": '',
        "discount": ''
    };

    this.setProducts = function(allProducts) {
      localStorageService.set('localStorageProducts', allProducts);
    };

    this.getProducts = function() {
      return localStorageService.get('localStorageProducts') || [];
    };
});
