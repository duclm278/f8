// Destructuring assignment
var courses = ["JavaScript", "PHP", "Ruby"];

// ES5
var a = courses[0];
var b = courses[1];
var c = courses[2];
console.log(a, b, c);

// ES6+
var [a, b, c] = courses;
console.log(a, b, c);
var [a, , c] = courses;
console.log(a, c);

// Rest parameters
var [a, ...r] = courses;
console.log(a);
console.log(r);
var [a, b, ...r] = courses;
console.log(a);
console.log(b);
console.log(r);

// ES6+
var course = {
  name: "JavaScript",
  price: 1000,
  image: "#",
};
var { name, price } = course;
console.log(name, price);
var { name, price, users } = course;
console.log(name, price, users);
var { name, price, image } = course;
console.log(name, price, image);
var { name, ...rest } = course;
console.log(name);
console.log(rest);

// Delete key
var { name, ...newObj } = course;
console.log(newObj);
var { price, ...newObj } = course;
console.log(newObj);
var { image, ...newObj } = course;
console.log(newObj);

// Destruct nested object, Binding
// More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var course = {
  name: "JavaScript",
  price: 1000,
  image: "#",
  child: {
    name: "ReactJS",
  },
};
// As parent and child both have name property, destruct them in binding pattern.
var {
  name: pName, // name of parent is renamed to pName
  child: { name: cName }, // name of child is renamed to cName
} = course;
console.log(pName, cName);

// Default value
var course = {
  name: "JavaScript",
  price: 1000,
  image: "#",
};
var { name, desc = "Empty!" } = course;
console.log(desc);

// Functions rest parameters
function log1(...params) {
  console.log(params);
  console.log(arguments);
}
log1(1, 2, 3, 4, 5);
function log2(a, b, ...params) {
  console.log(params);
}
log2(1, 2, 3, 4, 5);
function log3({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}
log3({
  name: "JavaScript",
  price: 1000,
  image: "#",
});
function log4([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
log4([1, 2, 3, 4, 5]);
