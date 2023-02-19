var age = 18;
var PI = Math.PI;

var result = 20 / "ABC";
console.log(result);
console.log(typeof result);
console.log(result == NaN); // > false
console.log(result === NaN); // > false
console.log(Number.isNaN(result)); // > true

console.log(isFinite("100")); // true
console.log(Number.isFinite("100")); // false

console.log(PI.toString());
console.log(typeof PI.toString());

console.log(PI.toFixed());
console.log(PI.toFixed(false));
console.log(PI.toFixed(0));
console.log(PI.toFixed(""));
console.log(PI.toFixed(null));
console.log(PI.toFixed(undefined));
console.log(PI.toFixed(NaN));

console.log(PI.toFixed(2));
console.log(typeof PI.toFixed(2));
