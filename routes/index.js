var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var passportHttp = require('passport-http');
var models = require('../data-access-layer/models');
var encryptor = require('../lib/helpers/encryptor');

/* GET home page. */
passport.use(new passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
}, function (email, password, done) {
    models.User.findOne({ where: { email: email } }).then(function (user) {
        if (!user) {
            done(null, false);
        }
        if (encryptor(password) === user.password) {
            done(null, user);
        }
        done(null, false);
    });
}));
passport.use(new passportHttp.BasicStrategy(function (username, password, done) {
    if (username === 'admin' && password === 'admin') {
        done(null, { id: username, name: username });
    } else {
        done(null, null);
    }
}));
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
router.get('/', function(req, res, next) {
    res.render('index', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        title: 'Inspired Actions'
    });
});
router.get('/login', function (req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('login', {
        title: 'Log In'
    });
});
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res, next) {
    res.redirect('/');
});
router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.send('logged out');
});
router.get('/sign-up', function (req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('sign-up', {
        title: 'Sign Up'
    });
});
router.post('/sign-up', function (req, res, next) {
    models.User.findOne({ where: { email: req.body.email } }).then(function (user) {
        if (user !== null) {
            res.redirect('/login');
        } else {
            return models.User.create({ email: req.body.email, name: req.body.name, surname: req.body.surname, password: encryptor(req.body.password) }).then(function () {
                res.redirect('/');
            });
        }
    });
});
router.get('/admin', passport.authenticate('basic', { session: false }), function (req, res, next) {
    res.render('admin-page');
});
router.post('/query', function (req, res, next) {
    var query = req.body.query;

    models.sequelize.query(query).then(function (data) {
        res.json(data);
    });
});

module.exports = router;
