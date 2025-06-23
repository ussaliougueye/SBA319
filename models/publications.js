const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  // Basic fields
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

  // Author reference (like a foreign key)
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Links to the 'User' collection
    required: true
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

  // Interactions
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // Array of user IDs who liked the post
  }],
  comments: [{
    text: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],

  
  isPublished: {
    type: Boolean,
    default: true
  }
});



// Create text index for search (e.g., on 'title' and 'content')
publicationSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Publication', publicationSchema);