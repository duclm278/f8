// Arrow function expressions
const log1 = (log) => {
  console.log(log);
};
log1("hello, world");

const log2 = (log) => console.log(log);
log2("hello, world");

const sum = (a, b) => a + b;
console.log(sum(2, 2));

const obj = (a, b) => ({ a: a, b: b });
console.log(obj(2, 2));

const course = {
  name: "JavaScript",
  getName: function () {
    return this.name;
  },
  getObj1: function () {
    return this; // Context
  },
  getObj2: () => this,
};
console.log(course.getName());
console.log(course.getObj1());
console.log(course.getObj2());

// Constructor
const Course1 = function (name, price) {
  this.name = name;
  this.price = price;
};
const Course2 = (name, price) => {
  this.name = name;
  this.price = price;
};
const newCourse1 = new Course1("JavaScript", 0);
// const newCourse2 = new Course2("JavaScript", 0); // Error!
