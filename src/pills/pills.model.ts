import * as mongoose from 'mongoose';

export const PillsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    timeOfIntake: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
});

export interface Pills extends mongoose.Document {
    name: string;
    quantity: number;
    timeOfIntake: string;
    startDate: string;
    endDate: string;
}
