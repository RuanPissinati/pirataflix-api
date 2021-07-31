const mongoose = require("mongoose");
const SerieSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  bg_src:{
    type: String,
    require: true
  },
  about: {
    type: String,
  },
  classification: {
    type: String,
  },
  gener: {
    type: String,
  },
  category: {
    type: String,
  },
  createdAtUser: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Serie", SerieSchema);
