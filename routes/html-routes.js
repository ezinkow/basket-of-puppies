var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index")
    })
    app.get("/login", function (req, res) {
        res.render("login")
    })

    app.get("/adddog", function (req, res) {
        res.render("adddog")
    })
  
    app.get("/addowner", function (req, res) {
        res.render("addowner")
    })

    app.get("/daycare", function (req, res) {
        res.render("daycare")
    })


}