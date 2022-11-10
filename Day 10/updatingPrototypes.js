//using sertpropertof to set a parent to the object
const obj = {
  getNumber(){
  return 43;
  },
};

const child = {};
Object.setPrototypeOf(Child,obj);

console.log(child.getNumber());
//43

