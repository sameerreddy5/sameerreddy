
const ContactCard = ({ title, value, link, icon }: { title: string, value: string, link: string, icon: string }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card animate-scale-in" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 2rem',
        textAlign: 'center',
        textDecoration: 'none',
        height: '100%',
        transition: 'transform 0.2s, var(--accent) 0.2s'
    }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>{value}</p>
        <div style={{
            color: 'var(--accent)',
            fontSize: '0.9rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(31, 170, 89, 0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '50px'
        }}>
            Connect Now &rarr;
        </div>
    </a>
);

export default function Contact() {
    return (
        <div className="page-container animate-fade-in">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                    Get in Touch
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
                    Have a question, collaboration idea, or just want to say hi? I'm always open to connecting.
                </p>
            </div>

            {/* Contact Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto 4rem' }}>
                <ContactCard
                    icon="📧"
                    title="Email"
                    value="contact@sameerreddy.in"
                    link="mailto:contact@sameerreddy.in"
                />
                <ContactCard
                    icon="✈️"
                    title="Telegram"
                    value="t.me/sameerreddyin"
                    link="https://t.me/sameerreddyin"
                />
                <ContactCard
                    icon="💼"
                    title="LinkedIn"
                    value="Tamalampudi Sameer Reddy"
                    link="https://www.linkedin.com/in/tamalampudi-sameer-reddy/"
                />
            </div>

            {/* Direct Message Note */}
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.8 }}>
                <p>I usually respond within 24 hours.</p>
            </div>

        </div>
    );
}
