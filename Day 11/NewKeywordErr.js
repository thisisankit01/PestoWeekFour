function Person(name,age){
  if(!new.target){
    throw new Error ('should use new');
  }
  this.name = name;
  this.age= age;
}
//second method
function Person2(name,age){
  'use Strict';
  this.name = name;
  this.age= age;
  };

console.log(Person ('Ankit',20));
//it will throw an error if will not use new keyword

//creating a constructor 
class Person{
  constructor (name,age){
  this.name = name;
  this.age= age;
 }
};

console.log(new Person ('Ankit',20));