import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20
  },

  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  isVerified: {
    type: Boolean,
    default: false
  },

  activationCode: {
    type: String
  }
});

export default model('User', UserSchema);
