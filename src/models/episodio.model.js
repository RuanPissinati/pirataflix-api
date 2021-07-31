const mongoose = require("mongoose");
const EpisodioSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  src:{
    type: String,
    require: true
  },
  ep:{
    type: String,
    require: true
  },
  temp: {
    type: String,
    require: true
  },
  sinopse:{
    type: String
  },
  serieId: {
    type: String,
    require: true
  },
  visualized:{
    type: Boolean,
    default: false
  },
  createdAtUser: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Episodio", EpisodioSchema);
