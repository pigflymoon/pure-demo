import express from 'express';
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('email', {title: 'Express'});
    // return <h1 className={styles.header}>Hello world!</h1>;
});

module.exports = router;
