import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="page-container animate-fade-in">

            {/* Hero Section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    marginBottom: '1.5rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--accent)',
                    boxShadow: '0 0 20px rgba(31, 170, 89, 0.2)'
                }}>
                    {/* Using the image extracted from the booking page metadata */}
                    <Image
                        src="https://picasso.cosmofeed.com/picture-profile.s3-ap-south-1.amazonaws.com/my_image1770277973-2026-05-02-07-52-54.png?w=600&&q=100"
                        alt="Tamalampudi Sameer Reddy"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                    Tamalampudi Sameer Reddy
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
                    Helping creators grow with clarity, discipline, and no noise.
                </p>
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                {/* Column 1: Background & Location */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <section className="card" style={{ height: '100%' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                            Based In
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: 1.6 }}>
                            📍 Ubalanka, Konaseema District,<br />
                            Andhra Pradesh 533237
                        </p>
                    </section>

                    <section className="card" style={{ height: '100%' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                            Academic Background
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>IIIT Senapati, Manipur</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Final-year CSE Student</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--accent)', marginTop: '0.25rem' }}>Institute of National Importance</div>
                            </li>
                            <li>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>IIT Ropar</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Research Intern under Dr. Sudarshan Iyengar</div>
                            </li>
                            <li>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>IASc–INSA–NASI</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Summer Research Fellow 2025</div>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Column 2: Philosophy */}
                <section className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem', textAlign: 'center' }}>
                        My Philosophy
                    </h3>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Systems over Randomness</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                Growth isn't about getting lucky once. It's about building a repeatable process that works.
                            </p>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Clarity over Confusion</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                I strip away the complex jargon. If you can't understand it, you can't execute it.
                            </p>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Discplined Growth</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                Motivation fades. Discipline lasts. I help you build the habits that keep you growing.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Ready to build your growth system?</h2>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/sessions" className="btn btn-primary">
                        Book a Session
                    </Link>
                    <Link href="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                        Contact Me
                    </Link>
                </div>
            </div>

        </div>
    );
}
