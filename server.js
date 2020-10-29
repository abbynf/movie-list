const express = require('express');
const app = express();

var PORT = 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/moviesController")

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on PORT " + PORT);
})

