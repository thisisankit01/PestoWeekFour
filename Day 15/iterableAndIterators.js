// let obj = {
//   _i:0;
//   [Symbol.iterator]() {
//     return this;
//   },
//   next() {
//     return { value: this._i++, done: this._i> 10}
//   },
// };

let obj = {
  //iterable
  [Symbol.iterator](){ //The Symbol. iterator is a function that returns a next() function. An iterable can be iterated over with the code: for (const x of iterable) { }
    let i = 0;
    return {
      //iterator
      next() {
        return { value:i++ , done:i>10};
      },
    };
  },
};

for (const el of obj) {
  console.log(el);
  if(el > 5){
    break;
  }
}

console.log("After Break");

for (const el of obj) {
  console.log(el);
}