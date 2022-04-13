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
    host: 'localhost',
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
const testRoutes = require("./routes/test");
app.use("/", testRoutes)

// ports
const port = process.env.PORT || 8080;


// listener

const server = app.listen(port, () => console.log(`Server is running on port ${port}`));