import mongoose, {Schema} from "mongoose";

const authSchema = new Schema({
    isAdmin: { type: Boolean, default: false },
    email: { type: String, unique: true },
    fullName: { type: String, },
    password: { type: String },
}, { timestamps: true });

export const Auth = mongoose.model('Auth', authSchema);