import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Kit | Sameer Reddy",
    description: "Creator overview, audience insights, and collaboration opportunities with Tamalampudi Sameer Reddy.",
};

export default function MediaKit() {
    return (
        <main style={{ backgroundColor: 'var(--background)', minHeight: '100vh', color: '#fff' }}>
            <Navbar />

            <section style={{ padding: '8rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>Media Kit</h1>
                <p style={{ textAlign: 'center', color: 'var(--gray)', fontSize: '1.25rem', marginBottom: '4rem' }}>
                    Sameer Reddy
                </p>

                {/* Creator Overview */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                        Creator Overview
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem', color: 'var(--gray)' }}>
                        <p><strong style={{ color: '#fff' }}>Name:</strong> Tamalampudi Sameer Reddy</p>
                        <p><strong style={{ color: '#fff' }}>Niche:</strong> Instagram Growth, AI Tools & Smart Tech</p>
                        <p><strong style={{ color: '#fff' }}>Content Type:</strong> Educational Reels, Storytelling, Tutorials</p>
                        <p><strong style={{ color: '#fff' }}>Language:</strong> Telugu + English</p>
                        <p><strong style={{ color: '#fff' }}>Platform:</strong> Instagram (Primary)</p>
                    </div>
                </div>

                {/* What I Create */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                        What I Create
                    </h2>
                    <ul style={{ color: 'var(--gray)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
                        <li>Instagram storytelling reels</li>
                        <li>Step-by-step tech & AI guides</li>
                        <li>Creator tools tutorials (CapCut, Gemini, ElevenLabs, etc.)</li>
                        <li>Beginner-friendly learning content</li>
                    </ul>
                </div>

                {/* Audience */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                        Audience
                    </h2>
                    <ul style={{ color: 'var(--gray)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
                        <li>Aspiring creators</li>
                        <li>Students & beginners</li>
                        <li>Tech-curious users</li>
                        <li>Telugu-speaking audience</li>
                    </ul>
                </div>

                {/* Collaboration Opportunities */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                        Collaboration Opportunities
                    </h2>
                    <ul style={{ color: 'var(--gray)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
                        <li>Educational brand promotions</li>
                        <li>Tech tools & apps</li>
                        <li>Creator-focused platforms</li>
                        <li>Long-term partnerships</li>
                    </ul>
                </div>

                {/* Contact */}
                <div style={{ textAlign: 'center', backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Ready to Collaborate?</h3>
                    <a href="mailto:contact@sameerreddy.in" style={{
                        color: 'var(--primary)',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        textDecoration: 'none'
                    }}>
                        contact@sameerreddy.in
                    </a>
                </div>

            </section>

            <Footer />
        </main>
    );
}
