// Requiring our models
var db = require("../models");
const Dog = require("../models/dog");

// Routes
// =============================================================
module.exports = function (app) {

    //Finds all dogs, displays as json
    app.get("/api/dogs/", function (req, res) {
        db.Dog.findAll({
            order: [
                ["dog_name", "ASC"],
            ],
        })
            .then(function (dbDog) {
                res.json(dbDog)
                console.log(dbDog)
            })
    })

    //post route adds new dog to dogs table
    app.post("/api/dogs", function (req, res) {
        db.Dog.create({
            dog_name: req.body.dog_name,
            shots: req.body.shots,
            meds: req.body.meds,
            notes: req.body.notes,
            OwnerId: req.body.OwnerId
        })
            .then(function (dbDog) {
                console.log("dbdog", dbDog)
                res.json(dbDog)
            })
    })
    //dogs html route. Gets dogs from table, renders dogs view with this data
    app.get("/dogs", function (req, res) {
        db.Dog.findAll({
            include: [db.Owner],
            order: [
                ["dog_name", "ASC"],
            ],
        })
            .then(function (data) {
                var hbsObject = {
                    dogs: data
                }
                console.log(hbsObject)
                res.render("dogs", hbsObject)
            })
    })

    //quick checkin/checkout page
    app.get("/checkinout", function (req, res) {
        db.Dog.findAll({
            include: [db.Owner]
        })
            .then(function (data) {
                var hbsObject = {
                    dogs: data
                }
                console.log("checkinout obj", hbsObject)
                res.render("checkinout", hbsObject)
            })
    })

    //api to check printout
    app.get("/api/checkinout", function (req, res) {
        db.Dog.findAll({
            include: [db.Owner]
        })
            .then(function (dbDog) {
                console.log("dbdog", dbDog)
                res.json(dbDog)
            })
    })

    //dogs html route. Gets dogs from table, renders dogs view with this data
    app.get("/dogs", function (req, res) {
        db.Dog.findAll({
            include: [db.Owner]
        })
            .then(function (data) {
                var hbsObject = {
                    dogs: data
                }
                console.log(hbsObject)
                res.render("dogs", hbsObject)
            })

    })
    //post route adds new dog do dogs table
    app.post("/api/dogs", function (req, res) {
        db.Dog.create({
            dog_name: req.body.dog_name,
            shots: req.body.shots,
            meds: req.body.meds,
            notes: req.body.notes,
            OwnerId: req.body.OwnerId

        })
            .then(function (dbDog) {
                console.log("dbdog", dbDog)
                res.json(dbDog)
            })
    })


    //put route that updates checkin status of dog at input id. Can be used for check in or out
    app.put("/api/dogs/:id", function (req, res) {
        console.log("test?", req.body);
        console.log("id", req.body.id);
        console.log("check in status", req.body.check_in);

        db.Dog.update({
            check_in: req.body.check_in
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    //delete route deletes dog at input id
    app.delete("/api/dogs/:id", function (req, res) {
        db.Activity.destroy({

            where: {
                id: req.params.id
            }
        }).then(function (dbDogs) {
            res.json(dbDogs);
        });
    });

    //who knows man
    app.get("/adddogtoowner", function (req, res) {
        db.Owner.findAll({
            limit: 1,
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(function (data) {
            var hbsObject = {
                owners: data
            }
            console.log("owners", data)
            res.render("adddogtoowner", hbsObject)
        })
    })
}