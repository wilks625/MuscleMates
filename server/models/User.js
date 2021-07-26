const mongoose = require('mongoose');
const Activities = require('./Activities');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  location: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Non-Binary"],
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  snapchat: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  activities: [Activities.schema],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
