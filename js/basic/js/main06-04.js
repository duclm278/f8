var boxElement = document.querySelector(".box");
console.log(boxElement.cloneNode(true).style);

// Method 1
// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "red";

// Method 2
Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
});

console.log(boxElement.cloneNode(true).style.width);
