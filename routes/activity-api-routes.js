// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    //activities page html route. When user goes to activities address, query Activities table for all activities, render activities view
    app.get("/activities", function(req, res) {
            db.Dog.findAll({
                    include: db.Owner
                })
                .then(function(data) {
                    var hbsObject = {
                        dogs: data,
                        // owners: data
                    }
                    console.log(data)
                    res.render("activities", hbsObject)
                })
        })
        //post call to /api/activities creates a new activities row
    app.post("/api/activities", function(req, res) {
            console.log("req body", req.body)
            db.Activity.create(req.body)
                .then(function(dbActivity) {
                    console.log("dbActivity", dbActivity)
                    res.json(dbActivity)
                })
        })
        //put call to /api/activities requires an id. What does this do at input id?
    app.put("/api/activities/:id", function(req, res) {
            db.Activity.update(
                req.params.id,
                function(result) {
                    if (result.changedRows === 0) {
                        location.reload()
                    }
                    res.status(200)
                })
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


}