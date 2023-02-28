// Use function declaration to define a constructor function
function User(firstName, lastName, avatar) {
  // In constructor contexts, the this value is the new instance being created.
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    // In method contexts, the this value is the object that the method was
    // accessed on. If the method is not transferred to another object, this is
    // generally an instance of the class.
    return `${this.firstName} ${this.lastName}`;
  };
}

// In function contexts, the value of this depends on how the function is
// called, not how it's defined. The method bind can be used to permanently bind
// a function to a particular this value.

// Constructor contexts can be considered as special cases of function contexts.
// In constructor contexts, the new keyword is used to call a function that
// creates an object where this is automatically bound to that newly created
// object.

// Method contexts can also be considered special cases of function contexts. In
// method contexts, the this value is the object that the method was accessed
// on. If the method is not transferred to another object, this is generally an
// instance of the class.

// Use function expression to define a constructor function
// var User = function (firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// };

// All instances of User will have this property.
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};

var author = new User("AA", "BB", "Avatar");
// Add property to author only
author.title = "Chia sẻ dạo tại F8";

var user = new User("CC", "DD", "Avatar");
// Add property to user only
user.comment = "Comment dạo tại F8";

console.log(author);
console.log(author.getName(), author.getClassName());
console.log(author.constructor === User);
console.log(user);
console.log(user.getName(), user.getClassName());
console.log(user.constructor === User);

// ES2015
// class User {
//   constructor(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function () {
//       return `${this.firstName} ${this.lastName}`;
//     };
//   }
//   getClassName() {
//     return this.className;
//   }
// }

// User.prototype.className = "F8";

// var author = new User("AA", "BB", "Avatar");
// author.title = "Chia sẻ dạo tại F8";
// var user = new User("CC", "DD", "Avatar");
// user.comment = "Comment dạo tại F8";
// console.log(author);
// console.log(author.getName(), author.getClassName());
// console.log(author.constructor === User);
// console.log(user);
// console.log(user.getName(), user.getClassName());
// console.log(user.constructor === User);
