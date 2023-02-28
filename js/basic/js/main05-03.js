// 1.1. For/in loop is used to loop through enumerable string properties of an object.
// const object = { a: 1, b: 2, c: 3 };
// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }

// 1.2. Array is also an object. Its keys are indices.
// const languages = ["JavaScript", "PHP", "Ruby"];
// for (const key in languages) {
//   console.log(`${key}: ${languages[key]}`);
// }

// 1.3. String is also an object. Its keys are indices.
// const message = "Hello";
// for (const key in message) {
//   console.log(`${key}: ${message[key]}`);
// }

// 2. For/of loop is used to loop through values of iterable objects.
// Just like Python's loop. Used mostly with arrays and strings.
const items = ["a", "b", "c"];
for (const item of items) {
  console.log(item);
}

const message = "Hello";
for (const char of message) {
  console.log(char);
}

// Loop through object's keys and values. Not as useful as for/in loop.
const object = { a: 1, b: 2, c: 3 };
for (const key of Object.keys(object)) {
  console.log(`${key}: ${object[key]}`);
}
for (const value of Object.values(object)) {
  console.log(value);
}
