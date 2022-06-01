"use strict";

const BigNumber = require("bignumber.js");


const sum = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const modulus = (a,b) => {
    
    return BigNumber(a)%BigNumber(b);
}

const even = (a) => {
    if (modulus(BigNumber(a),2) == 0) return true;
    else return false;
};

const odd = (a) => {
    if (modulus(a,2) != 0) return true;
    else return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
