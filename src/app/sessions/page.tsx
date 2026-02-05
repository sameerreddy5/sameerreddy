import Link from "next/link";


export default function Sessions() {
    return (
        <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem', maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>1:1 Instagram Clarity Sessions</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                    Fix your reach, clear your confusion, and build a growth system.
                </p>
            </div>

            <div className="card" style={{ marginBottom: '3rem', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Who is this for?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div>
                        <span style={{ color: 'var(--accent)', fontSize: '1.5rem', marginRight: '0.5rem' }}>✓</span>
                        <strong style={{ color: '#fff' }}>Beginners</strong>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.25rem' }}>Confused about where to start.</p>
                    </div>
                    <div>
                        <span style={{ color: 'var(--accent)', fontSize: '1.5rem', marginRight: '0.5rem' }}>✓</span>
                        <strong style={{ color: '#fff' }}>Stuck Creators</strong>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.25rem' }}>Views are low & growth has stalled.</p>
                    </div>
                    <div>
                        <span style={{ color: 'var(--accent)', fontSize: '1.5rem', marginRight: '0.5rem' }}>✓</span>
                        <strong style={{ color: '#fff' }}>Tech Curious</strong>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.25rem' }}>Want to master AI & editing tools.</p>
                    </div>
                </div>
            </div>

            {/* Booking Iframe */}
            <div style={{ width: '100%', minHeight: '100vh', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe
                    src="https://cosmofeed.com/bookings/sameerreddy"
                    style={{ width: '100%', height: '100vh', border: 'none' }}
                    title="Book a Session"
                />
            </div>

        </div>
    );
}
