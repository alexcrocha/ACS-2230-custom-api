const mongoose = require('mongoose');
const app = require('./app');
const { port, dbHost } = require('./config');


let server;
try {
  mongoose.connect(dbHost, { useNewUrlParser: true });
  server = app.listen(port);
  console.log(`Listening on port ${port}`);
} catch (err) {
  console.log(err);
}
module.exports = server;
