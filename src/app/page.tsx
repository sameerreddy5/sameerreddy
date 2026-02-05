import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import VisitorTracker from "@/components/VisitorTracker";

export const revalidate = 60;

export default function Home() {
    return (
        <main className={styles.main}>
            <VisitorTracker />
            <Navbar />

            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Tamalampudi Sameer Reddy
                    </h1>
                    <h2 className={styles.subtitle}>
                        Instagram Growth, AI & Smart Tech
                    </h2>
                    <p className={styles.description}>
                        Helping creators grow with clarity, discipline, and practical tools.
                    </p>
                    <div className={styles.ctaContainer}>
                        <Link href="#booking" className={styles.btnPrimary}>
                            Book a 1:1 Session
                        </Link>
                        <Link href="#what-i-do" className={styles.btnOutline}>
                            Explore My Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. What I Do */}
            <section id="what-i-do" className={styles.section}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem' }}>What I Do</h2>
                    <div className={styles.grid}>

                        {/* Card 1 */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                Instagram Storytelling
                            </h3>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                                Short-form content that educates, simplifies, and builds trust. I create Telugu-first storytelling reels that explain growth and tech in a calm, practical way.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                Creator Tools
                            </h3>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                                Practical guides on tools every creator needs. From CapCut workflows to AI voice tools like ElevenLabs, giving you the tech edge.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                Learning Paths
                            </h3>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                                Structured roadmaps to remove confusion and build consistency. Step-by-step guidance for beginners to start from zero without overwhelm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Proof / Credibility */}
            <section className={`${styles.section} ${styles.proofSection}`}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>Impact & Reach</h2>
                    <div className={styles.proofGrid}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Millions+</h3>
                            <p style={{ color: 'var(--gray)' }}>Reel Views</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Community</h3>
                            <p style={{ color: 'var(--gray)' }}>Driven Learning</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Research</h3>
                            <p style={{ color: 'var(--gray)' }}>Backed Approach</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Real Results</h3>
                            <p style={{ color: 'var(--gray)' }}>No Shortcuts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. 1:1 Sessions */}
            <section id="booking" className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>1:1 Instagram Clarity Sessions</h2>
                        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', display: 'inline-block' }}>
                            <p style={{ color: 'var(--gray)', marginBottom: '1rem', fontSize: '1.1rem' }}>If you’re confused about:</p>
                            <ul style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
                                <li>Why your Instagram reach is low</li>
                                <li>What content to post</li>
                                <li>How to build a clean profile</li>
                                <li>How to make typography reels like mine</li>
                            </ul>
                            <p style={{ color: 'var(--primary)', fontWeight: 600, marginTop: '1rem', textAlign: 'center' }}>👇 Book your session below.</p>
                        </div>
                    </div>

                    <div className={styles.bookingContainer}>
                        <div style={{ width: '100%' }}>
                            <div id="booking-embed" data-src="https://superprofile.bio/bookings/sameerreddy?all&type=embedBooking&embedBgColor=1A1A1A"></div>
                            <Script id='cosmofeed-embed-booking' src='https://cosmofeed.com/assets/embed/booking-embed.js' strategy="lazyOnload" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. About Me (Short) */}
            <section id="about" className={styles.section}>
                <div className={`${styles.container} ${styles.aboutContainer}`}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>About Me</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className={styles.aboutText}>
                            I’m <strong>Tamalampudi Sameer Reddy</strong>, a final-year Computer Science student at <strong>IIIT Manipur</strong> and a former Research Intern at <strong>IIT Ropar</strong>.
                        </p>
                        <p className={styles.aboutText}>
                            I combine my technical background with creative storytelling to help creators grow with clarity. My focus is on <strong>systems, consistency, and disciplined growth</strong> that lasts.
                        </p>
                        <div>
                            <Link href="/about" className={styles.btnOutline}>
                                Read Full Story
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Connect */}
            <section id="connect" className={styles.section} style={{ backgroundColor: '#161616', textAlign: 'center' }}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Connect</h2>

                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:contact@sameerreddy.in" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500, borderBottom: '1px solid var(--primary)' }}>
                            Email
                        </a>
                        <a href="https://t.me/sameerreddyin" target="_blank" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500, borderBottom: '1px solid var(--primary)' }}>
                            Telegram
                        </a>
                        <a href="https://www.linkedin.com/in/tamalampudi-sameer-reddy/" target="_blank" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500, borderBottom: '1px solid var(--primary)' }}>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
