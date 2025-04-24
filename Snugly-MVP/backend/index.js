import express from 'express';
import bodyParser from 'body-parser';
// import userRouter from './routes/authRoutes.js';
import connectDB from './db.js';
import dotenv from 'dotenv';

dotenv.config();

await connectDB();

const app = express();

app.use(bodyParser.json());
// app.use(userRouter);  

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
