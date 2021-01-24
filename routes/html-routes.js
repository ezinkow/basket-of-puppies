var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/index");
        }
        res.redirect("/login");
    });

    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/index");
        }
        res.render("../views/login.handlebars");
    });

    app.get("/register", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/index");
        }
        res.render("../views/register.handlebars");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/index", isAuthenticated, function(req, res) {
        res.render("../views/index.handlebars");
    })

    //added route to get around having to login for testing purposes
    app.get("/admin", function(req, res) {
        res.render("../views/index.handlebars");
    })

    app.get("/addowner", function(req, res) {
        res.render("addowner")
    })

    app.get("/daycare", function(req, res) {
            res.render("daycare")
        })
        //this was added to a seperate js file with activities routes
        // app.get("/activities", function (req, res) {
        //     res.render("activities")
        // })

    app.get("/owners", function(req, res) {
        db.Owner.findAll({})
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
}