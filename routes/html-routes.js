var path = require("path");
var db = require("../models");
var authController = require('../controllers/authcontroller.js');

// Routes
// =============================================================
module.exports = function(app, passport) {
    //at addowner, render addowner
    app.get("/addowner", function(req, res) {
        res.render("addowner")
    })

    //at adddog query database for all owners, then render dog view + data
    app.get("/adddog", function(req, res) {
        db.Owner.findAll({})
            .then(function(data) {
                var hbsObject = {
                    owners: data
                }
                res.render("adddog", hbsObject)
            })
    })

    app.get('/register', authController.register);


    app.get('/', authController.login);

    app.get('/login', authController.homepage)

    app.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/login',

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