const { product_male } = require('../models/product_male');

const createProduct = async (req, res, next) => {
  try {
    console.log('call to createProduct');
    const newProduct = req.body;
    // console.log(newProduct)
    const product = new product_male(newProduct);
    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

const index = async (req, res) => {
  const product = await product_male.find({});
  return res.status(200).json({ product });
};

const getProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const product = await product_male.findById(productID);
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
