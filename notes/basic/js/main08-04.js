// Default parameters
function log1(log) {
  console.log(log);
}
log1(); // > undefined
log1(undefined); // > undefined

// ES5
function log2(log) {
  if (typeof log === "undefined") {
    log = "hello2";
  }
  console.log(log);
}
log2(); // > hello
log2(undefined); // > hello

// ES6+
function log3(log = "hello3") {
  console.log(log);
}
log3(); // > hello
log3(undefined); // > hello

// ES6+
function log4(log, isAlert = false) {
  if (isAlert) return alert(log);
  console.log(log);
}
log4("hello, world", true);

// ES6+
function log5(log, type = "log") {
  console[type](log);
}
log5("hello, world");
log5("hello, world", "warn");
