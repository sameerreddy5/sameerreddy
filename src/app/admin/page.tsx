'use client';

import { useState, useEffect } from 'react';

interface Post {
    id: string;
    title: string;
    content: string;
    link: string;
    type: 'blog' | 'instagram' | 'resource';
    isInstagram?: boolean; // Legacy
    createdAt: string;
}

import RichEditor from '@/components/RichEditor';

export default function AdminDashboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [type, setType] = useState<'blog' | 'instagram' | 'resource'>('resource');
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        fetch('/api/posts', { cache: 'no-store' })
            .then(res => res.json())
            .then(data => setPosts(data));

        // Fetch stats
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => setVisitorCount(data.count));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const method = editingId ? 'PUT' : 'POST';
        const body = {
            title, content, link, type,
            isInstagram: type === 'instagram', // Backwards compat
            id: editingId
        };

        const res = await fetch('/api/posts', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (res.ok) {
            const data = await res.json();
            if (editingId) {
                setPosts(data.posts);
                setEditingId(null);
                alert("Updated successfully!");
            } else {
                setPosts([data.post, ...posts]);
                alert("Created successfully!");
            }

            // Reset form
            setTitle('');
            setContent('');
            setLink('');
            setType('resource');
        } else {
            alert("Failed to save");
        }
        setLoading(false);
    };

    const handleEdit = (post: Post) => {
        setEditingId(post.id);
        setTitle(post.title);
        setContent(post.content);
        setLink(post.link);
        // Determine type if legacy
        if (post.type) {
            setType(post.type);
        } else if (post.isInstagram) {
            setType('instagram');
        } else {
            setType('resource');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this?")) return;

        const res = await fetch('/api/posts', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            setPosts(posts.filter(p => p.id !== id));
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setTitle('');
        setContent('');
        setLink('');
        setType('resource');
    };

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1>Admin Dashboard</h1>
                    <p style={{ marginTop: '0.5rem', color: 'var(--gray-800)' }}>
                        Total Visitors: <strong style={{ color: 'var(--primary)' }}>{visitorCount}</strong>
                    </p>
                </div>
                <a href="/" className="btn" style={{ border: '1px solid #ccc' }}>View Site</a>
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '3rem' }}>
                {/* Create/Edit Form */}
                <div style={{
                    padding: '2rem',
                    border: '1px solid var(--gray-200)',
                    borderRadius: '12px',
                    height: 'fit-content',
                    position: 'sticky',
                    top: '2rem',
                    background: 'white'
                }}>
                    <h2>{editingId ? 'Edit Item' : 'Add New Item'}</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Type</label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value as any)}
                                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100%' }}
                            >
                                <option value="resource">Resource (Link Card)</option>
                                <option value="blog">Blog Post (Article)</option>
                                <option value="instagram">Instagram Video</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />

                        {/* ... inside component ... */}

                        {type !== 'instagram' && (
                            type === 'blog' ? (
                                <RichEditor value={content} onChange={setContent} />
                            ) : (
                                <textarea
                                    placeholder="Short description..."
                                    rows={4}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }}
                                />
                            )
                        )}

                        {type !== 'blog' && (
                            <input
                                type="text"
                                placeholder={type === 'instagram' ? "Instagram Post URL" : "Resource Link URL"}
                                value={link}
                                required={type === 'instagram'}
                                onChange={(e) => setLink(e.target.value)}
                                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                        )}

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button type="submit" className="btn btn-primary" disabled={loading} style={{ flex: 1 }}>
                                {loading ? 'Saving...' : (editingId ? 'Update' : 'Publish')}
                            </button>
                            {editingId && (
                                <button type="button" onClick={handleCancelEdit} className="btn" style={{ background: '#ccc' }}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* List of Posts */}
                <div>
                    <h2>All Content</h2>
                    <div style={{ marginTop: '1rem', display: 'grid', gap: '1rem' }}>
                        {posts.map(post => {
                            const postType = post.type || (post.isInstagram ? 'instagram' : 'resource');
                            return (
                                <div key={post.id} style={{
                                    padding: '1rem',
                                    backgroundColor: 'var(--gray-100)',
                                    borderRadius: '8px',
                                    borderLeft: editingId === post.id ? '4px solid var(--primary)' : '4px solid transparent'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{post.title}</h3>
                                        <span style={{
                                            fontSize: '0.7rem',
                                            padding: '2px 8px',
                                            borderRadius: '4px',
                                            color: 'white',
                                            background: postType === 'instagram' ? '#E1306C' : (postType === 'blog' ? '#2563eb' : '#059669')
                                        }}>
                                            {postType.toUpperCase()}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {post.content}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                                        <button
                                            onClick={() => handleEdit(post)}
                                            style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'var(--gray-800)', color: 'white', borderRadius: '4px' }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: '#ef4444', color: 'white', borderRadius: '4px' }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                        {posts.length === 0 && <p>No posts yet.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
