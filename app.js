'use strict';

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./config/routes');
var errors = require('./config/errors');
var config = require('./config');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
mongoose.connect(config.database);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// uncomment if you need some static assets served
// app.use(express.static(path.join(__dirname, 'public')));

// set route configuration
app.use(routes);
// include error handlers
errors(app);

module.exports = app;
