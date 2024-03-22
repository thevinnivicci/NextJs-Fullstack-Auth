import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", () => {
      console.log(
        "MongoDB connection error, Pls make sure DB is up and running",
        +error
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in DB connection");
    console.log(error);
  }
}
