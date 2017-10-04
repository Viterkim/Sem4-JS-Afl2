var jokes = require("../model/jokes");

var _getRandomJoke = function(){
    return jokes[Math.floor(Math.random() * jokes.length)]; //Magi
}

var _addJoke = function(newJoke){
    jokes.push(newJoke);
}

module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
}