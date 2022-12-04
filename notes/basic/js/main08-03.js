// Classes
// function Course(name, price) {
//   this.name = name;
//   this.price = price;
//   this.getName = function () {
//     return this.name;
//   };
//   this.getPrice = function () {
//     return this.price;
//   };
// }

class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
}

const course1 = new Course("JavaScript", 1000);
const course2 = new Course("PHP", 2000);
console.log(course1);
console.log(course2);
