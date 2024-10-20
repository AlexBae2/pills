import * as mongoose from 'mongoose';

export const SubscriptionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    subscription: { type: Object, required: true },
});

export interface Subscription extends mongoose.Document {
    userId: string;
    subscription: {
        endpoint: string;
        keys: {
            p256dh: string;
            auth: string;
        };
    };
}
