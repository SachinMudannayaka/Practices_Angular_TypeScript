class Employee{
    #id:number;
    name:string;
    address:string;

static getEmpCount():number{
    return 50;
}
get empID():number{
    return this.#id;
}

set empID(id:number){
this.#id=id;
}
constructor(id:number,name:string,address:string){
    this.#id=id;
    this.name=name;
    this.address=address;
    
}

getNameWithAddress():string{
//return this.name+" "+this.address;
return `${this.name} ${this.address}`;





}
}

let john=new Employee(1,"John","Califonia");
john.empID=100;
console.log(john.empID);

Employee.getEmpCount();

let def=john.getNameWithAddress();
console.log(def);

class Manager extends Employee{
    constructor(id:number,name:string,address:string){
        super(id,name,address);

    }
getNameWithAddress(): string {
    return `${this.name} is a manager of the System and his address is ${this.address}`;
}
}

let sachin=new Manager(2,"Sachin","Gampaha");
console.log(sachin.getNameWithAddress());
