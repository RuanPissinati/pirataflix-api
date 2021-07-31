'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const Customer = new Schema({
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
  },
  identity: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  activationKey: {
    type: String,
    unique: true
  },
  active: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

Customer.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
      return next();
    }
    
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model('Customer', Customer);