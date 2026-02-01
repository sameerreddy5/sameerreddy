import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { connectDB } from '@/lib/db';
import Post from '@/models/Post';

const dataPath = path.join(process.cwd(), 'data', 'posts.json');

// File System Helper (Fallback)
function getPostsFromFile() {
    if (!fs.existsSync(dataPath)) return [];
    try {
        return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    } catch { return []; }
}

function savePostsToFile(posts: any[]) {
    // Only in development or if explicitly needed
    try {
        fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
    } catch(e) { console.error("File write failed", e); }
}

export async function GET() {
    try {
        const db = await connectDB();
        
        if (db) {
            // DATABASE MODE
            let posts = await Post.find({}).sort({ createdAt: -1 });

            // AUTO-MIGRATION: If DB is empty, seed from JSON
            if (posts.length === 0) {
                console.log("DB empty, seeding from JSON...");
                const filePosts = getPostsFromFile();
                if (filePosts.length > 0) {
                    await Post.insertMany(filePosts);
                    posts = await Post.find({}).sort({ createdAt: -1 });
                }
            }
            
            // Format generic ID to string if needed (Mongoose uses _id)
            // But we stored our custom 'id' string in the schema, so it should be fine.
            return NextResponse.json(posts);
        }
    } catch (e) {
        console.error("DB Error", e);
    }

    // FALLBACK: File System
    console.log("Using File System Fallback");
    return NextResponse.json(getPostsFromFile());
}

export async function POST(request: Request) {
    const body = await request.json();
    const { title, content, link, isInstagram, type } = body;

    const newPostData = {
        id: Date.now().toString(),
        title,
        content,
        link,
        type: type || (isInstagram ? 'instagram' : 'resource'),
        isInstagram: isInstagram || type === 'instagram',
        createdAt: new Date().toISOString()
    };

    try {
        const db = await connectDB();
        if (db) {
            await Post.create(newPostData);
            return NextResponse.json({ success: true, post: newPostData });
        }
    } catch (e) {
        console.error("DB Create Error", e);
    }

    // Fallback
    const posts = getPostsFromFile();
    posts.unshift(newPostData);
    savePostsToFile(posts);
    return NextResponse.json({ success: true, post: newPostData });
}

export async function PUT(request: Request) {
    const body = await request.json();
    const { id, title, content, link, isInstagram, type } = body;

    const updateData = {
        title, content, link,
        isInstagram: isInstagram || type === 'instagram',
        type: type || (isInstagram ? 'instagram' : 'resource')
    };

    try {
        const db = await connectDB();
        if (db) {
            await Post.findOneAndUpdate({ id: id }, updateData);
            const allPosts = await Post.find({}).sort({ createdAt: -1 });
            return NextResponse.json({ success: true, posts: allPosts });
        }
    } catch (e) { console.error("DB Update Error", e); }

    // Fallback
    let posts = getPostsFromFile();
    posts = posts.map((p: any) => p.id === id ? { ...p, ...updateData } : p);
    savePostsToFile(posts);
    return NextResponse.json({ success: true, posts });
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const { id } = body;

    try {
        const db = await connectDB();
        if (db) {
            await Post.findOneAndDelete({ id: id });
            return NextResponse.json({ success: true });
        }
    } catch (e) { console.error("DB Delete Error", e); }

    // Fallback
    let posts = getPostsFromFile();
    posts = posts.filter((p: any) => p.id !== id);
    savePostsToFile(posts);
    return NextResponse.json({ success: true, posts });
}
