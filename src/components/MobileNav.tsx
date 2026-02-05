'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/what-i-do' },
        { name: 'Sessions', path: '/sessions' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '1rem',
            zIndex: 100,
        }} className="mobile-nav">

            {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        style={{
                            color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        {/* Simple indicator dot for active state if no icon */}
                        <span style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                            marginBottom: '2px'
                        }}></span>
                        {item.name}
                    </Link>
                );
            })}

            <style jsx global>{`
        @media (min-width: 1024px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
