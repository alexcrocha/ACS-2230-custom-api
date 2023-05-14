const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { jwtSecret } = require('../config');

module.exports = async (req, res, next) => {
  if (typeof req.cookies.nToken === "undefined" || !req.cookies.nToken) {
    req.user = null;
  } else {
    try {
      const decodedToken = jwt.verify(req.cookies.nToken, jwtSecret);

      req.user = await User.findById(decodedToken.userId);
      if (!req.user) {
        return res.status(400).json({ msg: 'Invalid request' });
      }
    } catch (err) {
      return res.status(401).json({ msg: 'Invalid token', error: err });
    }
  }

  next();
};
