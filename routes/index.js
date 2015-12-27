var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportLocal = require('passport-local');
var passportHttp = require('passport-http');
var models = require('../data-access-layer/models');
var encryptor = require('../lib/helpers/encryptor');

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

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
    res.redirect('/');
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
            return res.render('sign-up', {
                error: "User exists"
            });
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
router.get('/my-page', loggedIn, function (req, res, next) {
    return models.Category.findAll().then(function (categories) {
        return models.Level.findAll().then(function (levels) {
            return res.render('my-page', {
                title: 'My Profile',
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                categories: categories,
                levels: levels
            });
        });
    });
});
router.post('/update-profile-settings', function (req, res, next) {
    var id = req.body.id
        , name = req.body.name
        , surname = req.body.surname
        , email = req.body.email;
    models.User.update({
        name: name,
        surname: surname,
        email: email
    }, {
        where: { id: id }
    }).then(function () {
        res.json({ result: "Account settings updated" });
    }).catch(function (err) {
        res.send(err.message);
    });
});
router.post('/update-profile-target-position', function (req, res, next) {
    return models.PositionsLevel
        .findOrCreate({ where: { LevelId: req.body.level, PositionId: req.body.position } })
        .then(function (value) {
            return res.json({ result: "Target Updated" });
        });
});
router.get('/get-positions/:categoryId', function (req, res, next) {
    var categoryId = req.params.categoryId;

    return models.Position.findAll({ where: { categoryId: categoryId } }).then(function (values) {
        return res.json(values);
    });
});

module.exports = router;
