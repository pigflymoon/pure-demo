import express from 'express';
var router = express.Router();

// Import CSS
import styles from '../public/css/blog.css';


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('blog', {title: 'Express'});
    // return <h1 className={styles.header}>Hello world!</h1>;
});

module.exports = router;
