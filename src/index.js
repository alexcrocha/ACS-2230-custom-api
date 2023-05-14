const app = require('./app');
const { port } = require('./config');
const connectDB = require('./data/database');

const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(port)
    console.log(`Listening on port ${port}`);
    return server;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = startServer();
