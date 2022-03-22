const router = require('express-promise-router')();
const WishListController = require('../controllers/wishlist');

router
  .route('/:userId')
  .get(WishListController.getWishList)
  .put(WishListController.updateWishList);

module.exports = router;
