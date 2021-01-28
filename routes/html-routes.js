var path = require("path");
var db = require("../models");
var authController = require('../controllers/authcontroller.js');

// Routes
// =============================================================
module.exports = function (app) {
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
                res.render("adddog", hbsObject)
            })
    })
}

module.exports = function(app, passport) {


    app.get('/register', authController.register);


    app.get('/login', authController.login);


    app.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/index',

            failureRedirect: '/register'
        }

    ));


    app.get('/index', isLoggedIn, authController.index);



    app.get('/logout', authController.logout);


    app.post('/login', passport.authenticate('local-signin', {
            successRedirect: '/index',

            failureRedirect: '/login'
        }

    ));


    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/login');

    }

}
