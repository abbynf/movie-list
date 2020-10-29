// Import ORM to create functions that will interact with database
const orm = require('./../config/orm.js')

var movie = {
    all: function(){
        // Call orm to view all movies
        orm.selectAll();
    },
    create: function(movieTitle){
        // call orm to insert the chosen movie title
        orm.insertOne(movieTitle, function(res){
            console.log(res)
        })
    },
    update: function(id, seen){
        // Call orm to update chosen movie to watched or not watched
        orm.updateOne(id, seen, function(res){
            console.log(res);
        })
    }
}

module.exports = movie;