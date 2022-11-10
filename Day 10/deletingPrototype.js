//we are not deleting prototype, we are setting it to null so that it seems to be deleted
const child = {};

//deleting
Object.setPrototypeOf(child,null);

console.log(child.toString);