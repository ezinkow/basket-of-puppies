var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
    // at root, check if logged in. If logged in, redirect to index, if not redirect to login
    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/index");
        }
        res.redirect("/login");
    });
    //at login, check if logged in. If logged in, redirect to index, if not, render login page
    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/index");
        }
        res.render("../views/login.handlebars");
    });
    //at register, check if logged in. Redirect to index if logged in, otherwise render register view
    app.get("/register", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/index");
        }
        res.render("../views/register.handlebars");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page

    app.get("/index", isAuthenticated, function(req, res) {
        res.render("index");

    })
    
    //added route to get around having to login for testing purposes
====
    app.get("/admin", function(req, res) {
            res.render("index");
        })
        //at addowner, render addowner
    app.get("/addowner", function(req, res) {
            res.render("addowner")

        })
        .then(function (data) {
            var hbsObject = {
                activities: data
            }
            console.log(hbsObject)
            res.render("index", hbsObject)
        })
    })
    //at addowner, render addowner
    app.get("/addowner", function (req, res) {
        res.render("addowner")
    })
    
    //at daycare, render daycare
    app.get("/daycare", function (req, res) {
        res.render("daycare")
    })

    //at adddog query database for all owners, then render dog view + data
    app.get("/adddog", function (req, res) {
        db.Owner.findAll({})
            .then(function (data) {
                var hbsObject = {
                    owners: data
                }
                console.log(hbsObject)
                res.render("adddog", hbsObject)
            })
    })
}