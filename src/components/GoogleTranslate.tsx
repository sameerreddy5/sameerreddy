'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: any;
    }
}

export default function GoogleTranslate() {
    useEffect(() => {
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'en,te,hi,ta',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                },
                'google_translate_element'
            );
        };

        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if necessary, though Google Translate persists
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                .goog-te-gadget-simple {
                    background-color: #f5f5f5 !important;
                    border: 1px solid #e5e5e5 !important;
                    padding: 8px 12px !important;
                    border-radius: 8px !important;
                    font-family: inherit !important;
                    cursor: pointer;
                }
                .goog-te-gadget-simple img {
                    display: none !important; /* Hide Google Icon */
                }
                .goog-te-menu-value {
                    color: var(--primary) !important;
                    font-weight: 600 !important;
                }
                .goog-te-menu-value span {
                    border-left: none !important;
                    color: var(--gray-800) !important;
                }
                .goog-te-banner-frame {
                    display: none !important;
                }
                body {
                    top: 0px !important;
                }
            `}</style>
            <div id="google_translate_element" style={{ marginBottom: '1rem' }}></div>
        </>
    );
}
