const obj = {
toString() {
  return 'My ToString'
}
};

console.log(obj.toString);//this will overwrite the to string called behind it
//output
// [Function: toString]
 //searching things till delegation is called 

 console.log(obj.hasOwnProperty);//The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined .
