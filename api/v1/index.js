const express = require('express');
const trips = require('./trips');
const wineries = require('./wineries');
const products = require('./products');

const v1 = new express.Router();

v1.use('/trips', trips);
v1.use('/wineries', wineries);

module.exports = v1;