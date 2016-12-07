import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import hb from 'hbs';

import grid from './routes/grid';
import blog from './routes/blog';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hb.__express);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/grid', grid);
app.use('/blog', blog);

module.exports = app;

app.use('/', express.static('public'));
app.listen(process.env.PORT || 3000);