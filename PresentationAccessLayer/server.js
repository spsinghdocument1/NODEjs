

var express = require("express");
var http = require('http');
var path = require('path'); 
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var app = express();
var port = process.env.PORT || 3000;

//app.use(function (req, res, next) {
//    console.log("/" + req.method);
//    next();
//});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//app.use(favicon(__dirname + '/public/Images'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'uwotm8'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());

//app.use(require('stylus').middleware(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, 'public')));

require('./router/Router.js')(app);
var s = require('../DataAccessLayer/DAL/JqueryInsertDAL.js')
app.listen(port, function () {
    console.log('Listening on ' + port);
});