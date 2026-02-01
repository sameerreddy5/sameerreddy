'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Sameer Reddy<span className="text-primary">.</span>
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`}></span>
                </button>

                <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/#resources" onClick={() => setIsOpen(false)}>Resources</Link>
                    <Link href="/#community" onClick={() => setIsOpen(false)}>Community</Link>
                </div>
            </div>
        </nav>
    );
}
