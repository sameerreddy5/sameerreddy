'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../app/page.module.css';

interface Post {
    id: string;
    title: string;
    content: string;
    type?: string;
    createdAt: string;
}

interface Props {
    initialPosts: any[];
}

export default function BlogList({ initialPosts }: Props) {
    const [posts] = useState<any[]>(initialPosts || []);

    if (posts.length === 0) return <p>No articles yet.</p>;

    // Helper to strip HTML for preview (SSR safe)
    const getExcerpt = (html: string) => {
        if (!html) return "";
        // Simple regex to strip HTML tags
        const text = html.replace(/<[^>]+>/g, '');
        return text.substring(0, 100) + "...";
    };

    return (
        <div className={styles.grid}>
            {posts.map(post => (
                <div key={post.id} className={styles.card}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{new Date(post.createdAt).toLocaleDateString()}</span>
                    <h3>{post.title}</h3>
                    <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
                        {getExcerpt(post.content)}
                    </p>
                    <Link href={`/blog/${post.id}`} className={styles.linkArrow}>Read Article &rarr;</Link>
                </div>
            ))}
        </div>
    );
}
