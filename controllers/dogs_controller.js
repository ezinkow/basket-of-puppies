var db = require("../models");


module.exports = function (app) {

    app.get("/", function(req, res){
            res.render("index")
        })

    app.get("/api/dogs", function (req, res) {
        db.Dog.findAll({}).then(function (dbDog) {
                res.json(dbDog);
            });
        })




    }