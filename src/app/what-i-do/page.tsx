import Link from "next/link";

export default function WhatIDo() {
    return (
        <div className="page-container animate-fade-in">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>What I Do</h1>

            {/* 1. Instagram Storytelling */}
            <section className="card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
                    Instagram Storytelling
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    I teach you how to create short-form content that educates, simplifies, and builds trust.
                    My focus is on Telugu-first storytelling reels that explain complex growth and tech concepts in a calm, practical way.
                </p>
                <ul style={{ color: '#fff', lineHeight: 1.6, paddingLeft: '1.2rem' }}>
                    <li>Scripting for retention</li>
                    <li>Visual storytelling techniques</li>
                    <li>Building a genuine connection</li>
                </ul>
            </section>

            {/* 2. Creator Tools */}
            <section className="card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
                    Creator Tools
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Practical guides on the tools that power modern creators.
                    Stop guessing and start using the right tech stack.
                </p>
                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>CapCut</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Efficient editing workflows</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>AI Voice</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>ElevenLabs & more</p>
                    </div>
                </div>
            </section>

            {/* 3. Learning Paths */}
            <section className="card">
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
                    Learning Paths
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Structured roadmaps to remove confusion. Step-by-step guidance for beginners to start from zero without overwhelm.
                </p>
                <Link href="/sessions" className="btn btn-primary">
                    Get Personal Guidance
                </Link>
            </section>

        </div>
    );
}
