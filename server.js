// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
var session = require("express-session");
var passport = require('passport');
var bodyParser = require('body-parser')
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set("view engine", "handlebars");

// // Use sessions to keep track of user's login status
// app.use(session({ secret: "look this up", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// var routes = require("./controllers/dogs_controller.js");
// app.use(routes);

// Routes
// =============================================================
require("./routes/html-routes.js")(app, passport);
require("./routes/dog-api-routes.js")(app);
require("./routes/owner-api-routes.js")(app);
require("./routes/activity-api-routes.js")(app);
require('./config/passport/passport.js')(passport, db.user);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});