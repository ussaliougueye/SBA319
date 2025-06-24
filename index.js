const express = require("express")
//import express from "express";
const mongoose = require("mongoose")
//import mongoose from "mongoose";

const userRoutes = require('./routes/userRoutes');
const freindsRoutes = require('./routes/freindsRoutes');
//import userRoutes from './routes/userRoutes'

//import 'dotenv/config'
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/freinds', freindsRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => console.error('MongoDB connection error:', err));
