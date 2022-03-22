const router = require('express-promise-router')();
const FormController = require('../controllers/shippinginfo');

router
  .route('/:userId')
  .get(FormController.getInfo)
  .put(FormController.updateInfo);

module.exports = router;
