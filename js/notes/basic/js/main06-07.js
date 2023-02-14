// 1. HTML Event Attributes
// https://www.w3schools.com/jsref/dom_obj_event.asp

// 2. Assign Events Using the HTML DOM
// var h1Element = document.querySelector("h1");
// h1Element.onclick = function () {
//   console.log(Math.random());
// };

// Return h1Elements[3] regardless of headings.
// var h1Elements = document.querySelectorAll("h1");
// for (var i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function () {
//     console.log(h1Elements[i]);
//   };
// }

// Return h1Elements[i] using `e` event
var h1Elements = document.querySelectorAll("h1");
for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].onclick = function (e) {
    console.log(e);
    console.log(e.target);
  };
}

// Return h1Elements[i] using `let` keyword
// var h1Elements = document.querySelectorAll("h1");
// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function () {
//     console.log(h1Elements[i]);
//   };
// }
