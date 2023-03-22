// let, const
// 1. var >< let, const: Scope, Hosting
// 2. const >< var, let: Assignment

// Block: {}
// var: Function Scope
// let, const: Block Scope
{
  var course = "JavaScript";
  // let course = "JavaScript";
  // const course = "JavaScript";
  {
    {
      // var course = "PHP";
      // let course = "PHP";
      // const course = "PHP";
      console.log("Inner:", course);
    }
  }
}

// var: OK! let, const: Error!
console.log("Outer:", course);

// Hosting
// var: OK! let, const: Error!
a = 1;
var a;
// let a;
// const a;
console.log(a);

// Assignment 1
// var, let: OK! const: Error!
var b = 1;
// let b = 1;
// const b = 1;
b = 2;
console.log(b);

// Assignment 2
const c = {
  name: "JavaScript",
};
c.name = "PHP";
// const c = {
//   name: "PHP",
// };
console.log(c.name);
