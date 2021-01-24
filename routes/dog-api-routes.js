// Requiring our models
var db = require("../models");
const dog = require("../models/dog");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/dogs/", function(req, res) {
        db.Dog.findAll({})
            .then(function(dbDog) {
                res.json(dbDog)
            })
    })

    app.post("/api/dogs", function(req, res) {
        db.Dog.create({
                dog_name: req.body.dog_name,
                shots: req.body.shots,
                meds: req.body.meds,
                notes: req.body.notes,
                OwnerId: req.body.OwnerId
            })
            .then(function(dbDog) {
                console.log("dbdog", dbDog)
                res.json(dbDog)
            })
    })


    app.get("/dogs", function(req, res) {
        db.Dog.findAll({})
            .then(function(data) {
                var hbsObject = {
                    dogs: data
                }
                console.log(hbsObject)
                res.render("dogs", hbsObject)
            })
    })

    app.put("/api/dogs/:id", function(req, res) {
        console.log("test?", req.body);
        console.log("id", req.body.id);
        console.log("check in status", req.body.check_in);

        db.Dog.update({
            check_in: req.body.check_in
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    app.delete("/api/dogs/:id", function(req, res) {
        db.Dog.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbDogs) {
            res.json(dbDogs);
        });
    });
}