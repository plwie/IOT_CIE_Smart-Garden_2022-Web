const mysql = require("mysql");
const dbConfig = require(db.config.js);
const connection = mysql.createConnection({
    hose: dbConfig.Host,
    user: dbConfig.USER,
    password: dbConfig.password,
    database: db.Congfig.DB
})

connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the database");
});
module.exports = connection;

