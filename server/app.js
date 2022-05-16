// Import modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

// app
const app = express();

// db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
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
app.get("/plant_pot", (req,res) =>{
    db.query("SELECT * FROM plant_pot", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

app.listen("8081", () => {
    console.log("server is running on port 8081")
})