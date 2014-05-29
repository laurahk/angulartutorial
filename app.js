// pieces of angular code written in encapsulated modules
// creating a new model with ('app name', [dependancies])
(function() {
  var app = angular.module('store', []);

  // make a new controller - make sure to capitalise and use the word Controllers
  // the function is the code run when the StoreController is called
  app.controller('StoreController', function() {
    // properties of the controller
    this.products = gems;
  });

  // a javascript object of something to sell in store
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Has 12 faces',
      canPurchase: true,
      soldOut: true,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Has 5 faces',
      canPurchase: true,
      soldOut: false,
    },
  ]

})();

/* a self-invoking anonymous function
  a function as an expression cannot start with the keyword 'function' hence the first brackets (otherwise
  it think's it's a function declation
*/

