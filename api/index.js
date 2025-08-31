import express from 'express';
import connectDB from './database/db.js'
import dotenv from "dotenv";
const app = express();
dotenv.config();


connectDB();

app.listen(3000,()=>{
    console.log('Server is running on the port 3000')
})