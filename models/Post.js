import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  url: String,
  header: String,
  content: String,
  type: { type: String, enum: ['image', 'video'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Post', postSchema);
