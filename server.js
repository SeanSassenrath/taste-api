const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const dotenv = require('dotenv');

const app = express();

const startServer = function() {

  // Load env variables
  dotenv.load();

  // Request body parsing
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Mongoose ORM setup
  const options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  };

  mongoose.Promise = bluebird;
  mongoose.connect(process.env.MONGO_LOCAL, options);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));


  // Logging
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // CORS
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  // Add routers here
  const apiRouter = require('./api');
  app.use('/api', apiRouter);

  // Boot server
  app.listen(process.env.PORT || 9000);
  console.log(`Taste API is up on ${process.env.PORT || 9000}`);
}

startServer();
module.exports = app;