const { User } = require("../models");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

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
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    return { user, token };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  register,
  login,
};
