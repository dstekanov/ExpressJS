var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'About',
        name: 'Dima'
    });
});

module.exports = router;
