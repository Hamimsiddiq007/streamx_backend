import dotenv from 'dotenv';
import connectDB from './db/database.js';

dotenv.config();
console.log(process.env.MONGODB_URI);

connectDB();

