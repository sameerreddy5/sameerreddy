import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisitorTracker from "@/components/VisitorTracker";
import styles from "./page.module.css";



// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default function Home() {
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

      {/* Paid Collaborations Section */}
      <section className="section-padding" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Paid Collaborations</h2>
            <div className={styles.underline}></div>
          </div>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            For paid collaborations mail to <a href="mailto:contact@sameerreddy.in" style={{ color: 'var(--primary)', fontWeight: '600' }}>contact@sameerreddy.in</a>
          </p>
        </div>
      </section>

      {/* 1:1 Session Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>1:1 Growth Session</h2>
            <div className={styles.underline}></div>
          </div>
          <div style={{ width: '100%', minHeight: '600px' }}>
            <div id="booking-embed" data-src="https://superprofile.bio/bookings/sameerreddy?all&type=embedBooking&embedBgColor=0b0b0bff"></div>
            <Script id='cosmofeed-embed-booking' src='https://cosmofeed.com/assets/embed/booking-embed.js' strategy="lazyOnload" />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section-padding">
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
              <a href="https://t.me/sameerreddyin" target="_blank" className="btn btn-primary">Follow on Telegram</a>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Interested in Cyber Security?</p>
              <a href="https://t.me/+I0AIcU7Rw9gxMjU9" target="_blank" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Join Cyber Security Group</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
