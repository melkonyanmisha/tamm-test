import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  title: {
    type: String,
    minLength: 2,
    maxLength: 100
  },

  text: {
    type: String,
    minLength: 2,
    maxLength: 2000
  }
}, {
  timestamps: true
});

export default model('Post', PostSchema);
