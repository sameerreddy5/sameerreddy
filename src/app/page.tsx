import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import BlogList from "@/components/BlogList";
import InstagramCarousel from "@/components/InstagramCarousel";
import VisitorTracker from "@/components/VisitorTracker";
import styles from "./page.module.css";
import { getPosts } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import BlogList from "@/components/BlogList";
import InstagramCarousel from "@/components/InstagramCarousel";
import VisitorTracker from "@/components/VisitorTracker";
import styles from "./page.module.css";
import { getPosts } from "@/lib/data";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function Home() {
  const allPosts = await getPosts();

  // Filter for resources (PostList) and blogs (BlogList)
  const resourcePosts = allPosts.filter((p: any) => p.type !== 'blog');
  const blogPosts = allPosts.filter((p: any) => p.type === 'blog');

  return (
    <main>
      <VisitorTracker />
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>Building discipline daily</span>
            <h1 className={styles.title}>Sameer Reddy</h1>
            <p className={styles.description}>
              Telugu Digital Storyteller. Helping you cut through the noise and focus on growth.
            </p>
            <Link href="#content" className="btn btn-primary">
              Explore My Journey
            </Link>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <Image
                src="/profile.jpg"
                alt="Sameer Reddy"
                width={400}
                height={400}
                priority
                className={styles.profileImg}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Content / What I Do */}
      <section id="content" className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What I Do</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Instagram Storytelling</h3>
              <p>Short-form content that educates and inspires. Join our community of learners.</p>
            </div>
            <div className={styles.card}>
              <h3>Creator Tools</h3>
              <p>Guides on CapCut, AI voiceovers, and editing workflows to help you start creating.</p>
            </div>
            <div className={styles.card}>
              <h3>Learning Paths</h3>
              <p>Curated roadmaps for beginners to master digital skills step-by-step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - Placeholder for dynamic content */}
      {/* Resources Section */}
      <section id="resources" className={`section-padding ${styles.resources}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Resources</h2>
            <div className={styles.underline}></div>
          </div>
          <PostList initialPosts={resourcePosts} />
        </div>
      </section>

      {/* Instagram Carousel Section */}
      < section className="section-padding" style={{ background: 'var(--background)' }
      }>
        <div className="container">
          <div className={styles.sectionHeader} style={{ marginBottom: '1rem' }}>
            <h2>Latest Reels</h2>
            <div className={styles.underline}></div>
          </div>
        </div>
        <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <InstagramCarousel />
          </div>
        </div>
      </section >

      {/* Blog Section */}
      < section className="section-padding" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Recent Articles</h2>
            <div className={styles.underline}></div>
          </div>
          <BlogList initialPosts={blogPosts} />
        </div>
      </section >


      {/* Community Section */}
      < section id="community" className="section-padding" >
        <div className={`container ${styles.communityContainer}`}>
          <div className={styles.communityImage}>
            <Image
              src="/insta-feed.jpg"
              alt="Instagram Community"
              width={300}
              height={500}
              className={styles.feedImg}
            />
          </div>
          <div className={styles.communityContent}>
            <h2>Join the Community</h2>
            <p>Be part of a growing network of disciplined creators. Get daily updates and connect with like-minded individuals.</p>
            <div className={styles.socialButtons}>
              <a href="https://instagram.com/sameerreddy.in" target="_blank" className="btn btn-primary">
                Follow on Instagram
              </a>
              {/* <a href="#" className="btn">Join WhatsApp</a> */}
            </div>
          </div>
        </div>
      </section >

      <Footer />
    </main >
  );
}
