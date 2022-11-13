//classes in es5
function Person(name){
  this.name = name;
};

Person.prototype.printName = function() {
  console.log(this.name);
};

function Employee(name,id){
  Person.call(this,name);// actimg as super() call
  this.id = id;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.printId = function() {
  console.log(this.id);
};

const e = new Employee('Ankit',20);
console.log(e);
e.printId();
e.printName();

//same thing with es6

class Person {
  constructor(name){
    this.name = name;
  }
  printName(){
    console.log(this.name);
  }
};

class Employee extends Person{
  constructor(name,id){
    super(name);
    this.id = id;
  }
  printId(){
    console.log(this.id);
  }
};

const p = new Employee('Ankit',20);
console.log(p);
p.printName();
p.printId();