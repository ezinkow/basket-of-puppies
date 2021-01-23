// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/owners/", function (req, res) {
        db.Owner.findAll({
            order: [
                ["owner_last_name", "ASC"],
              ],
        })
            .then(function (dbOwner) {
                res.json(dbOwner)
                console.log(dbOwner)
            })

    })

    app.post("/api/owners", function (req, res) {
        db.Owner.create({
            owner_first_name: req.body.owner_first_name,
            owner_last_name: req.body.owner_last_name,
            owner_phone: req.body.owner_phone,
            owner_email: req.body.owner_email,
            alt_pickup_name: req.body.alt_pickup_name
        })
            .then(function (dbOwner) {
                res.json(dbOwner)
            })
    })

    app.get("/adddogtoowner", function (req, res) {
        db.Owner.findAll({
            limit: 1,
            order: [['createdAt', 'DESC']]
        }).then(function (data) {
            var hbsObject = {
                owners: data
            }
            console.log("owners", data)
            res.render("adddogtoowner", hbsObject)
        })
    })

}