// Tagged templates
// The first argument of a tag function contains an array of string values. The
// remaining arguments are related to the expressions.
function highlight([first, ...strings], ...values) {
  // first: "Learn "
  // strings: [" at ", "!"]
  // values: ["JavaScript", "F8"]
  return values
    .reduce((acc, cur) => [...acc, `<b>${cur}</b>`, strings.shift()], [first])
    .join("");
}
const school = "F8";
const course = "JavaScript";
const html = highlight`Learn ${course} at ${school}!`;
console.log(html);
