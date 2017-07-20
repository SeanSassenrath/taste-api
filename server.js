var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bluebird = require('bluebird');

var app = express();

var startServer = function() {

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

  // Boot server
  app.listen(process.env.PORT || 9000);
  console.log(`Taste API is up on ${process.env.PORT || 9000}`);
}

startServer();
module.exports = app;