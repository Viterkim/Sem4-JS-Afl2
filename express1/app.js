var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Variables
var app = express();
var todoItems = [
    {id: 1, desc: 'Undskyldnings Generator'},
    {id: 2, desc: 'Bingo 2 Gange'}
];

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //__dirname = the folder that contains this script

//use middleware
app.use(bodyParser());
//app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.css')));

//define routes
app.get('/', function(req, res){
    res.render('index', {
        title: 'Todo Bingo',
        items: todoItems
    });
});

app.post('/add', function(req, res){
    var newItem = req.body.newItem;
    todoItems.push({id: todoItems.length + 1, desc: newItem});
    res.redirect('/');
}); 

app.listen(1337, function(){
    console.log("Listening on port 1337");
});


//Paste fra website
// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log("Server Running http://127.0.0.1:1337/");