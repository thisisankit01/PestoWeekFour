const { symb } = require('./symbols');

let sym = Symbol(symb);

let globalSym = Symbol.for('k1');

console.log(symb === Symbol.for('Ankit'));
//true