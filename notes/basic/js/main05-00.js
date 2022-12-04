Array.prototype.map2 = function (callback) {
  var output = [];
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; i++) {
    output.push(callback(this[i], i));
  }

  return output;
};

var courses = ["JavaScript", "PHP", "Ruby"];
var titles = courses.map2(function (course) {
  return `<h2>${course}</h2>`;
});
console.log(titles.join("\n"));
