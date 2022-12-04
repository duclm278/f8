// innerText, textContent
var headingElement = document.querySelector(".heading");
console.log(headingElement.innerText);
console.log(headingElement.textContent);
headingElement.innerText = "<i>New Heading</i>";

var bodyElements = document.querySelectorAll("div");
bodyElements[0].innerText = `

New Body


`;
bodyElements[1].textContent = `

New Body


`;
