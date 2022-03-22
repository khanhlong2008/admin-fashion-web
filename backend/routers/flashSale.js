const router = require('express-promise-router')();
const flashSaleContrllers = require('../controllers/flashSale');

router
  .route('/:type')
  .post(flashSaleContrllers.createFlashSale)
  .get(flashSaleContrllers.index);

module.exports = router;
