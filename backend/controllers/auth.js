const { User } = require('../models/user')
const crypto = require('crypto')

const signUpAuth = async (email, password) => {
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
        throw new Error("email already existed");
    }
    const user = {
        email: email
    };
    const { salt, hashed } = generatePassword(password);
    user.salt = salt;
    user.hashed = hashed;
    return user
}
const signInAuth = async (email, password) => {
    // console.log(email, password)
    const existingUser = await User.findOne({ email: email })
    if (!existingUser) {
        throw new Error("email does not exist");
    }
    if (!verifyPassword(password, existingUser.salt, existingUser.hashed)) {
        throw new Error("Password is not correct!");
    }
}
const updatePassword = async (email, password) => {

    const user = {
        email: email
    };
    const { salt, hashed } = generatePassword(password);
    user.salt = salt;
    user.hashed = hashed;
    return user
}
const generatePassword = (password) => {
    //key
    const salt = crypto.randomBytes(128).toString("base64");

    //pbkdf2Sync  mã hóa mật khẩu
    // vong lặp 10000
    // độ dài 2056
    // thuật toán mã hóa sha512
    const hashedPassword = crypto.pbkdf2Sync(
        password,
        salt,
        10000,
        256,
        "sha512"
    );
    return {
        hashed: hashedPassword.toString("hex"),
        salt: salt,
    };
};
const verifyPassword = (password, salt, hashedPassword) => {
    const hashed = crypto.pbkdf2Sync(password, salt, 10000, 256, "sha512");
    return hashed.toString("hex") == hashedPassword;
};

module.exports = {
    signUpAuth,
    signInAuth,
    updatePassword
}