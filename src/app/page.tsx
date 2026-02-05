import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisitorTracker from "@/components/VisitorTracker";

export const revalidate = 60;

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      <VisitorTracker />
      <Navbar />

      {/* 1. Hero Section */}
      <section style={{
        padding: '8rem 1.5rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Tamalampudi Sameer Reddy
        </h1>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>
          Instagram Growth, AI & Smart Tech
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--gray)', maxWidth: '600px', lineHeight: 1.6 }}>
          Helping creators grow with clarity, discipline, and practical tools.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="#booking" style={{
            backgroundColor: 'var(--primary)',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Book a 1:1 Session
          </Link>
          <Link href="#what-i-do" style={{
            border: '1px solid var(--gray)',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 500,
            textDecoration: 'none'
          }}>
            Explore My Work
          </Link>
        </div>
      </section>

      {/* 2. What I Do */}
      <section id="what-i-do" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem' }}>What I Do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          {/* Card 1 */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary)' }}>
              Instagram Storytelling
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
              Short-form content that educates, simplifies, and builds trust. I create Telugu-first storytelling reels that explain growth and tech in a calm, practical way.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary)' }}>
              Creator Tools
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
              Practical guides on tools every creator needs. From CapCut workflows to AI voice tools like ElevenLabs, giving you the tech edge.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary)' }}>
              Learning Paths
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
              Structured roadmaps to remove confusion and build consistency. Step-by-step guidance for beginners to start from zero without overwhelm.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Proof / Credibility */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid #1f1f1f', borderBottom: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem' }}>Impact & Reach</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>Millions+</h3>
              <p style={{ color: 'var(--gray)', fontSize: '1.125rem' }}>Reel Views</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>Community</h3>
              <p style={{ color: 'var(--gray)', fontSize: '1.125rem' }}>Driven Learning</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>Research</h3>
              <p style={{ color: 'var(--gray)', fontSize: '1.125rem' }}>Backed Approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 1:1 Sessions */}
      <section id="booking" style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>1:1 Growth Session</h2>
          <p style={{ color: 'var(--gray)', maxWidth: '600px', margin: '0 auto' }}>
            Get personalized guidance on content strategy, growth, and tech tools.
            Book a slot below to clear your doubts and build a roadmap.
          </p>
        </div>

        <div style={{
          minHeight: '600px',
          backgroundColor: 'var(--card-bg)',
          borderRadius: '16px',
          overflow: 'hidden',
          padding: '1rem'
        }}>
          <div id="booking-embed" data-src="https://superprofile.bio/bookings/sameerreddy?all&type=embedBooking&embedBgColor=1A1A1A"></div>
          <Script id='cosmofeed-embed-booking' src='https://cosmofeed.com/assets/embed/booking-embed.js' strategy="lazyOnload" />
        </div>
      </section>

      {/* 5. About Me */}
      <section id="about" style={{ padding: '6rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>About Me</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
              Academic Background
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
              I am a Computer Science Engineering student at <strong>IIIT Manipur</strong>. My technical foundation helps me break down complex tech tools for creators.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
              Research Experience
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
              I have worked as a Research Intern at <strong>IIT Ropar</strong> (IASc–INSA–NASI), bringing a data-driven and analytical approach to content creation.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
              The Creator Journey
            </h3>
            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
              My goal is simple: helping Telugu creators upgrade their storytelling and technical skills. No noise, just practical growth strategies backed by engineering discipline.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Connect */}
      <section id="connect" style={{ padding: '6rem 1.5rem', backgroundColor: '#161616', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Connect</h2>
        <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>
          Have questions or want to collaborate? Reach out.
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:contact@sameerreddy.in" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500, borderBottom: '1px solid var(--primary)' }}>
            Email Me
          </a>
          <a href="https://t.me/sameerreddyin" target="_blank" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500, borderBottom: '1px solid var(--primary)' }}>
            Telegram Channel
          </a>
          <a href="https://www.linkedin.com/in/tamalampudi-sameer-reddy/" target="_blank" style={{ textDecoration: 'none', color: '#fff', fontWeight: 500, borderBottom: '1px solid var(--primary)' }}>
            LinkedIn
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
