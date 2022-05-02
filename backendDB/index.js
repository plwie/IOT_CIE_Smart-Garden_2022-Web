const express = require('express');
const res = require('express/lib/response');
const mysql = require('mysql');

//create connection of mysql

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'IoTgarden'
});

//connect to mysql

db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected');
});

const app = express();

// create Databases

app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE iotgarden'
    db.query(sql, err => {
        if (err){
            throw err;
        }
        res.send('Database created');
    });
});

//create table

app.get('/createplanttable', (req, res) =>{
    let sql = 'CREATE TABLE plant(id int AUTO_INCREMENT, name VARCHAR(255), soiltemp int, PRIMARY KEY(id))'
    db.query (sql , err => {
        if(err){
            throw err
        }
        res.send('Tree is created')
    })
})

//insert tree

app.get('/tree1', (req, res)=>{
    let post = {name:'Kraprao', soiltemp:35}
    let sql = 'INSERT INTO plant SET ?'
    let query = db.query(sql, post, err =>{
        if(err){
            throw err
        }
        res.send('tree added')
    })
})

//select tree

app.get('/gettreename',(req, res)=>{
    let sql = 'SELECT * FROM plant'
    let query = db.query(sql,(err , results)=>{
        if(err) {
            throw err
        }
        console.log(results)
        res.send('tree details feteched')
    })
})

//update the treeinfo

app.get('/updatetreename/:id', (req,res)=> {
    let newName = 'updatedname'
    let sql = `UPDATE plant SET name = ' ${newName}'WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err){
            throw err
        }
        res.send('tree updated')
    })
})

// delete tree

app.get('/deletetree/:id', (req, res)=>{
    let sql = `DELETE FROM plant WHERE id = ${req.params.id}`
    let query = db.query(sql, err =>{
        if(err){
            throw err
        }
        res.send('tree deleted')
    })
})

app.listen('3000', () => {
    console.log('server started on port 3000')
}) 