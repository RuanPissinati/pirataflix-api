'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlackListCustomers = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
  },
  cpf: {
    unique: true,
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BlackListCustomers', BlackListCustomers);