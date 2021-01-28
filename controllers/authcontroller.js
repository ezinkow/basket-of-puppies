var exports = module.exports = {}

exports.register = function(req, res) {

    res.render('register.handlebars');

}

// exports.homepage =function(req, res) {

//     res.render('login');
// }

exports.login = function(req, res) {

    res.render('login.handlebars');

}

exports.index = function(req, res) {

    res.render('index.handlebars');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('login.handlebars');

    });

}