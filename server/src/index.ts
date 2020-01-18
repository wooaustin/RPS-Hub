var express = require("express");


const app = express();

app.get('/', (req, res) => {
    res.send("Homepage reached, initial endpoint created")
});

module.exports = app;