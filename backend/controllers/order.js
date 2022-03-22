const Order = require('../models/order');

const getOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await order.find({ user: userId }).sort({
      date: -1,
    });
    return res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const newOrder = async (req, res) => {
  const { items, totalPrice, information } = req.body;
  const { userId } = req.params;

  try {
    const newOrder = new Order({
      items,
      totalPrice,
      information,
      userId: userId,
    });

    const order = await newOrder.save();
    res.status(201).json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getOrders,
  newOrder,
};
