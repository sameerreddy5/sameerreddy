'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

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
        <aside style={{
            width: '280px',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            backgroundColor: 'var(--card-bg)',
            borderRight: '1px solid var(--border)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
        }} className="sidebar">

            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    Sameer Reddy<span style={{ color: 'var(--accent)' }}>.</span>
                </h1>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Digital Storyteller
                </p>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            style={{
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                color: isActive ? '#fff' : 'var(--text-muted)',
                                backgroundColor: isActive ? 'rgba(31, 170, 89, 0.1)' : 'transparent',
                                fontWeight: isActive ? 600 : 500,
                                borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                                transition: 'all 0.2s'
                            }}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    &copy; {new Date().getFullYear()} Sameer Reddy
                </p>
            </div>

            <style jsx global>{`
        @media (max-width: 1023px) {
          .sidebar { display: none !important; }
        }
      `}</style>
        </aside>
    );
}
