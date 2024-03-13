import mongoose from "mongoose";
import Color from "colors";

const MONGO_URI = `mongodb://127.0.0.1:27017/fitness`
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log(Color.underline.bgGreen(`MongoDB Database connected`));
    
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}