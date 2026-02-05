export default function Footer() {
    return (
        <footer style={{
            padding: '3rem 0',
            borderTop: '1px solid #1f1f1f',
            marginTop: '4rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    sameerreddy.in
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <a href="mailto:contact@sameerreddy.in" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.9rem' }}>contact@sameerreddy.in</a>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', color: 'var(--gray)', fontSize: '0.9rem' }}>
                        <a href="https://t.me/sameerreddyin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gray)', textDecoration: 'none' }}>Telegram</a>
                        <span>•</span>
                        <a href="/media-kit" style={{ color: 'var(--gray)', textDecoration: 'none' }}>Media Kit</a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/tamalampudi-sameer-reddy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gray)', textDecoration: 'none' }}>LinkedIn</a>
                    </div>
                </div>
                <p style={{ color: '#fff', fontWeight: 500 }}>
                    No noise. Only growth.
                </p>
                <div style={{ color: '#444', fontSize: '0.8rem', marginTop: '2rem' }}>
                    &copy; {new Date().getFullYear()} Sameer Reddy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
