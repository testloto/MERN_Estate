import express from 'express';
import connectDB from './database/db.js'
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
const app = express();
dotenv.config();


connectDB();

app.listen(3000,()=>{
    console.log('Server is running on the port 3000')
})

app.use('/api/user',userRouter)