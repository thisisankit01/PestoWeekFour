function sleep(ms, value) {
  return new Promise((resolve) => {
    setTimeout(()=> resolve (value),ms);
  });
}

sleep(3000, 'Ankit').then(console.log);

//promise.all
console.time();
Promise.all([sleep(3000, 'a'),Promise.reject('rejected'),sleep(7000,'c')])
.then(()=> timeEnd())
.catch(console.log);

//promise.race

