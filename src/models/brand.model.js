const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, { timestamps: true });

module.exports = model('Brand', brandSchema);
