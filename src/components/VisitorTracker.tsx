'use client';
import { useEffect } from 'react';

export default function VisitorTracker() {
    useEffect(() => {
        fetch('/api/stats', { method: 'POST' });
    }, []);
    return null;
}
