import mongoose, {Schema} from "mongoose";

const workoutSchema = new Schema({
    categoryId: { type: String, },
    workout: { type: String, },
    description: { type: String, },
    duration: { type: String, },
}, { timestamps: true });

export const Workout = mongoose.model('Workout', workoutSchema);