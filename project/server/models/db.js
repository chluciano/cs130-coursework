
require('dotenv').config();

const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.db, { keepAlive: 1, useNewUrlParser: true, useFindAndModify: false });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${config.db}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

require('./user');
