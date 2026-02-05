'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            marginTop: 'auto',
            backgroundColor: 'var(--bg)'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>

                {/* Brand */}
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                    Sameer Reddy<span style={{ color: 'var(--accent)' }}>.</span>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <Link href="/what-i-do">Work</Link>
                    <Link href="/sessions">Sessions</Link>
                    <Link href="/about">About</Link>
                    <Link href="/media-kit">Media Kit</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* Copyright & Tagline */}
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.6, marginTop: '1rem' }}>
                    <p>No noise. Only growth.</p>
                    <p style={{ marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} Tamalampudi Sameer Reddy</p>
                </div>
            </div>
        </footer>
    );
}
