const router = require('express-promise-router')();
const CartController = require('../controllers/cart');

router
  .route('/:userId')
  .get(CartController.getCart)
  .put(CartController.updateCart);

module.exports = router;
