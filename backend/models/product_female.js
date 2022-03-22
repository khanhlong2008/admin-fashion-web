const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  size: {
    s: {
      type: Boolean,
    },
    m: {
      type: Boolean,
    },
    l: {
      type: Boolean,
    },
  },
  color: {
    black: Boolean,
    white: Boolean,
    red: Boolean,
    blue: Boolean,
    yellow: Boolean,
    purple: Boolean,
    pink: Boolean,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    imgList: [
      {
        imgItem: {
          type: String,
          required: true,
        },
      },
    ],
  },
  status: {
    soldOut: {
      type: Boolean,
    },
    stoking: {
      type: Boolean,
    },
  },

  onFlashsale: {
    type: Object,
    required: false,
  },
});
const product_female = mongoose.model('product_female', productSchema);

module.exports = {
  product_female,
};
