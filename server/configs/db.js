import mongoose from "mongoose";


const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        mongoose.connection.on('connected', () => console.log("Database Connected successfully"));
        mongoose.connection.on('error', (err) => console.error("Mongoose connection error:", err));

        if (!process.env.MONGODB_URI) {
            console.error("Error: MONGODB_URI is not defined in process.env!");
        } else {
            const maskedUri = process.env.MONGODB_URI.replace(/:([^@]+)@/, ":******@");
            console.log("Connecting using URI:", maskedUri);
        }

        await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`, {
            serverSelectionTimeoutMS: 5000 // Fail fast in 5 seconds instead of hanging the serverless function
        });
    } catch (error) {
        console.error("connectDB Exception caught:", error);
    }
}

export default connectDB;