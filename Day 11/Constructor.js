function C(){
  this.a = 37;
}

console.log(C()); //normal execution not a constructor
console.log(new C()); // constructor function

//undefined
//C { a: 37 }