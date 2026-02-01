import mongoose, { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
    id: { type: String, required: true, unique: true }, // Keeping String ID to match current JSON structure
    title: { type: String, required: true },
    content: { type: String, default: '' },
    link: { type: String, default: '' },
    type: { type: String, enum: ['blog', 'instagram', 'resource'], default: 'resource' },
    isInstagram: { type: Boolean, default: false },
    createdAt: { type: String, default: () => new Date().toISOString() }, // Store as ISO String
});

const Post = models.Post || model('Post', PostSchema);

export default Post;
