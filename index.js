require('dotenv').config;

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const corsOptions = require('./config/cors');
const connectDB = require('./config/database');


const app = express();
const PORT = 3500;


connectDB()

// CORS
app.use(cors(corsOptions))



// aplication.x-www-form-urlencoded
app.use(express.urlencoded({extended: false }));

// application/json response
app.use(express.json());

// middleware for cookie
app.use(cookieParser)

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
});

