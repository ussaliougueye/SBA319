const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 5
  },
  password: {
    type: String,
    required: [true, 'please enter the password'],
    minlength: [6, 'Please enter at least 6 characters']
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
