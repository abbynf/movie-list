// Create ORM

// Import mysql connection from connection.js
var connection = require("./connection.js");


// Create custom orm
var orm = {
    selectAll: function(){
        connection.query("SELECT * FROM movies", function(err, res){
            if (err) throw err;
            console.table(res);
        })
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}

// export orm
module.exports = orm;

