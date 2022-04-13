// Import modules
const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config();

// app
const app = express();

// db
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'mac',
    password: 'qwerty',
    database: 'smart_greenhouse'
})

db.connect(err =>{
    if(err) {
        console.log('Error connecting to Database');
        return;
    }
    console.log('Connection established');
})

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true}));

// routes


// ports
const port = process.env.PORT || 8080;


// listener

const server = app.listenerCount(port, () => console.log(`Server is running on port ${port}`));