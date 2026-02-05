import Link from "next/link";


export default function Sessions() {
    return (
        <div className="page-container animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.2' }}>
                    1:1 Instagram Clarity Sessions
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    Stop guessing. Let's build a clear, actionable growth plan tailored to you.
                </p>
            </div>

            <div className="card" style={{ marginBottom: '4rem', padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '2rem', color: '#fff', textAlign: 'center' }}>
                    Who is this for?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent)' }}>🌱</span> Beginners
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.5' }}>
                            You have an idea but don't know where to start. We'll define your niche and first steps.
                        </p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent)' }}>🛑</span> Stuck Creators
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.5' }}>
                            You're posting but not growing. We'll audit your content and fix the leaks.
                        </p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent)' }}>🚀</span> Tech Curious
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.5' }}>
                            You want to edit faster and better. We'll set up your AI & CapCut workflow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Iframe - Fixed Height to prevent internal scrolling */}
            <div style={{ width: '100%', borderRadius: '12px' }}>
                <iframe
                    src="https://cosmofeed.com/bookings/sameerreddy"
                    style={{ width: '100%', height: '1600px', border: 'none' }}
                    title="Book a Session"
                />
            </div>

        </div>
    );
}
