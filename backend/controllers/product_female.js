const { product_female } = require('../models/product_female');

const createProduct = async (req, res, next) => {
  try {
    console.log('call to createProduct');
    const newProduct = req.body;
    // console.log(newProduct)
    const product = new product_female(newProduct);
    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

const index = async (req, res) => {
  const product = await product_female.find({});
  return res.status(200).json({ product });
};
const getProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const product = await product_female.findById(productID);
    return res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
module.exports = {
  index,
  createProduct,
  getProduct,
};
