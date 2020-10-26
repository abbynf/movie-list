const express = require('express');
const app = express();

var PORT = 8080;

app.listen(PORT, function(){
    console.log("Server listening on PORT " + PORT);
})