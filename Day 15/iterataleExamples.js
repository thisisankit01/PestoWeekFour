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
}