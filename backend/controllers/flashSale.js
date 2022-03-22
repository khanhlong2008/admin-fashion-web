const { flashSale } = require('../models/flashSale');
const { product_female } = require('../models/product_female');
const { product_male } = require('../models/product_male');

const createFlashSale = async (req, res, next) => {
  try {
    const { type } = req.params;
    const { id, limit, discount, date, time } = req.body;
    let product;
    if (type === 'male') {
      product = await product_male.findById(id);
      await product_male.findOneAndUpdate(
        { _id: id },
        { $set: { onFlashsale: { limit, discount, date, time } } },
        { new: true }
      );
    } else if (type === 'female') {
      product = await product_female.findById(id);
      await product_female.findOneAndUpdate(
        { _id: id },
        { $set: { onFlashsale: { limit, discount, date, time } } },
        { new: true }
      );
    }

    const FlashSale = new flashSale({
      price: product.price,
      title: product.title,
      quantity: product.quantity,
      img: product.img,
      id,
      time,
      date,
      limit: +limit,
      discount,
    });
    await FlashSale.save();
    res.status(200).send(FlashSale);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

const index = async (req, res) => {
  const flashSale = await flashSale.find({});
  return res.status(200).json({ flashSale });
};
module.exports = {
  index,
  createFlashSale,
};
