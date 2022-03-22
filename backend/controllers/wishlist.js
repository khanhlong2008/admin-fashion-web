const WishList = require('../models/wishlist');

const getWishList = async (req, res) => {
  try {
    const { userId } = req.params;
    const wishList = await WishList.findOne({ user: userId });
    return res.status(200).json(wishList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateWishList = async (req, res) => {
  const wishListFields = req.body;
  const { userId } = req.params;

  try {
    let wishListBefore = await WishList.findOne({ user: userId });

    if (!wishListBefore) {
      const newWishList = new WishList({
        list: wishListFields,
        user: userId,
      });

      const wishList = await newWishList.save();
      res.status(201).json(wishList);
    } else {
      wishListBefore = await WishList.findOneAndUpdate(
        { user: userId },
        { $set: { list: wishListFields } },
        { new: true }
      );

      res.json(wishListBefore);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getWishList,
  updateWishList,
};
