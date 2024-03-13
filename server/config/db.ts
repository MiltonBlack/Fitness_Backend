import mongoose from "mongoose";

const MONGO_URI = `mongodb://127.0.0.1:27017/fitness`
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}