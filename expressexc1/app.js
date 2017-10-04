var express = require("express");
var bodyParser = require('body-parser');
var app = express();

//Routes
var index = require('./routes/index');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use("/index", index);

//add your content here
app.all("/lort", function(req,res,next){
    res.send("Sut mig");
});

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    let result = "Illegal Parameter";
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    if(calculatorRequest.operation === "add"){
        result = Number(val1 + val2);
    }
    else if(calculatorRequest.operation === "sub"){
        result = Number(val1 - val2);
    }
    else if(calculatorRequest.operation === "mult"){
        result = Number(val1 * val2);
    }
    res.send(result.toString());
});

app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
});