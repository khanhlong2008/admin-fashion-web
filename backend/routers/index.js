const express = require('express');

const auth = require('./auth');
const user = require('./user');
const product_female = require('./product_female');
const bill = require('./bill');
const cart = require('./cart');
const product_male = require('./product_male');
const router = express.Router();
const flashSale = require('./flashSale');
const shippinginfo = require('./shippinginfo');
const order = require('./order');
const wishlist = require('./wishlist');

router.use('/auth', auth);
router.use('/user', user);
router.use('/product_female', product_female);
router.use('/bill', bill);
router.use('/product_male', product_male);
router.use('/flashSale', flashSale);
router.use('/cart', cart);
router.use('/shippinginfo', shippinginfo);
router.use('/order', order);
router.use('/wishlist', wishlist);

module.exports = router;
