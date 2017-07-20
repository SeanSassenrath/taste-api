const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  logistics: {
    date: { type: String, required: true },
    numberOfWineries: { type: Number, required: true },
    userWineries: [{ type: Schema.Types.ObjectId, ref: 'Winery', required: true }],
    radius: {
      startPoint: { 
        lat: { type: Number },
        lng: { type: Number }
      },
      miles: { type: Number }
    },
  },
  wineries: [{ type: Schema.Types.ObjectId, ref: 'Winery', required: true }]
})