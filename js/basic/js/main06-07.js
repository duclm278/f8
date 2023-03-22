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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake

// Don't use `var` keyword!
// This returns h1Elements[3] regardless of what heading is clicked.
// After the loop, `i` is 3, so all onclick functions return h1Elements[3].
// var h1Elements = document.querySelectorAll("h1");
// for (var i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function () {
//     console.log(h1Elements[i]);
//   };
// }

// This return h1Elements[i] using `let` keyword.
// var h1Elements = document.querySelectorAll("h1");
// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function () {
//     console.log(h1Elements[i]);
//   };
// }
