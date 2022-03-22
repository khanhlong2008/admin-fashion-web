const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
    },
    product: [
      {
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
          red: {
            type: Boolean,
          },
          black: {
            type: Boolean,
          },
          white: {
            type: Boolean,
          },
          yellow: {
            type: Boolean,
          },
          pink: {
            type: Boolean,
          },
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);
const Bill = mongoose.model('Bill', billSchema);

module.exports = {
  Bill,
};
