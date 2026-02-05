import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Sameer Reddy | Digital Storyteller & Creator Educator",
    description: "Know the journey of Sameer Reddy, a Telugu digital storyteller, IIIT Manipur CSE student, and IASc-INSA-NASI research fellow.",
};

export default function About() {
    return (
        <main style={{ backgroundColor: 'var(--background)', minHeight: '100vh', color: '#fff' }}>
            <Navbar />

            <section style={{ padding: '8rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>About Me</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            I’m <strong>Tamalampudi Sameer Reddy</strong>, a Telugu digital storyteller focused on Instagram growth, creator tools, and smart tech.
                        </p>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            I believe growth doesn’t come from noise, hype, or shortcuts. It comes from <strong>clarity, consistency, and discipline</strong>.
                        </p>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                            I’m currently a final-year Computer Science student at <strong>Indian Institute of Information Technology, Senapati, Manipur</strong> (An Institute of National Importance by Act of Parliament, Govt. of India).
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
                            What I Create
                        </h3>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            Alongside my academics, I actively create educational content that helps:
                        </p>
                        <ul style={{ color: 'var(--gray)', lineHeight: 1.6, paddingLeft: '1.2rem' }}>
                            <li>Beginners understand Instagram clearly</li>
                            <li>Creators fix low reach & profile confusion</li>
                            <li>People use AI tools and tech benefits the right way</li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
                            Academic & Research Background
                        </h3>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            I was selected for the <strong>IASc–INSA–NASI Summer Research Fellowship Programme (2025)</strong>, a national-level research fellowship offered by India’s top science academies.
                        </p>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            During this fellowship, I worked under <strong>Dr. Sudarshan Iyengar</strong>, <strong>Indian Institute of Technology, Ropar</strong>, where I gained hands-on exposure to structured research, analytical thinking, and disciplined workflows.
                        </p>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            This experience shaped how I now approach:
                        </p>
                        <ul style={{ color: 'var(--gray)', lineHeight: 1.6, paddingLeft: '1.2rem' }}>
                            <li>Learning systems</li>
                            <li>Problem-solving</li>
                            <li>Teaching others with clarity</li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
                            My Creator Journey
                        </h3>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            I didn’t start as an expert. I started confused — about content, reach, and consistency.
                        </p>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            Instead of chasing virality, I focused on:
                        </p>
                        <ul style={{ color: 'var(--gray)', lineHeight: 1.6, paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                            <li>Understanding platforms</li>
                            <li>Learning tools deeply</li>
                            <li>Building systems that actually work</li>
                        </ul>
                        <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                            Today, my content reaches millions organically, and my goal is simple: <strong>Help others grow without confusion.</strong>
                        </p>
                    </div>

                    <div style={{ padding: '2rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', marginTop: '1rem', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1rem' }}>
                            My Core Belief
                        </h3>
                        <p style={{ color: '#fff', fontWeight: 500, marginBottom: '0.5rem' }}>No shortcuts.</p>
                        <p style={{ color: '#fff', fontWeight: 500, marginBottom: '0.5rem' }}>No fake promises.</p>
                        <p style={{ color: '#fff', fontWeight: 500, marginBottom: '1rem' }}>No unnecessary hype.</p>
                        <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.5rem' }}>No noise. Only growth.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
