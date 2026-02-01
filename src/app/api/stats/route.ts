import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const statsPath = path.join(process.cwd(), 'data', 'stats.json');

// In-memory cache to prevent blocking IO on every request
let statsCache: { visitors: string[], count: number } | null = null;
let lastSave = 0;
const SAVE_INTERVAL = 10000; // Save max once every 10 seconds

function getStats() {
    if (statsCache) return statsCache;

    if (!fs.existsSync(statsPath)) {
        statsCache = { visitors: [], count: 0 };
        return statsCache;
    }
    const fileData = fs.readFileSync(statsPath, 'utf8');
    try {
        statsCache = JSON.parse(fileData);
        return statsCache;
    } catch (e) {
        return { visitors: [], count: 0 };
    }
}

function saveStats(stats: any) {
    // Only write to disk if interval passed
    const now = Date.now();
    if (now - lastSave > SAVE_INTERVAL) {
        fs.writeFile(statsPath, JSON.stringify(stats, null, 2), (err) => {
            if (!err) lastSave = now;
        });
    }
}

export async function POST(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const stats = getStats()!; // Cache is populated

    // Logic: In high traffic, we simplify. 
    // real unique-IP tracking for 10k users in a JSON array is slow (O(N) search).
    // For extreme performance, we trust the Set slightly or just increment.
    // Here we stick to simple array but in memory it's fast enough for <100k.

    if (!stats.visitors.includes(ip)) {
        stats.visitors.push(ip);
        stats.count++;
        saveStats(stats);
    }

    return NextResponse.json({ count: stats.count });
}

export async function GET() {
    const stats = getStats();
    // Default to 0 if null, though getStats handles it above
    const count = stats ? stats.count : 0;
    return NextResponse.json({ count });
}
