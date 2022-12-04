// Promise (Chain)
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return new Promise(function (resolve, reject) {
      reject("Error!");
    });
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  })
  .then(function () {
    console.log(5);
    return sleep(1000);
  });

// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
// console.log("script");
// setTimeout(function a() {
//   console.log("setTimeout");
// }, 0);
// var promise = new Promise(function b(resolve, reject) {
//   console.log("resolve");
//   resolve();
// });
// promise
//   .then(function then1() {
//     console.log("promise1");
//   })
//   .then(function then2() {
//     console.log("promise2");
//   });
// console.log("script");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#chaining
// Promise.resolve("foo")
//   .then(function a0(string) {
//     return new Promise(function a1(resolve, reject) {
//       setTimeout(function a2() {
//         string += "bar";
//         resolve(string);
//       }, 1);
//     });
//   })
//   .then(function b0(string) {
//     setTimeout(function b1() {
//       string += "baz";
//       console.log(string);
//     }, 1);
//     return string;
//   })
//   .then(function c0(string) {
//     console.log(string);
//   });
