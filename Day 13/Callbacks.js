console.log('start');
setTimeout(()=>{
  console.log('middle');
},0);
console.log('end');
//output- start, end, middle

//using file system to read a file for callback
const fs = require('fs');
console.log('start');
fs.readFile(__filename,(err,data)=>{
  console.log(`data-${data}`);
  console.log(`error-${err}`);
});
console.log('end');