require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3001;
const dbHost = process.env.DB_HOST;

let server;
try {
  mongoose.connect(dbHost, { useNewUrlParser: true });
  server = app.listen(port);
  console.log(`Listening on port ${port}`);
} catch (err) {
  console.log(err);
}
module.exports = server;
