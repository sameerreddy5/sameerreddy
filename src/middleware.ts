import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Protect Admin Pages
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const token = request.cookies.get('admin_token');
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // 2. Protect API Mutations (POST, PUT, DELETE)
    // We allow GET /api/posts (public), but block modifications
    if (pathname.startsWith('/api/posts')) {
        if (request.method !== 'GET') {
            const token = request.cookies.get('admin_token');
            if (!token) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/api/posts', // Match API routes to inspect method
    ],
};
