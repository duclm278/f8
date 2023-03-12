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
//   .then(function a1(string) {
//     return new Promise(function a2(resolve, reject) {
//       setTimeout(function a3() {
//         string += "bar";
//         resolve(string);
//       }, 1);
//     });
//   })
//   .then(function b1(string) {
//     setTimeout(function b2() {
//       string += "baz";
//       console.log(string);
//     }, 1);
//     return string;
//   })
//   .then(function c1(string) {
//     console.log(string);
//   });

// https://stackoverflow.com/questions/72111288/when-does-promise-all-actually-queue-a-microtask
// Promise.resolve("A")
//   .then(function a1(m) { console.log(m); })
//   .then(function a2() { console.log("A2"); })
//   .then(function a3() { console.log("A3"); }
// Promise.resolve("B")
//   .then(function b1(m) { console.log(m); })
//   .then(function b2() { console.log("B2"); })
//   .then(function b3() { console.log("B3"); }
// Promise.all([
//   Promise.resolve("C"),
//   Promise.resolve("D"),
//   Promise.resolve("E"),
// ]).then(function all(results) { console.log(results); });

// https://stackoverflow.com/questions/56851983/why-does-this-line-of-code-with-await-trigger-microtask-queue-processing
// function f2() {
//   return new Promise((resolve, reject) => {
//     resolve("f2");
//   });
// }
// async function f1() {
//   Promise.resolve().then(() => {
//     console.log("f11");
//   });
//   console.log("f12");
//   let r2awaited = await f2();
//   console.log("f13");
//   return r2awaited;
// }
// async function f0() {
//   Promise.resolve().then(() => {
//     console.log("f01");
//   });
//   let r1awaited = await f1();
//   console.log(r1awaited);
//   console.log(Promise.resolve("f02"));
// }
// f0();
