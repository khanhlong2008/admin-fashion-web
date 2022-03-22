const mongoose = require('mongoose');

const Cart = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'User',
  },
  cart: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      front: {
        type: String,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  date: {
    type: String,
    default: new Date().getTime(),
  },
});

module.exports = mongoose.model('cart', Cart);
