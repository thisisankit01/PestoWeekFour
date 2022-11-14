const p = new Promise((resolve,reject)=>{
  resolve(10);
  resolve(20);
}).then(x =>console.log(x));
//10

//error throwing
const p1 = new Promise(function(resolve,reject){
reject(new Error ('error'))
});

//consuming promises
const t = new Promise(function (resolve,reject){
  reject(30);
});
t.then(
  (val)=> console.log(`val - ${val}`),
  (val)=> console.error(`error - ${val}`)
);
//error - 30

//catch

const e = new Promise(function (resolve,reject){
  setTimeout(()=>{
    reject(30);
  })
});
e.catch((val)=> console.error(`error - ${val}`));
//error - 30