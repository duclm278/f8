// VD1: Output: 1, 3
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   i *= 2;
// }

// VD2: Output: 0, 1, 2, 3, 4
// Each iteration creates a new variable. Reassigning the variable inside the
// loop body does not affect the original value in the iterable.

// let input = [5, 4, 3, 2, 1];
// for (let i in input) {
//   console.log(i);
//   i *= 2;
// }

// VD3: Output: 5, 4, 3, 2, 1
// Each iteration creates a new variable. Reassigning the variable inside the
// loop body does not affect the original value in the iterable.

// let input = [5, 4, 3, 2, 1];
// for (let i of input) {
//   console.log(i);
//   i *= 2;
// }
