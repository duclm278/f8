var age = 18;
var PI = Math.PI;

var result = 20 / "ABC";
console.log(result); // > NaN
console.log(typeof result); // > "number"
console.log(result == NaN); // > false
console.log(result === NaN); // > false
console.log(Number.isNaN(result)); // > true

console.log(isFinite("100")); // true
// Number.isFinite() only accepts numbers.
console.log(Number.isFinite("100")); // false

console.log(PI.toString()); // > "3.141592653589793"
console.log(typeof PI.toString()); // > "string"

// Falsy values: false, 0, "", null, undefined, NaN
console.log(PI.toFixed()); // > "3"
console.log(PI.toFixed(false)); // > "3"
console.log(PI.toFixed(0)); // > "3"
console.log(PI.toFixed("")); // > "3"
console.log(PI.toFixed(null)); // > "3"
console.log(PI.toFixed(undefined)); // > "3"
console.log(PI.toFixed(NaN)); // > "3"

console.log(PI.toFixed(2)); // > "3.14"
console.log(typeof PI.toFixed(2)); // > "string"
