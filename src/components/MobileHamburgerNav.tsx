'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileHamburgerNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', path: '/' },
        { name: 'What I Do', path: '/what-i-do' },
        { name: '1:1 Sessions', path: '/sessions' },
        { name: 'About', path: '/about' },
        { name: 'Media Kit', path: '/media-kit' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '60px',
                backgroundColor: 'rgba(15, 15, 15, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
                zIndex: 1000,
            }} className="mobile-nav">

                <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                    Sameer Reddy<span style={{ color: 'var(--accent)' }}>.</span>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
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
                top: '60px',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'var(--bg)',
                zIndex: 999,
                padding: '2rem 1.5rem',
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                overflowY: 'auto'
            }} className="mobile-nav">
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
        @media (min-width: 1024px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
        </>
    );
}
