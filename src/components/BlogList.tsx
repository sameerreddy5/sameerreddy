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

export default function BlogList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.filter((p: any) => p.type === 'blog'));
            });
    }, []);

    if (posts.length === 0) return <p>No articles yet.</p>;

    // Helper to strip HTML for preview
    const getExcerpt = (html: string) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        const text = tmp.textContent || tmp.innerText || "";
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
