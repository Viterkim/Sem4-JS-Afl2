var calculator = require("./calculator");
var makeit = require("./makeitmodule");

//console.log(calculator.add(3,1));

var sum = 0;

makeit(".", "js", function(err, list){
    list.forEach(function(e){
        sum++;
        //Asynkront vent 
    })
    console.log(sum);
});