// 1. preventDefault
// var aElements = document.anchors;
var aElements = document.links;
for (var i = 0; i < aElements.length; i++) {
  aElements[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

var ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
  e.preventDefault();
};
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
