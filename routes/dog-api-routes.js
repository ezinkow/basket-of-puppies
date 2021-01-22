// Requiring our models
var db = require("../models");
const dog = require("../models/dog");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/dogs/", function (req, res) {
        db.Dog.findAll({})
            .then(function (dbDog) {
                res.json(dbDog)
            })
    })

    app.post("/api/dogs", function (req, res) {
        db.Dog.create({
            dog_name: req.body.dog_name,
            // owner_id: req.body.owner_id,
            shots: req.body.shots,
            meds: req.body.meds
        })
            .then(function (dbDog) {
                res.json(dbDog)
            })
    })

    app.get("/dogs", function (req, res) {
        db.Dog.findAll({})
            .then(function (data) {
                var hbsObject = {
                    dogs: data
                }
                console.log(hbsObject)
                res.render("dogs", hbsObject)
            })
    })









}