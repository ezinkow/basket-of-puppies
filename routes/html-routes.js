var express = require("express");

var router = express.Router();

// Import the model (dog.js) to use its database functions.
var dog = require("../models/dog.js");


router.get("/", function(req, res) {
    res.render("index")
})