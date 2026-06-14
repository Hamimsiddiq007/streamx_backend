import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Connected to MongoDB || DB_HOST: ${connection.connection.host}`);
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connectDB;