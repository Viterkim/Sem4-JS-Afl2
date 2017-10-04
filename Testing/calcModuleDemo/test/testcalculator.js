var expect = require("chai").expect;
var calculator = require("../calculator");

describe("Calculator", function(){
    it("Add 2 + 2", function(){
        expect(calculator.add(2,2)).to.be.equal(4);
        
    });
    //Exceptions
    it("Divide by zero error", function(){
        expect(function(){
            calculator.divide(2,0);
        }).to.throw(Error, "Attempt to divide by zero");
    });
});