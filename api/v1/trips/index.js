const express = require('express');
const { tripsCtrl } = require('./tripsController');

const trips = express.Router();

trips.use((req, res, next) => {
  next();
});

trips.get('/create', tripsCtrl.createTrip);
// trips.get('/', tripsCtrl.gettrips);
// trips.get('/:id', tripsCtrl.getBrand);
// trips.post('/', tripsCtrl.postBrand);
// trips.delete('/:id', tripsCtrl.deleteBrand);
// trips.put('/:id', tripsCtrl.updateBrand);

module.exports = trips;