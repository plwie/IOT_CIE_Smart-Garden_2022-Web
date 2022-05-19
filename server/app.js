// Modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "smart_greenhouse"
});

db.connect(err => {
    if(err) {
        console.log('Cannot Connect to Database');
        return;
    }
    console.log("Connection to Database Success");
})

//API
    //Plant Pot
app.get('/plant_pot', (req, res) => {
    db.query("select * from plant_pot", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

    //Soil Info
app.get('/soil_info', (req, res) => {
    db.query("select * from soil_info order by time_stamp desc limit 2", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

    //Water and Fertilizer
app.get('/water_fertil', (req, res) => {
    db.query("select * from watering_system", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/ambient', (req, res) => {
    db.query("select * from ambient order by time_stamp desc limit 1", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/sunshade_state', (req, res) => {
    db.query("select * from sunshade_state", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put(`/update`, (req, res) => {
    console.log(req.body)
    res.send('hello world')
    // db.query("update sunshade_state set sunshade_status = ?", sunshade_status, (err, result) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         res.send(result);
    //     }
    // })
})

//PORT
const PORT = process.env.PORT || 8081;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));