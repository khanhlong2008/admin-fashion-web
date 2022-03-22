const mongoose = require('mongoose');

const Form = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'User',
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('form', Form);
