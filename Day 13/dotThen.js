const delay = (ms) =>
  new Promise(function (resolve,reject){
    setTimeout(resolve(),ms)
  });

  delay(2000)
     .then(()=> {
return 10;
})
.then((num)=>{
  return num**2; //100
})
.then((num)=>{
  return num/2; //50
})
.then(console.log);