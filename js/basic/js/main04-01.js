// Date object
console.log(Date instanceof Object); // > true

// Date() returns a string, not a Date object.
var date = Date();
console.log(typeof date); // > "string"
console.log(date instanceof Date); // > false
console.log(date);

// new Date() returns a Date object.
var date = new Date();
console.log(typeof date); // > "object"
console.log(date instanceof Date); // > true
console.log(date);
console.log(date.toString());
console.log(date.getFullYear());
console.log(date.getMonth()); // 0 -> 11
console.log(date.getMonth() + 1); // 1 -> 12
console.log(date.getDate());
console.log(date.getDay()); // 0 -> 6
console.log(date.getHours()); // 0 -> 23
console.log(date.getMinutes()); // 0 -> 59
console.log(date.getSeconds()); // 0 -> 59
