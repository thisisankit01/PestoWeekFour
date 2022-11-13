function C(){
  this.a = 37;
}

console.log(C()); //normal execution not a constructor
console.log(new C()); // constructor function

//undefined
//C { a: 37 }

function C2(){
  this.a = 37;
  return { a: 38}; //this overrides previous this.a;
}

o = new C2();
console.log(o);
//output: { a: 38 }

function Person(name,age){
  this.name = name;
  this.age = age;
  return { name : 'Ankit'} // overrides output
}

console.log(new Person('Ankit',20));

const p1 = console.log(new Person('Aryan', 22));
const p2 = console.log(new Person('Ankit', 20));

Person.prototype.printName = function() {
  console.log(this.name.toUpperCase());//converts all name to uppercase
};
p1.printName();
p2.printName();

//prototype check
console.log(Object.getPrototypeOf(p1)===Person.name);
//true
