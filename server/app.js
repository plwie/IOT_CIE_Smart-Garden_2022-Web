// Import modules
const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan')
const cors = require('cors')
require("dotenv").config();

// app
const app = express();

// db


// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true}));

// routes


// ports
const port = process.env.PORT || 8080;


// listener

const server = app.listenerCount(port, () => console.log(`Server is running on port ${port}`));