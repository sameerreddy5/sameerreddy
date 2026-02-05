import Link from "next/link";

export default function MediaKit() {
    return (
        <div className="page-container animate-fade-in">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Media Kit</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Collaborate with Sameer Reddy.</p>

            {/* Creator Overview */}
            <section className="card" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Creator Overview
                </h2>
                <div style={{ display: 'grid', gap: '0.5rem', color: 'var(--text-muted)' }}>
                    <p><strong style={{ color: '#fff' }}>Name:</strong> Tamalampudi Sameer Reddy</p>
                    <p><strong style={{ color: '#fff' }}>Niche:</strong> Instagram Growth, AI Tools & Smart Tech</p>
                    <p><strong style={{ color: '#fff' }}>Language:</strong> Telugu + English</p>
                    <p><strong style={{ color: '#fff' }}>Primary Platform:</strong> Instagram</p>
                </div>
            </section>

            {/* Content & Audience */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <section className="card">
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
                        Content
                    </h2>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.2rem' }}>
                        <li>Educational Reels</li>
                        <li>Tech Tutorials (AI, Editing)</li>
                        <li>Growth Strategy breakdowns</li>
                    </ul>
                </section>
                <section className="card">
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
                        Audience
                    </h2>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.2rem' }}>
                        <li>Aspiring Creators</li>
                        <li>Students & Young Professionals</li>
                        <li>Tech Enthusiasts</li>
                    </ul>
                </section>
            </div>

            {/* Contact */}
            <section className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Ready to Collaborate?
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    For brand promotions, workshops, and partnerships.
                </p>
                <a href="mailto:contact@sameerreddy.in" className="btn btn-primary">
                    contact@sameerreddy.in
                </a>
            </section>
        </div>
    );
}
