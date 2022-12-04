// DOM Events, Event Listeners

// 1. DOM Events
// a. Run multiple tasks when a event occurs
// var btn = document.getElementById("btn");
// btn.onclick = function () {
//   // Task 1
//   console.log("Task 1");
//   // Task 2
//   console.log("Task 2");
//   // Task 3
//   console.log("Task 3");
// };

// b. Start listening after 3 seconds
// setTimeout(function () {
//   var btn = document.getElementById("btn");
//   btn.onclick = function () {
//     // Task 1
//     console.log("Task 1");
//   };
// }, 3000);

// c. Stop listening an existing event
// var btn = document.getElementById("btn");
// btn.onclick = function () {
//   // Task 1
//   console.log("Task 1");
// };
// setTimeout(function () {
//   btn.onclick = function () {};
// }, 3000);

// 2. Event Listeners
// a. Run multiple tasks when a event occurs
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log("Task 1");
// });
// btn.addEventListener("click", function () {
//   console.log("Task 2");
// });
// btn.addEventListener("click", function () {
//   console.log("Task 3");
// });

// b. Start listening after 3 seconds
// setTimeout(function () {
//   var btn = document.getElementById("btn");
//   btn.addEventListener("click", function () {
//     console.log("Task 1");
//   });
// }, 3000);

// c. Stop listening an existing event
// var btn = document.getElementById("btn");
// function task1() {
//   console.log("Task 1");
// }
// btn.addEventListener("click", task1);
// setTimeout(function () {
//   btn.removeEventListener("click", task1);
// }, 3000);
