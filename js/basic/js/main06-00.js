var headingNode = document.getElementById("heading");
console.log(headingNode);
console.log({
  element: headingNode,
});

var headingNodes = document.getElementsByClassName("heading");
console.log(headingNodes);

var headingNodes = document.getElementsByTagName("h1");
console.log(headingNodes);

var headingNode = document.querySelector(".box .heading-2:first-child");
console.log(headingNode);
var headingNode = document.querySelector(".box .heading-2:nth-child(2)");
console.log(headingNode);
var headingNodes = document.querySelectorAll(".box .heading-2");
console.log(headingNodes);

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms["form-1"]);
console.log(document.forms.testForm);
console.log(document.images);

var listItemNodes = document.querySelectorAll(".box-1 li");
console.log(listItemNodes);

var boxNode = document.querySelector(".box-1");
console.log(boxNode.querySelectorAll("li"));
console.log(boxNode.getElementsByTagName("li"));
