const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 6
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
