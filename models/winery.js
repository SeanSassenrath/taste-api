const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const winerySchema = new Schema({
  metadata: {
    name: { type: String, required: true },
    address: { type: String },
  },
  location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
  },
  trips: [ { type: Schema.Types.ObjectId, ref: Trip }]
})