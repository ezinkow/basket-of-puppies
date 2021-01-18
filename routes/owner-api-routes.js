// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/owners/", function (req, res) {
        db.Owner.findAll({})
            .then(function (dbOwner) {
                res.json(dbOwner)
            })
    })

    app.post("/api/owners", function (req, res) {
        db.Owner.create({
            owner_name: req.body.owner_name,
            owner_phone: req.body.owner_phone,
            owner_email: req.body.owner_email,
            alt_pickup_name: req.body.alt_pickup_name
        })
            .then(function (dbOwner) {
                res.json(dbOwner)
            })
    })









}