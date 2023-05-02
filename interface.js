"use strict";
let user = { name: "", id: 1, email: "", };
user.name;
user.email;
let employee = { name: "Sachin", id: 2, email: "sachin@gmail.com", salary: 100000 };
console.log(employee);
//Array Destructuring
let [user1, user2] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 1, email: "" },
    { name: "John2", id: 1, email: "" },
];
console.log(user2);
