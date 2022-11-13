//questions
function Person(){

};
const p = new Person();

Object.getPrototypeOf(p); //person.prototype
Object.getPrototypeOf(person);//function.prototype
Object.getPrototypeOf(Object);//function.prototype
Object.getPrototypeOf(Function.prototype);//Object.prototype
Object.getPrototypeOf(Object.prototype);//null
Object.getPrototypeOf(Function);//function.prototype
