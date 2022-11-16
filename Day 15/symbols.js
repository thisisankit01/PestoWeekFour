//they are just used for debusgging
 let sym = Symbol('red');
 let sym2 = Symbol('blue');
 console.log(sym);
 console.log(sym2);

 console.log(typeof Symbol);
 //Symbol(red)
//Symbol(blue)

//each symbol is unique
let sym3 = Symbol();
let sym4 = Symbol();

console.log(sym3 === sym4);
//false

//lets check for strings

let a = Number('10');
let b = Number('10');
console.log(a === b);
//true

let obj = {
  name : 'Ankit',
};

obj[sym] = 20;

console.log(Object.keys(obj));
//['Name'];

let symb = Symbol.for('Ankit');

module.exports = {
  symb,
};