'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './InstagramCarousel.module.css';

interface Post {
    id: string;
    title: string;
    content: string;
    link: string;
    type?: 'blog' | 'instagram' | 'resource';
    isInstagram?: boolean; // Legacy support
}

export default function InstagramCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                // Filter for Instagram posts (new 'type' or legacy 'isInstagram')
                const instaPosts = data.filter((p: Post) => p.type === 'instagram' || p.isInstagram);
                setPosts(instaPosts);
            });
    }, []);

    if (posts.length === 0) return null;

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {posts.map((post) => {
                        let embedUrl = post.link;
                        if (!embedUrl.includes('/embed')) {
                            try {
                                const urlObj = new URL(post.link);
                                const path = urlObj.pathname.endsWith('/') ? urlObj.pathname : urlObj.pathname + '/';
                                embedUrl = `${urlObj.origin}${path}embed`;
                            } catch (e) {
                                // Invalid URL
                            }
                        }

                        return (
                            <div className={styles.embla__slide} key={post.id} onClick={() => window.open(post.link, '_blank')}>
                                <div className={styles.slideContent}>
                                    <iframe
                                        src={embedUrl}
                                        className={styles.iframe}
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency={true}
                                    />
                                    <div className={styles.overlay}>
                                        <span>Click to Watch Reel</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
