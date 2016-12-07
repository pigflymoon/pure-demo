import express from 'express';
var router = express.Router();

import '../public/css/blog.css';
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('blog', { title: 'Express' });
});

module.exports = router;
