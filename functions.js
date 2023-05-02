"use strict";
//Optional Parameters
function add(a, b, num3) {
    return num3 ? a + b + num3 : a + b;
}
let asum = add(15, 20);
console.log(asum);
void function subs(a, b) {
    let sub = a - b;
    console.log("Substract= " + sub);
};
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 5));
const multy = function (num1, num2) {
    return num1 * num2;
};
//Pass N number of Arrays
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
