// 1. HTML Event Attributes
// https://www.w3schools.com/jsref/dom_obj_event.asp

// 2. Assign Events Using the HTML DOM
// var h1Element = document.querySelector("h1");
// h1Element.onclick = function () {
//   console.log(Math.random());
// };

// Return h1Elements[i] using `e` event
var h1Elements = document.querySelectorAll("h1");
for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].onclick = function (e) {
    console.log(e);
    console.log(e.target);
  };
}

// `var` declarations, wherever they occur, are processed before any code is
// executed. This is called hoisting.

// The scope of a variable declared with var is its current execution context
// and closures thereof, which is either the enclosing function and functions
// declared within it, or, for variables declared outside any function, global.

// Don't use `var` keyword!
// This returns h1Elements[3] regardless of what heading is clicked.
// Here, `var is function-scoped`, not block-scoped.
// Using `var` keyword makes all onclick functions share the same `i` variable.
// After the loop, `i` is 3, so all onclick functions return h1Elements[3].
// var h1Elements = document.querySelectorAll("h1");
// for (var i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function () {
//     console.log(h1Elements[i]);
//   };
// }

// This return h1Elements[i] using `let` keyword.
// Here, `let` is block-scoped.
// Using `let` keyword makes each onclick function have its own `i` variable.
// var h1Elements = document.querySelectorAll("h1");
// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function () {
//     console.log(h1Elements[i]);
//   };
// }
