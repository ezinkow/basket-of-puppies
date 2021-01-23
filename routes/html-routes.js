var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Dog.findAll({})
        .then(function (data) {
            var hbsObject = {
                dogs: data
            }
            console.log("hbsobject", hbsObject)
            res.render("index", hbsObject)
        })
    })

    app.get("/login", function(req, res) {
        res.render("login")
    })

    // app.get("/adddog", function(req, res) {
    //     res.render("adddog")
    //     console.log("hi 2")
    // })

    app.get("/addowner", function(req, res) {
        res.render("addowner")
    })

    app.get("/owners", function(req, res) {
        db.Owner.findAll({
            order: [
                ["owner_last_name", "ASC"],
              ],
            })
            .then(function(data) {
                var hbsObject = {
                    owners: data
                }
                console.log(hbsObject)
                res.render("owners", hbsObject)
            })
    })

    app.get("/adddog", function(req, res) {
        db.Owner.findAll({})
            .then(function(data) {
                var hbsObject = {
                    owners: data
                }
                console.log(hbsObject)
                res.render("adddog", hbsObject)
            })
    })

    // const getOwners = (res) => {
    //     db.Owner.findAll({})
    //         .then(function(data) {
    //             var hbsObject = {
    //                 owners: data
    //             }
    //             console.log(hbsObject)
    //             return hbsObject
    //             res.render("adddog", hbsObject)
    //         })
    // }
}