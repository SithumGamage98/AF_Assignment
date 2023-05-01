import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Authrouter from './api/routes/auth.js';
import Hotelrouter from './api/routes/hotels.js';

const app = express();
dotenv.config();

//create connectivity with mongoDB -> Initioal connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

//error for monogo DB become disconnected
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

//middlewares

//for json
app.use(express.json());

app.use('/api/auth', Authrouter);
//app.use('/api/rooms', Authrouter);
//app.use('/api/user', Authrouter);
app.use('/api/hotels', Hotelrouter);
//app.use('/api/auth', Authrouter);

app.listen(8800, () => {
  connect();
  console.log('Connected to Backend');
});
