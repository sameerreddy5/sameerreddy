'use client';

import { useEffect } from 'react';

interface AdBannerProps {
    dataAdSlot: string;
    dataAdFormat?: 'auto' | 'fluid' | 'rectangle';
    dataFullWidthResponsive?: boolean;
}

export default function AdBanner({
    dataAdSlot,
    dataAdFormat = 'auto',
    dataFullWidthResponsive = true
}: AdBannerProps) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div style={{ margin: '2rem 0', textAlign: 'center', minHeight: '100px', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', overflow: 'hidden' }}>
            <p style={{ fontSize: '0.8rem', color: '#ccc' }}>Advertisement</p>
            {/* Replace this placeholder with actual ins tag when live */}
            {/* 
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" 
                data-ad-slot={dataAdSlot}
                data-ad-format={dataAdFormat}
                data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}></ins>
            */}
        </div>
    );
}
