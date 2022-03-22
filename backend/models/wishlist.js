const mongoose = require('mongoose');

const WishList = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'User',
  },
  list: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
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
    },
  ],
  date: {
    type: String,
    default: new Date().getTime(),
  },
});

module.exports = mongoose.model('wishlist', WishList);
