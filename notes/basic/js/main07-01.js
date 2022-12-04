// Sync, Async
// setTimeout, setInterval, fetch, XMLHttpRequest, FileReader,
// requestAnimationFrame
setTimeout(function () {
  console.log("This line will be printed later.");
}, 0);

console.log("This line will be printed first.");

// Promise (Pain)
setTimeout(function () {
  console.log("Task 1");
  setTimeout(function () {
    console.log("Task 2");
    setTimeout(function () {
      console.log("Task 3");
      setTimeout(function () {
        console.log("Task 4");
        setTimeout(function () {
          console.log("Task 5");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Promise (Concept)
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Promise
var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Fake API call
    if (Math.round(Math.random())) {
      // Success
      resolve("Success!");
    } else {
      // Failure
      reject("Failure!");
    }
  }
);
promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (failureMessage) {
    console.log(failureMessage);
  })
  .finally(function () {
    console.log("Finally!");
  });
