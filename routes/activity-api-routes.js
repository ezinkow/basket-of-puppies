// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    app.get("/activities", function (req, res) {
        db.Dog.findAll({
            include: db.Owner
        })
            .then(function (data) {
                var hbsObject = {
                    dogs: data,
                    // owners: data
                }
                console.log(data)
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