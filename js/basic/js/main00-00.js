/*
1. Primitive Data
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
2. Complex Data
  - Function
  - Object
*/

// Undefined
var age;
console.log(age); // > undefined
console.log(typeof age); // > "undefined"

// Null
var isNull = null;
console.log(isNull); // > null
console.log(typeof isNull); // > "object"

// Symbol
var id1 = Symbol("id");
var id2 = Symbol("id");
console.log(id1); // > Symbol(id)
console.log(id2); // > Symbol(id)
console.log(typeof id1); // > "symbol"
console.log(id1 === id2); // > false
