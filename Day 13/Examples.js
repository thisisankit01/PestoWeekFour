//question 1

const delay = (ms) => 
  new Promise (function (resolve,reject){
    setTimeout(()=> resolve(Math.random() * 1000),ms);
  });

  Promise.resolve(10)
  .then((x)=> console.log(x))
  .then((x)=> console.log(x))
  .then((x)=> console.log(x));


  //10 undefined undefined

  