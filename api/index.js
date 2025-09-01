import express from 'express';
import connectDB from './database/db.js'
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'




const app = express();
dotenv.config();


connectDB();
app.use(express.json()); // send the req.body 


app.listen(3000,()=>{
    console.log('Server is running on the port 3000')
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);