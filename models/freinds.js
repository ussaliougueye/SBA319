const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
  requester: { type: String, ref: 'User', required: true },
  recipient: { type: String, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined', 'blocked'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Friend', friendshipSchema);