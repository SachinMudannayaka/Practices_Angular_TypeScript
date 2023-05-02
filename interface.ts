interface User{
    name:string;
    age?:number;
    id:number;
    email:string;
}
let user: User={name:"", id:1, email:"",}

user.name;
user.email;

interface Employees extends User{
     salary:number;

}
let employee:Employees={name:"Sachin", id:2, email:"sachin@gmail.com",salary:100000};
console.log(employee);

//Array Destructuring

let[user1,user2]:User[]=[
    {name:"John",id:1,email:""},
    {name:"John1",id:1,email:""},
    {name:"John2",id:1,email:""},
];
console.log(user2);

//Decorator

@Component({})
class Component{
    constructor(public name:string){

    }
}