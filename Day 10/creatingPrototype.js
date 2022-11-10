//object.getPrtotypeOf
const prototype1 = {name: 'prototype1'};
const object1 = Object.create(prototype1); // decalring object as parent of prototype1.

console.log(Object.getPrototypeOf(object1));
//{ name: 'prototype1' }

console.log(Object.getPrototypeOf(object1) === prototype1);
//output: true

//Reflect.getPrototypeOf(target)- it is semantically same as above
console.log(Reflect.getPrototypeOf(object1));
//{ name: 'prototype1' }

console.log(Reflect.getPrototypeOf(object1) === prototype1);
//output: true

//Object#isPrototypeOf()
console.log(object1.isPrototypeOf(prototype1));//checking if object 1 is prototype of prototype1
//expected output: true