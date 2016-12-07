``` markdown
1.npm init
2.npm install babel-plugin-transform-class-properties babel-plugin-transform-runtime \
              babel-polyfill babel-preset-es2015 babel-preset-react babel-preset-stage-0 \
              babel-register --save
3.create .babelrc
{
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],
  "plugins": [
    "transform-runtime",
    "transform-class-properties"
  ]
}

4.npm install express --save
5.create server.js and server.babel.js
in server.js

require('babel-register');

require('./server.babel');

in server.babel.js

import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);

6. command line: node server

7.create public/index.html
import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);


8.npm install webpack babel-loader react react-dom --save

9.create src/client.js

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

10.edit index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello, world</title>
</head>
<body>
  <div id="root"></div>
  <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
</body>
</html>

11.create webpack.config.js

module.exports = {
  entry: './src/client.js',
  output: {
    path: './public',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  }
};

12.npm install concurrently --save-dev

13.edit package.json

modify it as:

"scripts": {
    "webpack-watch": "webpack -w",
    "express-server": "node ./server",
    "dev": "concurrent --kill-others \"npm run webpack-watch\" \"npm run express-server\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

14.command line run as :

npm run dev 

to start it 
              
              
```