export default function Contact() {
    return (
        <div className="page-container animate-fade-in">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Contact</h1>

            <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Email */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email</h3>
                        <a href="mailto:contact@sameerreddy.in" style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}>
                            contact@sameerreddy.in
                        </a>
                    </div>

                    {/* Telegram */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Telegram</h3>
                        <a href="https://t.me/sameerreddyin" target="_blank" style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            t.me/sameerreddyin <span style={{ color: 'var(--accent)' }}>&rarr;</span>
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/tamalampudi-sameer-reddy/" target="_blank" style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Connect on LinkedIn <span style={{ color: 'var(--accent)' }}>&rarr;</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
