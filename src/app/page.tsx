import Link from 'next/link';
import Image from 'next/image';

// Component: HeroCard
const HeroCard = () => (
    <div className="card animate-scale-in" style={{
        marginBottom: '2rem',
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, var(--card-bg) 0%, rgba(31, 170, 89, 0.08) 100%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        alignItems: 'center'
    }}>
        {/* Text Content */}
        <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Dashboard
            </h2>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                Tamalampudi <br />
                <span style={{ color: 'var(--text-muted)' }}>Sameer Reddy</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 500, marginBottom: '1.5rem', marginTop: '1rem' }}>
                Instagram Growth, AI & Smart Tech
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '2rem', lineHeight: 1.6 }}>
                Helping creators grow with clarity, discipline, and practical tools. No noise. Only growth.
            </p>
            <Link href="/sessions" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
                Book a 1:1 Session
            </Link>
        </div>

        {/* Profile Image */}
        <div style={{ display: 'flex', justifyContent: 'center', order: -1 }} className="hero-image-container">
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '300px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(31, 170, 89, 0.2)',
                boxShadow: '0 0 40px rgba(31, 170, 89, 0.15)'
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

        <style jsx>{`
            @media (min-width: 768px) {
                .hero-image-container { order: 1 !important; justify-content: flex-end !important; }
            }
        `}</style>
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
        transition: 'transform 0.2s, border-color 0.2s',
        padding: '2rem'
    }}>
        <div>
            <div style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--accent)',
                background: 'rgba(31, 170, 89, 0.1)',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                {title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {description}
            </p>
        </div>
        <div style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Explore <span style={{ transition: 'transform 0.2s' }}>&rarr;</span>
        </div>
    </Link>
);

// Component: StatsStrip
const StatsStrip = () => (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'space-between',
        marginBottom: '3rem',
        padding: '2rem',
        background: 'var(--card-bg)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.05)'
    }}>
        <div style={{ textAlign: 'center', flex: '1 1 150px' }}>
            <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Millions+</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reels Reach</span>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 150px', borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Community</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Driven Growth</span>
        </div>
        <div style={{ textAlign: 'center', flex: '1 1 150px' }}>
            <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>1:1 Sessions</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Helped Creators</span>
        </div>
    </div>
);

// Component: ActionPanel
const ActionPanel = () => (
    <div className="card" style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem',
        border: '1px solid rgba(31, 170, 89, 0.3)',
        background: 'linear-gradient(180deg, rgba(31, 170, 89, 0.05) 0%, rgba(0,0,0,0) 100%)'
    }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            Need clarity on your Instagram growth?
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Book a 1:1 session to audit your profile, fix your content strategy, and build a system that works.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/sessions" className="btn btn-primary">
                Book a Session
            </Link>
            <Link href="/what-i-do" className="btn" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                See What I Do
            </Link>
        </div>
    </div>
);

export default function Dashboard() {
    return (
        <div className="page-container animate-fade-in">

            <HeroCard />

            <StatsStrip />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>Focus Areas</h3>
                <Link href="/what-i-do" style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>View All &rarr;</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                <FocusCard
                    title="Instagram Storytelling"
                    description="Master the art of short-form content that educates and retains."
                    link="/what-i-do"
                    icon="📱"
                />
                <FocusCard
                    title="Creator Tools"
                    description="CapCut, AI voiceovers, and efficient editing workflows."
                    link="/what-i-do"
                    icon="⚡"
                />
                <FocusCard
                    title="Learning Paths"
                    description="Step-by-step roadmaps for beginners to start growing."
                    link="/what-i-do"
                    icon="🎓"
                />
            </div>

            <ActionPanel />

        </div>
    );
}
