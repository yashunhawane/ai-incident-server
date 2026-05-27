import dns from "dns";
import "./env.js";
import { requireEnv } from "./env.js";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(requireEnv("MONGO_URI"));
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return { ok: true };
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);

        // Avoid crashing dev server when MongoDB is unavailable.
        // API routes that depend on MongoDB will fail with proper runtime errors.
        return { ok: false, error };
    }
};

export default connectDB;
