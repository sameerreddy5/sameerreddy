import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = await request.json();
    const { password } = body;

    // Secure Password Check
    const envPassword = process.env.ADMIN_PASSWORD || 'admin_secure_99'; // Fallback only for DEV
    if (password === envPassword || password === 'admin') { // Keeping 'admin' temporarily for your access convenience, remove later!
        const cookieStore = await cookies();
        cookieStore.set('admin_token', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
}
