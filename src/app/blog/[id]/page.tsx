import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fs from 'fs';
import path from 'path';
import styles from './page.module.css';
import AdBanner from "@/components/AdBanner";

import GoogleTranslate from "@/components/GoogleTranslate";

// Helper to get posts (Server Side)
function getPost(id: string) {
    const dataPath = path.join(process.cwd(), 'data', 'posts.json');
    if (!fs.existsSync(dataPath)) return null;
    const fileData = fs.readFileSync(dataPath, 'utf8');
    const posts = JSON.parse(fileData);
    return posts.find((p: any) => p.id === id);
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = getPost(id);

    if (!post) notFound();

    return (
        <main>
            <Navbar />
            <article className={`container ${styles.articleContainer}`}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <GoogleTranslate />
                </div>
                <div className={styles.date}>
                    {new Date(post.createdAt).toLocaleDateString()}
                </div>

                <div className={styles.wrapper}>
                    <div
                        className={styles.blogContent}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                <AdBanner dataAdSlot="1234567890" />
            </article>
            <Footer />
        </main>
    );
}
