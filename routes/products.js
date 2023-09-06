var express = require('express');
var router = express.Router();

var products = [
  { id: 1, name: 'Big Router', image: 'router1.png'},
  { id: 2, name: 'Small Router', image: 'router2.png'},
  { id: 3, name: 'Shiny Router', image: 'router3.png'},
  { id: 4, name: 'Best Router', image: 'router4.png'}
];

/* GET products page. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

/* GET product details page for one specific product. */
router.get('/:id', function(req, res, next) {
  productId = req.params.id;

  // Create an empty product object
  productObject = {};
  for(index in products) {
    console.log(index);
    if (products[index].id == productId) {
      productObject = products[index];
      console.log(productObject);
    }
  }

  res.render('product_details', { title: productId, product: productObject });
});

module.exports = router;