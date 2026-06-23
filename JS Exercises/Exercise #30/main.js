function operate(a,b, callback){
    return callback(a, b);
}
function add(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

console.log("Addition : ",operate(2,3, add));
console.log("Subtraction : ",operate(6,3, subtract));
console.log("Multiplication : ",operate(2,3, multiply));
console.log("Division : ",operate(12,3, divide));