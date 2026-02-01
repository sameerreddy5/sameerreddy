'use client';

import { useEffect, useState } from 'react';
import styles from '../app/page.module.css';

interface Post {
    id: string;
    title: string;
    content: string;
    link: string;
    isInstagram?: boolean;
}

interface Props {
    initialPosts: any[];
}

export default function PostList({ initialPosts }: Props) {
    const [posts] = useState<any[]>(initialPosts || []);

    if (posts.length === 0) return (
        <div className={styles.resourceGrid}>
            {/* Fallback placeholders if no data */}
            <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>📚</div>
                <h4>Beginner's Guide</h4>
                <p>Start your journey with these foundational steps.</p>
            </div>
        </div>
    );

    return (
        <div className={styles.resourceGrid}>
            {posts.map(post => {
                if (post.isInstagram && post.link) {
                    // Basic Embed logic: append /embed to normal post link if not present
                    let embedUrl = post.link;
                    if (!embedUrl.includes('/embed')) {
                        const urlObj = new URL(post.link);
                        // Ensure trailing slash
                        const path = urlObj.pathname.endsWith('/') ? urlObj.pathname : urlObj.pathname + '/';
                        embedUrl = `${urlObj.origin}${path}embed`;
                    }

                    return (
                        <div key={post.id} className={styles.resourceCard} style={{ padding: 0, overflow: 'hidden' }}>
                            <iframe
                                src={embedUrl}
                                width="100%"
                                height="400"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency={true}
                                style={{ border: 'none', backgroundColor: 'white' }}
                            ></iframe>
                            <div style={{ padding: '1rem' }}>
                                <h4>{post.title}</h4>
                            </div>
                        </div>
                    );
                }

                return (
                    <div key={post.id} className={styles.resourceCard}>
                        <div className={styles.resourceIcon}>💡</div>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                        {post.link && <a href={post.link} target="_blank" className={styles.linkArrow}>View Link &rarr;</a>}
                    </div>
                );
            })}
        </div>
    );
}
