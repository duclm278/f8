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
console.log(age);
console.log(typeof age);

// Null
var isNull = null;
console.log(typeof isNull); // > object

// Symbol
var id1 = Symbol("id");
var id2 = Symbol("id");
console.log(typeof id1);
console.log(id1 === id2); // > false
