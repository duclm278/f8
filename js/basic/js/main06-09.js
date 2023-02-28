// 1. preventDefault
// document.anchors is deprecated.
// var aElements = document.anchors;
var aElements = document.links;
for (var i = 0; i < aElements.length; i++) {
  aElements[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

// Show list if input is focused
// input:focus ~ ul {
//   display: block;
// }
// If we use this code, we can't click on the list items. As soon as we click on
// the list items, the list will be hidden because the input is not focused
// anymore.

// Prevent mousedown event before even clicking on items
var ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
  e.preventDefault();
};

// Now we can click on the list items and catch the event.
ulElement.onclick = function (e) {
  console.log(e.target);
};

// 2. stopPropagation
document.querySelector("div").onclick = function () {
  console.log("DIV");
};
document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("Click me!");
};
