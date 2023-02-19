// Tagged templates
function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, cur) => [...acc, `<span>${cur}</span>`, strings.shift()],
      [first]
    )
    .join("");
}
const school = "F8";
const course = "JavaScript";
const html = highlight`Learn ${course} at ${school}!`;
console.log(html);
