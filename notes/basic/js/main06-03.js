// innerHTML, outerHTML
// cloneDeep, cloneNode, structuredClone
var boxElement = document.querySelector(".box");
console.log(boxElement.cloneNode(true).innerHTML);
boxElement.innerHTML = "<h1 title='Heading'>Heading</h1>";
console.log(boxElement.cloneNode(true).innerHTML);
console.log(boxElement.cloneNode(true).outerHTML);
boxElement.outerHTML = "<span>Test</span>";

// https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
console.log(boxElement.outerHTML); // Original boxElement

// Explore properties of a DOM object
var boxElement = document.querySelector(".box");
console.dir(boxElement);
