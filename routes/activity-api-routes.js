// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    app.get("/activities", function (req, res) {
        db.Activity.findAll({
            include: [db.Dog]
        })
            .then(function (data) {
                var hbsObject = {
                    activities: data,
                    // dogs: data
                }
                console.log("data", data)
                res.render("activities", hbsObject)
            })
    })
    // app.get("/activities", function (req, res) {
    //     db.Dog.findAll({
    //         // include: [db.Activity]
    //     })
    //         .then(function (data) {
    //             var hbsObject = {
    //                 dogs: data,
    //                 // activities: data
    //             }
    //             console.log(hbsObject)
    //             res.render("activities", hbsObject)
    //         console.log("hbs object", hbsObject)
    //         })
    // })
    
    app.post("/api/activities", function(req, res) {
        console.log("req body", req.body)
        db.Activity.create({
            morning_walk: "",
            midday_walk: "",
            late_walk: "",
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