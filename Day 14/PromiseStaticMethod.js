let value = [1,2,3];

Promise.resolve(value).then((x)=> console.log(x));

console.log(Promise.resolve(p) === value);

//checking if promise or not
function isPromise(p){
  return Promise.resolve(p)===p;
}

console.log(isPromise({then() {}}));

//thenable

const fulfilledThenable = {
  then(resolve,reject) {
    resolve('hello');
    console.log(typeof reject);
  },
};
const promise = Promise.resolve(fulfilledThenable);
console.log(promise instanceof Promise);//true
promise.then((x)=> console.log(x));//hello

