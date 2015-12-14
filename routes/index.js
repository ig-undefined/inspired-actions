var express = require('express');
var router = express.Router();
var models = require('../data-access-layer/models');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/db', function (req, res, next) {
    res.send('OK');
});

module.exports = router;
