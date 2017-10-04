var express = require('express');
var router = express.Router();
var jokes = require("../facade/jokefacade");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/random', function(req, res, next) {
  res.render('random', { joke: jokes.getRandomJoke()});
});

router.get('/all', function(req, res, next) {
  res.render("all", {jokes: jokes.allJokes});
});

router.get('/addjoke', function(req, res, next) {
  res.render("addjoke");
});

router.get('/login', function(req, res, next) {
  res.render("login");
});

router.post("/login", function(req, res){
  res.render("index", {optionalMessage: "Logged in as " + req.body.username});
});

router.post("/storejoke", function(req, res){
  jokes.addJoke(req.body.joke);
  res.render("addjoke", {optionalMessage: "Received new joke!"});
});

router.get('/add/:joke', function(req, res, next) {
  var newJoke = req.params.joke;
});


module.exports = router;