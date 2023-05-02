let lastname : string ;
let firstname:string ;
firstname="Sachin ";
lastname='Mudannayaka';
let age: number;
age=23;

let isalid:boolean;
isalid=false;

let empList : string[];
empList=['Sachiya','Hiran','Shehan'];
console.log(empList[0]);

let empList1:Array<number>
empList1=[23,34,45];
console.log(empList1[0]);
let result=empList1.filter((num)=> num>23);
console.log("Numbers that are grater than 23=> "+result);

let sum= empList1.reduce((acc,num)=> acc+num);
console.log("Sum of the array emp1= "+sum);


//let result2 = empList1.find((num)=> num==45);
//console.log(result2);

console.log(isalid);
console.log(firstname +lastname +"'s age= "+age);

enum Color{
    Red,
    Green,
    Blue
}
let c:Color=Color.Blue;

let swapNumbs:[number,number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num2]
}
swapNumbs=swapNumbers(10,20);
swapNumbs[0];
swapNumbs[1];