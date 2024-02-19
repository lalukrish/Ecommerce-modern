import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (err) {
    console.log("error occured on connection", err);

    throw new Error("Connection failed");
  }
}
export default dbConnect;
