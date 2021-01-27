// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    app.get("/activities", function(req, res) {
        db.Activity.findAll({
            include: [db.Dog]
        })
            .then(function(data) {
                console.log("data:", data[0]["dataValues"]["DogId"])
                var hbsObject = {
                    activities: data
                    // dogid: dogId
                }
                // console.log(hbsObject)
                res.render("activities", hbsObject)
            })
        })

    app.get("/api/activities", function (req, res) {
        db.Activity.findAll({
            include: [db.Dog],
        })
        .then(function(dbActivity) {
            console.log("dbActivity", dbActivity)
            res.json(dbActivity)
        })
    })
    
    app.post("/api/activities", function(req, res) {
        console.log("req body", req.body)
        db.Activity.create({
            DogId: req.body.DogId
        })
        .then(function(dbActivity) {
            console.log("dbActivity", dbActivity)
            res.json(dbActivity)
        })

        //delete call to api/activities requires an input Dogid. Removes ALL rows with same Dogid as input
    app.delete("/api/activities/:id", function(req, res) {
        db.Activity.destroy({
            where: {
                Dogid: req.params.id
            }
        }).then(function(dbActivity) {
            res.json(dbActivity);
        });
    });
    })
    
    app.put("/api/activities/:id", function (req, res) {
        db.Activity.update(
            req.params.id,
            function (result) {
                if (result.changedRows === 0) {
                    location.reload()
                }
                res.status(200)
            })
    })




}