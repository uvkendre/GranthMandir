import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import cors from 'cors';
import userRoute from './route/user.route.js';  // Renamed for consistency

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});

// Define routes
app.use('/book', bookRoute);
app.use('/user', userRoute);  

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
