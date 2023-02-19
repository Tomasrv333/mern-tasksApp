// Importing package's
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import allRoutes from './src/routes/index.js'

// Create express app & set a port
const PORT = process.env.PORT || 8000;
const app = express();

// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', allRoutes);

// Error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.staus(status).json({message, stack: err.stack});
})

// Mongo database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('Mongo connected');
  } catch (err) {
    console.log(err, 'no funciona');
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at port ${PORT}`);
});
