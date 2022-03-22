const Cart = require('../models/cart');

const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ user: userId });
    return res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateCart = async (req, res) => {
  const cartFields = req.body;
  const { userId } = req.params;

  try {
    let cartBefore = await Cart.findOne({ user: userId });

    if (!cartBefore) {
      const newCart = new Cart({
        cart: cartFields,
        user: userId,
      });

      const cart = await newCart.save();
      res.status(201).json(cart);
    } else {
      cartBefore = await Cart.findOneAndUpdate(
        { user: userId },
        { $set: { cart: cartFields } },
        { new: true }
      );

      res.json(cartBefore);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getCart,
  updateCart,
};
