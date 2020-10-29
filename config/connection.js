// Set up mySQL connection
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@Ecuador14",
    database: "movies_db"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})


// Export connection

module.exports = connection;