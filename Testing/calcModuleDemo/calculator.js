var divide = function(n1, n2){
    if(n1 === 0 || n2 === 0){
        throw new Error("Attempt to divide by zero")
    }
    return n1 / n2;
}

var multiply = function(n1, n2){
    return n1 * n2;
}

var add = function(n1, n2){
    return n1 + n2;
}

var sub = function(n1, n2){
    return n1 - n2;
}

module.exports = {
    add,
    sub,
    multiply,
    divide
};