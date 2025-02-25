import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI ;
console.log(MONGO_URI);

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environment variables.");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(MONGO_URI, {
      dbName: "Booky", 
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
