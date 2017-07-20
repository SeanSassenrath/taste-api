const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  logistics: {
    date: { type: String },
    numberOfWineries: { type: Number },
    userWineries: [{ type: Schema.Types.ObjectId, ref: 'Winery' }],
    radius: {
      startPoint: { 
        lat: { type: Number },
        lng: { type: Number }
      },
      miles: { type: Number }
    },
  },
  wineries: [{ type: Schema.Types.ObjectId, ref: 'Winery' }]
})