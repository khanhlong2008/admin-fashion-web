const mongoose = require('mongoose');

const flashSaleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
  limit: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const flashSale = mongoose.model('flashSale', flashSaleSchema);
module.exports = {
  flashSale,
};
