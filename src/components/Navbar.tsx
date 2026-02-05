'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navStyle = {
        padding: '1.5rem 0',
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(15, 15, 15, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: 500,
        opacity: 0.8,
        transition: 'opacity 0.2s'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
                    Sameer Reddy<span style={{ color: 'var(--primary)' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <Link href="#what-i-do" style={linkStyle}>What I Do</Link>
                    <Link href="#booking" style={linkStyle}>1:1 Session</Link>
                    <Link href="#about" style={linkStyle}>About</Link>
                    <Link href="#connect" style={linkStyle}>Connect</Link>
                </div>

                {/* Mobile Menu Button - simplified for brevity, assuming responsive CSS handles display toggling or user is ok with simple logic */}
                {/* Note: In a real "from scratch" robust build we'd add media queries. 
                    For now, focusing on the desktop/clean look requested. 
                    If mobile menu is strictly needed, we can rely on standard CSS media queries or previous modules.
                    I'll stick to a simple clean layout. 
                */}
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                }
            `}</style>
        </nav>
    );
}
