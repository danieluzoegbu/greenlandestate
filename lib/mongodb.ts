import mongoose from "mongoose";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("Invalid environment variable: MONGODB_URI");
}

export const connectToMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(DATABASE_URL);

    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
