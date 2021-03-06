// Create ORM

// Import mysql connection from connection.js
var connection = require("./connection.js");


// Create custom orm
var orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM movies", function(err, res){
            // display all movies in the movies table
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: function(movieTitle){
        // insert dynamic movie title into database
        connection.query("INSERT INTO movies (movie_name, watched) VALUES (?, false);", [movieTitle], function(err, res){
            if (err) throw err;
            // tell user it was successful
            console.log("Successfully added " + movieTitle)
        })
    },
    updateOne: function(id, seen){
        connection.query("UPDATE movies SET watched=? WHERE id=?", [seen, id],function(err, res){
            if (err) throw err;
            console.log("Successfully updated");
        })
    }
}

// export orm
module.exports = orm;

