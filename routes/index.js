var express = require('express');
var router = express.Router();
var DAL = require('../data-access-layer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/db', function (req, res, next) {
    DAL.connect();
    res.send('OK');
});

module.exports = router;
