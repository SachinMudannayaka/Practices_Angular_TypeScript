//Optional Parameters
function add(a:number,b:number,num3?:number){
    return num3? a+b+num3 :a+b;
}
 
let asum:number=add(15,20);
console.log(asum);

void function subs(a:number,b:number){
    let sub:number=a-b;  
    console.log("Substract= "+ sub);
}

const sub=(num1:number,num2:number):number=>num1-num2;
console.log(sub(3,5));

const multy=function(num1:number,num2:number):number{
    return num1*num2;
}

//Pass N number of Arrays
function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b, 0)

}

let numbers=[1,2,3,4,5];
console.log(add2(2,3,...numbers));


