import Link from "next/link";

export default function About() {
    return (
        <div className="container animate-fade-in" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>About Me</h1>

            <div className="card" style={{ padding: '2.5rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: 1.6, marginBottom: '2rem' }}>
                    I’m <strong>Tamalampudi Sameer Reddy</strong>. <br />
                    I help creators grow with clarity, discipline, and no noise.
                </p>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem' }}>
                    Academic Background
                </h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        🎓 Final-year CSE Student at <strong>IIIT Senapati, Manipur</strong>
                        <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>(Institute of National Importance)</div>
                    </li>
                    <li>
                        🔬 <strong>IASc–INSA–NASI Summer Research Fellow 2025</strong>
                    </li>
                    <li>
                        Item Worked under <strong>Dr. Sudarshan Iyengar</strong> at <strong>IIT Ropar</strong>
                    </li>
                </ul>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem' }}>
                    My Philosophy
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    I believe that growth is not about lucky viral hacks. It's about:
                </p>
                <ul style={{ color: '#fff', lineHeight: 1.6, paddingLeft: '1.2rem', marginBottom: '2rem' }}>
                    <li><strong>Systems</strong> over random posting.</li>
                    <li><strong>Clarity</strong> over confusion.</li>
                    <li><strong>Disciplined Growth</strong> that lasts.</li>
                </ul>

                <Link href="/contact" className="btn btn-primary">
                    Get in Touch
                </Link>
            </div>
        </div>
    );
}
