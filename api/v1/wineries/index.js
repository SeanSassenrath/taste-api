const express = require('express');
// const { wineriesCtrl } = require('./tripsController');

const wineries = express.Router();

wineries.use((req, res, next) => {
  next();
});

wineries.get('/', function() { res.json({ message: "hi" })});
// wineries.get('/', wineriesCtrl.getwineries);
// wineries.get('/:id', wineriesCtrl.getBrand);
// wineries.post('/', wineriesCtrl.postBrand);
// wineries.delete('/:id', wineriesCtrl.deleteBrand);
// wineries.put('/:id', wineriesCtrl.updateBrand);

module.exports = wineries;