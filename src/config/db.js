import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const dbUri = process.env.DB_URL;
    if (!dbUri) {
      console.log("Error while connecting to database");
      return;
    }
    await mongoose.connect(dbUri);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};
