import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h3>Sameer Reddy<span className="text-primary">.in</span></h3>
                    <p className={styles.quote}>"No noise. Only growth."</p>
                </div>
                <div className={styles.socials}>
                    <a href="mailto:contact@sameerreddy.in">contact@sameerreddy.in</a>
                    <a href="https://instagram.com/sameerreddy.in" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://t.me/sameerreddyin" target="_blank" rel="noopener noreferrer">Telegram</a>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Sameer Reddy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
