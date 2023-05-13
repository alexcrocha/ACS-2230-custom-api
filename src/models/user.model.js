const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'Username must be at least 3 characters long'],
  },
  password: {
    type: String,
    required: true,
    minlength: [3, 'Password must be at least 3 characters long'],
  },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema);
