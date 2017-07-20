const Trip = require('../../../models/trip');

const tripsCtrl = {

  createTrip(req, res) {
    const newTrip = new Trip();
    newTrip.save(function(err, trip) {
      if (err) res.send(error);
      res.send(trip._id);
    });
  }
  
};

module.exports = { tripsCtrl };

