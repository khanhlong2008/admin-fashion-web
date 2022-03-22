const Form = require('../models/shippinginfo');

const getInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const userInfo = await Form.findOne({ user: userId });
    return res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateInfo = async (req, res) => {
  const infoFields = req.body;
  const { userId } = req.params;

  try {
    let infoBefore = await Form.findOne({ user: userId });

    if (!infoBefore) {
      const newForm = new Form({
        ...infoFields,
        user: userId,
      });

      const info = await newForm.save();
      res.status(201).json(info);
    } else {
      infoBefore = await Form.findOneAndUpdate(
        { user: userId },
        { $set: { ...infoFields } },
        { new: true }
      );

      res.json(infoBefore);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getInfo,
  updateInfo,
};
