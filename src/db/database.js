import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `Connected to MongoDB || DB_HOST: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;