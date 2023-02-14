// forEach
// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };
// var courses = new Array(100);
// courses.push("JavaScript", "PHP", "Ruby");
// courses.forEach2(function (course, index, array) {
//   console.log(course, index, array);
// });

// filter
// Array.prototype.filter2 = function (callback) {
//   var output = [];
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index], index, this)) {
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// };
// var courses = [
//   {
//     name: "JavaScript",
//     coin: 680,
//   },
//   {
//     name: "PHP",
//     coin: 860,
//   },
//   {
//     name: "Ruby",
//     coin: 980,
//   },
// ];
// var customCourses = courses.filter2(function (course, index, array) {
//   return course.coin > 700;
// });
// console.log(customCourses);

// some: boolean
// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callback(this[index], index, this)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// var courses = [
//   {
//     name: "JavaScript",
//     coin: 680,
//     isFinished: true,
//   },
//   {
//     name: "PHP",
//     coin: 860,
//     isFinished: false,
//   },
//   {
//     name: "Ruby",
//     coin: 980,
//     isFinished: false,
//   },
// ];
// var result = courses.some2(function (course, index, array) {
//   return course.isFinished;
// });
// console.log(result);

// every: boolean
// Array.prototype.every2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (!callback(this[index], index, this)) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// var courses = [
//   {
//     name: "JavaScript",
//     coin: 680,
//     isFinished: true,
//   },
//   {
//     name: "PHP",
//     coin: 860,
//     isFinished: false,
//   },
//   {
//     name: "Ruby",
//     coin: 980,
//     isFinished: false,
//   },
// ];
// var result = courses.every2(function (course, index, array) {
//   return course > 680;
// });
// console.log(result);
