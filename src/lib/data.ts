import { connectDB } from "./db";
import Post from "@/models/Post";

export async function getPosts() {
    try {
        const db = await connectDB();
        if (!db) return [];

        // Fetch all posts, sorted by newest first
        // We lean on Mongoose/MongoDB speed here.
        const posts = await Post.find({}).sort({ createdAt: -1 }).lean();

        // Check if posts is actually an array
        if (!Array.isArray(posts)) {
            console.warn("Post.find returned non-array:", posts);
            return [];
        }

        // Convert _id and dates to simple strings to pass to client components
        return posts.map((post: any) => ({
            ...post,
            _id: post._id ? post._id.toString() : 'no-id',
            createdAt: post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString(),
        }));
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
}
