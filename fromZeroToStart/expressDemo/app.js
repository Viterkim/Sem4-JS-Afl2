var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index');
var app = express();

app.set('views', path.join(__dirname, 'views'));//Actually the default view folder
app.set('view engine', 'jade');//allow us to leave out the extension


//Middleware
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', function (req, res) {
//     res.render('index', { title: 'Express' });
// });
//Router
app.use('/', routes);

app.get('/static', function (req, res) {
    res.render('index', { title: 'Viktorkim' });
    //Doesn't work
});

var names = ["Viktor", "Haandbold"];
app.get('/form', function (req, res) {
    res.render('form', { names: names});
//   res.send("Hi: "+names.join(",")+"<form method='post'><input name='name'></form>");
});

app.post('/form', function (req, res) {
  names.push(req.body.name);
  res.render('form', { names: names});
});

app.post('/names', function (req, res) {
    names.push(req.body); //We receive it as a JavaScript object
    console.log(JSON.stringify(req.body)); 
    res.send("ok");
    // res.redirect('/form');
  });



// app.listen(3000);


//Error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err); //Make sure you understand this line
});

//will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', { error: err, message: err.message });
    });
}
//Will not print stacktrace
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { error: err, message: err.message });
});

module.exports = app;