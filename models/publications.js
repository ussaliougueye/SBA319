const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  imageUrl: {
    type: String,
    default: ''
  },

  

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number
  },
  comments: {
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  isPublished: {
    type: Boolean,
    default: true
  }
});




publicationSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Publication', publicationSchema);