import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
});

export interface User extends mongoose.Document {
    id: string;
    userId: string;
}
