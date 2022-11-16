class A {
static [Symbol.hasInstance]() {
  console.log('Symbol.hasIntance called');
  return false;
}
};

const a = new A();

console.log(a instanceof A);