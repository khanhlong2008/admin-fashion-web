const router = require('express-promise-router')();
const OrderController = require('../controllers/order');

router
  .route('/:userId')
  .get(OrderController.getOrders)
  .post(OrderController.newOrder);

module.exports = router;
