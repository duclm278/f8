// 1. JSON is a text format for storing and transporting data
// 2. JavaScript Object Notation
// 3. JSON: number, string, boolean, null, object, array, object
// 4. stringify, parse

var json = "1";
console.log(JSON.parse(json));
var json = '"hello, world"';
console.log(JSON.parse(json));
var json = "true";
console.log(JSON.parse(json));
var json = "null";
console.log(JSON.parse(json));
var json = '["JavaScript","PHP"]';
console.log(JSON.parse(json));
var json = '{"name":"Duc Le","age":20}';
console.log(JSON.parse(json));

console.log(JSON.stringify(1));
console.log(JSON.stringify("hello, world"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(["JavaScript", "PHP"]));
console.log(
  JSON.stringify({
    name: "Duc Le",
    age: 20,
    test: function () {},
  })
);
