import Link from "next/link";

export default function Pricing() {
    return (
        <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem', maxWidth: '900px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>Simple Pricing</h1>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '3rem' }}>
                Clarity shouldn't be complicated. Pick the time you need.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Tier 1 */}
                <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Quick Call</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>₹50</div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>10 Minutes</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Perfect for 1-2 specific questions.</p>
                    <Link href="/sessions" className="btn btn-primary" style={{ width: '100%' }}>Book Now</Link>
                </div>

                {/* Tier 2 */}
                <div className="card" style={{ textAlign: 'center', padding: '2rem', border: '1px solid var(--accent)' }}>
                    <div style={{ background: 'var(--accent)', color: '#fff', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '0.5rem', fontWeight: 600 }}>POPULAR</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Standard Session</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>₹100</div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>20 Minutes</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Profile review + Strategy.</p>
                    <Link href="/sessions" className="btn btn-primary" style={{ width: '100%' }}>Book Now</Link>
                </div>

                {/* Tier 3 */}
                <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Deep Dive</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>₹150</div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>30 Minutes</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Full roadmap & detailed audit.</p>
                    <Link href="/sessions" className="btn btn-primary" style={{ width: '100%' }}>Book Now</Link>
                </div>
            </div>

            {/* Disclaimer */}
            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
                <p><strong>Disclaimer:</strong> I offer clarity, strategy, and tools based on my experience. Growth depends on your consistent execution. I do not guarantee specific follower numbers.</p>
            </div>
        </div>
    );
}
