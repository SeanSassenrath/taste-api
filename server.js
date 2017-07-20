const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const app = express();

const startServer = function() {

  // Add dotenv here

  // Request body parsing
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Mongoose ORM setup
  mongoose.Promise = bluebird;

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
  const apiRouter = require('./controller/api');
  app.use('/api', apiRouter);

  // Boot server
  app.listen(process.env.PORT || 9000);
  console.log(`Taste API is up on ${process.env.PORT || 9000}`);
}

startServer();
module.exports = app;