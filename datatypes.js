"use strict";
let lastname;
let firstname;
firstname = "Sachin ";
lastname = 'Mudannayaka';
let age;
age = 23;
let isalid;
isalid = false;
let empList;
empList = ['Sachiya', 'Hiran', 'Shehan'];
console.log(empList[0]);
let empList1;
empList1 = [23, 34, 45];
console.log(empList1[0]);
let result = empList1.filter((num) => num > 23);
console.log("Numbers that are grater than 23=> " + result);
let sum = empList1.reduce((acc, num) => acc + num);
console.log("Sum of the array emp1= " + sum);
//let result2 = empList1.find((num)=> num==45);
//console.log(result2);
console.log(isalid);
console.log(firstname + lastname + "'s age= " + age);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num2];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
