const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  logistics: {
    date: { type: String, required: true },
    numberOfWineries: { type: Number, required: true },
    userWineries: { type: Array },
    radius: {
      startPoint: { 
        lat: { type: Number },
        lng: { type: Number }
      },
      miles: { type: Number }
    },
  },
  wineries: { type: Array, required: true }
})