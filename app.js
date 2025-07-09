let employee = {
name:"xyz",
age:25,
salary:2000
};

function Student(name,age,id){
  this.name=name;
  this.age=age;
  this.id=id;
};

let stud1 = new Student("A", 25 , 101);
let stud2 = new Student("B" , 24, 102);

console.log(stud1);

class Car{
  constructor(name,price,color){
    this.name=name;
    this.color=color;
    this.price=price;
  }
}

let car1 = new Car("car1",100000,"black");
let car2 = new Car("Car2",2009,"blue");

console.log(car1)


let student ={
  name:"ABHI",
  age:23,
  id:101,
  address:{
    city:"BLR",
    state:"Karnataka",
    pincode:560023
  
  },
  printDetails : function (){
    console.log(this.name,this.age,this.address.city);
  }

}

console.log(student.name);
console.log(student["address"]["city"]);
student.age=30;
console.log(student.age);
student.totalMarks=100;
console.log(student.totalMarks);
delete student.id;
console.log(student);
student.printDetails();

//Keys [Array]
let keys = Object.keys(student)
console.log(keys); //[key1,key2,key3....]
let addresKey = Object.keys(student.address);
console.log(addresKey);

//values 
let values = Object.values(student);
console.log(values); //[val1,val2,val3....]
let valuesOfAddress = Object.values(student.address);
console.log(valuesOfAddress);

let entries = Object.entries(student);
console.log(entries); //[[key1,value1],[key2,value2],[key3,value3]....]
console.log(Object.entries(student.address));

let x = "55.56";
let y = 88;
console.log(x + y);