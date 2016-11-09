angular.module('shopularApp').service('inventory', getInventory);

function getInventory($http) {
  function fetchProducts() {
    return $http({
      method: 'GET',
      url: '../data/products.json'
    });
  }


  return {
    get: fetchProducts,
  };
}
