var boxElement = document.querySelector(".box");
console.log(boxElement.classList);
console.log(boxElement.classList.length);
console.log(boxElement.classList[0]);
console.log(boxElement.classList[1]);
console.log(boxElement.classList.value);

// add
boxElement.classList.add("red", "green", "blue");

// contains
console.log(boxElement.classList.contains("red"));

// remove
// setTimeout(() => {
//   boxElement.classList.remove("red");
// }, 2500);

// toggle
setInterval(() => {
  boxElement.classList.toggle("red");
}, 500);
