import mongoose, { Schema, model, models } from 'mongoose';

const VisitorSchema = new Schema({
    ip: { type: String, required: true, unique: true },
    lastVisit: { type: Date, default: Date.now }
});

// We can just store a counter document too if IPs are too many, but storing IPs lets us count UNIQUE visitors.
// Let's create a separate schema for the Counter if needed, but for now we tracked IPs in JSON.
// Better for DB: "Visitor" collection.

// Also a singleton "GlobalStats"
const GlobalStatsSchema = new Schema({
    name: { type: String, default: 'main' },
    count: { type: Number, default: 0 }
});

export const Visitor = models.Visitor || model('Visitor', VisitorSchema);
export const GlobalStats = models.GlobalStats || model('GlobalStats', GlobalStatsSchema);
