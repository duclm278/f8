// Math object
console.log(Math instanceof Object); // > true

// Math() is not a constructor.
console.log(Math.PI); // > 3.141592653589793
console.log(Math.round(1.5)); // > 2
console.log(Math.round(1.49)); // > 1
console.log(Math.abs(-1)); // > 1
console.log(Math.ceil(1.25)); // > 2
console.log(Math.floor(1.75)); // > 1

// Math.random() returns a random number between 0 and 1.
console.log(Math.random());

// Return a random number between 0 and 100.
var random = Math.floor(Math.random() * 100);
console.log(random);

// Print message with chance of 25%
if (random < 25) {
  console.log("You won!");
} else {
  console.log("You lost!");
}

// Return min and max values
console.log(Math.min(1, 2, 3, 4, 5)); // > 1
console.log(Math.max(1, 2, 3, 4, 5)); // > 5
