const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/v1');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

module.exports = app;
