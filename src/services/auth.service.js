const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiration } = require("../config");

const register = async ({ username, password }) => {
  try {
    const user = new User({ username, password });
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
}

const login = async ({ username, password }) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password!');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid username or password!');
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: jwtExpiration });
    return { user, token };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  register,
  login,
};
