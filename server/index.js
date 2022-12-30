import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';
// import { CONNECTION_URL } from './.env'
//initialize app
const app = express();
dotenv.config();
//general set up
//1. set bodyparser so we can properly send requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect route to app
app.use('/posts', postRoutes);

//connect server application with database (mongodb)

// const CONNECTION_URL = 'mongodb+srv://mernSocialMedia:20001117lyPH@cluster0.vfci5zz.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
// process.env.CONNECTION_URL;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

