import Link from "next/link";
import Image from "next/image";

// Component: StatBox
const StatBox = ({ label, value, subtext }: { label: string, value: string, subtext: string }) => (
    <div style={{
        background: 'var(--card-bg)',
        border: '1px solid rgba(255,255,255,0.05)',
        padding: '1.5rem',
        borderRadius: '12px',
        textAlign: 'center'
    }}>
        <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', marginTop: '0.5rem', marginBottom: '0.25rem' }}>{label}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{subtext}</div>
    </div>
);

// Component: DemographicsBar
const DemoBar = ({ label, percent }: { label: string, percent: string }) => (
    <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: '#fff' }}>
            <span>{label}</span>
            <span>{percent}</span>
        </div>
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: percent, height: '100%', background: 'var(--accent)', borderRadius: '3px' }}></div>
        </div>
    </div>
);

export default function MediaKit() {
    return (
        <div className="page-container animate-fade-in">

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '1rem' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    background: 'rgba(31, 170, 89, 0.1)',
                    color: 'var(--accent)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '1rem'
                }}>
                    ● Open for Collaborations
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                    Media Kit
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Partner with a voice that stands for clarity, tech, and disciplined growth.
                </p>
            </div>

            {/* Core Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
                <StatBox label="Reels Reach" value="Wait," subtext="Calculating..." />
                <StatBox label="Niche" value="Tech/AI" subtext="Growth & Tools" />
                <StatBox label="Audience" value="Gen Z" subtext="Students & Pros" />
                <StatBox label="Language" value="Telugu" subtext="+ English" />
            </div>

            {/* Profile & Audience Split */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                {/* Creator Profile */}
                <div className="card" style={{ padding: '2rem', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{
                            position: 'relative', width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden',
                            border: '2px solid var(--accent)'
                        }}>
                            <Image
                                src="https://picasso.cosmofeed.com/picture-profile.s3-ap-south-1.amazonaws.com/my_image1770277973-2026-05-02-07-52-54.png?w=600&&q=100"
                                alt="Sameer Reddy" fill style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Sameer Reddy</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Instagram Creator & Educator</p>
                        </div>
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        I create high-value, no-fluff content for aspiring creators in the Telugu speaking community. My focus is on demystifying complex tech, AI tools, and growth strategies.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.9rem' }}>📚 Educational</div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.9rem' }}>🤖 Tech-First</div>
                    </div>
                </div>

                {/* Demographics */}
                <div className="card" style={{ padding: '2rem', height: '100%' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent)' }}>📊</span> Audience Insights
                    </h3>
                    <DemoBar label="Age 18-24 (Students)" percent="65%" />
                    <DemoBar label="Age 25-34 (Professionals)" percent="25%" />
                    <div style={{ height: '1px', background: 'var(--border)', margin: '1.5rem 0' }}></div>
                    <DemoBar label="Men" percent="75%" />
                    <DemoBar label="Women" percent="25%" />
                </div>
            </div>

            {/* Collaboration Services */}
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
                Ways to Collaborate
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Brand Promotion</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Reels & Stories showcasing your product to a tech-savvy audience.
                    </p>
                </div>
                <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎤</div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Speaker / Workshops</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Sessions on AI, Content Creation, and Personal Branding.
                    </p>
                </div>
                <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Ambassadorship</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Long-term partnerships with brands that align with my values.
                    </p>
                </div>
            </div>

            {/* Contact CTA */}
            <div style={{
                background: 'linear-gradient(90deg, var(--card-bg) 0%, rgba(31, 170, 89, 0.1) 100%)',
                border: '1px solid var(--accent)',
                borderRadius: '12px',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>Let's Work Together</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Send me a detailed brief and I'll get back to you within 24 hours.
                </p>
                <a href="mailto:contact@sameerreddy.in" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                    contact@sameerreddy.in
                </a>
            </div>

        </div>
    );
}
