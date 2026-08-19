import mongoose from "mongoose";

export async function connectDB() {
    try{
        const mongoUri = process.env.MONGO_URL;
        if(!mongoUri){
            throw new Error("MONGO_URL is required");
        }

        await mongoose.connect(mongoUri);

        console.log("MONGODB connected successfully");

    }catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}