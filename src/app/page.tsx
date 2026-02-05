
import Link from 'next/link';

// Component: HeroCard
const HeroCard = () => (
    <div className="card animate-scale-in" style={{
        marginBottom: '2rem',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--card-bg) 0%, rgba(31, 170, 89, 0.05) 100%)'
    }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            DASHBOARD
        </h2>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            Tamalampudi Sameer Reddy
        </h1>
        <h2 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>
            Instagram Growth, AI & Smart Tech
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Helping creators grow with clarity, discipline, and practical tools.
        </p>
        <Link href="/sessions" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Book a 1:1 Session
        </Link>
    </div>
);

// Component: FocusCard
const FocusCard = ({ title, description, link }: { title: string, description: string, link: string }) => (
    <Link href={link} className="card focus-card" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textDecoration: 'none',
        height: '100%'
    }}>
        <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>
                {title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {description}
            </p>
        </div>
        <div style={{ marginTop: '1.5rem', fontSize: '1.25rem', color: 'var(--accent)', textAlign: 'right' }}>
            &rarr;
        </div>
    </Link>
);

// Component: StatsStrip
const StatsStrip = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Millions+</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Reels Reach</span>
        </div>
        <div style={{ width: '1px', height: '40px', background: 'var(--border)', display: 'none' /* hidden on mobile typically, can add media query */ }} className="desktop-only"></div>
        <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Community</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Driven Growth</span>
        </div>
        <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>1:1 Sessions</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Helped Creators</span>
        </div>
    </div>
);

// Component: TrustPanel
const TrustPanel = () => (
    <div className="card animate-slide-up" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
            Trust Snapshot
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent)' }}>●</span> Millions of organic Instagram views
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent)' }}>●</span> Academic + creator background
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent)' }}>●</span> Practical, tested guidance
            </li>
        </ul>
    </div>
);

// Component: ActionPanel
const ActionPanel = () => (
    <div className="card" style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem',
        border: '1px solid var(--accent)',
        backgroundColor: 'rgba(31, 170, 89, 0.05)'
    }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
            Need clarity on your Instagram growth?
        </h2>
        <Link href="/sessions" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
            Book a Session
        </Link>
    </div>
);

export default function Dashboard() {
    return (
        <div className="page-container animate-fade-in">

            <HeroCard />

            <StatsStrip />

            <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>Focus Areas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <FocusCard
                    title="Instagram Storytelling"
                    description="Master the art of short-form content."
                    link="/what-i-do"
                />
                <FocusCard
                    title="Creator Tools"
                    description="CapCut, AI voiceovers, and workflows."
                    link="/what-i-do"
                />
                <FocusCard
                    title="Learning Paths"
                    description="Step-by-step roadmaps for growth."
                    link="/what-i-do"
                />
            </div>

            <TrustPanel />

            <ActionPanel />

        </div>
    );
}
