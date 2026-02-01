import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Sameer Reddy<span className="text-primary">.</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/about">About</Link>
                    <Link href="/#resources">Resources</Link>
                    <Link href="/#community">Community</Link>
                </div>
            </div>
        </nav>
    );
}
