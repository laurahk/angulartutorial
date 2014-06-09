// pieces of angular code written in encapsulated modules
// creating a new model with ('app name', [dependancies])
(function() {
  var app = angular.module('store', []);

  // make a new controller - make sure to capitalise and use the word Controllers
  // the function is the code run when the StoreController is called
  app.controller('StoreController', function() {
    // properties of the controller
    this.products = animals;
  });

  app.controller('GalleryController', function() {
    this.currentImage = 0;

    this.setCurrentImage = function(cur) {
      this.currentImage = cur;
    };
  });

  app.controller('TabController', function() {
    this.currentTab = 1;

    this.setTab = function(tab) {
      this.currentTab = tab;
    };

    this.isActiveTab = function(tab) {
      console.log("hello " + this.currentTab == tab);
      return this.currentTab == tab;
    };
  });

  // a javascript object of something to sell in store
  var animals = [
    {
      name: 'Puppy',
      price: 10,
      description: 'Cuter than cats',
      canPurchase: true,
      soldOut: false,
      images: [
        "images/puppy1.jpg",
        "images/puppy2.jpg",
        "images/puppy3.jpeg",
      ]
    },
    {
      name: 'Kitten',
      price: 5.95,
      description: 'You don\'t have to walk them',
      canPurchase: true,
      soldOut: false,
      images: [
        "images/kitten1.jpg",
        "images/kitten2.jpg",
        "images/kitten3.jpg",
      ]
    },
  ]

})();

/* a self-invoking anonymous function
  a function as an expression cannot start with the keyword 'function' hence the first brackets (otherwise
  it think's it's a function declation
*/

