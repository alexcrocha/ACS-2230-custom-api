require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  dbHost: process.env.DB_HOST,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION,
};
