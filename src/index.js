import add from './template/add.js'
import  mul from './template/mul.js'
let result = 0;
const addBase = 2;
const mulBase = 3;
result = add(result, addBase);
result = mulBase(result, mulBase);
console.log(result);