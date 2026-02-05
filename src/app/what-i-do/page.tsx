import Link from "next/link";

const ServiceCard = ({ title, icon, description, tags }: { title: string, icon: string, description: string, tags: string[] }) => (
    <div className="card" style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.05)',
        background: 'linear-gradient(135deg, var(--card-bg) 0%, rgba(31, 170, 89, 0.05) 100%)'
    }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((tag, i) => (
                <span key={i} style={{
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.8rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '50px',
                    color: 'var(--accent)'
                }}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default function WhatIDo() {
    return (
        <div className="page-container animate-fade-in">
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '2rem' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
                    What I Do
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Bridging the gap between creativity and technology. Practical strategies for the modern creator.
                </p>
            </div>

            {/* Services Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                <ServiceCard
                    icon="🎥"
                    title="Instagram Storytelling"
                    description="I teach you how to create short-form content that educates, simplifies, and builds trust. My focus is on Telugu-first storytelling reels that explain complex growth and tech concepts."
                    tags={['Scripting', 'Retention', 'Connection']}
                />
                <ServiceCard
                    icon="🛠️"
                    title="Creator Tools"
                    description="Stop guessing and start using the right tech stack. I provide practical guides on the AI and editing tools that power efficient, modern content creation workflows."
                    tags={['CapCut', 'AI Voice', 'Productivity']}
                />
                <ServiceCard
                    icon="🗺️"
                    title="Learning Paths"
                    description="Structured roadmaps to remove confusion. I break down the journey from zero to creator into manageable steps, ensuring you never feel overwhelmed."
                    tags={['Roadmaps', 'Strategy', 'Zero to One']}
                />
            </div>

            {/* CTA Section */}
            <div className="card" style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'linear-gradient(180deg, rgba(31, 170, 89, 0.1) 0%, rgba(0,0,0,0) 100%)',
                border: '1px solid var(--accent)'
            }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                    Ready to accelerate your growth?
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                    Join a session where we turn these concepts into a tailored plan for you.
                </p>
                <Link href="/sessions" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                    Get Personal Guidance
                </Link>
            </div>

        </div>
    );
}
