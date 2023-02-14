// Promise (Methods)
// Promise.resolve()
var promise = Promise.resolve("Success");
promise
  .then(function (value) {
    console.log("Value:", value);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

// Promise.reject()
var promise = Promise.reject("Failure");
promise
  .then(function (value) {
    console.log("Value:", value);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

// Promise.all()
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([1]);
  }, 1000);
});
// var promise2 = Promise.reject("Failure");
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 2000);
});
Promise.all([promise1, promise2])
  .then(function ([result1, result2]) {
    console.log(result1.concat(result2));
  })
  .catch(function (error) {
    console.log(error);
  });
