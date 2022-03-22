const { User } = require('../models/user');
const authcontroller = require('../controllers/auth');
const jwt = require('jsonwebtoken');

const encodetoken = userID => {
  return jwt.sign(
    {
      iss: 'khanh long',
      sub: userID,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    'fashionapp'
  );
};

const index = async (req, res, next) => {
  const users = await User.find({});
  return res.status(200).json({ users });
};
const newUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json({ user: newUser });
  } catch (err) {
    res.status(500).json({});
  }
};
const getUser = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const user = await User.findById(userID);
    return res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { userID } = req.params;
    // console.log(userID)
    const { email, password, firstname, lastname } = req.body;
    const beforeInfo = await User.findById(userID);
    if (email !== beforeInfo.email) {
      const userEmail = await User.findOne({ email });
      if (userEmail) {
        return res
          .status(404)
          .json({ msg: 'This email is already registered' });
      }
    }
    const user = await authcontroller.updatePassword(email, password);
    const newUser = {
      email,
      salt: user.salt,
      hashed: user.hashed,
      password,
      firstname,
      lastname,
    };
    const foundUser = await User.findByIdAndUpdate(userID, newUser);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};
const signUp = async (req, res, next) => {
  // console.log('call to signup')
  const { email, password, firstname, lastname } = req.body;

  const foundUser = await User.findOne({ email });

  if (foundUser)
    return res
      .status(403)
      .json({ error: { message: 'email is alrady is use' } });
  const user = await authcontroller.signUpAuth(email, password);

  const newUser = await new User({
    email,
    salt: user.salt,
    hashed: user.hashed,
    firstname,
    lastname,
    password,
  });
  newUser.save();
  const token = encodetoken(newUser._id);
  res.setHeader('Authorization', token);
  return res.status(201).json({ success: true, token, user: newUser.lastname });
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(req.body)
  const newUser = await authcontroller.signInAuth(email, password);
  const foundUser = await User.findOne({ email });
  // console.log(foundUser._id)
  // token
  const token = encodetoken(foundUser._id);
  res.setHeader('Authorization', token);
  return res.status(200).json({ token: token, user: foundUser.lastname });
  // code
};
const secret = async (req, res, next) => {
  // console.log(req.user)
  const { _id, email, firstname, lastname, password } = req.user;
  // console.log("call to secret fn")
  return res
    .status(200)
    .json({ user: { _id, email, firstname, lastname, password } });
};
const secretAdmin = async (req, res, next) => {
  // console.log(req.user)
  const user = req.user;
  // console.log("call to secret fn")
  return res.status(200).json({ user: user });
};
module.exports = {
  index,
  newUser,
  signUp,
  signIn,
  getUser,
  updateUser,
  secret,
  secretAdmin,
};
