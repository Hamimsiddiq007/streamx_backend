import dotenv from 'dotenv';
import connectDB from './db/database.js';
import app from './app.js';

dotenv.config({ path: './config.env' });
console.log(process.env.MONGODB_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});

