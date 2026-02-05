'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navStyle = {
        padding: '1rem 0',
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(15, 15, 15, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: 500,
        opacity: 0.9,
        transition: 'color 0.2s'
    };

    const mobileMenuStyle = {
        position: 'fixed' as const,
        top: '60px',
        left: 0,
        right: 0,
        backgroundColor: '#0F0F0F',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '1.5rem',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column' as const,
        gap: '1.5rem',
        zIndex: 999
    };

    const hamburgerStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'space-between',
        width: '24px',
        height: '18px',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0
    };

    const barStyle = {
        width: '100%',
        height: '2px',
        backgroundColor: '#fff',
        borderRadius: '2px',
        transition: 'all 0.3s ease'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" onClick={() => setIsOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
                    Sameer Reddy<span style={{ color: 'var(--primary)' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/#what-i-do" style={linkStyle}>What I Do</Link>
                    <Link href="/#booking" style={linkStyle}>1:1 Session</Link>
                    <Link href="/about" style={linkStyle}>About</Link>
                    <Link href="/#connect" style={linkStyle}>Connect</Link>
                    <Link href="/media-kit" style={linkStyle}>Media Kit</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu" style={hamburgerStyle}>
                    <span style={{ ...barStyle, transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                    <span style={{ ...barStyle, opacity: isOpen ? 0 : 1 }}></span>
                    <span style={{ ...barStyle, transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className="mobile-menu" style={mobileMenuStyle}>
                <Link href="/#what-i-do" onClick={toggleMenu} style={{ ...linkStyle, fontSize: '1.1rem' }}>What I Do</Link>
                <Link href="/#booking" onClick={toggleMenu} style={{ ...linkStyle, fontSize: '1.1rem' }}>1:1 Session</Link>
                <Link href="/about" onClick={toggleMenu} style={{ ...linkStyle, fontSize: '1.1rem' }}>About</Link>
                <Link href="/#connect" onClick={toggleMenu} style={{ ...linkStyle, fontSize: '1.1rem' }}>Connect</Link>
                <Link href="/media-kit" onClick={toggleMenu} style={{ ...linkStyle, fontSize: '1.1rem' }}>Media Kit</Link>
            </div>

            <style jsx>{`
                @media (min-width: 769px) {
                    .mobile-toggle, .mobile-menu {
                        display: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: flex !important;
                    }
                }
            `}</style>
        </nav>
    );
}
