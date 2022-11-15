const delay = (ms) => 
new Promise(function (resolve,reject) {
  setTimeout(() => resolve (Math.random()*1000),ms);
  }); 
  //error handling
  delay(1000)
  .then(()=>{
    throw new Error();
  })
  .catch((err)=>{
    console.log('caught in chain');
  })

//output question 1:
Promise.reject(10)
.catch((x) => {
  console.log(x);
  return 20;
})
.then((x)=>{
  console.log(x);
  return 30;
})
.catch((x) => {
  console.log(x);
  return 40;
})
.then((x)=>{
  console.log(x);
});
