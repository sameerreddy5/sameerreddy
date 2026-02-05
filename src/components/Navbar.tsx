'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', path: '/' },
        { name: 'What I Do', path: '/what-i-do' },
        { name: '1:1 Sessions', path: '/sessions' },
        { name: 'About', path: '/about' },
        { name: 'Media Kit', path: '/media-kit' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '70px',
                backgroundColor: 'rgba(15, 15, 15, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 5%', // Responsive padding
                zIndex: 1000,
            }}>

                {/* Logo */}
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                    Sameer Reddy<span style={{ color: 'var(--accent)' }}>.</span>
                </Link>

                {/* Desktop Links (Hidden on Mobile) */}
                <div className="desktop-links" style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: isActive ? 600 : 500,
                                    color: isActive ? '#fff' : 'var(--text-muted)',
                                    transition: 'color 0.2s',
                                    position: 'relative',
                                    paddingBottom: '0.25rem'
                                }}
                            >
                                {item.name}
                                {isActive && (
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: '0',
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--accent)',
                                        boxShadow: '0 0 10px var(--accent)',
                                        borderRadius: '2px'
                                    }} />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Hamburger (Hidden on Desktop) */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'none', // Hidden by default, shown via CSS
                        flexDirection: 'column',
                        gap: '5px',
                        padding: '0.5rem',
                    }}
                    aria-label="Toggle Menu"
                >
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#fff', transition: '0.3s', opacity: isOpen ? 0 : 1 }}></span>
                    <span style={{ width: '24px', height: '2px', backgroundColor: '#fff', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
                </button>

            </nav>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: '70px',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'var(--bg)',
                zIndex: 999,
                padding: '2rem',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                overflowY: 'auto'
            }} className="mobile-menu-overlay">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: isActive ? 700 : 500,
                                    color: isActive ? 'var(--accent)' : '#fff',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    paddingBottom: '1rem'
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 1023px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
        </>
    );
}
