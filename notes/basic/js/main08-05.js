// Enhanced Object literals
// 1. Shorthand for `foo: foo` assignments
// 2. Defining methods
// 3. Computing property names with expressions

var name = "JavaScript";
var price = 1000;

// ES5
var course = {
  name: name,
  price: price,
  getName: function () {
    return this.name;
  },
};
console.log(course.name);

// ES6+
var course = {
  name,
  price,
  getName() {
    return this.name;
  },
};
console.log(course.name);

// ES6+
var fieldName = "name";
var fieldPrice = "price";
var course = {
  [fieldName]: "JavaScript",
  [fieldPrice]: 1000,
};
console.log(course);
