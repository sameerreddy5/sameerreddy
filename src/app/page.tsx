import Link from 'next/link';
import Image from 'next/image';

// Component: HeroCard
const HeroCard = () => (
    <div className="card animate-scale-in" style={{
        marginBottom: '3rem',
        padding: '3rem',
        background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.9) 0%, rgba(31, 170, 89, 0.05) 100%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.03)'
    }}>
        {/* Subtle Background Glow */}
        <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(31, 170, 89, 0.1) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
            zIndex: 0
        }}></div>

        {/* Text Content */}
        <div style={{ textAlign: 'left', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.2rem', marginBottom: '1.2rem', textTransform: 'uppercase', opacity: 0.9 }}>
                Dashboard
            </h2>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem', color: '#fff' }}>
                Tamalampudi <br />
                <span style={{
                    background: 'linear-gradient(90deg, #fff 0%, var(--text-muted) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>Sameer Reddy</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.5rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span> Instagram Growth & Tech
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Helping creators grow with clarity, discipline, and practical tools. <br />
                <span style={{ color: '#fff' }}>No noise. Only growth.</span>
            </p>
            <Link href="/sessions" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', borderRadius: '50px' }}>
                Book a 1:1 Session
            </Link>
        </div>

        {/* Profile Image */}
        <div style={{ display: 'flex', justifyContent: 'center', order: -1 }} className="hero-image-container">
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}>
                <Image
                    src="https://picasso.cosmofeed.com/picture-profile.s3-ap-south-1.amazonaws.com/my_image1770277973-2026-05-02-07-52-54.png?w=600&&q=100"
                    alt="Tamalampudi Sameer Reddy"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
        </div>
    </div>
);

// Component: FocusCard
const FocusCard = ({ title, description, link, icon }: { title: string, description: string, link: string, icon: string }) => (
    <Link href={link} className="card focus-card" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        height: '100%',
        transition: 'background 0.3s, transform 0.3s',
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        border: '1px solid rgba(255,255,255,0.05)'
    }}>
        <div>
            <div style={{
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
                color: 'var(--accent)',
                background: 'rgba(31, 170, 89, 0.1)',
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                border: '1px solid rgba(31, 170, 89, 0.2)'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>
                {title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {description}
            </p>
        </div>
        <div style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
            Explore <span style={{ transition: 'transform 0.2s' }}>&rarr;</span>
        </div>
    </Link>
);

// Component: StatsStrip removed per user request for simplification

// Component: ActionPanel
const ActionPanel = () => (
    <div className="card" style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        marginBottom: '4rem',
        border: '1px solid rgba(31, 170, 89, 0.2)',
        background: 'linear-gradient(180deg, rgba(31, 170, 89, 0.08) 0%, rgba(0,0,0,0) 100%)',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(31, 170, 89, 0.15) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
        }}></div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.25rem', color: '#fff', position: 'relative', zIndex: 1 }}>
            Ready to stop guessing?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem', position: 'relative', zIndex: 1, fontSize: '1.1rem' }}>
            Book a 1:1 session to audit your profile, fix your content strategy, and build a system that works.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <Link href="/sessions" className="btn btn-primary" style={{ padding: '1rem 3rem', borderRadius: '50px' }}>
                Book a Session
            </Link>
            <Link href="/what-i-do" className="btn" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '1rem 3rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
                See What I Do
            </Link>
        </div>
    </div>
);

export default function Dashboard() {
    return (
        <div className="page-container animate-fade-in">

            <HeroCard />


            {/* Direct Value Proposition */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    I bridge the gap between <span style={{ color: 'var(--accent)' }}>confusion</span> and <span style={{ color: 'var(--accent)' }}>clarity</span>.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>Focus Areas</h3>
                <Link href="/what-i-do" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>View All &rarr;</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                <FocusCard
                    title="Instagram Storytelling"
                    description="Learn to create short videos that actually connect with people."
                    link="/what-i-do"
                    icon="📱"
                />
                <FocusCard
                    title="Creator Tools"
                    description="The best AI & editing tools you need to speed up your work."
                    link="/what-i-do"
                    icon="⚡"
                />
                <FocusCard
                    title="Learning Paths"
                    description="Step-by-step guides for beginners. Start from zero."
                    link="/what-i-do"
                    icon="🎓"
                />
            </div>

            <ActionPanel />

        </div>
    );
}
