import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import todoRoute from './Route/todosRoute.js';


const app = express();
app.use(express.json());

dotenv.config();
const DB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

connectDB();

app.use('/todo', todoRoute);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
