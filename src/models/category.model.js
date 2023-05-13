const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brands: [{
    type: Schema.Types.ObjectId,
    ref: 'Brand'
  }],
}, { timestamps: true });

module.exports = model('Category', categorySchema);
