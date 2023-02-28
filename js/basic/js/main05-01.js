var courses = ["JavaScript", "PHP"];
courses.length = 7;
console.log(courses);

console.log("+ For loop");
// Loop through array 7 times.
for (var i = 0; i < courses.length; i++) {
  // typeof i is "number".
  console.log(i, typeof i, courses[i]);
}

console.log("+ For-in loop");
// Loop through array 2 times. For-in loop only loops through enumerable string
// properties.
for (var key in courses) {
  // typeof key is "string".
  console.log(key, typeof key, courses[key]);
}
