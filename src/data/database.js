const mongoose = require('mongoose');
const { dbHost } = require('../config');

const connectDB = async () => {
  try {
    await mongoose.connect(dbHost, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database', err);
    process.exit(1);
  }
}

module.exports = connectDB;
