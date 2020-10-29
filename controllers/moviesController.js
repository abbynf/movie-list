// Import express server and movies.js model
var express = require("express");
var router = express.Router();
var movie = require("./../models/movies");


// Create routes and set up logic within routes

// get all of the data
router.get("/", function (req, res) {
    movie.all(function (data) {
        var movieObject = {
            movies: data
        }
        res.render("index", movieObject);
    })
});


// adds new movie to database
router.post("/create", function (req, res) {
    movieTitle = req.body.title;
    movie.create(movieTitle, function (data) {
        console.log(data)
    })
    res.status(200).end();
});


// route to update if a movie has been seen or not
router.put("/:id/:seen", function (req, res) {
    chosenId = req.params.id;
    seen = req.params.seen;
    movie.update(chosenId, seen, function (data) {
        console.log(data);
    })
    res.send("done")
})

// export
module.exports = router;